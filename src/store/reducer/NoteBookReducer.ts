import produce from "immer"
import { ApplicationAction } from "../../types/types"
import { CREATE_NOTEBOOK_FAILURE, CREATE_NOTEBOOK_REQUEST, CREATE_NOTEBOOK_SUCCESS, DELETE_NOTEBOOK_FAILURE, DELETE_NOTEBOOK_REQUEST, DELETE_NOTEBOOK_SUCCESS, LOAD_A_NOTEBOOK_FAILURE, LOAD_A_NOTEBOOK_REQUEST, LOAD_A_NOTEBOOK_SUCCESS, LOAD_NOTEBOOKS_FAILURE, LOAD_NOTEBOOKS_REQUEST, LOAD_NOTEBOOKS_SUCCESS, NotebooksState, UPDATE_NOTEBOOK_FAILURE, UPDATE_NOTEBOOK_REQUEST, UPDATE_NOTEBOOK_SUCCESS } from "../types/NotebooksTyes"
import { CREATE_NOTE_FAILURE, CREATE_NOTE_SUCCESS, DELETE_NOTE_FAILURE, DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, LOAD_A_NOTE_FAILURE, LOAD_A_NOTE_REQUEST, LOAD_A_NOTE_SUCCESS, LOAD_NOTES_FAILURE, LOAD_NOTES_REQUEST, LOAD_NOTES_SUCCESS, UPDATE_NOTE_FAILURE, UPDATE_NOTE_REQUEST, UPDATE_NOTE_SUCCESS } from "../types/NoteType"


const initialState: NotebooksState = {
    loading: {
        create_notebook_loading: false,
        create_notebook_success: false,
        create_notebook_failed: false,
        create_notebook_failed_message: "",
        update_notebook_loading: false,
        update_notebook_success: false,
        update_notebook_failed: false,
        update_notebook_failed_message: "",
        delete_notebook_loading: false,
        delete_notebook_success: false,
        delete_notebook_failed: false,
        delete_notebook_failed_message: "",
        load_notebook_loading: false,
        load_notebook_failed: false,
        load_notebook_success: false,
        load_notebook_success_message: "",
        load_notebook_failed_message: "",
        load_a_notebook_failed: false,
        load_a_notebook_success: false,
        load_a_notebook_loading: false,
        load_a_notebook_failed_message: "",
    },
    loading_notes: {
        create_note_loading: false,
        create_note_success: false,
        create_note_failed: false,
        create_note_failed_message: "",
        update_note_loading: false,
        update_note_success: false,
        update_note_failed: false,
        update_note_failed_message: "",
        delete_note_loading: false,
        delete_note_success: false,
        delete_note_failed: false,
        delete_note_failed_message: "",
        load_note_loading: false,
        load_note_failed: false,
        load_note_success: false,
        load_note_success_message: "",
        load_note_failed_message: "",
        load_a_note_failed: false,
        load_a_note_success: false,
        load_a_note_loading: false,
        load_a_note_failed_message: "",
    },
    notebooks: [],
    notebook: undefined,
    note: undefined
}

