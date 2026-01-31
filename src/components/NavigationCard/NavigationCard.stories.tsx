import type { Meta, StoryObj } from '@storybook/react';
import { NavigationCard } from './NavigationCard';

const meta: Meta<typeof NavigationCard> = {
  title: 'Components/NavigationCard',
  component: NavigationCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'card', value: '#191919' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the title',
    },
    title: {
      control: 'text',
      description: 'Main title text',
    },
    direction: {
      control: 'radio',
      options: ['next', 'previous'],
      description: 'Navigation direction - determines arrow position',
    },
    isLocked: {
      control: 'boolean',
      description: 'Whether the content is locked/premium',
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
 * Default NavigationCard showing "Next" navigation (arrow on right)
 */
export const Default: Story = {
  args: {
    label: 'Next',
    title: 'Best practices',
    direction: 'next',
  },
};

/**
 * Previous navigation (arrow on left)
 */
export const Previous: Story = {
  args: {
    label: 'Previous',
    title: 'Live in marketing: Best practices',
    direction: 'previous',
  },
};

/**
 * Next navigation with lock icon
 */
export const NextLocked: Story = {
  args: {
    label: 'Next',
    title: 'Advanced techniques',
    direction: 'next',
    isLocked: true,
  },
};

/**
 * Previous navigation with lock icon
 */
export const PreviousLocked: Story = {
  args: {
    label: 'Previous',
    title: 'Live in marketing: Best practices',
    direction: 'previous',
    isLocked: true,
  },
};

/**
 * Chapter navigation example
 */
export const Chapter: Story = {
  args: {
    label: 'Chapter 3',
    title: 'Understanding design system fundamentals',
    direction: 'next',
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <NavigationCard
        label="Previous"
        title="Live in marketing: Best practices"
        direction="previous"
        isLocked
      />
      <NavigationCard
        label="Next"
        title="Best practices"
        direction="next"
        isLocked
      />
    </div>
  ),
};

/**
 * Navigation pair (previous and next)
 */
export const NavigationPair: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <NavigationCard
        label="Previous"
        title="Introduction"
        direction="previous"
      />
      <NavigationCard
        label="Next"
        title="Best practices"
        direction="next"
      />
    </div>
  ),
};
