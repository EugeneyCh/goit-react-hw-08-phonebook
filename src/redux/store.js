import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './users/slice';

export const store = configureStore({
  reducer: contactsReducer,
});
