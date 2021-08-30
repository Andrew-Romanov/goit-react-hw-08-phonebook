import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';
import styles from './LoginPageView.module.scss';
import LoginPageImage from './login-page-image.svg';

const LoginPageView = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // if (
    //   store.getState().contacts.items.some(item => item.name === contact.name)
    // )
    //   return alert(`${contact.name} is already in contacts`);

    dispatch(login(formData));

    formReset();
  };

  const formReset = () => {
    setFormData({ email: '', password: '' });
  };

  return (
    <>
      <h2 className={styles.LoginPageView__Title}>Please login</h2>

      <img
        src={LoginPageImage}
        className={styles.LoginPageView__Image}
        alt="Login page"
      />

      <form className={styles.LoginPageView__Form} onSubmit={handleSubmit}>
        <label>
          {'Email: '}
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          {'Password: '}
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <br />

        <button className={styles.LoginPageView__Button} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPageView;
