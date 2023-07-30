import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations.js';

import styles from './ContactList.module.css';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    if (filter.length > 0) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return items;
    }
  };

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const filtered = filteredContacts();

  return (
    <ul>
      {isLoading && <Loader />}
      {error && <p className={styles.warning}>{error}</p>}
      {filtered.length === 0 && !error && (
        <p className={styles.warning}>No contacts in your Phonebook yet...</p>
      )}
      {filtered.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            <span>{contact.name} </span>
            <span>{contact.phone}</span>
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
