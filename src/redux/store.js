import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReducers from "./filterSlice"

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducers
  },
});

export default store;
