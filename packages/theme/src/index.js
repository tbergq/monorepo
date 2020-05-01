// @flow strict

const activeBoxShadow = '0 0 0 0.2rem';
const active = {
  backgroundSize: '100%',
  transition: 'background 0s',
};

const defaultTheme = {
  fontFamily: 'Roboto, sans-serif',
  primary: '#007bff',
  secondary: '#6c757d',
  danger: '#dc3545',
  success: '#28a745',
  gray: '#e2e2e2',
  zIndex: {
    default: 1,
    sticky: 100,
  },
  fontSize: {
    small: '12px',
    normal: '14px',
    large: '16px',
  },
  spacing: {
    tiny: '4px',
    small: '8px',
    normal: '12px',
  },
  button: {
    small: {
      fontSize: '12px',
      padding: '8px 16px',
    },
    normal: {
      fontSize: '14px',
      padding: '12px 22px',
    },
    large: {
      fontSize: '16px',
      padding: '14px 26px',
    },
    primary: {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      color: '#fff',
      ':focus': {
        boxShadow: `${activeBoxShadow} rgba(38,143,255,.5)`,
      },
      ':active': {
        ...active,
        backgroundColor: '#6eb9f7',
      },
    },
    secondary: {
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
      color: '#fff',
      ':focus': {
        boxShadow: `${activeBoxShadow} rgba(119,124,129,.5);`,
      },
      ':active': {
        ...active,
        backgroundColor: '#88a1b6',
      },
    },
    danger: {
      backgroundColor: '#dc3545',
      borderColor: '#dc3545',
      color: '#fff',
      ':focus': {
        boxShadow: `${activeBoxShadow} rgba(225,83,97,.5);`,
      },
      ':active': {
        ...active,
        backgroundColor: '#ef707c',
      },
    },
  },
};

export default defaultTheme;

export type DefaultTheme = typeof defaultTheme;
export type ThemeColors = $ReadOnly<{
  backgroundColor: string,
  borderColor: string,
  color: string,
  ':focus': {
    boxShadow: string,
  },
  ':active': {
    backgroundSize: string,
    transition: string,
    backgroundColor: string,
  },
}>;