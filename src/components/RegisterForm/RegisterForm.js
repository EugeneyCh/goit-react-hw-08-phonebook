import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if (!name || !email || !password) {
      return toast.error('Fill in the login fields');
    }

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        bgcolor: 'lightblue',
        p: '20px 0',
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
        Register
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{
          width: '320px',
          display: 'flex',
          mt: '4px',
          flexDirection: 'column',
          gap: '16px',
          margin: '20px auto ',
        }}
      >
        <TextField
          id="outlined-basic"
          fullWidth
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
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
          Register
        </Button>
      </Box>
    </Container>
  );
}
