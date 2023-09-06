import { useAuth } from './hooks/useAuth';
import styled from '@emotion/styled';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { AuthMenu } from './AuthMenu/AuthMenu';

const { AppBar, Toolbar, Box } = require('@mui/material');

function Header() {
  const { isLoggedIn } = useAuth();

  const NavigationBox = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
    gap: '12px',
    fontWeight: '700',
    color: '#2a363b',
  });

  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: 'lightblue' }}>
        <Toolbar>
          <NavigationBox component="nav">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </NavigationBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
