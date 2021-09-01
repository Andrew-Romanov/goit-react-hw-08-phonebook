import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...otherProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...otherProps}>
      {isLoggedIn && restricted ? <Redirect to="/" /> : children}
    </Route>
  );
}
