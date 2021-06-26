import Head from 'next/head';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { pageTitle } from '../content-config';

const Home: React.FC<any> = function ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>TODO: self intro</p>
      </section>
      <section>
        <Link href={`/cv`}>
          <a>CV</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}></section>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
