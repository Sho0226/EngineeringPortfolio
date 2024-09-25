import Image from 'next/image';
import React from 'react';
import styles from './GameWorld.module.css';

const WorldProfile: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.worldSection}>
        <h1 className={styles.title}>Sho Katsumata`s RPG Portfolio</h1>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.profileImage}>
          <Image src="/img/profile.jpg" alt="Sho Katsumata" width={200} height={200} />
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>Sho Katsumata</h2>
          <p className={styles.profileTitle}>Full-stack Developer</p>
          <p className={styles.profileDescription}>
            A passionate developer with a quest to create amazing web applications. Skilled in
            various programming languages and always eager to learn more. Ready to take on any
            coding challenge that comes my way!
          </p>
        </div>
      </div>
      <div className={styles.pixelCharacter}>
        <Image src="/img/pixel-character.png" alt="Pixel Character" width={64} height={64} />
      </div>
    </div>
  );
};

export default WorldProfile;