const reducer = (state = initialState, action: ApplicationAction ) => {
    switch (action.type) {
        case LOAD_NOTEBOOKS_REQUEST:
            return produce(state, (draft) => {
                draft.loading.load_notebook_loading = true;
                draft.loading.load_notebook_success = false;
                draft.loading.load_notebook_failed = false;
                draft.loading.load_notebook_failed_message = "";
            })
        case LOAD_NOTEBOOKS_SUCCESS:
            return produce(state, (draft) => {
                draft.loading.load_notebook_loading = false;
                draft.loading.load_notebook_success = true;
                draft.loading.load_notebook_failed = false;
                draft.loading.load_notebook_failed_message = "";
                draft.notebooks = action.notebooks
            })
        case LOAD_NOTEBOOKS_FAILURE:
            return produce(state, (draft) => {
                draft.loading.load_notebook_loading = false;
                draft.loading.load_notebook_success = false;
                draft.loading.load_notebook_failed = true;
                draft.loading.load_notebook_failed_message = action.message;
            })
        case CREATE_NOTEBOOK_REQUEST:
            return produce(state, (draft) => {
                draft.loading.create_notebook_loading = true;
                draft.loading.create_notebook_success = false;
                draft.loading.create_notebook_failed = false;
                draft.loading.create_notebook_failed_message = "";
            })
        case CREATE_NOTEBOOK_SUCCESS:
            return produce(state, (draft) => {
                draft.loading.create_notebook_loading = false;
                draft.loading.create_notebook_success = true;
                draft.loading.create_notebook_failed = false;
                draft.loading.create_notebook_failed_message = "";
                draft.notebooks = [action.notebook, ...draft.notebooks]
            })
        case CREATE_NOTEBOOK_FAILURE:
            return produce(state, (draft) => {
                draft.loading.create_notebook_loading = false;
                draft.loading.create_notebook_success = false;
                draft.loading.create_notebook_failed = true;
                draft.loading.create_notebook_failed_message = action.message;
            })
        case UPDATE_NOTEBOOK_REQUEST:
            return produce(state, (draft) => {
                draft.loading.update_notebook_loading = true;
                draft.loading.update_notebook_success = false;
                draft.loading.update_notebook_failed = false;
                draft.loading.update_notebook_failed_message = "";
            })
        case UPDATE_NOTEBOOK_SUCCESS:
            return produce(state, (draft) => {
                draft.loading.update_notebook_loading = false;
                draft.loading.update_notebook_success = true;
                draft.loading.update_notebook_failed = false;
                draft.loading.update_notebook_failed_message = "";
                draft.notebooks = draft.notebooks.map(notebook => {
                    if(notebook._id === action.id){
                        notebook = action.notebook
                    }
                    return notebook
                })
            })
        case UPDATE_NOTEBOOK_FAILURE:
            return produce(state, (draft) => {
                draft.loading.update_notebook_loading = false;
                draft.loading.update_notebook_success = false;
                draft.loading.update_notebook_failed = true;
                draft.loading.update_notebook_failed_message = action.message;
            })
        case DELETE_NOTEBOOK_REQUEST:
            return produce(state, (draft) => {
                draft.loading.delete_notebook_loading = true;
                draft.loading.delete_notebook_success = false;
                draft.loading.delete_notebook_failed = false;
                draft.loading.delete_notebook_failed_message = "";
            })
        case DELETE_NOTEBOOK_SUCCESS:
            return produce(state, (draft) => {
                draft.loading.delete_notebook_loading = false;
                draft.loading.delete_notebook_success = true;
                draft.loading.delete_notebook_failed = false;
                draft.loading.delete_notebook_failed_message = "";
                draft.notebooks = draft.notebooks.filter(notebook => notebook._id !== action._id)
            })
        case DELETE_NOTEBOOK_FAILURE:
            return produce(state, (draft) => {
                draft.loading.delete_notebook_loading = false;
                draft.loading.delete_notebook_success = false;
                draft.loading.delete_notebook_failed = true;
                draft.loading.delete_notebook_failed_message = action.message;
            })
        case LOAD_A_NOTEBOOK_REQUEST:
            return produce(state, (draft) => {
                draft.loading.load_a_notebook_loading = true;
                draft.loading.load_a_notebook_success = false;
                draft.loading.load_a_notebook_failed = false;
                draft.loading.load_a_notebook_failed_message = "";
            })
        case LOAD_A_NOTEBOOK_SUCCESS:
            return produce(state, (draft) => {
                draft.loading.load_a_notebook_loading = false;
                draft.loading.load_a_notebook_success = true;
                draft.loading.load_a_notebook_failed = false;
                draft.loading.load_a_notebook_failed_message = "";
                draft.notebook = action.notebook
            })
        case LOAD_A_NOTEBOOK_FAILURE:
            return produce(state, (draft) => {
                draft.loading.load_a_notebook_loading = false;
                draft.loading.load_a_notebook_success = false;
                draft.loading.load_a_notebook_failed = true;
                draft.loading.load_a_notebook_failed_message = action.message;
            })

        // actions for note reducer 

        case LOAD_NOTES_REQUEST:
            return produce(state, (draft) => {
                draft.loading_notes.load_note_loading = false;
                draft.loading_notes.load_note_success = true;
                draft.loading_notes.load_note_failed = false;
                draft.loading_notes.load_note_failed_message = "";
            })
        case LOAD_NOTES_SUCCESS:
            return produce(state, (draft) => {
                draft.loading_notes.load_note_loading = false;
                draft.loading_notes.load_note_success = true;
                draft.loading_notes.load_note_failed = false;
                draft.notebook.all_notes = action.notes
            })
        case LOAD_NOTES_FAILURE:
            return produce(state, (draft) => {
                draft.loading_notes.load_note_loading = false;
                draft.loading_notes.load_note_success = false;
                draft.loading_notes.load_note_failed = true;
                draft.loading_notes.load_note_failed_message = action.message;
            })
        case CREATE_NOTE_SUCCESS:
            return produce(state, (draft) => {
                draft.loading_notes.create_note_loading = false;
                draft.loading_notes.create_note_success = true;
                draft.loading_notes.create_note_failed = false;
                draft.loading_notes.create_note_failed_message = "";
                draft.notebook.all_notes = [action.note, ...draft.notebook.all_notes]
            })
        case CREATE_NOTE_FAILURE:
            return produce(state, (draft) => {
                draft.loading_notes.create_note_loading = false;
                draft.loading_notes.create_note_success = false;
                draft.loading_notes.create_note_failed = true;
                draft.loading_notes.create_note_failed_message = action.message;
            })
        case UPDATE_NOTE_REQUEST:
            return produce(state, (draft) => {
                draft.loading_notes.update_note_loading = true;
                draft.loading_notes.update_note_success = false;
                draft.loading_notes.update_note_failed = false;
                draft.loading_notes.update_note_failed_message = "";
            })
        case UPDATE_NOTE_SUCCESS:
            return produce(state, (draft) => {
                draft.loading_notes.update_note_loading = false;
                draft.loading_notes.update_note_success = true;
                draft.loading_notes.update_note_failed = false;
                draft.loading_notes.update_note_failed_message = "";
                draft.notebook.all_notes = draft.notebook.all_notes.map(note => {
                    if(note._id === action.id){
                        note.title = action.note.title;
                        note.content = action.note.content;
                        note.updated = new Date;
                    }
                    return note
                })
            })
        case UPDATE_NOTE_FAILURE:
            return produce(state, (draft) => {
                draft.loading_notes.update_note_loading = false;
                draft.loading_notes.update_note_success = false;
                draft.loading_notes.update_note_failed = true;
                draft.loading_notes.update_note_failed_message = action.message;
            })
        case DELETE_NOTE_REQUEST:
            return produce(state, (draft) => {
                draft.loading_notes.delete_note_loading = true;
                draft.loading_notes.delete_note_success = false;
                draft.loading_notes.delete_note_failed = false;
                draft.loading_notes.delete_note_failed_message = "";
            })
        case DELETE_NOTE_SUCCESS:
            return produce(state, (draft) => {
                draft.loading_notes.delete_note_loading = false;
                draft.loading_notes.delete_note_success = true;
                draft.loading_notes.delete_note_failed = false;
                draft.loading_notes.delete_note_failed_message = "";
                draft.notebook.all_notes = draft.notebook.all_notes.filter(note => note._id !== action._id)
            })
        case DELETE_NOTE_FAILURE:
            return produce(state, (draft) => {
                draft.loading_notes.delete_note_loading = false;
                draft.loading_notes.delete_note_success = false;
                draft.loading_notes.delete_note_failed = true;
                draft.loading_notes.delete_note_failed_message = action.message;
            })
        case LOAD_A_NOTE_REQUEST:
            return produce(state, (draft) => {
                draft.loading_notes.load_a_note_loading = true;
                draft.loading_notes.load_a_note_success = false;
                draft.loading_notes.load_a_note_failed = false;
                draft.loading_notes.load_a_note_failed_message = "";
            })
        case LOAD_A_NOTE_SUCCESS:
            return produce(state, (draft) => {
                draft.loading_notes.load_a_note_loading = false;
                draft.loading_notes.load_a_note_success = true;
                draft.loading_notes.load_a_note_failed = false;
                draft.loading_notes.load_a_note_failed_message = "";
                draft.note = action.note
            })
        case LOAD_A_NOTE_FAILURE:
            return produce(state, (draft) => {
                draft.loading_notes.load_a_note_loading = false;
                draft.loading_notes.load_a_note_success = false;
                draft.loading_notes.load_a_note_failed = true;
                draft.loading_notes.load_a_note_failed_message = action.message;
            })
        default:
            return state
    }
}

export default reducer