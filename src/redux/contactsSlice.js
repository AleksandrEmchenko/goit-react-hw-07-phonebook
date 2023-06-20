import {
  getContactThunk,
  createContactThunk,
  deleteContactThunk,
} from "./thunk";

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const handlePending = (state) => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
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

  //------------Робочий варіант
  // return {
  //   ...state,
  //   contacts: {
  //     ...state.contacts,
  //     items: state.contacts.items.filter(contact => contact.id !== payload),
  //   },
  // };
  //------------/Робочий варіант

  //------------Робочий варіант
  const index = state.contacts.items.findIndex(
    (contact) => contact.id === payload.id
  );
  state.items.splice(index, 1);

  state.contacts.error = null;
  //------------/Робочий варіант
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactThunk.pending, handlePending)
      .addCase(getContactThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactThunk.rejected, handleRejected)

      .addCase(createContactThunk.pending, handlePending)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
      .addCase(createContactThunk.rejected, handleRejected)

      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
