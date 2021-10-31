import { CreateNoteError, CreateNoteRequest, CreateNoteSuccess, CREATE_NOTE_FAILURE, CREATE_NOTE_REQUEST, CREATE_NOTE_SUCCESS, DeleteNoteError, DeleteNoteRequest, DeleteNoteSuccess, DELETE_NOTE_FAILURE, DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, LoadANoteError, LoadANoteRequest, LoadANoteSuccess, loadNoteError, loadNoteRequest, loadNoteSuccess, LOAD_A_NOTE_FAILURE, LOAD_A_NOTE_REQUEST, LOAD_A_NOTE_SUCCESS, LOAD_NOTES_FAILURE, LOAD_NOTES_REQUEST, LOAD_NOTES_SUCCESS, Note, UpdateNoteError, UpdateNoteRequest, UpdateNoteSuccess, UPDATE_NOTE_FAILURE, UPDATE_NOTE_REQUEST, UPDATE_NOTE_SUCCESS } from "../types/NoteType";


  export const createNoteRequest = (): CreateNoteRequest => ({
    type: CREATE_NOTE_REQUEST
  });
  
  export const createNoteSuccess = (note: Note): CreateNoteSuccess => ({
    type: CREATE_NOTE_SUCCESS,
    note,
  });
  
  export const createNoteFailed = (message: string): CreateNoteError => ({
    type: CREATE_NOTE_FAILURE,
    message
  });

  export const editNoteRequest = (): UpdateNoteRequest => ({
    type: UPDATE_NOTE_REQUEST
  });
  
  export const editNoteSuccess = (note: Note, id: string): UpdateNoteSuccess => ({
    type: UPDATE_NOTE_SUCCESS,
    note,
    id
  });
  
  export const editNoteFailed = (message: string): UpdateNoteError => ({
    type: UPDATE_NOTE_FAILURE,
    message
  });

  export const deleteNoteRequest = (): DeleteNoteRequest => ({
    type: DELETE_NOTE_REQUEST
  });
  
  export const deleteNoteSuccess = (_id: string, message: string): DeleteNoteSuccess => ({
    type: DELETE_NOTE_SUCCESS,
    _id,
    message
  });
    
  export const deleteNoteFailed = (message: string): DeleteNoteError => ({
    type: DELETE_NOTE_FAILURE,
    message
  });


  export const loadNotesRequesst = (): loadNoteRequest => ({
    type: LOAD_NOTES_REQUEST,
  });


  export const loadNotesSuccess = (notes: Note[]): loadNoteSuccess => ({
    type: LOAD_NOTES_SUCCESS,
    notes
  });
  
  export const loadNotesFailed = (message: string): loadNoteError => ({
    type: LOAD_NOTES_FAILURE,
    message,
  });



  export const loadANotesRequesst = (): LoadANoteRequest => ({
    type: LOAD_A_NOTE_REQUEST,
  });


  export const loadANotesSuccess = (note: Note): LoadANoteSuccess => ({
    type: LOAD_A_NOTE_SUCCESS,
    note
  });
  
  export const loadANotesFailed = (message: string): LoadANoteError => ({
    type: LOAD_A_NOTE_FAILURE,
    message,
  });
