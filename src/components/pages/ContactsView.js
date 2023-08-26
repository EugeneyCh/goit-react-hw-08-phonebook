import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/contactForm';
import Filter from 'components/Filter/filter';
import ListContacts from 'components/ContactList/ContactList';
import Contact from 'components/Contact/contact';
import { fetchContacts } from 'redux/users/operations';
// import { getIsLoading } from 'redux/users/selectors';
// import Loader from 'components/Loader/loader';

export default function ContactsView() {
  const dispatch = useDispatch();
  //   const isloading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <>
      <ContactForm />;
      <div>
        <h2>Contacts</h2>
        <Filter />
        {/* {isloading && <Loader />} */}
        <ListContacts children={<Contact />} />
      </div>
    </>
  );

  // className={css.contactList}
}
