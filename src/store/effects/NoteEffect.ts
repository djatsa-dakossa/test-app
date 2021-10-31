import { ThunkAction } from "redux-thunk";
import API from "../../components/config/axios/AxiosConfig";
import { ApplicationAction, ApplicationState } from "../../types/types";
import { createNoteFailed, createNoteRequest, createNoteSuccess, deleteNoteFailed, deleteNoteRequest, deleteNoteSuccess, editNoteFailed, editNoteRequest, editNoteSuccess, loadANotesFailed, loadANotesRequesst, loadANotesSuccess, loadNotesFailed, loadNotesRequesst, loadNotesSuccess } from "../actions/NoteAction";
import { URLS } from "../services/urls";
import { Note } from "../types/NoteType";


type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;



export const createNoteEffect = (id: string, info: Note, handleClose: Function): Effect => async (
    dispatch
) => {

    dispatch(createNoteRequest())
    console.log("out")
    API.post(URLS.NOTE.CREATE(id), info).then(resp => {
        console.log("success l")
        const {data}: any = resp;
        dispatch(createNoteSuccess(data))
        handleClose()
    }).catch( err => {
        dispatch(createNoteFailed(err.data.message || "Oups!!! some thing went wrong"))
    })
}

export const loadANoteEffect = (note_id: string, notebook_id: string, next: Function): Effect => async (
    dispatch
) => {

    dispatch(loadANotesRequesst())
    API.get(URLS.NOTE.NOTEBOOK(notebook_id, note_id)).then(resp => {
        const {data}: any = resp.data;

        console.log("resp.data ==>", data)

        dispatch(loadANotesSuccess(data))
        next()
    }).catch(err => {
        dispatch(loadANotesFailed(err.data.message))
    })
}

export const loadNotesEffect = (notebook_id: string, search: string): Effect => async (
    dispatch
) => {

    dispatch(loadNotesRequesst())
    // @ts-ignore
    API.get(URLS.NOTE.LIST(search, notebook_id)).then(resp => {
        // @ts-ignore
        const data = resp.data.data;
        
        console.log("notes response", data)


        dispatch(loadNotesSuccess(data))
    }).catch(err => {
        dispatch(loadNotesFailed(err.data.message || "Ooops, and error occured"))
        console.log("errr ===>", err.data.message)
    })
}


export const updateNotesEffect = (note_id: string, notebook_id: string, info: Note, handleClose: Function): Effect => async (
    dispatch
) => {

    dispatch(editNoteRequest())
    API.put(URLS.NOTE.UPDATE(notebook_id, note_id), info).then(resp => {
        const data: any = resp.data;

        dispatch(editNoteSuccess(info, note_id))
        handleClose()
    }).catch(err => {
        console.log('err',err.data)
        dispatch(editNoteFailed(err.data.message))
    })
}

export const deleteNoteEffect = (note_id: string, notebook_id: string, next: Function): Effect => async (
    dispatch
) => {

    dispatch(deleteNoteRequest())
    API.delete(URLS.NOTE.DELETE(notebook_id, note_id)).then(resp => {
        const data: any = resp.data;

        dispatch(deleteNoteSuccess(note_id, data.message))
        next()
    }).catch(err => {
        dispatch(deleteNoteFailed(err.data.message))
    })
}