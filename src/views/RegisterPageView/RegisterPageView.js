import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterPageView.module.scss';
import RegisterPageImage from './register-page-image.svg';

const RegisterPageView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
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

    dispatch(register(formData));

    formReset();
  };

  const formReset = () => {
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <>
      <h2 className={styles.RegisterPageView__Title}>Please register</h2>

      <img
        src={RegisterPageImage}
        className={styles.RegisterPageView__Image}
        alt="Register page"
      />

      <form className={styles.RegisterPageView__Form} onSubmit={handleSubmit}>
        <label>
          {'Name: '}
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <br />

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

        <button className={styles.RegisterPageView__Button} type="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPageView;
