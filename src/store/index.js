import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { loadState, saveState } from "../utils/localStorage.js";
import thunk from "redux-thunk";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
export default store;

store.subscribe(() => {
  saveState(store.getState());
});
