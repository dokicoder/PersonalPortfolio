import Head from 'next/head';
import styles from './layout.module.css';
import { metaTitle, metaDescription } from '../content-config';
import Header from './Header';
import Link from 'next/link';

const Layout: React.FC<any> = function ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/**
         * These tags define how social media links of your page look. I think this is awesome
         */}
        <meta name="og:title" content={metaTitle} />
        <meta name="og:description" content={metaDescription} />
        <meta property="og:url" content="TODO: page url"></meta>
        <meta property="og:image" content="TODO: image url" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header home={home} />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
