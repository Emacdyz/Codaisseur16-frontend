//src/reducers/QuizzDetails.js
import { CREATE_QUESTION_CARD } from '../actions/QuizzDetails'

export default (state = [], {type, payload}) => {
    switch (type) {
        case CREATE_QUESTION_CARD:
            if (payload.id === state.id) {
              return payload
            } else return state
  	    
        default: 
        return state
    }
}
