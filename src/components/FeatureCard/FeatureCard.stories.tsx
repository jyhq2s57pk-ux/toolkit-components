import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
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
  argTypes: {
    variant: {
      control: 'select',
      options: ['iconography', 'color', 'typography', 'composition', 'photography', 'custom'],
      description: 'Pre-configured content variant',
    },
    size: {
      control: 'radio',
      options: ['default', 'compact'],
      description: 'Card size',
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default FeatureCard with Iconography variant
 */
export const Default: Story = {
  args: {
    variant: 'iconography',
    size: 'default',
  },
};

/**
 * Compact size variant
 */
export const Compact: Story = {
  args: {
    variant: 'iconography',
    size: 'compact',
  },
};

/**
 * Color variant
 */
export const Color: Story = {
  args: {
    variant: 'color',
    size: 'default',
  },
};

/**
 * Typography variant
 */
export const Typography: Story = {
  args: {
    variant: 'typography',
    size: 'default',
  },
};

/**
 * Composition variant
 */
export const Composition: Story = {
  args: {
    variant: 'composition',
    size: 'default',
  },
};

/**
 * Photography variant
 */
export const Photography: Story = {
  args: {
    variant: 'photography',
    size: 'default',
  },
};

/**
 * Custom content example
 */
export const CustomContent: Story = {
  args: {
    variant: 'custom',
    content: {
      title: 'Custom Feature',
      description: 'This is a custom feature card with your own content and styling.',
      image: 'https://via.placeholder.com/104x104/8b5cf6/ffffff?text=Custom',
    },
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <FeatureCard variant="iconography" />
      <FeatureCard variant="color" />
      <FeatureCard variant="typography" />
      <FeatureCard variant="composition" />
      <FeatureCard variant="photography" />
    </div>
  ),
};

/**
 * Compact variants
 */
export const AllCompact: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <FeatureCard variant="iconography" size="compact" />
      <FeatureCard variant="color" size="compact" />
      <FeatureCard variant="typography" size="compact" />
    </div>
  ),
};
