import { Action } from "redux";

export const CREATE_NOTEBOOK_REQUEST = 'CREATE_NOTEBOOK_REQUEST';
export const CREATE_NOTEBOOK_SUCCESS = 'CREATE_NOTEBOOK_SUCCESS';
export const CREATE_NOTEBOOK_FAILURE = 'CREATE_NOTEBOOK_FAILURE';

export const UPDATE_NOTEBOOK_REQUEST = 'UPDATE_NOTEBOOK_REQUEST';
export const UPDATE_NOTEBOOK_SUCCESS = 'UPDATE_NOTEBOOK_SUCCESS';
export const UPDATE_NOTEBOOK_FAILURE = 'UPDATE_NOTEBOOK_FAILURE';

export const DELETE_NOTEBOOK_REQUEST = 'DELETE_NOTEBOOK_REQUEST';
export const DELETE_NOTEBOOK_SUCCESS = 'DELETE_NOTEBOOK_SUCCESS';
export const DELETE_NOTEBOOK_FAILURE = 'DELETE_NOTEBOOK_FAILURE';

export const LOAD_NOTEBOOKS_REQUEST = 'LOAD_NOTEBOOKS_REQUEST';
export const LOAD_NOTEBOOKS_SUCCESS = 'LOAD_NOTEBOOKS_SUCCESS';
export const LOAD_NOTEBOOKS_FAILURE = 'LOAD_NOTEBOOKS_FAILURE';


export interface LoadingNotebooks {
    create_notebook_loading: boolean;
    create_notebook_success: boolean;
    create_notebook_failed: boolean;
    create_notebook_failed_message: string;
    update_notebook_loading: boolean;
    update_notebook_success: boolean;
    update_notebook_failed: boolean;
    update_notebook_failed_message: string;
    delete_notebook_loading: boolean;
    delete_notebook_success: boolean;
    delete_notebook_failed: boolean;
    delete_notebook_failed_message: string;
    load_notebook_loading: boolean;
    load_notebook_failed: boolean;
    load_notebook_success: boolean;
    load_notebook_success_message: string;
    load_notebook_failed_message: string;
}

export interface User {
    fullName: string;
    email: string;
}

export interface NotebooksState {
    loading: LoadingNotebooks,
    notebooks: Notebook[],
    notebook: Notebook,
}

export interface Notebook {
    _id?: string,
    title: string,
    description: string;
}

export interface CreateNotebookRequest extends Action {
    type: typeof CREATE_NOTEBOOK_REQUEST;
  }
  
export interface CreateNotebookSuccess extends Action {
    type: typeof CREATE_NOTEBOOK_SUCCESS;
    notebook: Notebook;
}

export interface CreateNotebookError extends Action {
    type: typeof CREATE_NOTEBOOK_FAILURE;
    message: string;
}


export interface loadNotebookRequest extends Action {
    type: typeof LOAD_NOTEBOOKS_REQUEST;
}

export interface loadNotebookSuccess extends Action {
    type: typeof LOAD_NOTEBOOKS_SUCCESS;
    notebooks: Notebook[]
}

export interface loadNotebookError extends Action {
    type: typeof LOAD_NOTEBOOKS_FAILURE;
    message: string;
}


export interface UpdateNotebookRequest extends Action {
    type: typeof UPDATE_NOTEBOOK_REQUEST;
  }
  
export interface UpdateNotebookSuccess extends Action {
    type: typeof UPDATE_NOTEBOOK_SUCCESS;
    notebook: Notebook;
    id: string
}

export interface UpdateNotebookError extends Action {
    type: typeof UPDATE_NOTEBOOK_FAILURE;
    message: string;
}


export interface DeleteNotebookRequest extends Action {
    type: typeof DELETE_NOTEBOOK_REQUEST;
  }
  
export interface DeleteNotebookSuccess extends Action {
    type: typeof DELETE_NOTEBOOK_SUCCESS;
    message: string
}

export interface DeleteNotebookError extends Action {
    type: typeof DELETE_NOTEBOOK_FAILURE;
    message: string;
}