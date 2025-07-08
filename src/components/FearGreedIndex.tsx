import React from 'react';

/**
 * Fear & Greed Index component
 * Uses the provided placeholder image and matches the app's style.
 */
const FEAR_GREED_IMAGE = '/fear_and_greed_image.png';

export interface FearGreedIndexProps {
  value?: number; // e.g., 78
  label?: string; // e.g., "Extreme Greed"
  description?: string; // e.g., "is driving the US market"
}

export const FearGreedIndex: React.FC<FearGreedIndexProps> = ({
  value = 78,
  label = 'Extreme Greed',
  description = 'is driving the US market',
}) => {
  return (
    <div className="flex items-center gap-6 p-6 bg-background rounded-xl border border-border shadow-sm">
      {/* Image and value overlay */}
      <div className="relative flex-shrink-0">
        <img
          src={FEAR_GREED_IMAGE}
          alt="Fear & Greed Index Gauge"
          className="w-28 h-16 object-contain"
        />
        {/* Value overlay (optional, if not in image) */}
        {/* <span className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-foreground">{value}</span> */}
      </div>
      {/* Textual info */}
      <div>
        <div className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
          Fear & Greed Index <span className="text-lg">→</span>
        </div>
        <div className="text-lg font-bold text-success mb-1">{label}</div>
        <div className="text-base text-foreground">{description}</div>
      </div>
    </div>
  );
};

export default FearGreedIndex; 