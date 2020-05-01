// @flow

import * as React from 'react';
import { render } from 'react-dom';
import { Heading, Stack } from '@kiwicom/orbit-components';
import 'rc-slider/assets/index.css';

import MediaContainer from './cast/MediaContainer';
import { CastContextProvider } from './cast/CastContext';

const App = () => (
  <CastContextProvider>
    <Stack>
      <Heading>Select media</Heading>
      <MediaContainer />
    </Stack>
  </CastContextProvider>
);

const root = document.getElementById('root');
if (root != null) {
  render(<App />, root);
}
