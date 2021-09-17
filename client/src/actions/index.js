import axios from 'axios';
import { FECTH_USER } from './types';

// reduxThunk handles the function
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user') // dispatch the action after we get a response
    dispatch({ type: FECTH_USER, payload: res.data })
};
