import Head from 'next/head';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>TODO remove: Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
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
