import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <section className={styles.Section}>
      {title && <h2 className={styles.Section__Title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  title: 'Where is your title?',
  children: <></>,
};

export default Section;
