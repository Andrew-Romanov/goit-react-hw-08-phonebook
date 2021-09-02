import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';

import { logout } from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.scss';
import UserMenuImage from './user-menu-image.svg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.UserMenu}>
      <img
        src={UserMenuImage}
        className={styles.UserMenu__Image}
        alt={userName}
      />

      <h3 className={styles.UserMenu__Title}>{userName}</h3>

      <button
        className={styles.UserMenu__Button}
        type="button"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
