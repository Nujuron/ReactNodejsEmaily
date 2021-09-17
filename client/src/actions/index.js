import axios from 'axios';
import { FECTH_USER } from './types';

// reduxThunk handles the function
export const fetchUser = () => {
    return function (dispatch) {
        axios
            .get('/api/current_user') // dispatch the action after we get a response
            .then(res => dispatch({ type: FECTH_USER, payload: res }))
    }
};