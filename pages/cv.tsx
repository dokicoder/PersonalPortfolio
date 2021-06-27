import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import * as contentConfig from '../content-config';
import { name } from '../content-config';
import utilStyles from '../styles/utils.module.scss';
import styles from './cv.module.scss';
import Phone from '../public/icons/call.svg';
import Mail from '../public/icons/mail.svg';
import Home from '../public/icons/location.svg';
import CHflag from '../public/icons/ch.svg';
import DEflag from '../public/icons/de.svg';
import UKflag from '../public/icons/gb.svg';
import USflag from '../public/icons/us.svg';
import Timeline from './../components/cv/timeline';

// pages/404.js
const CurriculumVitae: React.FC = function () {
  return (
    <Layout>
      <Head>
        <title>{contentConfig.cvPageTitle}</title>
      </Head>
      <h1>{contentConfig.cvPageTitle}</h1>
      <div className={styles.cvContainer}>
        <div className={styles.cvInfoBar}>
          <img src="/images/profile.jpg" className={utilStyles.borderCircle} alt={name} />
          <h3 className={styles.divider}>Contact</h3>
          <a href={contentConfig.phoneUrl} className={styles.personalDatum}>
            <div className={styles.icon}>
              <Phone />
            </div>
            {contentConfig.phoneFormatted}
          </a>
          <a href="mailto:kay.illner@gmail.com" className={styles.personalDatum}>
            <div className={styles.icon}>
              <Mail />
            </div>
            {contentConfig.mail}
          </a>
          <address className={styles.personalDatum}>
            <div className={styles.icon}>
              <Home />
            </div>
            {contentConfig.adressStreet}
            <br />
            {contentConfig.adressPostalCounty}
          </address>
          <h3 className={styles.divider}>Skills</h3>
          <h4>Languages</h4>
          <div className={styles.languageSkillsGerman}>
            <DEflag width={35} /> <CHflag width={23} />
          </div>
          fluent (native speaker)
          <div className={styles.languageSkillsEnglish}>
            <USflag width={35} /> <UKflag width={38} />
          </div>
          fluent
          <h4 className={styles.divider}>It / Software</h4>
        </div>
        <div className={styles.cvContentContainer}>
          <Timeline />
        </div>
      </div>
    </Layout>
  );
};

export default CurriculumVitae;
