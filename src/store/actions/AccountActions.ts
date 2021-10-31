import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LoginRequest, LoginError, User, LoginSuccess, SIGNUP_REQUEST, SignUpRequest, SIGNUP_SUCCESS, SignUpSuccess, SIGNUP_FAILURE, SignUpError
} from "../types/AccountTypes";


  export const loginRequest = (): LoginRequest => ({
    type: LOGIN_REQUEST
  });
  
  export const loginSuccess = (user: User, token: string, save: boolean): LoginSuccess => ({
    type: LOGIN_SUCCESS,
    user,
    token,
    save
  });
  
  export const loginError = (message: string): LoginError => ({
    type: LOGIN_FAILURE,
    message
  });


  export const signUpRequest = (): SignUpRequest => ({
    type: SIGNUP_REQUEST
  });
  
  export const signUpSuccess = ( message: string): SignUpSuccess => ({
    type: SIGNUP_SUCCESS,
    message
  });
  
  export const signUpError = (message: string): SignUpError => ({
    type: SIGNUP_FAILURE,
    message
  });
