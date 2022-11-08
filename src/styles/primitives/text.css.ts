import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';

export const text = recipe({
  base: [sprinkles({ fontFamily: 'primary' })],
  variants: {
    limitX: {
      true: sprinkles({ maxWidth: 'prose' }),
      false: sprinkles({ maxWidth: 'full' }),
    },
    inline: {
      true: {
        display: 'inline',
      },
      false: {
        display: 'block',
      },
    },
    size: {
      '-1': sprinkles({ fontSize: '-1' }),
      0: sprinkles({ fontSize: 0 }),
      1: sprinkles({ fontSize: 1 }),
      2: sprinkles({ fontSize: 2 }),
    },
    color: {
      primary: sprinkles({ color: 'textPrimary' }),
    },
    leading: {
      0: sprinkles({ lineHeight: 0 }),
      1: sprinkles({ lineHeight: 1 }),
      2: sprinkles({ lineHeight: 2 }),
      3: sprinkles({ lineHeight: 3 }),
      4: sprinkles({ lineHeight: 4 }),
    },
    fontStyle: {
      normal: {
        fontStyle: 'normal',
      },
      italic: {
        fontStyle: 'italic',
      },
    },
    weight: {
      light: sprinkles({ fontWeight: 'light' }),
      regular: sprinkles({ fontWeight: 'regular' }),
      medium: sprinkles({ fontWeight: 'medium' }),
      bold: sprinkles({ fontWeight: 'bold' }),
    },
  },
  defaultVariants: {
    inline: false,
    limitX: false,
    size: 0,
    color: 'primary',
    weight: 'regular',
    leading: 2,
    fontStyle: 'normal',
  },
});

export type TextVariants = RecipeVariants<typeof text>;
