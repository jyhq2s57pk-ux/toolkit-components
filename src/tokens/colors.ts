/**
 * Design System Color Tokens
 * These are the source of truth for all colors used in the component library
 */

export const colors = {
  // Background colors
  background: {
    primary: '#000000',
    card: '#191919',
    cardSecondary: '#363636',
    cardHover: 'rgba(255, 255, 255, 0.04)',
    thumbnail: '#c6e6f8',
  },

  // Text colors
  text: {
    primary: '#f7f7f7',
    secondary: '#8f8f8f',
    muted: 'rgba(255, 255, 255, 0.6)',
  },

  // Interactive colors
  interactive: {
    buttonBg: '#000000',
    buttonHoverBg: '#191919',
  },

  // Accent colors (from Figma design)
  accent: {
    green: '#4ade80',
    orange: '#f97316',
    cyan: '#22d3ee',
    pink: '#ec4899',
    yellow: '#facc15',
  },

  // Semantic colors for feedback and status
  semantic: {
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
    info: '#3b82f6',
  },

  // State colors for interactive elements
  states: {
    disabled: 'rgba(255, 255, 255, 0.3)',
    hover: 'rgba(255, 255, 255, 0.04)',
    focus: 'rgba(255, 255, 255, 0.1)',
    active: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

export type ColorToken = typeof colors;
