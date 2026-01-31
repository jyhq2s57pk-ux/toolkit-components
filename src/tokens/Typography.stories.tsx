import type { Meta, StoryObj } from '@storybook/react';
import { typography } from './typography';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const TypeSample: React.FC<{
  size: string;
  sizeValue: string;
  weight?: string;
  weightValue?: string;
  lineHeight?: string;
}> = ({ size, sizeValue, weight = 'normal', weightValue = '400', lineHeight = '1.5' }) => (
  <div style={{ marginBottom: '24px' }}>
    <p
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: sizeValue,
        fontWeight: weightValue,
        lineHeight: lineHeight,
        color: colors.text.primary,
        margin: 0,
      }}
    >
      The quick brown fox jumps over the lazy dog
    </p>
    <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
      <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        {size} ({sizeValue})
      </span>
      <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        {weight} ({weightValue})
      </span>
    </div>
  </div>
);

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div style={{ marginBottom: '48px' }}>
    <h3 style={{
      color: colors.text.primary,
      fontSize: '16px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      marginBottom: '24px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    }}>
      {title}
    </h3>
    {children}
  </div>
);

/**
 * Typography scale showing all font sizes
 */
export const FontSizes: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <Section title="Font Sizes">
        <TypeSample size="3xl" sizeValue={typography.fontSize['3xl']} weight="semibold" weightValue="600" />
        <TypeSample size="2xl" sizeValue={typography.fontSize['2xl']} weight="semibold" weightValue="600" />
        <TypeSample size="xl" sizeValue={typography.fontSize.xl} weight="semibold" weightValue="600" />
        <TypeSample size="lg" sizeValue={typography.fontSize.lg} />
        <TypeSample size="base" sizeValue={typography.fontSize.base} />
        <TypeSample size="sm" sizeValue={typography.fontSize.sm} />
        <TypeSample size="xs" sizeValue={typography.fontSize.xs} />
      </Section>
    </div>
  ),
};

/**
 * Font weights available in the design system
 */
export const FontWeights: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <Section title="Font Weights">
        <TypeSample size="xl" sizeValue={typography.fontSize.xl} weight="bold" weightValue={typography.fontWeight.bold} />
        <TypeSample size="xl" sizeValue={typography.fontSize.xl} weight="semibold" weightValue={typography.fontWeight.semibold} />
        <TypeSample size="xl" sizeValue={typography.fontSize.xl} weight="medium" weightValue={typography.fontWeight.medium} />
        <TypeSample size="xl" sizeValue={typography.fontSize.xl} weight="normal" weightValue={typography.fontWeight.normal} />
      </Section>
    </div>
  ),
};

/**
 * Text color combinations
 */
export const TextColors: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <Section title="Text Colors">
        <div style={{ marginBottom: '24px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.semibold,
            color: colors.text.primary,
            margin: 0,
          }}>
            Primary Text Color
          </p>
          <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
            {colors.text.primary} - Used for headings and important content
          </span>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.normal,
            color: colors.text.secondary,
            margin: 0,
          }}>
            Secondary Text Color
          </p>
          <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
            {colors.text.secondary} - Used for descriptions and supporting text
          </span>
        </div>
      </Section>
    </div>
  ),
};

/**
 * Common text styles used in components
 */
export const ComponentStyles: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <Section title="Component Text Styles">
        <div style={{
          backgroundColor: colors.background.card,
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '16px'
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.semibold,
            lineHeight: '28px',
            color: colors.text.primary,
            margin: 0,
          }}>
            Card Title Style
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.normal,
            lineHeight: '20px',
            color: colors.text.secondary,
            margin: '8px 0 0 0',
          }}>
            Card description text that provides supporting information.
          </p>
          <span style={{
            display: 'block',
            color: '#4ade80',
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
            marginTop: '16px'
          }}>
            Title: xl/semibold • Description: sm/normal
          </span>
        </div>

        <div style={{
          backgroundColor: colors.background.cardSecondary,
          padding: '24px',
          borderRadius: '16px'
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.normal,
            lineHeight: '24px',
            color: colors.text.primary,
            margin: 0,
          }}>
            Navigation Label
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.semibold,
            lineHeight: '28px',
            color: colors.text.primary,
            margin: '0',
          }}>
            Navigation Title
          </p>
          <span style={{
            display: 'block',
            color: '#4ade80',
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
            marginTop: '16px'
          }}>
            Label: base/normal • Title: xl/semibold
          </span>
        </div>
      </Section>
    </div>
  ),
};
