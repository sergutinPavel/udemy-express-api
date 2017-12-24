import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = () => {
    return function(dispatch) {
      axios.get('/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res.data }))
    }
};

export const handleToken = (token) => {
    return (dispatch) => {
        axios.post('/api/stripe', token)
            .then(res => {
                dispatch({ type: FETCH_USER, payload: res.data })
            }).catch(err => err)
    }
}