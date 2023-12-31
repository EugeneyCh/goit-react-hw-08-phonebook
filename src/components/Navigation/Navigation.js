import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';

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
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationBox component="nav">
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavigationBox>
  );
};
