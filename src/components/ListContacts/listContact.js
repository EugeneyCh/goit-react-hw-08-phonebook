import React from 'react';
import css from './ListContacts.module.css';

function ListContact({ children }) {
  return <ul className={css.contactList}>{children}</ul>;
}

export default ListContact;
