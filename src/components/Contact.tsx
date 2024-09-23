import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.title}>contact</h2>
        <p className={styles.lead}>
          お問い合わせは、
          <br className={styles.spOnly} />
          SNSかメールにてお願いいたします。
        </p>
        <div className={styles.contactList}>
          <a
            className={styles.contactItem}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className={styles.contactItem}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span className={styles.contactItem}>xxxxxx@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
