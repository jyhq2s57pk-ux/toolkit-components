import React, { useState } from 'react';

/**
 * Arrow icon component used in FeatureCard
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

export type FeatureVariant =
  | 'iconography'
  | 'color'
  | 'typography'
  | 'composition'
  | 'photography'
  | 'custom';

export type FeatureCardSize = 'default' | 'compact';

export interface FeatureCardContent {
  title: string;
  description: string;
  image: string;
}

export interface FeatureCardProps {
  /** The variant determines the pre-configured content */
  variant?: FeatureVariant;
  /** Custom content - use when variant is 'custom' or to override defaults */
  content?: Partial<FeatureCardContent>;
  /** Card size - 'default' or 'compact' */
  size?: FeatureCardSize;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Custom image URL (overrides variant image) */
  imageUrl?: string;
}

// Default placeholder images (replace with your own assets)
const defaultImages: Record<Exclude<FeatureVariant, 'custom'>, string> = {
  iconography: 'https://via.placeholder.com/104x104/4ade80/000000?text=Icons',
  color: 'https://via.placeholder.com/104x104/f97316/000000?text=Color',
  typography: 'https://via.placeholder.com/104x104/22d3ee/000000?text=Aa',
  composition: 'https://via.placeholder.com/104x104/facc15/000000?text=Layout',
  photography: 'https://via.placeholder.com/104x104/ec4899/000000?text=Photo',
};

const variantContent: Record<Exclude<FeatureVariant, 'custom'>, FeatureCardContent> = {
  iconography: {
    title: 'Iconography',
    description: 'Learn how to use our iconography across product and marketing applications.',
    image: defaultImages.iconography,
  },
  color: {
    title: 'Color',
    description: 'Learn how to use our color across product and marketing applications.',
    image: defaultImages.color,
  },
  typography: {
    title: 'Typography',
    description: 'Learn how to use our typography across product and marketing applications.',
    image: defaultImages.typography,
  },
  composition: {
    title: 'Composition',
    description: 'Learn how to build layouts across product and marketing applications.',
    image: defaultImages.composition,
  },
  photography: {
    title: 'Photography',
    description: 'Learn how to use our photography across product and marketing applications.',
    image: defaultImages.photography,
  },
};

/**
 * FeatureCard Component
 *
 * A card component for showcasing features or sections of a design system.
 * Supports multiple pre-configured variants or custom content.
 *
 * @example
 * // Using a preset variant
 * <FeatureCard variant="iconography" onClick={() => navigate('/icons')} />
 *
 * @example
 * // Using custom content
 * <FeatureCard
 *   variant="custom"
 *   content={{
 *     title: 'My Feature',
 *     description: 'Description here',
 *     image: '/path/to/image.png'
 *   }}
 * />
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  variant = 'iconography',
  content: customContent,
  size = 'default',
  onClick,
  className = '',
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get base content from variant or use empty for custom
  const baseContent = variant === 'custom'
    ? { title: '', description: '', image: '' }
    : variantContent[variant];

  // Merge with custom content if provided
  const content: FeatureCardContent = {
    ...baseContent,
    ...customContent,
    image: imageUrl || customContent?.image || baseContent.image,
  };

  const isCompact = size === 'compact';

  return (
    <div
      className={`
        group
        flex items-center gap-4
        bg-tk-bg-card
        rounded-2xl
        overflow-hidden
        cursor-pointer
        transition-all duration-200
        pl-4 pr-6 py-4
        ${className}
      `.trim()}
      style={isHovered ? {
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(90deg, rgb(25, 25, 25) 0%, rgb(25, 25, 25) 100%)'
      } : { backgroundColor: '#191919' }}
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
      {/* Thumbnail */}
      <div
        className="
          bg-tk-bg-thumbnail
          rounded-2xl
          overflow-hidden
          flex-shrink-0
          flex items-center justify-center
          w-[104px] h-[104px]
        "
        style={{ backgroundColor: '#c6e6f8' }}
      >
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2 pr-2 min-w-0">
        <h3
          className={`
            font-inter font-semibold
            ${isCompact ? 'text-base leading-6' : 'text-xl leading-7'}
          `.trim()}
          style={{ color: '#f7f7f7' }}
        >
          {content.title}
        </h3>
        <p
          className={`
            font-inter font-normal leading-5
            ${isCompact ? 'text-sm line-clamp-3' : 'text-sm'}
          `.trim()}
          style={{ color: '#8f8f8f' }}
        >
          {content.description}
        </p>
      </div>

      {/* Arrow Button */}
      <div
        className="
          flex items-center justify-center
          rounded-full
          flex-shrink-0
          w-12 h-12
          transition-colors duration-200
        "
        style={{ backgroundColor: isHovered ? '#191919' : '#000000' }}
      >
        <ArrowIcon className="text-white" />
      </div>
    </div>
  );
};

export default FeatureCard;
