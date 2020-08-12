import React from 'react';

import './App.css';
import { css } from '@emotion/core';
import LoginPage from '../LoginPage';
import LoginBG from '../assets/images/bg-sign-up.jpg';

const containerStyles = css({
  backgroundImage: `url(${LoginBG})`,
  height: '100%',
});

const App = () => (
  <div css={containerStyles}>
    <LoginPage />
  </div>
);

export default App;
