import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice.js';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    if (filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const filtered = filteredContacts();
  if (filtered.length === 0) return null;

  return (
    <ul>
      {filtered.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            <span>{contact.name} </span>
            <span>{contact.number}</span>
            <button
              className={styles.removeBtn}
              onClick={() => handleRemoveContact(contact.id)}
            >
              &times;
            </button>
          </li>
        );
      })}
    </ul>
  );
};
