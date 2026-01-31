/**
 * CSS Custom Properties Generator
 *
 * Generates CSS custom properties from all design tokens.
 * Can be used for SSR or to create static CSS files.
 */

import { colors } from './colors';
import { spacing, borderRadius } from './spacing';
import { typography } from './typography';
import { shadows } from './shadows';
import { animation } from './animation';
import { borders } from './borders';
import { zIndex } from './zIndex';
import { breakpoints } from './breakpoints';

/**
 * Generates CSS custom properties string from all tokens
 */
export function generateCSSVariables(): string {
  const lines: string[] = [':root {'];

  // Colors - Background
  lines.push('  /* Background Colors */');
  lines.push(`  --tk-color-bg-primary: ${colors.background.primary};`);
  lines.push(`  --tk-color-bg-card: ${colors.background.card};`);
  lines.push(`  --tk-color-bg-card-secondary: ${colors.background.cardSecondary};`);
  lines.push(`  --tk-color-bg-card-hover: ${colors.background.cardHover};`);
  lines.push(`  --tk-color-bg-thumbnail: ${colors.background.thumbnail};`);
  lines.push('');

  // Colors - Text
  lines.push('  /* Text Colors */');
  lines.push(`  --tk-color-text-primary: ${colors.text.primary};`);
  lines.push(`  --tk-color-text-secondary: ${colors.text.secondary};`);
  lines.push(`  --tk-color-text-muted: ${colors.text.muted};`);
  lines.push('');

  // Colors - Interactive
  lines.push('  /* Interactive Colors */');
  lines.push(`  --tk-color-button-bg: ${colors.interactive.buttonBg};`);
  lines.push(`  --tk-color-button-hover-bg: ${colors.interactive.buttonHoverBg};`);
  lines.push('');

  // Colors - Accent
  lines.push('  /* Accent Colors */');
  Object.entries(colors.accent).forEach(([key, value]) => {
    lines.push(`  --tk-color-accent-${key}: ${value};`);
  });
  lines.push('');

  // Colors - Semantic
  lines.push('  /* Semantic Colors */');
  Object.entries(colors.semantic).forEach(([key, value]) => {
    lines.push(`  --tk-color-${key}: ${value};`);
  });
  lines.push('');

  // Colors - States
  lines.push('  /* State Colors */');
  Object.entries(colors.states).forEach(([key, value]) => {
    lines.push(`  --tk-color-state-${key}: ${value};`);
  });
  lines.push('');

  // Spacing
  lines.push('  /* Spacing */');
  Object.entries(spacing).forEach(([key, value]) => {
    lines.push(`  --tk-space-${key}: ${value};`);
  });
  lines.push('');

  // Border Radius
  lines.push('  /* Border Radius */');
  Object.entries(borderRadius).forEach(([key, value]) => {
    lines.push(`  --tk-radius-${key}: ${value};`);
  });
  lines.push('');

  // Typography
  lines.push('  /* Typography - Font Family */');
  lines.push(`  --tk-font-sans: ${typography.fontFamily.sans.join(', ')};`);
  lines.push('');

  lines.push('  /* Typography - Font Size */');
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    lines.push(`  --tk-text-${key}: ${value};`);
  });
  lines.push('');

  lines.push('  /* Typography - Font Weight */');
  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    lines.push(`  --tk-font-${key}: ${value};`);
  });
  lines.push('');

  lines.push('  /* Typography - Line Height */');
  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    lines.push(`  --tk-leading-${key}: ${value};`);
  });
  lines.push('');

  // Shadows
  lines.push('  /* Shadows */');
  Object.entries(shadows).forEach(([key, value]) => {
    lines.push(`  --tk-shadow-${key}: ${value};`);
  });
  lines.push('');

  // Animation - Duration
  lines.push('  /* Animation Duration */');
  Object.entries(animation.duration).forEach(([key, value]) => {
    lines.push(`  --tk-duration-${key}: ${value};`);
  });
  lines.push('');

  // Animation - Easing
  lines.push('  /* Animation Easing */');
  Object.entries(animation.easing).forEach(([key, value]) => {
    lines.push(`  --tk-ease-${key}: ${value};`);
  });
  lines.push('');

  // Borders - Width
  lines.push('  /* Border Width */');
  Object.entries(borders.width).forEach(([key, value]) => {
    lines.push(`  --tk-border-${key}: ${value};`);
  });
  lines.push('');

  // Z-Index
  lines.push('  /* Z-Index */');
  Object.entries(zIndex).forEach(([key, value]) => {
    lines.push(`  --tk-z-${key}: ${value};`);
  });
  lines.push('');

  // Breakpoints
  lines.push('  /* Breakpoints */');
  Object.entries(breakpoints).forEach(([key, value]) => {
    lines.push(`  --tk-screen-${key}: ${value};`);
  });

  lines.push('}');

  return lines.join('\n');
}

