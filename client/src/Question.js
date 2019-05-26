import m from 'mithril';
import Vote from './Vote';

const Question = {
  view: ({ attrs:{question,upvote_question} }) => {
    return <li>
      <Vote id={question.id} upvoted={question.upvoted}
            votes={question.votes}
            upvote_question={upvote_question} />
      <span>{question.question} </span>
      <span className="author"> ({question.author})</span>
    </li>
  }
}
export default Question
