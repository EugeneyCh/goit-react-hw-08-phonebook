import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/users/operations';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/contactForm';
import Contact from './Contact/contact';
import ListContacts from './ListContacts/listContact';
import Filter from './Filter/filter';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <div className={css.contactList}>
        <h2>Contacts</h2>
        <Filter />
        <ListContacts children={<Contact />} />
      </div>
    </div>
  );
};
