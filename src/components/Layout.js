import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Container
      sx={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
