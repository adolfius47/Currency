import {FETCH_USER_FAILURE} from '../../actions'

export default payload => {
    return {
        type: FETCH_USER_FAILURE,
        payload
    }
}