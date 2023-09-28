
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/ContactsReducer';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Contact with the name "${name}" already exists.`);
    } else {
      
      const id = nanoid();
      dispatch(addContact({ id, name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className={styles.input}
      />
      <input
        type="tel"
        name="number"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
