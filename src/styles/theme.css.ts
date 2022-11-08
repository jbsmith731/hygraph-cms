import { colors } from '@utils/constants/colors.constants';
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const themeVars = createGlobalThemeContract(
  {
    colors: {
      white: null,
      black: null,
      charcoal: null,
      graphite: null,
      uiBackground: null,
      textPrimary: null,
      action: null,
      actionHover: null,
      border: null,
    },
  },
  (_, path) => `${path.join('-')}`,
);

createGlobalTheme(':root', themeVars, {
  colors: {
    white: colors.white,
    black: colors.black,
    charcoal: colors.charcoal,
    graphite: colors.graphite,

    uiBackground: colors.white,
    textPrimary: colors.black,
    action: colors.charcoal,
    actionHover: colors.graphite,
    border: colors.charcoal,
  },
});
