import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

const LoginView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error('Fill in the login fields');
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        bgcolor: 'lightblue',
        p: '20px 0',
        mt: '4px',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ m: '20px 0' }}
      >
        Login page
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          margin: '20px auto ',
        }}
      >
        <TextField
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />{' '}
        <TextField
          id="outlined-basic"
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />{' '}
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ bgcolor: '#2c87a5' }}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default LoginView;
