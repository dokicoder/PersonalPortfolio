import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

// pages/404.js
const Page404: React.FC = function () {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </Layout>
  );
};

export default Page404;
