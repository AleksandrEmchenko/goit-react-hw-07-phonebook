import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const { combineReducers, configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  }),
});
