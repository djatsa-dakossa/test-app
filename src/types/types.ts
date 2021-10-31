import { AccountState, LoginError, LoginRequest, LoginSuccess, SignUpError, SignUpRequest, SignUpSuccess } from "../store/types/AccountTypes";
import { CreateNotebookError, CreateNotebookRequest, CreateNotebookSuccess, DeleteNotebookError, DeleteNotebookRequest, DeleteNotebookSuccess, LoadANotebookError, LoadANotebookRequest, LoadANotebookSuccess, LoadingNotebooks, loadNotebookError, loadNotebookRequest, loadNotebookSuccess, NotebooksState, UpdateNotebookError, UpdateNotebookRequest, UpdateNotebookSuccess } from "../store/types/NotebooksTyes";
import { loadNoteError, 
    loadNoteRequest, 
    loadNoteSuccess,
    CreateNoteError, 
    CreateNoteRequest,
    CreateNoteSuccess,
    UpdateNoteError,
    UpdateNoteSuccess,
    UpdateNoteRequest,
    DeleteNoteError,
    DeleteNoteSuccess,
    DeleteNoteRequest,
    LoadANoteError,
    LoadANoteSuccess,
    LoadANoteRequest,
 } from "../store/types/NoteType";


export interface ApplicationState {

    account: AccountState,
    notebooks: NotebooksState
}

export type ApplicationAction = 
    | LoginRequest
    | LoginSuccess
    | LoginError
    | SignUpError
    | SignUpRequest
    | SignUpSuccess
    | loadNotebookError
    | loadNotebookRequest
    | loadNotebookSuccess
    | CreateNotebookError
    | CreateNotebookRequest
    | CreateNotebookSuccess
    | UpdateNotebookError
    | UpdateNotebookSuccess
    | UpdateNotebookRequest
    | DeleteNotebookError
    | DeleteNotebookSuccess
    | DeleteNotebookRequest
    | LoadANotebookError
    | LoadANotebookSuccess
    | LoadANotebookRequest
    | loadNoteError
    | loadNoteRequest
    | loadNoteSuccess
    | CreateNoteError
    | CreateNoteRequest
    | CreateNoteSuccess
    | UpdateNoteError
    | UpdateNoteSuccess
    | UpdateNoteRequest
    | DeleteNoteError
    | DeleteNoteSuccess
    | DeleteNoteRequest
    | LoadANoteError
    | LoadANoteSuccess
    | LoadANoteRequest