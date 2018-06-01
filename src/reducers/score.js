import {SEND_RESPONSE} from '../actions/questions'
import {GET_RESPONSE} from '../actions/questions'

export default(state = {}, {type, payload}) => {
    switch (type) {
        case SEND_RESPONSE:
            {

                return payload
            }

        case GET_RESPONSE:
            {}

        default:
            return state

    }
}
