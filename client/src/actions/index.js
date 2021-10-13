import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// reduxThunk handles the function
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user'); // dispatch the action after we get a response
    dispatch({ type: FETCH_USER, payload: res.data });
};
// handles the token from Stripe API, updates the user, sends back the user info
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data});
}

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data});
};