import { Action } from "redux";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


export interface LoadingAccount {
    login_loading: boolean;
    login_failed: boolean;
    login_failed_message: string;
    signup_loading: boolean;
    signup_failed: boolean;
    signup_success: boolean;
    signup_success_message: string;
    signup_failed_message: string;
}

export interface User {
    first_name: string;
    last_name: string;
    email: string;
}

export interface AccountState {
    loading: LoadingAccount,
    access_token: string,
    refresh_token: string,
    expires_in: string,
    token_type: string,
    user: User | null;
}


export interface LoginRequest extends Action {
    type: typeof LOGIN_REQUEST;
  }
  
export interface LoginSuccess extends Action {
    type: typeof LOGIN_SUCCESS;
    access_token: string;
    refresh_token: string;
    token_type: string;
    user: User | null | undefined;
}

export interface LoginError extends Action {
    type: typeof LOGIN_FAILURE;
    message: string;
}


export interface SignUpRequest extends Action {
    type: typeof SIGNUP_REQUEST;
}

export interface SignUpSuccess extends Action {
    type: typeof SIGNUP_SUCCESS;
    message: string
}

export interface SignUpError extends Action {
    type: typeof SIGNUP_FAILURE;
    message: string;
}
