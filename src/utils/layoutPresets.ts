import { LayoutConfig } from '@/types/layout';
import { DEFAULT_COMPONENT_ORDER, DEFAULT_VISIBILITY } from './componentRegistry';

export interface LayoutPreset {
  id: string;
  name: string;
  description: string;
  config: LayoutConfig;
}

export const LAYOUT_PRESETS: LayoutPreset[] = [
  {
    id: 'default',
    name: 'Default Layout',
    description: 'Original layout with all components visible',
    config: {
      components: [],
      order: DEFAULT_COMPONENT_ORDER,
      visibility: DEFAULT_VISIBILITY,
      variants: {},
      currentVariant: 'default'
    }
  },
  {
    id: 'minimal',
    name: 'Minimal Trading',
    description: 'Essential components for quick trading decisions',
    config: {
      components: [],
      order: ['stock-header', 'stock-price', 'stock-chart', 'position-details', 'trading-actions'],
      visibility: {
        'stock-header': true,
        'stock-price': true,
        'stock-chart': true,
        'position-details': true,
        'statistics': false,
        'dividend-details': false,
        'analyst-estimates': false,
        'trading-trends': false,
        'related-stocks': false,
        'related-news': false,
        'transaction-history': false
      },
      variants: {},
      currentVariant: 'minimal'
    }
  },
  {
    id: 'analyst-focused',
    name: 'Analyst Focused',
    description: 'Emphasizes analyst recommendations and research',
    config: {
      components: [],
      order: ['stock-header', 'stock-price', 'analyst-estimates', 'stock-chart', 'position-details', 'statistics', 'related-news'],
      visibility: {
        'stock-header': true,
        'stock-price': true,
        'stock-chart': true,
        'position-details': true,
        'statistics': true,
        'dividend-details': false,
        'analyst-estimates': true,
        'trading-trends': false,
        'related-stocks': false,
        'related-news': true,
        'transaction-history': false
      },
      variants: {},
      currentVariant: 'analyst-focused'
    }
  },
  {
    id: 'technical',
    name: 'Technical Analysis',
    description: 'Focus on charts, trends, and technical indicators',
    config: {
      components: [],
      order: ['stock-header', 'stock-price', 'stock-chart', 'trading-trends', 'statistics', 'position-details'],
      visibility: {
        'stock-header': true,
        'stock-price': true,
        'stock-chart': true,
        'position-details': true,
        'statistics': true,
        'dividend-details': false,
        'analyst-estimates': false,
        'trading-trends': true,
        'related-stocks': false,
        'related-news': false,
        'transaction-history': false
      },
      variants: {},
      currentVariant: 'technical'
    }
  },
  {
    id: 'portfolio',
    name: 'Portfolio Management',
    description: 'Focus on position details and portfolio analysis',
    config: {
      components: [],
      order: ['stock-header', 'stock-price', 'position-details', 'related-stocks', 'transaction-history', 'dividend-details'],
      visibility: {
        'stock-header': true,
        'stock-price': true,
        'stock-chart': false,
        'position-details': true,
        'statistics': false,
        'dividend-details': true,
        'analyst-estimates': false,
        'trading-trends': false,
        'related-stocks': true,
        'related-news': false,
        'transaction-history': true
      },
      variants: {},
      currentVariant: 'portfolio'
    }
  },
  {
    id: 'news-focused',
    name: 'News & Research',
    description: 'Emphasizes news and market research',
    config: {
      components: [],
      order: ['stock-header', 'stock-price', 'related-news', 'analyst-estimates', 'stock-chart', 'position-details'],
      visibility: {
        'stock-header': true,
        'stock-price': true,
        'stock-chart': true,
        'position-details': true,
        'statistics': false,
        'dividend-details': false,
        'analyst-estimates': true,
        'trading-trends': false,
        'related-stocks': false,
        'related-news': true,
        'transaction-history': false
      },
      variants: {},
      currentVariant: 'news-focused'
    }
  }
];

export const getPresetById = (id: string): LayoutPreset | undefined => {
  return LAYOUT_PRESETS.find(preset => preset.id === id);
};

export const getPresetNames = (): Array<{ id: string; name: string }> => {
  return LAYOUT_PRESETS.map(preset => ({
    id: preset.id,
    name: preset.name
  }));
}; 