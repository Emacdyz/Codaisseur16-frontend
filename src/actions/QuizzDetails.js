//src/actions/QuizzDetails.js
import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const CREATE_QUESTION_CARD = 'CREATE_QUESTION_CARD'
export const DELETE_QUESTION_CARD = 'DELETE_QUESTION_CARD'

export const createQuestion = card => ({
  type: CREATE_QUESTION_CARD,
  payload: card
})

export const deleteQuestion = card => ({
  type: DELETE_QUESTION_CARD,
  payload: card
})

export const createQuestionCard = (card) => (dispatch) => {
  console.log(card)
  request
    .post(`${baseUrl}/questions`)
    .send(card)
    .then(result => dispatch(createQuestion(card)))
    .catch(err => console.error(err))
}

export const deleteQuestionCard = (questionId) => (dispatch) => {
  request
    .delete(`${baseUrl}/questions/${questionId}`) 
    .then(result => dispatch(deleteQuestion(questionId)))
    .catch(err => console.error(err))
}

