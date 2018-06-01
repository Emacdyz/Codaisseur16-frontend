//import {quizQuestions} from '../dummydata/questions'
import * as request from 'superagent'

const baseUrlQuestions = 'http://localhost:4001'
const baseUrlResponses = 'http://localhost:4002'


export const GET_QUESTIONS = 'GET_QUESTIONS'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const SEND_RESPONSE = 'SEND_RESPONSE'
export const ADD_ANSWER = 'ADD_ANSWER'
export const UPDATE_ANSWER ='UPDATE_ANSWER'
export const GET_RESPONSE='GET_RESPONSE'

export const getQuestions = (quizId) => (dispatch) => {
    request
      .get(`${baseUrlQuestions}/quizquestions/${quizId}`)
      .then(response => dispatch({
        type: GET_QUESTIONS,
        payload: response.body
      }))
      .catch(err => alert(err))
}

export const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  payload: answer
})

export const updateAnswer = (answer) => ({
  type: UPDATE_ANSWER,
  payload: answer
})


 export const sendResponse = (response) => (dispatch) => {
   console.log("inside action sendresponse")
   console.log(response)
     request
       .post(`${baseUrlResponses}/responses`)
       .send(response)
       .then(response => dispatch({
         type: SEND_RESPONSE,
         payload: response
      }))
      .catch(err => alert(err))
}


export const getResponse=(user_id)=>(dispatch)=>{
  
  request
    .get(`${baseUrlResponses}/responses/user/${user_id}`)
    .then(response => {
    console.log('getresponse', response.body)
      dispatch({
      type: GET_RESPONSE,
      payload: response.body
    })
    
  }
  )
    .catch(err => alert(err))
}
