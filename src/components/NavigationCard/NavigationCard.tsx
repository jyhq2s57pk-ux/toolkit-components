import React, { useState } from 'react';

/**
 * Arrow icon component for NavigationCard
 */
const ArrowIcon: React.FC<{ className?: string; direction?: 'left' | 'right' }> = ({
  className,
  direction = 'right'
}) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={direction === 'left' ? { transform: 'rotate(180deg)' } : undefined}
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Lock icon component for indicating locked/premium content
 */
const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33333 12.6667 7.33333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66667 7.33333V4.66667C4.66667 3.78261 5.01786 2.93477 5.64298 2.30964C6.2681 1.68452 7.11595 1.33333 8 1.33333C8.88406 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V7.33333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type NavigationDirection = 'next' | 'previous';

export interface NavigationCardProps {
  /** Label text displayed above the title (e.g., "Next", "Previous") */
  label: string;
  /** Main title text */
  title: string;
  /** Navigation direction - determines arrow position and direction */
  direction?: NavigationDirection;
  /** Whether the content is locked/premium */
  isLocked?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * NavigationCard Component
 *
 * A card component for navigation between sections or pages.
 * Displays a label, title, and arrow indicator with hover effects.
 * Supports both "next" (arrow right) and "previous" (arrow left) directions.
 *
 * @example
 * // Next navigation
 * <NavigationCard
 *   label="Next"
 *   title="Best practices"
 *   direction="next"
 *   onClick={() => navigate('/best-practices')}
 * />
 *
 * @example
 * // Previous navigation with lock
 * <NavigationCard
 *   label="Previous"
 *   title="Getting started"
 *   direction="previous"
 *   isLocked
 * />
 */
export const NavigationCard: React.FC<NavigationCardProps> = ({
  label,
  title,
  direction = 'next',
  isLocked = false,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isPrevious = direction === 'previous';

  const arrowButton = (
    <div
      className="
        flex items-center justify-center
        rounded-full
        flex-shrink-0
        w-16 h-16
        bg-white
      "
    >
      <ArrowIcon
        className="text-black w-8 h-8"
        direction={isPrevious ? 'left' : 'right'}
      />
    </div>
  );

  return (
    <div
      className={`
        flex items-center
        rounded-2xl
        p-6
        cursor-pointer
        transition-all duration-200
        ${isPrevious ? 'gap-4' : 'gap-2'}
        ${className}
      `.trim()}
      style={isHovered ? {
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(90deg, rgb(54, 54, 54) 0%, rgb(54, 54, 54) 100%)'
      } : { backgroundColor: '#363636' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Arrow Button - Left side for "previous" */}
      {isPrevious && arrowButton}

      {/* Text Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <span
          className="font-inter font-normal text-base leading-6"
          style={{ color: '#f7f7f7' }}
        >
          {label}
        </span>
        <span
          className="font-inter font-semibold text-xl leading-7 inline-flex items-center gap-2"
          style={{ color: '#f7f7f7' }}
        >
          {title}
          {isLocked && <LockIcon className="text-[#f7f7f7] flex-shrink-0" />}
        </span>
      </div>

      {/* Arrow Button - Right side for "next" */}
      {!isPrevious && arrowButton}
    </div>
  );
};

export default NavigationCard;
