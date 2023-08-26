// import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
// import authSelectors from 'redux/auth/auth-selectors';

// const styles = {};

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <div>Page</div>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
      <UserMenu />
    </header>
  );
}
