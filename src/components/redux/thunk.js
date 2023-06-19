import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContacts, deleteContacts, getContacts } from "./services";
import axios from "axios";

export const getContactsThunk = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const response = await getContacts();
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const createContactsThunk = createAsyncThunk(
  "contacts/createContacts",
  (data) => {
    createContacts(data);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkApi) => {
    try {
      const response = await deleteContacts(contactId);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// export const deleteContactsThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );