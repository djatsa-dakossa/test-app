import { ThunkAction } from "redux-thunk";
import API from "../../components/config/axios/AxiosConfig";
import { ApplicationAction, ApplicationState } from "../../types/types";
import { loginRequest, loginSuccess, signUpError, signUpRequest, signUpSuccess } from "../actions/AccountActions";
import { URLS } from "../services/urls";


type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;


interface RegisterInfo {
    fullName: string,
    email: string,
    password: string
}

interface LoginInfo  {
    email: string,
    password: string
}


export const registerEffect = (info: RegisterInfo): Effect => async (
    dispatch
) => {

    dispatch(signUpRequest())
    console.log("out")
    API.post(URLS.AUTH.REGISTER, info).then(resp => {
        console.log("success l")
        const {data}: any = resp;
        dispatch(signUpSuccess(data.message))
    }).catch( err => {
        console.log("Failed request ===>", err)
        dispatch(signUpError(err.data.message || "Oups!!! some thing went wrong"))
    })
}

export const loginEffect = (info: LoginInfo, redirect: Function): Effect => async (
    dispatch
) => {

    dispatch(loginRequest())
    API.post(URLS.AUTH.LOGIN, info).then(resp => {
        const {user, token:access_token}: any = resp.data;

        console.log("access_token ===*>", access_token)

        dispatch(loginSuccess(user, access_token, true))
        redirect()
    }).catch(err => {
        dispatch(signUpError(err.data.message))
    })
}