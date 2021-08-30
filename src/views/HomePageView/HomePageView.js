import styles from './HomePageView.module.scss';
import HomePageImage from './home-page-image.svg';

const HomePageView = () => {
  return (
    <>
      <h2 className={styles.HomePageView__Title}>
        Welcome to the
        <br />
        Phonebook!
      </h2>
      <img
        src={HomePageImage}
        className={styles.HomePageView__Image}
        alt="Home page"
      />
    </>
  );
};

export default HomePageView;
