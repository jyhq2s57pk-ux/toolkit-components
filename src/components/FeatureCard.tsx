import React, { useState } from 'react';

// Asset URLs from Figma (valid for 7 days)
const assets = {
  iconography: "https://www.figma.com/api/mcp/asset/1d030b7c-331c-4f10-b265-9e1a3d42688e",
  color: "https://www.figma.com/api/mcp/asset/a4456c16-f29e-43aa-9794-b55a75807a0d",
  typography: "https://www.figma.com/api/mcp/asset/dd18fe7b-5044-4a22-8722-3153a169ba7f",
  composition: "https://www.figma.com/api/mcp/asset/aed00c5f-53b4-48ef-a28d-89f5775a2018",
  photography: "https://www.figma.com/api/mcp/asset/7dc92347-5902-41c7-9bb8-f78d79b3605a",
};

// Arrow icon component
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
  | 'photography';

export type FeatureCardSize = 'default' | 'compact';

export interface FeatureCardProps {
  variant: FeatureVariant;
  size?: FeatureCardSize;
  onClick?: () => void;
  className?: string;
}

const variantContent: Record<FeatureVariant, { title: string; description: string; image: string }> = {
  iconography: {
    title: 'Iconography',
    description: 'Learn how to use our iconography across product and marketing applications.',
    image: assets.iconography,
  },
  color: {
    title: 'Color',
    description: 'Learn how to use our color across product and marketing applications.',
    image: assets.color,
  },
  typography: {
    title: 'Typography',
    description: 'Learn how to use our typography across product and marketing applications.',
    image: assets.typography,
  },
  composition: {
    title: 'Composition',
    description: 'Learn how to build layouts across product and marketing applications.',
    image: assets.composition,
  },
  photography: {
    title: 'Photography',
    description: 'Learn how to use our photography across product and marketing applications.',
    image: assets.photography,
  },
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  variant,
  size = 'default',
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const content = variantContent[variant];

  const isCompact = size === 'compact';

  return (
    <div
      className={`
        group
        flex items-center gap-4
        bg-card-bg
        rounded-2xl
        overflow-hidden
        cursor-pointer
        transition-all duration-200
        ${isCompact ? 'pl-4 pr-6 py-4' : 'pl-4 pr-6 py-4'}
        ${isHovered ? 'bg-gradient-to-r from-white/[0.04] to-white/[0.04], bg-card-bg' : ''}
        ${className}
      `}
      style={isHovered ? {
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(90deg, rgb(25, 25, 25) 0%, rgb(25, 25, 25) 100%)'
      } : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div
        className={`
          bg-card-thumbnail
          rounded-2xl
          overflow-hidden
          flex-shrink-0
          flex items-center justify-center
          ${isCompact ? 'w-[104px] h-[104px]' : 'w-[104px] h-[104px]'}
        `}
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
            font-inter font-semibold text-card-text
            ${isCompact ? 'text-base leading-6' : 'text-xl leading-7'}
          `}
        >
          {content.title}
        </h3>
        <p
          className={`
            font-inter font-normal text-card-description leading-5
            ${isCompact ? 'text-sm line-clamp-3' : 'text-sm'}
          `}
        >
          {content.description}
        </p>
      </div>

      {/* Arrow Button */}
      <div
        className={`
          flex items-center justify-center
          rounded-full
          flex-shrink-0
          w-12 h-12
          transition-colors duration-200
          ${isHovered ? 'bg-card-bg' : 'bg-black'}
        `}
      >
        <ArrowIcon className="text-white" />
      </div>
    </div>
  );
};

export default FeatureCard;
