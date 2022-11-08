import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const root = style([
  sprinkles({
    fontFamily: 'primary',
    color: { initial: 'action', hover: 'actionHover' },
    transition: 'default',
  }),
  {
    transitionProperty: 'color',
  },
]);
