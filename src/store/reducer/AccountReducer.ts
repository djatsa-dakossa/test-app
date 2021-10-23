import produce from 'immer';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { ApplicationAction } from '../../types/types';
import { AccountState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../types/AccountTypes';

const ls = RNSecureStorage


const initialState: AccountState = {
    access_token: '',
    refresh_token: '',
    expires_in: '',
    token_type: '',
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
                draft.access_token = '';
                draft.loading.login_loading = true;
                draft.loading.login_failed = false;
                draft.loading.login_failed_message = '';
            });
        }
        case LOGIN_SUCCESS: {
            const { user, access_token, refresh_token, token_type } = action;
            ls.set('access_token', access_token, {accessible: ACCESSIBLE.WHEN_UNLOCKED});
            ls.set('refresh_token', refresh_token, {accessible: ACCESSIBLE.WHEN_UNLOCKED});
            ls.set('token_type', token_type, {accessible: ACCESSIBLE.WHEN_UNLOCKED});
            ls.set('user', JSON.stringify(user), {accessible: ACCESSIBLE.WHEN_UNLOCKED});
            return produce(state, (draft) => {
              draft.user = user;
              draft.access_token = access_token;
              draft.refresh_token = refresh_token;
              draft.token_type = token_type;
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