import { combineReducers } from "redux";
import AccountReducer from './reducer/AccountReducer'
import NoteBooksReducer from './reducer/NoteBookReducer'

const rootReducer = combineReducers({
    account: AccountReducer,
    notebooks: NoteBooksReducer
})

export default rootReducer;