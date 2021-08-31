import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <>
      <NavLink
        to="/register"
        exact
        className={styles.AuthNav__Link}
        activeClassName={styles.AuthNav__Link_Active}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={styles.AuthNav__Link}
        activeClassName={styles.AuthNav__Link_Active}
      >
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
