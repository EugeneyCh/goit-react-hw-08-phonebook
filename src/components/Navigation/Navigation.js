import { NavLink } from 'react-router-dom';
// import { useAuth } from 'components/hooks/useAuth';
// import css from './Navigation.module.css';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #e84a5f;
  }
`;

const NavigationBox = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  margin: '10px',
  gap: '12px',
  fontWeight: '700',
  color: '#2a363b',
});
export const Navigation = () => {
  // const { isLoggedIn } = useAuth;

  return (
    <NavigationBox component="nav">
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/Login">Log In</StyledLink>
    </NavigationBox>
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
