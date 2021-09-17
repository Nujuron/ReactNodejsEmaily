import { FECTH_USER } from "../actions/types";
// returns null when it's loading the request
export default function authReducer(state = null, action) {
    switch (action.type) {
        case FECTH_USER:
            return action.payload || false; // "" === false, so if it's empty it returns false
        default:
            return state;
    }
}