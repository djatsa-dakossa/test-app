import { ThunkAction } from "redux-thunk";
import API from "../../components/config/axios/AxiosConfig";
import { ApplicationAction, ApplicationState } from "../../types/types";
import { createNotebookFailed, createNotebookRequest, createNotebookSuccess, deleteNotebookFailed, deleteNotebookRequest, deleteNotebookSuccess, editNotebookFailed, editNotebookRequest, editNotebookSuccess, loadANotebooksFailed, loadANotebooksRequesst, loadANotebooksSuccess, loadNotebooksFailed, loadNotebooksRequesst, loadNotebooksSuccess } from "../actions/NotebooksActions";
import { URLS } from "../services/urls";
import { Notebook } from "../types/NotebooksTyes";


type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;



export const createNoteBookEffect = (info: Notebook, handleClose: Function): Effect => async (
    dispatch
) => {

    dispatch(createNotebookRequest())
    console.log("out")
    API.post(URLS.NOTEBOOK.CREATE, info).then(resp => {
        console.log("success l")
        const {data}: any = resp;
        dispatch(createNotebookSuccess(data))
        handleClose()
    }).catch( err => {
        dispatch(createNotebookFailed(err.data.message || "Oups!!! some thing went wrong"))
    })
}

export const loadANoteBookEffect = (id: string, next: Function): Effect => async (
    dispatch
) => {

    dispatch(loadANotebooksRequesst())
    API.get(URLS.NOTEBOOK.NOTEBOOK(id)).then(resp => {
        const {data}: any = resp.data;

        console.log("resp.data ==>", data)

        dispatch(loadANotebooksSuccess(data))
        next()
    }).catch(err => {
        dispatch(loadANotebooksFailed(err.data.message))
    })
}

export const loadNoteBooksEffect = (search: string): Effect => async (
    dispatch
) => {

    dispatch(loadNotebooksRequesst())
    // @ts-ignore
    API.get(URLS.NOTEBOOK.LIST(search)).then(resp => {
        // @ts-ignore
        const data = resp.data.data;
        
        console.log("notes response", data)


        dispatch(loadNotebooksSuccess(data))
    }).catch(err => {
        dispatch(loadNotebooksFailed(err.data.message || "Ooops, and error occured"))
        console.log("errr ===>", err.data.message)
    })
}


export const updateNoteBooksEffect = (id: string, info: Notebook, handleClose: Function): Effect => async (
    dispatch
) => {

    dispatch(editNotebookRequest())
    API.put(URLS.NOTEBOOK.UPDATE(id), info).then(resp => {
        const data: any = resp.data;

        dispatch(editNotebookSuccess(info, id))
        handleClose()
    }).catch(err => {
        console.log('err',err.data)
        dispatch(editNotebookFailed(err.data.message))
    })
}

export const deleteNoteBookEffect = (id: string, next: Function): Effect => async (
    dispatch
) => {

    dispatch(deleteNotebookRequest())
    API.delete(URLS.NOTEBOOK.DELETE(id)).then(resp => {
        const data: any = resp.data;

        dispatch(deleteNotebookSuccess(id, data.message))
        next()
    }).catch(err => {
        dispatch(deleteNotebookFailed(err.data.message))
    })
}