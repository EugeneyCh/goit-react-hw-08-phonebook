import { Container, Typography } from '@mui/material';
import backgroundImage from '../images/background.jpg';

const HomeView = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <Typography variant="h4" component="h1" sx={{ pt: '40px' }}>
        Welcome to our service
      </Typography>
    </Container>
  );
};

export default HomeView;
