import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  return (
    <li className={styles.listItem}>
      {name}: {number}
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} id={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <p>No contacts to display.</p>
      )}
    </div>
  );
};

export default ContactList;
