import { AccountState, LoginError, LoginRequest, LoginSuccess, SignUpError, SignUpRequest, SignUpSuccess } from "../store/types/AccountTypes";


export interface ApplicationState {

    account: AccountState
}

export type ApplicationAction = 
    | LoginRequest
    | LoginSuccess
    | LoginError
    | SignUpError
    | SignUpRequest
    | SignUpSuccess