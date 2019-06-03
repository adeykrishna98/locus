import {combineReducers} from "redux";


import userReducer from "./userReuder";
import repoReducer from "./repoReducer"
const rootReducer = combineReducers({
    search:userReducer,
    repo:repoReducer
})

export default rootReducer;
