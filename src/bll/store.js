import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";

const reducers = combineReducers({
    dialogsReducer,
    profileReducer
});

const store = createStore(reducers);

export default store;