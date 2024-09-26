import styles from './Contact.module.css';

const Messaging = () => {
  return (
    <div className={styles.messaging}>
      <h2>Contact System</h2>
      <div className={styles.messageList}>
        <a
          href="https://twitter.com/sho_26_ts"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.messageItem}
        >
          <span className={styles.messageIcon}>🐦</span>
          <span className={styles.messagePlatform}>Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/sho__nii?igsh=MWR2OGJ2Y3VnejdwZg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.messageItem}
        >
          <span className={styles.messageIcon}>📷</span>
          <span className={styles.messagePlatform}>Instagram</span>
        </a>
        <a
          href="https://github.com/Sho0226"
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
