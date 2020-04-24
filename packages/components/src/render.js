// @flow

import * as React from 'react';
import {
  render,
  type RenderOptionsWithoutCustomQueries,
  type RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './defaultTheme';

function testRenderer(
  ui: React.Element<any>,
  options?: RenderOptionsWithoutCustomQueries,
): RenderResult<> {
  return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>, options);
}

export default testRenderer;