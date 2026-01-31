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
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default NavigationCard showing "Next" navigation
 */
export const Default: Story = {
  args: {
    label: 'Next',
    title: 'Best practices',
  },
};

/**
 * Previous navigation example
 */
export const Previous: Story = {
  args: {
    label: 'Previous',
    title: 'Getting started',
  },
};

/**
 * Chapter navigation
 */
export const Chapter: Story = {
  args: {
    label: 'Chapter 3',
    title: 'Advanced techniques',
  },
};

/**
 * Section navigation with longer title
 */
export const LongTitle: Story = {
  args: {
    label: 'Up next',
    title: 'Understanding design system fundamentals',
  },
};

/**
 * Multiple navigation cards displayed together
 */
export const NavigationPair: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <NavigationCard label="Previous" title="Introduction" />
      <NavigationCard label="Next" title="Best practices" />
    </div>
  ),
};
