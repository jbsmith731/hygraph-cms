import {
  createMapValueFn,
  createSprinkles,
  defineProperties,
  type ConditionalValue,
} from '@vanilla-extract/sprinkles';
import { themeVars } from './theme.css';
import { tokenVars } from './tokens.css';

const spacesWithAuto = { ...tokenVars.spaces, auto: 'auto' };

const responsiveProperties = defineProperties({
  conditions: {
    initial: {},
    bp1: { '@media': '(width >= 520px)' },
    '<bp1': { '@media': '(width < 519px)' },
    bp2: { '@media': '(width >= 768px)' },
    '<bp2': { '@media': '(width < 767px)' },
    bp3: { '@media': '(width >= 1040px)' },
    '<bp3': { '@media': '(width < 1039px)' },
    bp4: { '@media': '(width >= 1800px)' },
    '<bp4': { '@media': '(width < 1799px)' },
  },
  properties: {
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    display: [
      'none',
      'flex',
      'grid',
      'block',
      'inline',
      'inline-block',
      'inline-grid',
      'inline-flex',
    ],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyItems: ['start', 'end', 'center', 'stretch'],
    justifyContent: [
      'stretch',
      'flex-start',
      'start',
      'center',
      'flex-end',
      'end',
      'space-around',
      'space-between',
    ],
    alignItems: [
      'baseline',
      'stretch',
      'start',
      'end',
      'flex-start',
      'center',
      'flex-end',
    ],
    alignContent: ['start', 'end', 'center'],
    padding: tokenVars.spaces,
    paddingTop: tokenVars.spaces,
    paddingBottom: tokenVars.spaces,
    paddingLeft: tokenVars.spaces,
    paddingRight: tokenVars.spaces,
    margin: spacesWithAuto,
    marginTop: spacesWithAuto,
    marginBottom: spacesWithAuto,
    marginLeft: spacesWithAuto,
    marginRight: spacesWithAuto,
    gap: tokenVars.spaces,
    columnGap: tokenVars.spaces,
    rowGap: tokenVars.spaces,
    height: tokenVars.sizes,
    width: tokenVars.sizes,
    maxHeight: tokenVars.sizes,
    maxWidth: tokenVars.sizes,
    minHeight: tokenVars.sizes,
    minWidth: tokenVars.sizes,
    fontSize: tokenVars.fontSizes,
    textAlign: ['left', 'center', 'right'],
  },
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
  defaultCondition: 'initial',
});

const nonResponsiveProperties = defineProperties({
  properties: {
    borderRadius: tokenVars.radii,
    zIndex: tokenVars.zIndices,
    lineHeight: tokenVars.lineHeights,
    fontWeight: tokenVars.fontWeights,
    transition: tokenVars.transitions,
    fontFamily: tokenVars.fonts,
    flexWrap: ['wrap', 'nowrap'],
    top: tokenVars.spaces,
    bottom: tokenVars.spaces,
    left: tokenVars.spaces,
    right: tokenVars.spaces,
    shorthands: {
      inset: ['top', 'bottom', 'left', 'right'],
    },
  },
});

const interactiveProperties = defineProperties({
  defaultCondition: 'initial',
  conditions: {
    initial: {},
    hover: { selector: '&:hover' },
  },
  properties: {
    color: themeVars.colors,
    backgroundColor: themeVars.colors,
    border: { true: `1px solid ${themeVars.colors.border}` },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  nonResponsiveProperties,
  interactiveProperties,
);

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export type ResponsiveValue<TValue extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  TValue
>;

export type Sprinkles = Parameters<typeof sprinkles>[0];
