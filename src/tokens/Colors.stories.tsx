import type { Meta, StoryObj } from '@storybook/react';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Colors',
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

const ColorSwatch: React.FC<{
  name: string;
  value: string;
  textColor?: string;
}> = ({ name, value, textColor = '#f7f7f7' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div
      style={{
        width: '120px',
        height: '80px',
        backgroundColor: value,
        borderRadius: '12px',
        border: value === '#000000' ? '1px solid #363636' : 'none',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <span style={{ color: textColor, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
        {name}
      </span>
      <span style={{ color: '#8f8f8f', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        {value}
      </span>
    </div>
  </div>
);

const ColorSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h3 style={{
      color: '#f7f7f7',
      fontSize: '16px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      marginBottom: '16px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    }}>
      {title}
    </h3>
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

/**
 * All color tokens in the design system
 */
export const AllColors: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <ColorSection title="Background Colors">
        <ColorSwatch name="Primary" value={colors.background.primary} />
        <ColorSwatch name="Card" value={colors.background.card} />
        <ColorSwatch name="Card Secondary" value={colors.background.cardSecondary} />
        <ColorSwatch name="Thumbnail" value={colors.background.thumbnail} />
      </ColorSection>

      <ColorSection title="Text Colors">
        <ColorSwatch name="Primary" value={colors.text.primary} />
        <ColorSwatch name="Secondary" value={colors.text.secondary} />
      </ColorSection>

      <ColorSection title="Interactive Colors">
        <ColorSwatch name="Button BG" value={colors.interactive.buttonBg} />
        <ColorSwatch name="Button Hover" value={colors.interactive.buttonHoverBg} />
      </ColorSection>

      <ColorSection title="Accent Colors">
        <ColorSwatch name="Green" value={colors.accent.green} />
        <ColorSwatch name="Orange" value={colors.accent.orange} />
        <ColorSwatch name="Cyan" value={colors.accent.cyan} />
        <ColorSwatch name="Pink" value={colors.accent.pink} />
        <ColorSwatch name="Yellow" value={colors.accent.yellow} />
      </ColorSection>

      <ColorSection title="Semantic Colors">
        <ColorSwatch name="Error" value={colors.semantic.error} />
        <ColorSwatch name="Success" value={colors.semantic.success} />
        <ColorSwatch name="Warning" value={colors.semantic.warning} />
        <ColorSwatch name="Info" value={colors.semantic.info} />
      </ColorSection>
    </div>
  ),
};

/**
 * Background colors used throughout the design system
 */
export const BackgroundColors: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <ColorSection title="Background Colors">
        <ColorSwatch name="Primary" value={colors.background.primary} />
        <ColorSwatch name="Card" value={colors.background.card} />
        <ColorSwatch name="Card Secondary" value={colors.background.cardSecondary} />
        <ColorSwatch name="Thumbnail" value={colors.background.thumbnail} />
      </ColorSection>
    </div>
  ),
};

/**
 * Text colors for typography
 */
export const TextColors: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <ColorSection title="Text Colors">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <p style={{ color: colors.text.primary, fontSize: '20px', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: 0 }}>
              Primary Text - {colors.text.primary}
            </p>
            <p style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0' }}>
              Used for headings and important content
            </p>
          </div>
          <div>
            <p style={{ color: colors.text.secondary, fontSize: '20px', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: 0 }}>
              Secondary Text - {colors.text.secondary}
            </p>
            <p style={{ color: colors.text.secondary, fontSize: '14px', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0' }}>
              Used for descriptions and supporting content
            </p>
          </div>
        </div>
      </ColorSection>
    </div>
  ),
};

/**
 * Accent colors for highlights and emphasis
 */
export const AccentColors: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <ColorSection title="Accent Colors">
        <ColorSwatch name="Green" value={colors.accent.green} />
        <ColorSwatch name="Orange" value={colors.accent.orange} />
        <ColorSwatch name="Cyan" value={colors.accent.cyan} />
        <ColorSwatch name="Pink" value={colors.accent.pink} />
        <ColorSwatch name="Yellow" value={colors.accent.yellow} />
      </ColorSection>
    </div>
  ),
};

/**
 * Semantic colors for feedback and status messages
 */
export const SemanticColors: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <ColorSection title="Semantic Colors">
        <ColorSwatch name="Error" value={colors.semantic.error} />
        <ColorSwatch name="Success" value={colors.semantic.success} />
        <ColorSwatch name="Warning" value={colors.semantic.warning} />
        <ColorSwatch name="Info" value={colors.semantic.info} />
      </ColorSection>
    </div>
  ),
};

/**
 * State colors for interactive element states
 */
export const StateColors: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <ColorSection title="State Colors">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: colors.states.disabled,
                borderRadius: '12px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: '#f7f7f7', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Disabled
              </span>
              <span style={{ color: '#8f8f8f', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                {colors.states.disabled}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: colors.states.hover,
                borderRadius: '12px',
                border: '1px solid #363636',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: '#f7f7f7', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Hover
              </span>
              <span style={{ color: '#8f8f8f', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                {colors.states.hover}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: colors.states.focus,
                borderRadius: '12px',
                border: '1px solid #363636',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: '#f7f7f7', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Focus
              </span>
              <span style={{ color: '#8f8f8f', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                {colors.states.focus}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: colors.states.active,
                borderRadius: '12px',
                border: '1px solid #363636',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: '#f7f7f7', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Active
              </span>
              <span style={{ color: '#8f8f8f', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                {colors.states.active}
              </span>
            </div>
          </div>
        </div>
      </ColorSection>
    </div>
  ),
};
