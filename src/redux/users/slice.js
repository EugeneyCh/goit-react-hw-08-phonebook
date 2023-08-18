import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'phonebook',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  // Об'єкт редюсерів
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

  // Обробка  зовнішніх екшенів
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

// console.log(contactsSlice);

// Генератори екшенів
export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
// Редюсер слайсу

export const contactsReducer = contactsSlice.reducer;
