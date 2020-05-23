/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const LaunchButton: React.FunctionComponent<{}> = () => (
  <div
    css={css`
      background-color: #22cc00;
      border-radius: 50%;
      width: 10rem;
      height: 10rem;
      margin: auto;
      position: relative;
    `}
    className="mt-5"
  >
    <div
      css={css`
        margin: auto;
        text-align: center;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
      `}
    >
      Launch
    </div>
  </div>
);

const Home: React.FunctionComponent<{}> = () => (
  <div>
    Home
    <div
      css={css`
        background-color: #dddddd;
      `}
    >
      This should be gray
    </div>
    <LaunchButton />
  </div>
);

export default Home;
