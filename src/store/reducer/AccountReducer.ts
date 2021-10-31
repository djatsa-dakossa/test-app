import produce from 'immer';
import { storeData } from '../../components/utils/storage';

import { ApplicationAction } from '../../types/types';
import { AccountState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../types/AccountTypes';



const initialState: AccountState = {
    token: '',
    user: undefined,
    loading: {
        login_failed: false,
        login_failed_message: "",
        login_loading: false,
        signup_loading: false,
        signup_failed: false,
        signup_success: false,
        signup_success_message: "",
        signup_failed_message: ""
    }
}


const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return produce(state, (draft) => {
                // Ensure we clear current session
                draft.user = undefined;
                draft.token = '';
                draft.loading.login_loading = true;
                draft.loading.login_failed = false;
                draft.loading.login_failed_message = '';
            });
        }
        case LOGIN_SUCCESS: {
            const { user, token, save } = action;

            if(save) {
                storeData('token', token);
                storeData('user', user);
            }

            return produce(state, (draft) => {
              draft.user = user;
              draft.token = token;
              draft.loading.login_failed = false;
            });
        }
        case LOGIN_FAILURE: {
            const { message } = action;
            
            return produce(state, (draft) => {
              draft.loading.login_loading = false;
              draft.loading.login_failed = true;
              draft.loading.login_failed_message = message;
            });
        }
        case SIGNUP_REQUEST: {
      
            return produce(state, (draft) => {
              draft.loading.signup_loading = true;
              draft.loading.signup_failed = false;
              draft.loading.signup_success = false;
            })
        }
    
    
        case SIGNUP_SUCCESS: {
    
            const { message } = action;
            return produce(state, (draft) => {
                draft.loading.signup_loading = false;
                draft.loading.signup_success = true; 
                draft.loading.signup_failed = false;
                draft.loading.signup_success_message = message
            });
        
        }
    
        case SIGNUP_FAILURE: {
    
            const { message } = action
            return produce(state, (draft) => {
                draft.loading.signup_success = false;
                draft.loading.signup_loading = false;
                draft.loading.signup_failed_message = message;
                draft.loading.signup_failed = true
            })
        }
        default: {
            return state;
          }
    }
}

export default reducer;