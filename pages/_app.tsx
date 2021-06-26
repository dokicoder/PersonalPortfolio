import React from 'react';
import type { AppProps } from 'next/app';
import '@fontsource/montserrat';
import '../styles/global.scss';

const App: React.FC<AppProps> = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default App;
