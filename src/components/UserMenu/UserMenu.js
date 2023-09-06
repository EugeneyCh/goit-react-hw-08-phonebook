import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import authOperations from 'redux/auth/auth-operations';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
      <Typography
        variant="h6"
        component="span"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Welcome, {user}
      </Typography>
      <Button
        variant="contained"
        onClick={() => dispatch(authOperations.logOut())}
        sx={{ bgcolor: '#2c87a5' }}
      >
        LogoutF
      </Button>
    </Box>
  );
};
