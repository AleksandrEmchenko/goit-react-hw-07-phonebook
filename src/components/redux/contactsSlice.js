import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from "./thunk";

const {items, isLoading, error} = initialState.contacts;

const handlePending = (state) => {
  state.contacts.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.contacts.isLoading = false;
   state.contacts.items = payload;
   state.contacts.error = null;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
  state.contacts.error = null;
};

const handleFulfilledDel = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    (item) => item.id !== payload.id);
   state.contacts.error = null;

  //  return{
  //   ...state, contacts: {
  //     ...state.contacts, items: state.contacts.items.filter(item => item.id === payload.id),
  //   }
  //  }
};

const handleRejected = (state, { payload }) => {
  isLoading = false;
    error = payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactsThunk.rejected, handleRejected)

      .addCase(createContactsThunk.pending, handlePending)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(createContactsThunk.rejected, handleRejected)

      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
      .addCase(deleteContactsThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
