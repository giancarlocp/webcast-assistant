import m from 'mithril'

function Vote() {
  function upvote_question(evt,id,upvote_handler) {
    m.request('http://localhost:5000/api/questions/'+id,
      { method:"POST", credentials:'include' }
    ).catch(err => console.log(err))
    evt.preventDefault()
    upvote_handler(id)
  }
  return {
    view({ attrs:{id,upvoted,votes,upvote_handler} }) {
      var upvote_link
      if (upvoted) {
        upvote_link = <i class="fa fa-check"></i>
      }
      else {
        upvote_link = (
          <a href="" onclick={(e)=>
              upvote_question(e,id,upvote_handler)} >
            <i class="fa fa-thumbs-up"></i>
          </a>
        )
      }
      return <span>{upvote_link}
        <span className="votes">{votes}</span>
      </span>
    }
  }
}
export default Vote()
