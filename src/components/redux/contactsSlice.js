import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from "./thunk";

const {items, isLoading, error} = initialState.contacts;

const handlePending = (state) => {
  isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  isLoading = false;
  items = payload;
  error = null;
};

const handleFulfilledCreate = (state, { payload }) => {
  isLoading = false;
  items.push(payload);
  error = null;
};

const handleFulfilledDel = (state, { payload }) => {
  isLoading = false;
  items = items.filter(
    (item) => item.id !== payload.id
  );
  error = null;
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
