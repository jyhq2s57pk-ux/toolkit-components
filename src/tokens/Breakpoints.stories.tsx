import type { Meta, StoryObj } from '@storybook/react';
import { breakpoints, breakpointValues, mediaQueries } from './breakpoints';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Breakpoints',
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

const breakpointColors: Record<string, string> = {
  sm: colors.accent.cyan,
  md: colors.accent.green,
  lg: colors.accent.orange,
  xl: colors.accent.pink,
  '2xl': '#a855f7',
};

const breakpointDescriptions: Record<string, string> = {
  sm: 'Phones (landscape)',
  md: 'Tablets',
  lg: 'Laptops',
  xl: 'Desktops',
  '2xl': 'Large desktops',
};

/**
 * Visual breakpoint scale
 */
export const BreakpointScale: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Breakpoint Scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Object.entries(breakpoints).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: `${breakpointValues[key as keyof typeof breakpointValues] / 10}px`,
                  maxWidth: '100%',
                  height: '40px',
                  backgroundColor: breakpointColors[key],
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '12px',
                  minWidth: '64px',
                }}
              >
                <span style={{ color: '#000', fontSize: '12px', fontWeight: 600 }}>
                  {value}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  {key}
                </span>
                <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                  {breakpointDescriptions[key]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};

/**
 * Device previews at different breakpoints
 */
export const DevicePreviews: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Device Previews">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {/* Mobile */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '60px',
                height: '100px',
                backgroundColor: colors.background.card,
                border: `2px solid ${colors.text.secondary}`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: colors.text.secondary, fontSize: '10px' }}>{'<'}sm</span>
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Mobile
            </span>
          </div>

          {/* Tablet */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '80px',
                height: '110px',
                backgroundColor: colors.background.card,
                border: `2px solid ${colors.accent.green}`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: colors.accent.green, fontSize: '10px' }}>md</span>
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Tablet
            </span>
          </div>

          {/* Laptop */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: colors.background.card,
                border: `2px solid ${colors.accent.orange}`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: colors.accent.orange, fontSize: '10px' }}>lg</span>
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Laptop
            </span>
          </div>

          {/* Desktop */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '160px',
                height: '100px',
                backgroundColor: colors.background.card,
                border: `2px solid ${colors.accent.pink}`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: colors.accent.pink, fontSize: '10px' }}>xl</span>
            </div>
            <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              Desktop
            </span>
          </div>
        </div>
      </Section>
    </div>
  ),
};

/**
 * Token reference with code examples
 */
export const TokenReference: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Breakpoint Tokens">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
          marginBottom: '24px',
        }}>
          {Object.entries(breakpoints).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>breakpoints.</span>
              <span style={{ color: colors.text.primary }}>{key}</span>
              <span style={{ color: colors.text.secondary }}> = </span>
              <span style={{ color: colors.accent.green }}>'{value}'</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Media Query Helpers">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
        }}>
          {Object.entries(mediaQueries).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>mediaQueries.</span>
              <span style={{ color: colors.text.primary }}>{key}</span>
              <span style={{ color: colors.text.secondary }}> = </span>
              <span style={{ color: colors.accent.orange }}>'{value}'</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Usage Example">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
          fontSize: '13px',
          lineHeight: '1.6',
        }}>
          <div style={{ color: colors.text.secondary, marginBottom: '8px' }}>
            {'// CSS-in-JS usage'}
          </div>
          <div>
            <span style={{ color: colors.accent.pink }}>const</span>
            <span style={{ color: colors.text.primary }}> styles</span>
            <span style={{ color: colors.text.secondary }}> = </span>
            <span style={{ color: colors.text.primary }}>{'{'}</span>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <span style={{ color: colors.accent.cyan }}>[mediaQueries.md]</span>
            <span style={{ color: colors.text.secondary }}>: {'{'}</span>
          </div>
          <div style={{ paddingLeft: '32px' }}>
            <span style={{ color: colors.text.primary }}>fontSize</span>
            <span style={{ color: colors.text.secondary }}>: </span>
            <span style={{ color: colors.accent.green }}>'18px'</span>
            <span style={{ color: colors.text.secondary }}>,</span>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <span style={{ color: colors.text.secondary }}>{'}'}</span>
          </div>
          <div>
            <span style={{ color: colors.text.primary }}>{'}'}</span>
          </div>
        </div>
      </Section>
    </div>
  ),
};
