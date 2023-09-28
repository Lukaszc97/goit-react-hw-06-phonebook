import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');

const initialState = {
  contacts: [],
  filter: '',
};

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload.toLowerCase();
    });
});

export default contactsReducer;
