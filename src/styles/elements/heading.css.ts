import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';

export const heading = recipe({
  base: [
    sprinkles({
      fontFamily: 'primary',
      fontWeight: 'regular',
      lineHeight: 1,
    }),
  ],
  variants: {
    size: {
      '-1': sprinkles({ fontSize: '-1' }),
      0: sprinkles({ fontSize: 0 }),
      1: sprinkles({ fontSize: 1 }),
      2: sprinkles({ fontSize: 2 }),
    },
    limitX: {
      true: sprinkles({ maxWidth: 'prose' }),
    },
    center: {
      true: sprinkles({ textAlign: 'center', marginX: 'auto' }),
    },
  },
  defaultVariants: {
    size: 2,
  },
});
