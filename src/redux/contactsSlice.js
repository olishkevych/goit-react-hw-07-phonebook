import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => {
      state.push(payload);
    },
    removeContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
