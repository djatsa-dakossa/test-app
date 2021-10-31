import { Action } from "redux";

export const CREATE_NOTE_REQUEST = 'CREATE_NOTE_REQUEST';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'CREATE_NOTE_FAILURE';

export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const LOAD_NOTES_REQUEST = 'LOAD_NOTES_REQUEST';
export const LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS';
export const LOAD_NOTES_FAILURE = 'LOAD_NOTES_FAILURE';


export const LOAD_A_NOTE_REQUEST = 'LOAD_A_NOTE_REQUEST';
export const LOAD_A_NOTE_SUCCESS = 'LOAD_A_NOTE_SUCCESS';
export const LOAD_A_NOTE_FAILURE = 'LOAD_A_NOTE_FAILURE';

export interface LoadingNotes {
    create_note_loading: boolean;
    create_note_success: boolean;
    create_note_failed: boolean;
    create_note_failed_message: string;
    update_note_loading: boolean;
    update_note_success: boolean;
    update_note_failed: boolean;
    update_note_failed_message: string;
    delete_note_loading: boolean;
    delete_note_success: boolean;
    delete_note_failed: boolean;
    delete_note_failed_message: string;
    load_note_loading: boolean;
    load_note_failed: boolean;
    load_note_success: boolean;
    load_note_success_message: string;
    load_note_failed_message: string;
    load_a_note_loading: boolean;
    load_a_note_failed: boolean;
    load_a_note_success: boolean;
    load_a_note_failed_message: string;
}

export interface User {
    fullName: string;
    email: string;
}

export interface NotesState {
    loading: LoadingNotes,
    notes: Note[],
    note: Note,
}

export interface Note {
    _id?: string,
    title: string,
    content: string,
    created?: Date,
    updated?: Date,
}


export interface CreateNoteRequest extends Action {
    type: typeof CREATE_NOTE_REQUEST;
  }
  
export interface CreateNoteSuccess extends Action {
    type: typeof CREATE_NOTE_SUCCESS;
    note: Note;
}

export interface CreateNoteError extends Action {
    type: typeof CREATE_NOTE_FAILURE;
    message: string;
}


export interface loadNoteRequest extends Action {
    type: typeof LOAD_NOTES_REQUEST;
}

export interface loadNoteSuccess extends Action {
    type: typeof LOAD_NOTES_SUCCESS;
    notes: Note[]
}

export interface loadNoteError extends Action {
    type: typeof LOAD_NOTES_FAILURE;
    message: string;
}


export interface UpdateNoteRequest extends Action {
    type: typeof UPDATE_NOTE_REQUEST;
  }
  
export interface UpdateNoteSuccess extends Action {
    type: typeof UPDATE_NOTE_SUCCESS;
    note: Note;
    id: string
}

export interface UpdateNoteError extends Action {
    type: typeof UPDATE_NOTE_FAILURE;
    message: string;
}


export interface DeleteNoteRequest extends Action {
    type: typeof DELETE_NOTE_REQUEST;
  }
  
export interface DeleteNoteSuccess extends Action {
    type: typeof DELETE_NOTE_SUCCESS;
    message: string,
    _id: string
}

export interface DeleteNoteError extends Action {
    type: typeof DELETE_NOTE_FAILURE;
    message: string;
}


export interface LoadANoteRequest extends Action {
    type: typeof LOAD_A_NOTE_REQUEST;
  }
  
export interface LoadANoteSuccess extends Action {
    type: typeof LOAD_A_NOTE_SUCCESS;
    note: Note;
}

export interface LoadANoteError extends Action {
    type: typeof LOAD_A_NOTE_FAILURE;
    message: string;
}