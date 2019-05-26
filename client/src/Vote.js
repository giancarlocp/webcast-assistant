import m from 'mithril'

const Vote = {
  view({ attrs:{id,upvoted,votes,upvote_question} }) {
    var upvote_link
    if (upvoted) {
      upvote_link = m('i.fa.fa-check')
    }
    else {
      upvote_link = (
        m('a[href=""]', { onclick(e){upvote_question(e,id)} },
          m("i.fa.fa-thumbs-up") )
      )
    }
    return m('span', upvote_link, m('span.votes', votes) )
  }
}
export default Vote
