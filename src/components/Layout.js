import React from 'react';

import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
        <Header />
        { children }
        <Footer />
    </div>
);

