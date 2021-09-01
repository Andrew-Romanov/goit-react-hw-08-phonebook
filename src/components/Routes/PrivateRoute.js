import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...otherProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...otherProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