/**
 * Get all CSS variables as an object for inline styles
 */
export function getCSSVariablesObject(): Record<string, string> {
  const vars: Record<string, string> = {};

  // Colors - Background
  vars['--tk-color-bg-primary'] = colors.background.primary;
  vars['--tk-color-bg-card'] = colors.background.card;
  vars['--tk-color-bg-card-secondary'] = colors.background.cardSecondary;
  vars['--tk-color-bg-card-hover'] = colors.background.cardHover;
  vars['--tk-color-bg-thumbnail'] = colors.background.thumbnail;

  // Colors - Text
  vars['--tk-color-text-primary'] = colors.text.primary;
  vars['--tk-color-text-secondary'] = colors.text.secondary;
  vars['--tk-color-text-muted'] = colors.text.muted;

  // Colors - Interactive
  vars['--tk-color-button-bg'] = colors.interactive.buttonBg;
  vars['--tk-color-button-hover-bg'] = colors.interactive.buttonHoverBg;

  // Colors - Accent
  Object.entries(colors.accent).forEach(([key, value]) => {
    vars[`--tk-color-accent-${key}`] = value;
  });

  // Colors - Semantic
  Object.entries(colors.semantic).forEach(([key, value]) => {
    vars[`--tk-color-${key}`] = value;
  });

  // Colors - States
  Object.entries(colors.states).forEach(([key, value]) => {
    vars[`--tk-color-state-${key}`] = value;
  });

  // Spacing
  Object.entries(spacing).forEach(([key, value]) => {
    vars[`--tk-space-${key}`] = value;
  });

  // Border Radius
  Object.entries(borderRadius).forEach(([key, value]) => {
    vars[`--tk-radius-${key}`] = value;
  });

  // Typography
  vars['--tk-font-sans'] = typography.fontFamily.sans.join(', ');
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    vars[`--tk-text-${key}`] = value;
  });
  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    vars[`--tk-font-${key}`] = value;
  });
  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    vars[`--tk-leading-${key}`] = value;
  });

  // Shadows
  Object.entries(shadows).forEach(([key, value]) => {
    vars[`--tk-shadow-${key}`] = value;
  });

  // Animation
  Object.entries(animation.duration).forEach(([key, value]) => {
    vars[`--tk-duration-${key}`] = value;
  });
  Object.entries(animation.easing).forEach(([key, value]) => {
    vars[`--tk-ease-${key}`] = value;
  });

  // Borders
  Object.entries(borders.width).forEach(([key, value]) => {
    vars[`--tk-border-${key}`] = value;
  });

  // Z-Index
  Object.entries(zIndex).forEach(([key, value]) => {
    vars[`--tk-z-${key}`] = String(value);
  });

  // Breakpoints
  Object.entries(breakpoints).forEach(([key, value]) => {
    vars[`--tk-screen-${key}`] = value;
  });

  return vars;
}
