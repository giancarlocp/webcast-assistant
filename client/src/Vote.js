import m from 'mithril'

const Vote = {
  view({ attrs:{id,upvoted,votes,upvote_question} }) {
    var upvote_link
    if (upvoted) {
      upvote_link = <i class="fa fa-check"></i>
    }
    else {
      upvote_link = (
        <a href="" onclick={(e)=>upvote_question(e,id)}>
          <i class="fa fa-thumbs-up"></i>
        </a>
      )
    }
    return <span>{upvote_link}
      <span className="votes">{votes}</span>
    </span>
  }
}
export default Vote
