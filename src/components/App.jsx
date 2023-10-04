import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
}

export default App;
