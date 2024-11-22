import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.gameMenu}>
      <Link href="/world" passHref>
        <button>About</button>
      </Link>
      <Link href="/stats" passHref>
        <button>Skills</button>
      </Link>
      <Link href="/timeline" passHref>
        <button>Timeline</button>
      </Link>
      <Link href="/works" passHref>
        <button>Works</button>
      </Link>
      <Link href="/blog" passHref>
        <button>Blog</button>
      </Link>
      <Link href="/messages" passHref>
        <button>Contact</button>
      </Link>
    </nav>
  );
};

export default Header;
