import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/ContactsReducer';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.listItem}>
      {name}: {number}{' '}
      <button onClick={handleDelete} className={styles.deleteButton}>Delete</button> 
    </li>
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div>
      {contacts.length > 0 ? (
        <ul className={styles.contactList}> 
          {contacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <p>No contacts to display.</p>
      )}
    </div>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactList;
