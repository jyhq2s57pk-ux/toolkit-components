/**
 * Design System Border Tokens
 * Border widths and styles for consistent edges
 */

export const borders = {
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
    thick: '4px',
  },

  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
} as const;

export type BorderToken = typeof borders;
