import { GET_QUESTIONS } from '../actions/questions'
import {DELETE_QUESTION_CARD, CREATE_QUESTION_CARD} from '../actions/QuizzDetails'

export default (state = [], {type, payload}) => {
  switch (type) {
        case GET_QUESTIONS:
        return payload

        case CREATE_QUESTION_CARD:
        return state.concat(payload)

        case DELETE_QUESTION_CARD:
        return state.splice(payload.id)

      default:
        return state
    }
}
