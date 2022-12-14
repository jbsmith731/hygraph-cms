import { sprinkles } from '@styles/sprinkles.css';
import { GAP } from '@utils/constants/space.constants';
import { recipe } from '@vanilla-extract/recipes';

export const stack = recipe({
  base: [sprinkles({ display: 'grid' })],
  variants: {
    gap: GAP,
    align: {
      start: sprinkles({ alignContent: 'start' }),
      center: sprinkles({ alignContent: 'center' }),
      end: sprinkles({ alignContent: 'end' }),
    },
    justify: {
      left: sprinkles({ justifyContent: 'start' }),
      center: sprinkles({ justifyContent: 'center' }),
      right: sprinkles({ justifyContent: 'end' }),
    },
    orientation: {
      vertical: {
        gridTemplateColumns: '1fr',
      },
      horizontal: {
        gridTemplateRows: '1fr',
        gridAutoFlow: 'column',
      },
    },
    inline: {
      true: sprinkles({ display: 'inline-grid' }),
      false: sprinkles({ width: 'full' }),
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    gap: 0,
    inline: false,
    justify: 'center',
  },
});
