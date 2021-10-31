import { CreateNotebookError, CreateNotebookRequest, CreateNotebookSuccess, CREATE_NOTEBOOK_FAILURE, CREATE_NOTEBOOK_REQUEST, CREATE_NOTEBOOK_SUCCESS, DeleteNotebookError, DeleteNotebookRequest, DeleteNotebookSuccess, DELETE_NOTEBOOK_FAILURE, DELETE_NOTEBOOK_REQUEST, DELETE_NOTEBOOK_SUCCESS, LoadANotebookError, LoadANotebookRequest, LoadANotebookSuccess, loadNotebookError, loadNotebookRequest, loadNotebookSuccess, LOAD_A_NOTEBOOK_FAILURE, LOAD_A_NOTEBOOK_REQUEST, LOAD_A_NOTEBOOK_SUCCESS, LOAD_NOTEBOOKS_FAILURE, LOAD_NOTEBOOKS_REQUEST, LOAD_NOTEBOOKS_SUCCESS, Notebook, UpdateNotebookError, UpdateNotebookRequest, UpdateNotebookSuccess, UPDATE_NOTEBOOK_FAILURE, UPDATE_NOTEBOOK_REQUEST, UPDATE_NOTEBOOK_SUCCESS } from "../types/NotebooksTyes";


  export const createNotebookRequest = (): CreateNotebookRequest => ({
    type: CREATE_NOTEBOOK_REQUEST
  });
  
  export const createNotebookSuccess = (notebook: Notebook): CreateNotebookSuccess => ({
    type: CREATE_NOTEBOOK_SUCCESS,
    notebook,
  });
  
  export const createNotebookFailed = (message: string): CreateNotebookError => ({
    type: CREATE_NOTEBOOK_FAILURE,
    message
  });

  export const editNotebookRequest = (): UpdateNotebookRequest => ({
    type: UPDATE_NOTEBOOK_REQUEST
  });
  
  export const editNotebookSuccess = (notebook: Notebook, id: string): UpdateNotebookSuccess => ({
    type: UPDATE_NOTEBOOK_SUCCESS,
    notebook,
    id
  });
  
  export const editNotebookFailed = (message: string): UpdateNotebookError => ({
    type: UPDATE_NOTEBOOK_FAILURE,
    message
  });

  export const deleteNotebookRequest = (): DeleteNotebookRequest => ({
    type: DELETE_NOTEBOOK_REQUEST
  });
  
  export const deleteNotebookSuccess = (_id: string, message: string): DeleteNotebookSuccess => ({
    type: DELETE_NOTEBOOK_SUCCESS,
    _id,
    message
  });
    
  export const deleteNotebookFailed = (message: string): DeleteNotebookError => ({
    type: DELETE_NOTEBOOK_FAILURE,
    message
  });


  export const loadNotebooksRequesst = (): loadNotebookRequest => ({
    type: LOAD_NOTEBOOKS_REQUEST,
  });


  export const loadNotebooksSuccess = (notebooks: Notebook[]): loadNotebookSuccess => ({
    type: LOAD_NOTEBOOKS_SUCCESS,
    notebooks
  });
  
  export const loadNotebooksFailed = (message: string): loadNotebookError => ({
    type: LOAD_NOTEBOOKS_FAILURE,
    message,
  });



  export const loadANotebooksRequesst = (): LoadANotebookRequest => ({
    type: LOAD_A_NOTEBOOK_REQUEST,
  });


  export const loadANotebooksSuccess = (notebook: Notebook): LoadANotebookSuccess => ({
    type: LOAD_A_NOTEBOOK_SUCCESS,
    notebook
  });
  
  export const loadANotebooksFailed = (message: string): LoadANotebookError => ({
    type: LOAD_A_NOTEBOOK_FAILURE,
    message,
  });
