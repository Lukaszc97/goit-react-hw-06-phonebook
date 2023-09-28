import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
