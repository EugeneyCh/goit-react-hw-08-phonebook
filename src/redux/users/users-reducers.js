import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from './users-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [fetchContacts.pending]: () => false,
  [fetchContacts.rejected]: () => false,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => false,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
