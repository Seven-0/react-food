import { SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_ISLOGIN} from './actionTypes';
import axiosIntrceptor from '../utils/interceptors';


// function mengembalikan action (objek)
export function setLoginSuccess(payload, showError){
  return{
    type : SET_LOGIN_SUCCESS,
    payload: payload,
    showError: showError,
  };
}

export function setLoginError(showError){
  return{
    type : SET_LOGIN_ERROR,
    showError: showError,
  };
}

export function setIsLogin(isLogin){
  return{
    type : SET_ISLOGIN,
    isLogin: isLogin,
  };
}

export function fetchLogin(payload){
  return (dispatch) => {
    axiosIntrceptor
    .post( "https://midas-food-delivery-users.herokuapp.com/v1/login", payload)
        .then((response) => {
          // localStorage.setItem('token', response.data.payload[0].tokens.accessToken);
          // localStorage.setItem('isLogin', true);

          if(response.data.success === true){
            console.warn("Sukses")
            dispatch(setLoginSuccess(response.data.payload[0]) ,  false);
            dispatch(setIsLogin(true));
          }
          else{
            console.warn("Gagal")
          }
          // window.location.pathname = '/home';
          // console.log("response", response.data);
          // console.log("isi payload", response.data.payload[0]);
          // console.log("isi accessToken", response.data.payload[0].tokens.accessToken);
        })
        .catch((error) => {
          dispatch(setLoginError(true));
        })
  };
}