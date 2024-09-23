import Image from 'next/image';
import Link from 'next/link';
import styles from './Works.module.css';

const Works = () => {
  return (
    <section className={styles.works} id="works">
      <div className={styles.inner}>
        <h2 className={styles.title}>works</h2>
        <div className={styles.worksList}>
          <Link href="/works/1" className={styles.worksItem}>
            <p className={styles.worksImg}>
              <Image src="/img/works-sample-thumb.jpg" alt="" width={400} height={300} />
            </p>
            <p className={styles.worksName}>作品名が入る</p>
            <p className={styles.worksInfo}>Design / Coding(Responsive)</p>
          </Link>
          <Link href="/works/2" className={styles.worksItem}>
            <p className={styles.worksImg}>
              <Image src="/img/works-dummy-thumb.jpg" alt="" width={400} height={300} />
            </p>
            <p className={styles.worksName}>作品名が入る</p>
            <p className={styles.worksInfo}>Design / Coding(Responsive) / WordPress</p>
          </Link>
          <Link href="/works/3" className={styles.worksItem}>
            <p className={styles.worksImg}>
              <Image src="/img/works-dummy-thumb.jpg" alt="" width={400} height={300} />
            </p>
            <p className={styles.worksName}>作品名が入る</p>
            <p className={styles.worksInfo}>Design</p>
          </Link>
          {/* 他の作品も同様に追加 */}
        </div>
      </div>
    </section>
  );
};

export default Works;
