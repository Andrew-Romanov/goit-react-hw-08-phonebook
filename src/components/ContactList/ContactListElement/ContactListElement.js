import PropTypes from 'prop-types';
import styles from './ContactListElement.module.scss';

const ContactListElement = ({ name, number, whenDelete }) => {
  return (
    <>
      <p className={styles.ContactListElement__Text}>
        {name}: {number}
      </p>
      <button
        className={styles.ContactListElement__Button}
        type="button"
        onClick={whenDelete}
      >
        Delete
      </button>
    </>
  );
};

ContactListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  whenDelete: PropTypes.func.isRequired,
};

export default ContactListElement;
