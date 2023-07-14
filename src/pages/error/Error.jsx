import styles from './Error.module.css';

export default function Error() {
  return (
    <main>
      <h3 className={styles.errMsg}>
        Sorry, an error occured. Please try again later.
      </h3>
    </main>
  );
}
