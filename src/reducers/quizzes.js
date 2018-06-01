import {ADD_QUIZ, GET_QUIZZES} from '../actions/quizzes'


export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_QUIZZES:
      return payload
        
    case ADD_QUIZ:
      return [...state, payload]
      default:
      return state
     }  
    }