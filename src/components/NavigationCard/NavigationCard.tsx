import React, { useState } from 'react';

/**
 * Arrow icon component for NavigationCard
 */
const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export interface NavigationCardProps {
  /** Label text displayed above the title (e.g., "Next", "Previous") */
  label: string;
  /** Main title text */
  title: string;
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
 *
 * @example
 * <NavigationCard
 *   label="Next"
 *   title="Best practices"
 *   onClick={() => navigate('/best-practices')}
 * />
 */
export const NavigationCard: React.FC<NavigationCardProps> = ({
  label,
  title,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        flex items-center gap-2
        rounded-2xl
        p-6
        cursor-pointer
        transition-all duration-200
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
      {/* Text Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <span
          className="font-inter font-normal text-base leading-6"
          style={{ color: '#f7f7f7' }}
        >
          {label}
        </span>
        <span
          className="font-inter font-semibold text-xl leading-7"
          style={{ color: '#f7f7f7' }}
        >
          {title}
        </span>
      </div>

      {/* Arrow Button */}
      <div
        className="
          flex items-center justify-center
          rounded-full
          flex-shrink-0
          w-16 h-16
          bg-white
        "
      >
        <ArrowIcon className="text-black w-8 h-8" />
      </div>
    </div>
  );
};

export default NavigationCard;
