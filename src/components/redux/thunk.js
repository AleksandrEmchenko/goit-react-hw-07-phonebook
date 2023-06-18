import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContacts, deleteContacts, getContacts } from "./services";

export const getContactsThunk = createAsyncThunk("contacts/get", () => {
  getContacts();
});

export const createContactsThunk = createAsyncThunk(
  "contacts/create",
  (data) => {
    createContacts(data);
  }
);

export const deleteContactsThunk = createAsyncThunk("contacts/delete", (id) => {
  deleteContacts(id);
});
