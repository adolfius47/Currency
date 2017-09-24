import {FETCH_USER_SUCCESS} from '../../actions'

export default payload => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
}