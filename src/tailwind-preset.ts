/**
 * Toolkit Components Tailwind Preset
 *
 * Use this preset in your tailwind.config.js:
 *
 * import toolkitPreset from '@jyhq2s57pk-ux/toolkit-components/tailwind-preset';
 *
 * export default {
 *   presets: [toolkitPreset],
 *   // ... your config
 * }
 */

import type { Config } from 'tailwindcss';

const toolkitPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Background colors
        'tk-bg-primary': '#000000',
        'tk-bg-card': '#191919',
        'tk-bg-card-hover': 'rgba(255, 255, 255, 0.04)',
        'tk-bg-thumbnail': '#c6e6f8',

        // Text colors
        'tk-text-primary': '#f7f7f7',
        'tk-text-secondary': '#8f8f8f',
        'tk-text-muted': 'rgba(255, 255, 255, 0.6)',

        // Interactive colors
        'tk-button-bg': '#000000',
        'tk-button-hover': '#191919',

        // Legacy aliases (for backwards compatibility)
        'card-bg': '#191919',
        'card-text': '#f7f7f7',
        'card-description': '#8f8f8f',
        'card-thumbnail': '#c6e6f8',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'tk-card': '1rem',
        'tk-button': '1.5rem',
      },
    },
  },
};

export default toolkitPreset;
