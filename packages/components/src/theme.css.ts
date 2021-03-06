import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    primary: '#007bff',
    primaryActive: 'rgba(38,143,255,.5)',
    secondary: '#6c757d',
    secondaryActive: 'rgba(119,124,129,.5)',
    danger: '#dc3545',
    dangerActive: 'rgba(225,83,97,.5)',
    success: '#28a745',
    gray: '#e2e2e2',
    white: '#fff',
    black: '#000',
  },
  boxShadow: {
    active: '0 0 0 0.2rem',
  },
  fontFamily: {
    default: 'Roboto, sans-serif',
  },
});
