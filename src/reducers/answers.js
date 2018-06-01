import {ADD_ANSWER, UPDATE_ANSWER} from '../actions/questions'

export default (state = [], {type, payload}) => {
  switch (type) {
    case ADD_ANSWER:
        return [...state, payload]

    case UPDATE_ANSWER:
        return state.map(answer => {
          if (answer.questionId === payload.questionId) {
            return payload
          }
          else return answer
        })

    default:
    return state
    }
}
