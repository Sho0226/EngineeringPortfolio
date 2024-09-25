import styles from './Messaging.module.css';

const Messaging = () => {
  return (
    <div className={styles.messaging}>
      <h2>Messaging System</h2>
      <div className={styles.messageList}>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.messageItem}
        >
          <span className={styles.messageIcon}>🐦</span>
          <span className={styles.messagePlatform}>Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.messageItem}
        >
          <span className={styles.messageIcon}>📷</span>
          <span className={styles.messagePlatform}>Instagram</span>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.messageItem}
        >
          <span className={styles.messageIcon}>🐙</span>
          <span className={styles.messagePlatform}>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Messaging;
