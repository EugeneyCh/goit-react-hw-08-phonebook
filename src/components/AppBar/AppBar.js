import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
// import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
// import css from './AppBar.module.css';
import Header from 'components/Header';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header />
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </>
  );
};
