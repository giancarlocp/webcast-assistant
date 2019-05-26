import m from 'mithril';
import Vote from './Vote';

const Question = {
  view: ({ attrs:{q,upvote_question} }) =>
    m('li', [
      m(Vote, { id:q.id, upvoted:q.upvoted, votes:q.votes,
          upvote_question }),
      m('span', q.question),
      m('span.author', ` (${q.author})`),
    ])
}
export default Question
