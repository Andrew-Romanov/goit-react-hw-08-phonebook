// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';

import { logout } from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.scss';
import UserMenuImage from './user-menu-image.svg';

const UserMenu = () => {
  // const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  // };

  const handleClick = () => {
    // event.preventDefault();

    // if (
    //   store.getState().contacts.items.some(item => item.name === contact.name)
    // )
    //   return alert(`${contact.name} is already in contacts`);

    dispatch(logout());
    // dispatch(logout(formData));
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
