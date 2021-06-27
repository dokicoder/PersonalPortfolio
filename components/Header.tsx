import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import utilStyles from '../styles/utils.module.scss';

import { name } from '../content-config';

interface IProps {
  home?: boolean;
}

const Header: React.FC<IProps> = ({ home }) => {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/images/profile2.png"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a rel="noopener noreferrer">
              <Image
                priority
                src="/images/profile2.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a rel="noopener noreferrer" className={utilStyles.colorInherit}>
                {name}
              </a>
            </Link>
          </h2>
        </>
      )}
    </header>
  );
};

export default Header;
