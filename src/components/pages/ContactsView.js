import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/contactForm';
import Filter from 'components/Filter/filter';
import ListContacts from 'components/ContactList/ContactList';
import Contact from 'components/Contact/contact';
import { fetchContacts } from 'redux/users/operations';
import { Container, Typography } from '@mui/material';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <Container
      maxWidth="xs"
      sx={{
        bgcolor: 'lightblue',
        mt: '4px',
        p: '20px 0',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ m: '20px 0' }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Typography
        variant="h4"
        component="h3"
        align="center"
        sx={{ m: '20px 0' }}
      >
        Contacts
      </Typography>
      <Filter />
      <ListContacts children={<Contact />} />
    </Container>
  );
}
