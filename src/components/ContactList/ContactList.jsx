import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../Redux/ContactsReducer'; 

const Contact = ({ id, name, number, onDeleteClick }) => {
  return (
    <li className={styles.listItem}>
      {name}: {number}
      <button onClick={() => onDeleteClick(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch(); 

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = (contactId) => {
   
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteClick={handleDeleteContact} 
            />
          ))}
        </ul>
      ) : (
        <p>No contacts to display.</p>
      )}
    </div>
  );
};

export default ContactList;
