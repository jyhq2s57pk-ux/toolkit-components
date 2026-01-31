import type { Meta, StoryObj } from '@storybook/react';
import { shadows } from './shadows';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Shadows',
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

const ShadowCard: React.FC<{
  name: string;
  value: string;
}> = ({ name, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
    <div
      style={{
        width: '160px',
        height: '100px',
        backgroundColor: colors.background.card,
        borderRadius: '16px',
        boxShadow: value,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        Card
      </span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
        {name}
      </span>
      <span style={{ color: colors.text.secondary, fontSize: '11px', fontFamily: 'Inter, monospace', maxWidth: '160px', textAlign: 'center', wordBreak: 'break-all' }}>
        {value}
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
 * All shadow tokens in the design system
 */
export const AllShadows: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Shadow Scale">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <ShadowCard name="none" value={shadows.none} />
          <ShadowCard name="sm" value={shadows.sm} />
          <ShadowCard name="md" value={shadows.md} />
          <ShadowCard name="lg" value={shadows.lg} />
          <ShadowCard name="xl" value={shadows.xl} />
          <ShadowCard name="2xl" value={shadows['2xl']} />
        </div>
      </Section>

      <Section title="Inner Shadow">
        <div style={{ display: 'flex', gap: '32px' }}>
          <ShadowCard name="inner" value={shadows.inner} />
        </div>
      </Section>
    </div>
  ),
};

/**
 * Shadow elevation comparison
 */
export const ElevationLevels: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Elevation Levels">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.background.card,
                borderRadius: '12px',
                boxShadow: shadows.none,
              }}
            />
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Level 0
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.background.card,
                borderRadius: '12px',
                boxShadow: shadows.sm,
              }}
            />
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Level 1
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.background.card,
                borderRadius: '12px',
                boxShadow: shadows.md,
              }}
            />
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Level 2
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.background.card,
                borderRadius: '12px',
                boxShadow: shadows.lg,
              }}
            />
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Level 3
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.background.card,
                borderRadius: '12px',
                boxShadow: shadows.xl,
              }}
            />
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Level 4
            </span>
          </div>
        </div>
      </Section>
    </div>
  ),
};

/**
 * Shadow usage examples
 */
export const UsageExamples: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Usage Examples">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Button shadow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: colors.text.primary,
                color: colors.background.primary,
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: shadows.md,
              }}
            >
              Button
            </button>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              shadow-md
            </span>
          </div>

          {/* Card shadow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '200px',
                padding: '20px',
                backgroundColor: colors.background.card,
                borderRadius: '16px',
                boxShadow: shadows.lg,
              }}
            >
              <p style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: 0 }}>
                Card Title
              </p>
              <p style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0' }}>
                Card description text
              </p>
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              shadow-lg
            </span>
          </div>

          {/* Modal shadow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '240px',
                padding: '24px',
                backgroundColor: colors.background.cardSecondary,
                borderRadius: '16px',
                boxShadow: shadows['2xl'],
              }}
            >
              <p style={{ color: colors.text.primary, fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: 0 }}>
                Modal Title
              </p>
              <p style={{ color: colors.text.secondary, fontSize: '14px', fontFamily: 'Inter, sans-serif', margin: '8px 0 0 0' }}>
                Modal content goes here with more detail.
              </p>
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              shadow-2xl
            </span>
          </div>
        </div>
      </Section>
    </div>
  ),
};
