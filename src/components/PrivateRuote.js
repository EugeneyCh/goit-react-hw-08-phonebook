import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isloggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
