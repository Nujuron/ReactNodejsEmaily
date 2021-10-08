import axios from 'axios';
import { FECTH_USER } from './types';

// reduxThunk handles the function
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user'); // dispatch the action after we get a response
    dispatch({ type: FECTH_USER, payload: res.data });
};
// handles the token from Stripe API, updates the user, sends back the user info
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FECTH_USER, payload: res.data});
}

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ type: FECTH_USER, payload: res.data });
}