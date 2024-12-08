import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import filterReducer from "./filterSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  })
});

export const persistor = persistStore(store);
export { store };
