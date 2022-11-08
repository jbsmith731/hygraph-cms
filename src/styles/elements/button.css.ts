import { sprinkles } from '@styles/sprinkles.css';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('button', {
  border: 'none',
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: 'inherit',
  lineHeight: 'normal',
  fontSmooth: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
});

export const buttonBase = style([
  sprinkles({
    fontFamily: 'primary',
    fontSize: 0,
    fontWeight: 'medium',
    backgroundColor: { initial: 'black', hover: 'charcoal' },
    textAlign: 'center',
    lineHeight: 0,
    color: 'white',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'pill',
    paddingY: 0,
    paddingX: 0,
    transition: 'default',
  }),
  {
    transitionProperty: 'color, background-color',
    textDecoration: 'none',
    minHeight: 48,
    minWidth: 270,
  },
]);
