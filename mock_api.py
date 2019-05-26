#!/usr/bin/env python3
from flask import Flask, jsonify
from flask_cors import CORS
from random import choice,randint

app = Flask(__name__)
CORS(app)

### Mocking Begin ###
q=('What is the Oxford Comma?',
   'Is a Banana a fruit or an herb?',
   'What are the New Words?',
   'How does it work?',
   'How much does it cost?',
   'What types of items can I expect?',
   'What is the origin of the Dollar Sign ($)?',
   'What are the Longest Words in the dictionary?',
   'What are the Typical Errors that people usually commit?',
   'How many questions may I submit?',
   'What is the deadline for submission?',
   'When will you be announcing the winners, and how?',
   'Who can enter the contest? Is there an age limitation?',
   'Who is sponsoring the contest?',
)
a=('John','James','David','Daniel','Paul','Mark','Brian','Jason','Jeff','Kevin')

questions =  [{
  'id': i+1, 'question':choice(q),
  'votes':1,   'author':choice(a),
} for i in range(randint(9,15))]

def upvote(id):
  for q in questions:
    if q['id'] == id:
       q['votes'] += 1
       q['upvoted'] = True
       break
### Mocking End ###


@app.route('/api/questions', methods=['GET'])
def get_questions():
  return jsonify(questions)

@app.route('/api/questions/<int:id>', methods=['POST'])
def post_votes(id):
  upvote(id)
  return jsonify({'id':id}), 201

if __name__ == '__main__':
  app.run()
