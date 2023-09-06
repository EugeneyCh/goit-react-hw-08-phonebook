import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/users/selectors';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/users/selectors';
import { deleteContact } from 'redux/users/slice';
import Loader from 'components/Loader/loader';
// import css from './Contact.module.css';

import { deleteContactFromDB } from 'redux/users/operations';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Contact() {
  // const { contacts, filter, isLoading } = useSelector(getContacts);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactFromDB(id));
    console.log('Deleting contact with id', id);
    dispatch(deleteContact(id));
  };
  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  const getVisibleContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  };

  const visibleContact = getVisibleContacts();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return 'Error' + error;
  }
  return (
    <>
      {visibleContact ? (
        visibleContact.map(({ id, name, number }) => (
          <Box
            component="li"
            key={id}
            sx={{
              display: 'flex',
              justifyContent: ' space-between',
              alignItems: 'center',
              // maxWidth: ' 70%',
              marginBottom: '10px',
            }}
          >
            <Typography sx={{ width: '150px' }}>{name}</Typography>
            <Typography sx={{ width: '150px' }}>{number}</Typography>
            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              type="button"
              onClick={() => handleDeleteContact(id)}
              sx={{ bgcolor: '#2c87a5' }}
            >
              Delete
            </Button>
          </Box>
          // <li key={id} className={css.contactRow}>
          //   <span>{name}</span>
          //   <span>{number}</span>
          //   <button
          //     type="button"
          //     className={css.deleteButton}
          //     onClick={() => handleDeleteContact(id)}
          //   >
          //     Delete
          //   </button>
          // </li>
        ))
      ) : (
        <p>No contacts to display.</p>
      )}
    </>
  );
}

export default Contact;
