import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  fontSize: 16,
  fontFamily: 'var(--fonts-primary)',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

/* https://css-tricks.com/focus-visible-and-backwards-compatibility/ */
globalStyle('*:focus:not(:focus-visible)', {
  outline: 'none !important',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  color: 'inherit',
});

globalStyle('img', {
  maxWidth: '100%',
});

globalStyle('figure', {
  margin: 0,
});

globalStyle('button, a', {
  outline: 'none',
});

globalStyle('button::moz-focus-inner, a::moz-focus-inner', {
  border: 0,
});

globalStyle('button:not(:disabled), a:not(:disabled)', {
  cursor: 'pointer',
});
