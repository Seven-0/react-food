import { SET_LOGIN_SUCCESS, SET_LOGIN_ERROR , SET_LOGIN_PAYLOAD  } from './actionTypes';
import axiosIntrceptor from '../utils/interceptors';


// function mengembalikan action (objek)
export function setLoginSuccess(payload){
  return{
    type : SET_LOGIN_SUCCESS,
    payload : payload,
  };
}

export function setLoginError(payload){
  return{
    type : SET_LOGIN_ERROR,
    payload : payload,
  };
}

export function setLoginPayload(payload){
  return {
    type: SET_LOGIN_PAYLOAD,
    payload: payload,
  };
}


export function fetchLogin(payload){
  return (dispatch) => {
    axiosIntrceptor
    .post( "https://midas-food-delivery-users.herokuapp.com/v1/login", payload)
        .then((response) => {
            dispatch(setLoginPayload(response.data.payload[0]));
            // console.log("dispatch apa", dispatchApa);

            console.log("response", response.data);
            console.log("isi payload", response.data.payload[0]);
            console.log("isi accessToken", response.data.payload[0].tokens.accessToken);
        })
        .catch((error) => {
            console.log(error);
        })
  };
}