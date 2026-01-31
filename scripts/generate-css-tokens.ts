/**
 * Script to generate CSS custom properties from TypeScript tokens
 *
 * Run with: npm run generate:tokens
 */

import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { generateCSSVariables } from '../src/tokens/css-variables';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputPath = join(__dirname, '../src/styles/tokens.css');

const cssContent = `/**
 * Toolkit Components - Design Token CSS Custom Properties
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run \`npm run generate:tokens\` to regenerate from TypeScript tokens.
 *
 * Usage: var(--tk-color-bg-primary)
 */

${generateCSSVariables()}
`;

writeFileSync(outputPath, cssContent);
console.log('✓ Generated CSS tokens at src/styles/tokens.css');
