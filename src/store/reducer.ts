import { combineReducers } from "redux";
import AccountReducer from './reducer/AccountReducer'

const rootReducer = combineReducers({
    account: AccountReducer,
})

export default rootReducer;