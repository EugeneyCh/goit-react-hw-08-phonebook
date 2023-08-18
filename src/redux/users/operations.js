import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addContact } from './slice';
// import { deleteContact } from './slice';

axios.defaults.baseURL = 'https://64d87f405f9bf5b879ce4838.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('Response.data is...', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactFromDB = createAsyncThunk(
  'contacts/deleteContactFromDB',

  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log('Response.data is...', response.data);
      // if (!response.ok) {
      //   throw new Error("Can't delete contact. Server error");
      // }
      // thunkAPI.dispatch(deleteContact({id}));
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactFromDB = createAsyncThunk(
  'contacts/addContactFromDB',

  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log('Response.data is...', response);
      // thunkAPI.dispatch(addContact(response.data));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     // dispatch(deleteContact(contactId));
//   } catch (error) {
//     console.log('Error occurred', error);
//   }
// };
