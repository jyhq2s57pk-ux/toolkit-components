import React, { useState } from 'react';

/**
 * Right arrow icon from Figma design (variant 6)
 * Solid filled arrow pointing right
 */
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="27"
    height="24"
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.28 11.0588L15.6133 0.392122C15.3623 0.14105 15.0217 0 14.6667 0C14.3116 0 13.9711 0.14105 13.72 0.392122C13.4689 0.643194 13.3279 0.98372 13.3279 1.33879C13.3279 1.69386 13.4689 2.03438 13.72 2.28546L22.12 10.6721H1.33333C0.979711 10.6721 0.640573 10.8126 0.390524 11.0626C0.140476 11.3127 0 11.6518 0 12.0055C0 12.3591 0.140476 12.6982 0.390524 12.9483C0.640573 13.1983 0.979711 13.3388 1.33333 13.3388H22.12L13.72 21.7255C13.5952 21.8495 13.4961 21.997 13.4285 22.1595C13.361 22.3219 13.3262 22.4962 13.3262 22.6721C13.3262 22.8481 13.361 23.0223 13.4285 23.1848C13.4961 23.3473 13.5952 23.4947 13.72 23.6188C13.844 23.7436 13.9915 23.8427 14.154 23.9102C14.3165 23.9778 14.4907 24.0126 14.6667 24.0126C14.8426 24.0126 15.0169 23.9778 15.1793 23.9102C15.3418 23.8427 15.4893 23.7436 15.6133 23.6188L26.28 12.9521C26.4048 12.8281 26.5039 12.6806 26.5715 12.5181C26.639 12.3556 26.6738 12.1814 26.6738 12.0055C26.6738 11.8295 26.639 11.6553 26.5715 11.4928C26.5039 11.3303 26.4048 11.1828 26.28 11.0588Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Left arrow icon from Figma design (variant 4)
 * Solid filled arrow pointing left
 */
const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="27"
    height="24"
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.3405 10.6721H4.55384L12.9538 2.28546C13.0782 2.16114 13.1768 2.01355 13.2441 1.85112C13.3113 1.68869 13.346 1.5146 13.346 1.33879C13.346 1.16298 13.3113 0.988886 13.2441 0.826457C13.1768 0.664027 13.0782 0.51644 12.9538 0.392122C12.8295 0.267804 12.6819 0.16919 12.5195 0.101909C12.3571 0.0346289 12.183 0 12.0072 0C11.8314 0 11.6573 0.0346289 11.4948 0.101909C11.3324 0.16919 11.1848 0.267804 11.0605 0.392122L0.393839 11.0588C0.269028 11.1828 0.169977 11.3303 0.102387 11.4928C0.0347963 11.6553 0 11.8295 0 12.0055C0 12.1814 0.0347963 12.3557 0.102387 12.5181C0.169977 12.6806 0.269028 12.8281 0.393839 12.9521L11.0605 23.6188C11.1845 23.7436 11.332 23.8427 11.4945 23.9102C11.657 23.9778 11.8312 24.0126 12.0072 24.0126C12.1831 24.0126 12.3574 23.9778 12.5198 23.9102C12.6823 23.8427 12.8298 23.7436 12.9538 23.6188C13.0786 23.4947 13.1777 23.3473 13.2453 23.1848C13.3129 23.0223 13.3477 22.8481 13.3477 22.6721C13.3477 22.4962 13.3129 22.3219 13.2453 22.1595C13.1777 21.997 13.0786 21.8495 12.9538 21.7255L4.55384 13.3388H25.3405C25.6941 13.3388 26.0333 13.1983 26.2833 12.9483C26.5334 12.6982 26.6738 12.3591 26.6738 12.0055C26.6738 11.6518 26.5334 11.3127 26.2833 11.0626C26.0333 10.8126 25.6941 10.6721 25.3405 10.6721Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Lock icon from Figma design (variant 5)
 * Filled padlock icon for locked/premium content
 */
const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.995 3.80006C9.94284 2.75781 9.48543 1.77721 8.72037 1.0675C7.95532 0.357786 6.9432 -0.0248446 5.89997 0.00125238C4.85674 0.0273494 3.86502 0.460107 3.1364 1.20719C2.40779 1.95427 1.99998 2.95651 2 4.00006V5.00006H1C0.734784 5.00006 0.48043 5.10542 0.292893 5.29296C0.105357 5.48049 0 5.73485 0 6.00006V13.0001C0 13.2653 0.105357 13.5196 0.292893 13.7072C0.48043 13.8947 0.734784 14.0001 1 14.0001H11C11.2652 14.0001 11.5196 13.8947 11.7071 13.7072C11.8946 13.5196 12 13.2653 12 13.0001V6.00006C12 5.73485 11.8946 5.48049 11.7071 5.29296C11.5196 5.10542 11.2652 5.00006 11 5.00006H10V4.00006L9.995 3.80006ZM8 5.00006H4V4.00006L4.005 3.85006C4.0416 3.33237 4.27801 2.84917 4.66428 2.50256C5.05055 2.15594 5.55644 1.97305 6.07506 1.99252C6.59368 2.01199 7.08443 2.23231 7.44362 2.60691C7.80281 2.98152 8.00232 3.48108 8 4.00006V5.00006ZM7 10.0001C7 10.2653 6.89464 10.5196 6.70711 10.7072C6.51957 10.8947 6.26522 11.0001 6 11.0001C5.73478 11.0001 5.48043 10.8947 5.29289 10.7072C5.10536 10.5196 5 10.2653 5 10.0001V9.00006C5 8.73485 5.10536 8.48049 5.29289 8.29296C5.48043 8.10542 5.73478 8.00006 6 8.00006C6.26522 8.00006 6.51957 8.10542 6.70711 8.29296C6.89464 8.48049 7 8.73485 7 9.00006V10.0001Z"
      fill="currentColor"
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

  const ArrowIcon = isPrevious ? ArrowLeftIcon : ArrowRightIcon;

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
      <ArrowIcon className="text-[#191919] w-7 h-6" />
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
