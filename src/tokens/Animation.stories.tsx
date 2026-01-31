import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { animation } from './animation';
import { colors } from './colors';

const meta: Meta = {
  title: 'Foundation/Animation',
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

const DurationDemo: React.FC<{
  name: string;
  value: string;
}> = ({ name, value }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '16px' }}>
      <div style={{ width: '100px' }}>
        <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
          {name}
        </span>
        <br />
        <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
          {value}
        </span>
      </div>
      <div
        style={{
          width: '300px',
          height: '40px',
          backgroundColor: colors.background.card,
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: colors.accent.cyan,
            borderRadius: '8px',
            position: 'absolute',
            left: isAnimating ? '260px' : '0px',
            transition: `left ${value} ease-in-out`,
          }}
        />
      </div>
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        style={{
          padding: '8px 16px',
          backgroundColor: colors.background.cardSecondary,
          color: colors.text.primary,
          border: 'none',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          cursor: 'pointer',
        }}
      >
        {isAnimating ? 'Reset' : 'Play'}
      </button>
    </div>
  );
};

const EasingDemo: React.FC<{
  name: string;
  value: string;
}> = ({ name, value }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '16px' }}>
      <div style={{ width: '100px' }}>
        <span style={{ color: colors.text.primary, fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
          {name}
        </span>
        <br />
        <span style={{ color: colors.text.secondary, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
          {value}
        </span>
      </div>
      <div
        style={{
          width: '300px',
          height: '40px',
          backgroundColor: colors.background.card,
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: colors.accent.orange,
            borderRadius: '8px',
            position: 'absolute',
            left: isAnimating ? '260px' : '0px',
            transition: `left 500ms ${value}`,
          }}
        />
      </div>
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        style={{
          padding: '8px 16px',
          backgroundColor: colors.background.cardSecondary,
          color: colors.text.primary,
          border: 'none',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          cursor: 'pointer',
        }}
      >
        {isAnimating ? 'Reset' : 'Play'}
      </button>
    </div>
  );
};

/**
 * All animation duration tokens
 */
export const DurationScale: Story = {
  render: () => (
    <div style={{ padding: '40px', minWidth: '600px' }}>
      <Section title="Duration Scale">
        <p style={{ color: colors.text.secondary, fontSize: '14px', fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>
          Click "Play" to see each duration in action
        </p>
        <DurationDemo name="instant" value={animation.duration.instant} />
        <DurationDemo name="fast" value={animation.duration.fast} />
        <DurationDemo name="normal" value={animation.duration.normal} />
        <DurationDemo name="slow" value={animation.duration.slow} />
        <DurationDemo name="slower" value={animation.duration.slower} />
      </Section>
    </div>
  ),
};

/**
 * All easing function tokens
 */
export const EasingFunctions: Story = {
  render: () => (
    <div style={{ padding: '40px', minWidth: '600px' }}>
      <Section title="Easing Functions">
        <p style={{ color: colors.text.secondary, fontSize: '14px', fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>
          Click "Play" to compare easing curves (500ms duration)
        </p>
        <EasingDemo name="linear" value={animation.easing.linear} />
        <EasingDemo name="ease" value={animation.easing.ease} />
        <EasingDemo name="easeIn" value={animation.easing.easeIn} />
        <EasingDemo name="easeOut" value={animation.easing.easeOut} />
        <EasingDemo name="easeInOut" value={animation.easing.easeInOut} />
      </Section>
    </div>
  ),
};

/**
 * Animation token reference
 */
export const TokenReference: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Section title="Duration Tokens">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
        }}>
          {Object.entries(animation.duration).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>duration.</span>
              <span style={{ color: colors.text.primary }}>{key}</span>
              <span style={{ color: colors.text.secondary }}> = </span>
              <span style={{ color: colors.accent.green }}>'{value}'</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Easing Tokens">
        <div style={{
          backgroundColor: colors.background.card,
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
        }}>
          {Object.entries(animation.easing).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <span style={{ color: colors.accent.cyan }}>easing.</span>
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
