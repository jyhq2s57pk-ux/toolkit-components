import type { Meta, StoryObj } from '@storybook/react';
import { borders } from './borders';
import { borderRadius } from './spacing';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Borders',
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

const BorderExample: React.FC<{
  name: string;
  width: string;
  style: string;
}> = ({ name, width, style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: colors.background.card,
        borderRadius: '12px',
        border: `${width} ${style} ${colors.accent.cyan}`,
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
      <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
        {name}
      </span>
      <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
        {width} {style}
      </span>
    </div>
  </div>
);

/**
 * Border width scale
 */
export const BorderWidths: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Border Widths">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <BorderExample name="none" width={borders.width.none} style={borders.style.solid} />
          <BorderExample name="thin" width={borders.width.thin} style={borders.style.solid} />
          <BorderExample name="medium" width={borders.width.medium} style={borders.style.solid} />
          <BorderExample name="thick" width={borders.width.thick} style={borders.style.solid} />
        </div>
      </Section>
    </div>
  ),
};

/**
 * Border style variations
 */
export const BorderStyles: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Border Styles">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <BorderExample name="solid" width={borders.width.medium} style={borders.style.solid} />
          <BorderExample name="dashed" width={borders.width.medium} style={borders.style.dashed} />
          <BorderExample name="dotted" width={borders.width.medium} style={borders.style.dotted} />
        </div>
      </Section>
    </div>
  ),
};

/**
 * Border radius combined with borders
 */
export const BorderWithRadius: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Borders with Radius">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {Object.entries(borderRadius).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: colors.background.card,
                  borderRadius: value,
                  border: `${borders.width.medium} ${borders.style.solid} ${colors.accent.orange}`,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  radius-{key}
                </span>
                <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                  {value}
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
 * All border combinations
 */
export const AllBorders: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Border Width Scale">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <BorderExample name="none" width={borders.width.none} style={borders.style.solid} />
          <BorderExample name="thin" width={borders.width.thin} style={borders.style.solid} />
          <BorderExample name="medium" width={borders.width.medium} style={borders.style.solid} />
          <BorderExample name="thick" width={borders.width.thick} style={borders.style.solid} />
        </div>
      </Section>

      <Section title="Border Styles">
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <BorderExample name="solid" width={borders.width.medium} style={borders.style.solid} />
          <BorderExample name="dashed" width={borders.width.medium} style={borders.style.dashed} />
          <BorderExample name="dotted" width={borders.width.medium} style={borders.style.dotted} />
        </div>
      </Section>

      <Section title="Token Reference">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
        }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ color: colors.text.secondary }}>// Width tokens</span>
          </div>
          {Object.entries(borders.width).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>borders.width.</span>
              <span style={{ color: colors.text.primary }}>{key}</span>
              <span style={{ color: colors.text.secondary }}> = </span>
              <span style={{ color: colors.accent.green }}>'{value}'</span>
            </div>
          ))}
          <div style={{ marginTop: '16px', marginBottom: '16px' }}>
            <span style={{ color: colors.text.secondary }}>// Style tokens</span>
          </div>
          {Object.entries(borders.style).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>borders.style.</span>
              <span style={{ color: colors.text.primary }}>{key}</span>
              <span style={{ color: colors.text.secondary }}> = </span>
              <span style={{ color: colors.accent.green }}>'{value}'</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};
