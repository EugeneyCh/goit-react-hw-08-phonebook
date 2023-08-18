import css from './ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/users/selectors';
// import { addContact } from 'redux/users/slice';
import { useRef } from 'react';
// import { nanoid } from 'nanoid';
import { addContactFromDB } from 'redux/users/operations';
// import { fetchContacts } from 'redux/users/operations';

function ContactForm() {
  const contacts = useSelector(getContacts);
  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  const dispatch = useDispatch();

  const saveContactHandler = () => {
    const contactName = contactNameRef.current.value.trim();
    const contactNumber = contactNumberRef.current.value.trim();
    if (contactName === '') {
      console.log('contactName is empty', contactName);
      return alert(`Enter name, please`);
    }

    const checkNameToSame = contactName => {
      const lowerCaseNewName = contactName.toLowerCase().trim();
      return contacts.some(
        contact => contact.name.toLowerCase() === lowerCaseNewName
      );
    };
    checkNameToSame(contactName)
      ? alert(`${contactName} is already in contacts`)
      : dispatch(
          addContactFromDB({
            name: contactName,
            phone: contactNumber,
          }),
          // dispatch(addContact),
          (contactNameRef.current.value = ''),
          (contactNumberRef.current.value = '')
        );
  };
  return (
    <form className={css.formEditor}>
      <label>
        Name
        <input
          className={css.inputArea}
          ref={contactNameRef}
          type="text"
          placeholder="Name of contact"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone
        <input
          className={css.inputArea}
          ref={contactNumberRef}
          type="tel"
          placeholder="Number of contact"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button
        type="button"
        onClick={saveContactHandler}
        className={css.contactButton}
      >
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
