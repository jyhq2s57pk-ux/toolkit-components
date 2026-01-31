import type { Meta, StoryObj } from '@storybook/react';
import { spacing, borderRadius } from './spacing';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Spacing',
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

const SpacingBlock: React.FC<{
  name: string;
  value: string;
  pixels: string;
}> = ({ name, value, pixels }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
    <div
      style={{
        width: value,
        height: '32px',
        backgroundColor: colors.accent.cyan,
        borderRadius: '4px',
        minWidth: '4px',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '120px' }}>
      <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
        {name}
      </span>
      <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        {value} ({pixels})
      </span>
    </div>
  </div>
);

const RadiusExample: React.FC<{
  name: string;
  value: string;
  pixels: string;
}> = ({ name, value, pixels }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
    <div
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: colors.background.cardSecondary,
        borderRadius: value,
        border: `2px solid ${colors.accent.cyan}`,
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
        {name}
      </span>
      <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        {pixels}
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
 * Complete spacing scale used throughout the design system
 */
export const SpacingScale: Story = {
  render: () => (
    <div style={{ padding: '40px', minWidth: '400px' }}>
      <Section title="Spacing Scale">
        <SpacingBlock name="0" value={spacing[0]} pixels="0px" />
        <SpacingBlock name="1" value={spacing[1]} pixels="4px" />
        <SpacingBlock name="2" value={spacing[2]} pixels="8px" />
        <SpacingBlock name="3" value={spacing[3]} pixels="12px" />
        <SpacingBlock name="4" value={spacing[4]} pixels="16px" />
        <SpacingBlock name="5" value={spacing[5]} pixels="20px" />
        <SpacingBlock name="6" value={spacing[6]} pixels="24px" />
        <SpacingBlock name="8" value={spacing[8]} pixels="32px" />
        <SpacingBlock name="10" value={spacing[10]} pixels="40px" />
        <SpacingBlock name="12" value={spacing[12]} pixels="48px" />
        <SpacingBlock name="16" value={spacing[16]} pixels="64px" />
      </Section>
    </div>
  ),
};

/**
 * Border radius scale for rounded corners
 */
export const BorderRadiusScale: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Border Radius">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <RadiusExample name="none" value={borderRadius.none} pixels="0px" />
          <RadiusExample name="sm" value={borderRadius.sm} pixels="4px" />
          <RadiusExample name="md" value={borderRadius.md} pixels="8px" />
          <RadiusExample name="lg" value={borderRadius.lg} pixels="16px" />
          <RadiusExample name="xl" value={borderRadius.xl} pixels="24px" />
          <RadiusExample name="full" value={borderRadius.full} pixels="9999px" />
        </div>
      </Section>
    </div>
  ),
};

/**
 * Common gap patterns used between elements
 */
export const GapPatterns: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Gap Patterns">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Tight gap */}
          <div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif', marginBottom: '8px', display: 'block' }}>
              gap-1 (4px) - Tight spacing
            </span>
            <div style={{ display: 'flex', gap: spacing[1] }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: '40px', height: '40px', backgroundColor: colors.accent.green, borderRadius: '8px' }} />
              ))}
            </div>
          </div>

          {/* Default gap */}
          <div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif', marginBottom: '8px', display: 'block' }}>
              gap-2 (8px) - Default spacing
            </span>
            <div style={{ display: 'flex', gap: spacing[2] }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: '40px', height: '40px', backgroundColor: colors.accent.orange, borderRadius: '8px' }} />
              ))}
            </div>
          </div>

          {/* Comfortable gap */}
          <div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif', marginBottom: '8px', display: 'block' }}>
              gap-4 (16px) - Comfortable spacing
            </span>
            <div style={{ display: 'flex', gap: spacing[4] }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: '40px', height: '40px', backgroundColor: colors.accent.cyan, borderRadius: '8px' }} />
              ))}
            </div>
          </div>

          {/* Spacious gap */}
          <div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif', marginBottom: '8px', display: 'block' }}>
              gap-6 (24px) - Spacious
            </span>
            <div style={{ display: 'flex', gap: spacing[6] }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: '40px', height: '40px', backgroundColor: colors.accent.pink, borderRadius: '8px' }} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  ),
};

/**
 * Padding examples showing inner spacing
 */
export const PaddingExamples: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Padding Examples">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {/* Small padding */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              padding: spacing[2],
              backgroundColor: colors.background.card,
              borderRadius: '8px',
              border: `1px dashed ${colors.text.secondary}`,
            }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: colors.accent.cyan, borderRadius: '4px' }} />
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              p-2 (8px)
            </span>
          </div>

          {/* Medium padding */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              padding: spacing[4],
              backgroundColor: colors.background.card,
              borderRadius: '8px',
              border: `1px dashed ${colors.text.secondary}`,
            }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: colors.accent.orange, borderRadius: '4px' }} />
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              p-4 (16px)
            </span>
          </div>

          {/* Large padding */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              padding: spacing[6],
              backgroundColor: colors.background.card,
              borderRadius: '8px',
              border: `1px dashed ${colors.text.secondary}`,
            }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: colors.accent.green, borderRadius: '4px' }} />
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              p-6 (24px)
            </span>
          </div>
        </div>
      </Section>
    </div>
  ),
};

/**
 * All spacing tokens displayed together
 */
export const AllSpacing: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <Section title="Spacing Scale">
        <SpacingBlock name="0" value={spacing[0]} pixels="0px" />
        <SpacingBlock name="1" value={spacing[1]} pixels="4px" />
        <SpacingBlock name="2" value={spacing[2]} pixels="8px" />
        <SpacingBlock name="3" value={spacing[3]} pixels="12px" />
        <SpacingBlock name="4" value={spacing[4]} pixels="16px" />
        <SpacingBlock name="5" value={spacing[5]} pixels="20px" />
        <SpacingBlock name="6" value={spacing[6]} pixels="24px" />
        <SpacingBlock name="8" value={spacing[8]} pixels="32px" />
        <SpacingBlock name="10" value={spacing[10]} pixels="40px" />
        <SpacingBlock name="12" value={spacing[12]} pixels="48px" />
        <SpacingBlock name="16" value={spacing[16]} pixels="64px" />
      </Section>

      <Section title="Border Radius">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <RadiusExample name="none" value={borderRadius.none} pixels="0px" />
          <RadiusExample name="sm" value={borderRadius.sm} pixels="4px" />
          <RadiusExample name="md" value={borderRadius.md} pixels="8px" />
          <RadiusExample name="lg" value={borderRadius.lg} pixels="16px" />
          <RadiusExample name="xl" value={borderRadius.xl} pixels="24px" />
          <RadiusExample name="full" value={borderRadius.full} pixels="9999px" />
        </div>
      </Section>
    </div>
  ),
};
