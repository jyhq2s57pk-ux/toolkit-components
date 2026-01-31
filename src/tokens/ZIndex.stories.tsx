import type { Meta, StoryObj } from '@storybook/react';
import { zIndex } from './zIndex';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Z-Index',
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

const layerColors: Record<string, string> = {
  hide: colors.text.secondary,
  base: colors.accent.cyan,
  dropdown: colors.accent.green,
  sticky: colors.accent.orange,
  overlay: colors.accent.pink,
  modal: '#a855f7',
  popover: '#ec4899',
  tooltip: '#f43f5e',
};

/**
 * Visual representation of z-index layers
 */
export const ZIndexScale: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Z-Index Scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.entries(zIndex)
            .sort(([, a], [, b]) => b - a)
            .map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '40px',
                    backgroundColor: layerColors[key],
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: key === 'hide' ? colors.text.primary : '#000',
                  }}
                >
                  {value}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {key}
                  </span>
                  <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                    zIndex.{key}
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
 * Stacked layers demonstrating z-index in action
 */
export const StackedLayers: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Stacked Layers Demo">
        <div
          style={{
            position: 'relative',
            width: '400px',
            height: '300px',
            backgroundColor: colors.background.card,
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Base layer */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              width: '200px',
              height: '150px',
              backgroundColor: colors.accent.cyan,
              borderRadius: '12px',
              zIndex: zIndex.base,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '12px',
            }}
          >
            <span style={{ color: '#000', fontSize: '12px', fontWeight: 600 }}>base (0)</span>
          </div>

          {/* Dropdown layer */}
          <div
            style={{
              position: 'absolute',
              left: '80px',
              top: '60px',
              width: '160px',
              height: '120px',
              backgroundColor: colors.accent.green,
              borderRadius: '12px',
              zIndex: zIndex.dropdown,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '12px',
            }}
          >
            <span style={{ color: '#000', fontSize: '12px', fontWeight: 600 }}>dropdown (10)</span>
          </div>

          {/* Overlay layer */}
          <div
            style={{
              position: 'absolute',
              left: '140px',
              top: '100px',
              width: '180px',
              height: '140px',
              backgroundColor: colors.accent.orange,
              borderRadius: '12px',
              zIndex: zIndex.overlay,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '12px',
            }}
          >
            <span style={{ color: '#000', fontSize: '12px', fontWeight: 600 }}>overlay (30)</span>
          </div>

          {/* Tooltip layer */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              padding: '8px 12px',
              backgroundColor: '#f43f5e',
              borderRadius: '8px',
              zIndex: zIndex.tooltip,
            }}
          >
            <span style={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}>tooltip (60)</span>
          </div>
        </div>
      </Section>
    </div>
  ),
};

/**
 * Token reference
 */
export const TokenReference: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Z-Index Token Reference">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
        }}>
          {Object.entries(zIndex).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>zIndex.</span>
              <span style={{ color: colors.text.primary }}>{key}</span>
              <span style={{ color: colors.text.secondary }}> = </span>
              <span style={{ color: colors.accent.orange }}>{value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Usage Guidelines">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          color: colors.text.secondary,
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.6',
        }}>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>hide (-1):</strong> Elements that should be behind everything
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>base (0):</strong> Default stacking, normal content
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>dropdown (10):</strong> Select menus, dropdowns
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>sticky (20):</strong> Sticky headers, fixed navigation
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>overlay (30):</strong> Backdrop overlays, dimmed backgrounds
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>modal (40):</strong> Modal dialogs, drawer panels
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: colors.text.primary }}>popover (50):</strong> Popovers, floating menus
          </p>
          <p>
            <strong style={{ color: colors.text.primary }}>tooltip (60):</strong> Tooltips, toast notifications
          </p>
        </div>
      </Section>
    </div>
  ),
};
