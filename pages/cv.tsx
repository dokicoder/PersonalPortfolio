import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { cvPageTitle } from '../content-config';
import { name } from '../content-config';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/cv.module.css';
import Phone from '../public/icons/call.svg';
import Mail from '../public/icons/mail.svg';
import Home from '../public/icons/location.svg';

// pages/404.js
const CurriculumVitae: React.FC = function () {
  return (
    <Layout>
      <Head>
        <title>{cvPageTitle}</title>
      </Head>
      <h1>Kay Illner | CV</h1>
      <div className={styles.cvContainer}>
        <div className={styles.cvInfoBar}>
          <img src="/images/profile.jpg" className={utilStyles.borderCircle} alt={name} />

          <h3 className={styles.divider}>Contact</h3>

          <a href="tel:+41768047708" className={styles.personalDatum}>
            <div className={styles.icon}>
              <Phone />
            </div>
            076 804 77 08
          </a>
          <a href="mailto:kay.illner@gmail.com" className={styles.personalDatum}>
            <div className={styles.icon}>
              <Mail />
            </div>
            kay.illner@gmail.com
          </a>
          <address className={styles.personalDatum}>
            <div className={styles.icon}>
              <Home />
            </div>
            Hobelwerkweg 25
            <br />
            8404 Winterthur (CH)
          </address>
        </div>
        <div className={styles.cvContentContainer}>Content</div>
      </div>
    </Layout>
  );
};

export default CurriculumVitae;
