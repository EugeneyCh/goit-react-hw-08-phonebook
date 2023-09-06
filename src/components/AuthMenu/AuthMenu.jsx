import { NavLink } from 'react-router-dom';
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
  gap: '12px',
  color: '#2a363b',
});
export const AuthMenu = () => {
  return (
    <NavigationBox component="nav">
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/Login">Log In</StyledLink>
    </NavigationBox>
  );
};
