import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { useAuth } from './hooks/useAuth';
// import { refreshUser } from 'redux/auth/auth-operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('./pages/HomeView'));
const RegisterPage = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('./LoginForm/LoginForm'));
const Contacts = lazy(() => import('./pages/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isrefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    !isrefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/register"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    )
  );
};

// import React, { Suspense, useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/users/operations';
// import ContactForm from './ContactForm/contactForm';
// import Contact from './Contact/contact';
// import ListContacts from './ListContacts/listContact';
// import Filter from './Filter/filter';
// import AppBar from './UserMenu/AppBar';

// import css from './App.module.css';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <Suspense
//         fallback={
//           <div>
//             {/* <Loader /> */}
//             Loading ...
//           </div>
//         }
//       >
//         <AppBar />

//         <h1>Phonebook</h1>
//         <Router>
//           <Route path="/contacts" component={ListContacts} />
//           <Route path="/" exact>
//             <ContactForm />
//             <div className={css.contactList}>
//               <h2>Contacts</h2>
//               <Filter />
//               <ListContacts children={<Contact />} />
//             </div>
//           </Route>
//         </Router>
//       </Suspense>
//     </div>
//   );
// };

// export default App;
