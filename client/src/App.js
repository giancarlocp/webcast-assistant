import m from 'mithril'

import Question from './Question'

function App() {
  var state = {
    questions: [],
  }
  function upvote_handler(id) {
    var new_questions = state.questions.map( q => {
      if (q.id === id) {
        q.votes += 1
        q.upvoted = true
      }
      return q
    })
    state.questions = new_questions
  }
  function upvote_question(evt,id) {
    m.request('http://localhost:5000/api/questions/'+id,
        { method:"POST", credentials:'include' }
    ).catch(err => console.log(err))
    evt.preventDefault()
    upvote_handler(id)
  }

  function reload_questions() {
    state.questions = []
    update_questions()
  }
  function update_questions() {
    m.request('http://localhost:5000/api/questions', { credentials: 'include' })
      .then(res => {
        var new_questions = state.questions
        for (var i = 0; i < res.length; i++) {
          let q = res[i]
          for (var j = 0; j < new_questions.length; j++) {
            if (new_questions[j].id === q.id) {
              new_questions[j] = q
              break
            }
          }
          if (j >= new_questions.length) {
            new_questions.push(q)
          }
        }
        state.questions = new_questions
      })
      .catch(err => console.log(err))
  }

  return {
    oncreate(){
      update_questions()
      setInterval(update_questions, 9900)
    },
    view: () =>
      m("div.App", [
        m("header.App-header", [
            m("h1.App-title", "Flask Webcast"),
            m("h3", "Q&A") 
        ]),
        m("ul.App-body", [
            m("a[href='#']", {onclick:reload_questions},
              m("i.fa.fa-refresh") ),
            state.questions.map(q =>
              m(Question, {key:'question'+q.id,q,upvote_question} )
            )
        ])
    ])
  }
}
export default App()
