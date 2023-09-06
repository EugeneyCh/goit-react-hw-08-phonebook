import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/users/selectors';
import { useEffect, useState } from 'react';
import { addContactFromDB, fetchContacts } from 'redux/users/operations';
import { Box, Button, Container, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { toast } from 'react-hot-toast';

function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const saveContactHandler = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast.error('Enter name, please');
      return;
    }

    if (contacts.length === 0) {
      dispatch(
        addContactFromDB({
          name,
          number,
        })
      );
    } else {
      const checkNameToSame = name => {
        const lowerCaseNewName = name.toLowerCase().trim();
        return contacts.some(
          contact => contact.name.toLowerCase() === lowerCaseNewName
        );
      };
      checkNameToSame(name)
        ? toast.error(`${name} is already in contacts`)
        : dispatch(
            addContactFromDB({
              name,
              number,
            }),
            toast.success(`${name} added to contacts.`),
            setName(''),
            setNumber('')
          );
      dispatch(fetchContacts());
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        bgcolor: 'lightblue',
        p: '20px 0',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        component="form"
        onSubmit={saveContactHandler}
        autoComplete="off"
        sx={{
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          margin: '20px auto ',
        }}
      >
        <TextField
          id="outlined-basic"
          fullWidth
          label="Name of contact"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label=" Number of contact"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            display: 'flex',
            gap: '16px',
            bgcolor: '#2c87a5',
          }}
        >
          <PersonAddIcon />
          Add contact
        </Button>
      </Box>
    </Container>
  );
}

export default ContactForm;
