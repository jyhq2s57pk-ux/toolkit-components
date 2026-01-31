import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  LockIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from './Icons';

const meta: Meta = {
  title: 'Foundation/Icons',
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
};

export default meta;
type Story = StoryObj;

const IconWrapper: React.FC<{ children: React.ReactNode; label: string }> = ({
  children,
  label,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '64px',
        height: '64px',
        backgroundColor: '#363636',
        borderRadius: '12px',
      }}
    >
      {children}
    </div>
    <span style={{ color: '#8f8f8f', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
      {label}
    </span>
  </div>
);

/**
 * All available icons in the design system
 */
export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', padding: '20px' }}>
      <IconWrapper label="ArrowRight">
        <ArrowRightIcon className="text-white w-6 h-5" />
      </IconWrapper>
      <IconWrapper label="ArrowLeft">
        <ArrowLeftIcon className="text-white w-6 h-5" />
      </IconWrapper>
      <IconWrapper label="Lock">
        <LockIcon className="text-white w-4 h-5" />
      </IconWrapper>
      <IconWrapper label="ChevronRight">
        <ChevronRightIcon className="text-white w-6 h-6" />
      </IconWrapper>
      <IconWrapper label="ChevronLeft">
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </IconWrapper>
    </div>
  ),
};

/**
 * Arrow icons - used for navigation cards
 */
export const Arrows: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
      <IconWrapper label="ArrowLeft">
        <ArrowLeftIcon className="text-white w-6 h-5" />
      </IconWrapper>
      <IconWrapper label="ArrowRight">
        <ArrowRightIcon className="text-white w-6 h-5" />
      </IconWrapper>
    </div>
  ),
};

/**
 * Chevron icons - used for feature cards and general navigation
 */
export const Chevrons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
      <IconWrapper label="ChevronLeft">
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </IconWrapper>
      <IconWrapper label="ChevronRight">
        <ChevronRightIcon className="text-white w-6 h-6" />
      </IconWrapper>
    </div>
  ),
};

/**
 * Lock icon - indicates locked/premium content
 */
export const Lock: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
      <IconWrapper label="Lock">
        <LockIcon className="text-white w-4 h-5" />
      </IconWrapper>
    </div>
  ),
};

/**
 * Icons with different colors
 */
export const IconColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="w-6 h-5" style={{ color: '#f7f7f7' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>Primary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="w-6 h-5" style={{ color: '#8f8f8f' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>Secondary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="w-6 h-5" style={{ color: '#191919' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>Dark</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="w-6 h-5" style={{ color: '#4ade80' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>Green</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="w-6 h-5" style={{ color: '#f97316' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>Orange</span>
      </div>
    </div>
  ),
};

/**
 * Icons at different sizes
 */
export const IconSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="text-white" style={{ width: '16px', height: '14px' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>16px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="text-white" style={{ width: '24px', height: '21px' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>24px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="text-white" style={{ width: '32px', height: '28px' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>32px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ArrowRightIcon className="text-white" style={{ width: '48px', height: '42px' }} />
        <span style={{ color: '#8f8f8f', fontSize: '12px' }}>48px</span>
      </div>
    </div>
  ),
};
