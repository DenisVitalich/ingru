import { combineReducers } from "redux";
// eslint-disable-next-line
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { notesReducer } from "./notesReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
});
// eslint-disable-next-line
export const store = createStore(rootReducer, applyMiddleware(thunk));
