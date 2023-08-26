import css from './ContactForm.module.css';
// import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/users/selectors';
// import { addContact } from 'redux/users/slice';
import { useEffect, useRef } from 'react';
import { addContactFromDB, fetchContacts } from 'redux/users/operations';
// import { addContactFromDB } from 'redux/users/operations';

function ContactForm() {
  const contacts = useSelector(getContacts);
  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const saveContactHandler = () => {
    const name = contactNameRef.current.value.trim();
    const number = contactNumberRef.current.value.trim();
    if (name === '') {
      console.log('contactName is empty', name);
      return alert(`Enter name, please`);
    }

    if (contacts.length === 0) {
      console.log('Contacts in line 30 are...', contacts);
      dispatch(
        addContactFromDB({
          name,
          number,
        })
      );
    } else {
      console.log('Contacts in line 39 are...', contacts);

      const checkNameToSame = name => {
        const lowerCaseNewName = name.toLowerCase().trim();
        console.log('lowerCaseNewName is ...', lowerCaseNewName);
        return contacts.some(
          contact => contact.name.toLowerCase() === lowerCaseNewName
        );
      };
      checkNameToSame(name)
        ? alert(`${name} is already in contacts`)
        : dispatch(
            addContactFromDB({
              name,
              number,
            }),
            // dispatch(addContact),
            (contactNameRef.current.value = ''),
            (contactNumberRef.current.value = '')
          );
      dispatch(fetchContacts());
    }
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
