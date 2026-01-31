/**
 * Design System Breakpoint Tokens
 *
 * Responsive breakpoints for media queries.
 * Uses mobile-first approach (min-width).
 */

export const breakpoints = {
  /** Small devices (phones) - 640px */
  sm: '640px',
  /** Medium devices (tablets) - 768px */
  md: '768px',
  /** Large devices (laptops) - 1024px */
  lg: '1024px',
  /** Extra large devices (desktops) - 1280px */
  xl: '1280px',
  /** 2X large devices (large desktops) - 1536px */
  '2xl': '1536px',
} as const;

/** Numeric breakpoint values in pixels */
export const breakpointValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Media query helper functions
 */
export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const;

export type BreakpointToken = typeof breakpoints;
export type BreakpointKey = keyof typeof breakpoints;
