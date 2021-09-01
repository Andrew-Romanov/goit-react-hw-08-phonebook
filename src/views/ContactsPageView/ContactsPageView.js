import styles from './ContactsPageView.module.scss';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

const ContactsPageView = () => {
  return (
    <div className={styles.ContactsPageView}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPageView;
