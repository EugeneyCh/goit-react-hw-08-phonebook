import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth;

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
// const { NavLink } = require('react-router-dom');

// const styles = {
//   link: { padding: 12, fontWeight: 700, color: '#2A363B' },

//   activeLink: {
//     color: '#E84A5F',
//   },
// };

// const Navigation = () => {
//   <nav>
//     <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
//       Main
//     </NavLink>
//     <NavLink
//       to="/contacts"
//       exact
//       style={styles.link}
//       activeStyle={styles.activeLink}
//     >
//       Contacts
//     </NavLink>
//   </nav>;
// };

// export default Navigation;
