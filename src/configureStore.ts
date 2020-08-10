import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import todoApp from "./reducers/";
import { ITodosById } from "./reducers/todosById";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoApp);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools());
  let persistor = persistStore(store);
  return { store, persistor };
};

export interface IStore {
  todosById: ITodosById;
}
