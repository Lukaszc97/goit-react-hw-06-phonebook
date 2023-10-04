import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');

const contactInitialState = [];


const contactsReducer = createReducer(contactInitialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    }).addDefaultCase((state) => state);
    
});

const filterReducer = createReducer("", (builder) => {
  builder
    .addCase(setFilter, (state, action) => {
      return action.payload.toLowerCase();
    });
});

export { contactsReducer, filterReducer };
