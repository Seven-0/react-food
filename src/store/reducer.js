import { SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_LOGIN_PAYLOAD  } from './actionTypes';

const initialState = {
    isLoggedIn: false,
    // userId: '',
    // token: '',
    payload: [],
}

export function reducer (state = initialState, action){
    switch (action.type) {
    case 'SET_LOGIN_SUCCESS':
        return {
            ...state,
            ...action.payload,
            // isLoggedIn: true,
        };
    case 'SET_LOGIN_ERROR':
        return {
            ...state,
            ...action.payload,
        };
    case 'SET_LOGIN_PAYLOAD':
        return {
            ...state,
            ...action.payload,
        };
    default:
        return state;
    }
}