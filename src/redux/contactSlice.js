import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items:[]
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({
        ...action.payload,
        id: new Date()
      });
    },
    deleteContact:(state,action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      )
    }
  },
});

export const {addContact, deleteContact} = contactSlice.actions;

export default contactSlice.reducer;
