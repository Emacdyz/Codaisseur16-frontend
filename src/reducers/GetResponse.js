import {GET_RESPONSE} from '../actions/questions'

export default (state = [], {type, payload}) => {
    switch (type) {
        case GET_RESPONSE:
              return payload
  
        default:
          return state
      }
  }
   
  