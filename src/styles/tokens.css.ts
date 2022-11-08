import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { createFluidValue } from './createFluidValue';

export const tokenVars = createGlobalThemeContract(
  {
    spaces: {
      none: null,
      // Single
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,

      // Single Steps
      '0-1': null,
      '1-2': null,
      '2-3': null,
      '3-4': null,
    },
    sizes: {
      full: null,
      prose: null,
      screenW: null,
      screenH: null,
    },
    radii: {
      pill: null,
      circle: null,
    },
    fonts: {
      primary: null,
    },
    fontSizes: {
      '-1': null,
      0: null,
      1: null,
      2: null,
    },
    fontWeights: {
      light: null,
      regular: null,
      medium: null,
      bold: null,
    },
    lineHeights: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
    },
    zIndices: {
      init: null,
      nuclear: null,
    },
    transitions: {
      default: null,
    },
  },
  (_, path) => `${path.join('-')}`,
);

createGlobalTheme(':root', tokenVars, {
  spaces: {
    none: '0',
    // Single
    0: createFluidValue(6, 8),
    1: createFluidValue(12, 16),
    2: createFluidValue(16, 24),
    3: createFluidValue(24, 32),
    4: createFluidValue(32, 40),

    // Single Steps
    '0-1': createFluidValue(6, 16),
    '1-2': createFluidValue(12, 24),
    '2-3': createFluidValue(16, 32),
    '3-4': createFluidValue(24, 40),
  },
  sizes: {
    full: '100%',
    prose: '60ch',
    screenW: '100vw',
    screenH: '100vh',
  },
  radii: {
    pill: '999px',
    circle: '50%',
  },
  fonts: {
    primary:
      '"Untitled Sans", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    '-1': createFluidValue(12, 14),
    0: createFluidValue(14, 16),
    1: createFluidValue(16, 18),
    2: createFluidValue(20, 26),
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '600',
    bold: '700',
  },
  lineHeights: {
    0: '1',
    1: '1.1',
    2: '1.25',
    3: '1.33',
    4: '1.5',
  },
  zIndices: {
    init: '0',
    nuclear: '9999',
  },
  transitions: {
    default: '225ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
