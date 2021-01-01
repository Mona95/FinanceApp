import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { loadState, saveState } from "../utils/localStorage.js";
import thunk from "redux-thunk";

//loading persistedState from the localStorage
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
export default store;

//each update in store,needs to save the updated state in localStorage
store.subscribe(() => {
  saveState(store.getState());
});
