import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import styles from './AppBar.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={styles.AppBar}>
      <NavLink
        to="/"
        exact
        className={styles.AppBar__Link}
        activeClassName={styles.AppBar__Link_Active}
      >
        Home
      </NavLink>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      {/* <NavLink
        to="/register"
        exact
        className={styles.AppBar__Link}
        activeClassName={styles.AppBar__Link_Active}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={styles.AppBar__Link}
        activeClassName={styles.AppBar__Link_Active}
      >
        Login
      </NavLink> */}

      <NavLink
        to="/contacs"
        exact
        className={styles.AppBar__Link}
        activeClassName={styles.AppBar__Link_Active}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default AppBar;
