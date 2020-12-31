import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { loadState, saveState } from "../utils/localStorage.js";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);
export default store;

store.subscribe(() => {
  saveState(store.getState());
});
