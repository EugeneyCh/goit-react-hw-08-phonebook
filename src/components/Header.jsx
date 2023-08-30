// import { Navigation } from './Navigation/Navigation';
// import { UserMenu } from './UserMenu/UserMenu';
// import AuthNav from './AuthNav/AuthNav';
// import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

const { Face5 } = require('@mui/icons-material');
const {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  // FormControlLabel,
  Box,
  // Switch,
  // FormGroup,
  Button,
} = require('@mui/material');

function Header() {
  // const auth = false;
  // const { user } = useAuth();
  // const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span">
            Home
          </Typography>

          <Typography variant="h4" component="span" sx={{ flexGrow: 3 }}>
            PhoneBook
          </Typography>
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  // onChange={handleChange}
                  aria-label="login switch"
                  //   color="white"
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
          {/* <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Welcome,{user}
          </Typography> */}
          {/* <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />} */}

          <IconButton color="inherit">
            <Face5 />
          </IconButton>
          <Button
            variant="contained"
            onClick={() => dispatch(authOperations.logOut())}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
