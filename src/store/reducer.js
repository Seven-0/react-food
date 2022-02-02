import { SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_ISLOGIN  } from './actionTypes';

const initialState = {
    payload: '',
    showError: false,
    isLogin: false,
}

export function reducerLogin (state = initialState, action){
    switch (action.type) {
    case SET_LOGIN_SUCCESS:
        return {
            ...state,
            payload: action.payload,
            showError: action.showError,
        };
    case SET_LOGIN_ERROR:
        return {
            ...state,
            showError: action.showError,
        };
    case SET_ISLOGIN:
        return {
            ...state,
            isLogin: action.isLogin,
        };
    default:
        return state;
    }
}