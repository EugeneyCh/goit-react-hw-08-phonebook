import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },
    updateFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = false;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
