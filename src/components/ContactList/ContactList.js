import React from 'react';
import css from './ContactList.module.css';

export default function ContactList({ children }) {
  return <ul className={css.contactList}>{children}</ul>;
}
