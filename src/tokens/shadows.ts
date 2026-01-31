/**
 * Design System Shadow Tokens
 * Shadow scale for elevation and depth
 */

export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.3)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.4)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
} as const;

export type ShadowToken = typeof shadows;
