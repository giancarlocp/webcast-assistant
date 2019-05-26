import m from 'mithril';
import Vote from './Vote';

const Question = {
  view: ({ attrs:{question,upvote_handler} }) => {
    return <li>
      <Vote id={question.id} upvoted={question.upvoted}
            votes={question.votes}
            upvote_handler={upvote_handler} />
      <span>{question.question} </span>
      <span className="author"> ({question.author})</span>
    </li>
  }
}
export default Question
