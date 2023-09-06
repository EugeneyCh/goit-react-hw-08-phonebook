import React from 'react';
import { Box, Container } from '@mui/material';

export default function ContactList({ children }) {
  return (
    <Container
      maxWidth="xs"
      sx={{
        bgcolor: 'lightblue',
        mt: '36px',
        p: '20px 0',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          paddingLeft: '0',
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
