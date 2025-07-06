export interface ComponentConfig {
  id: string;
  name: string;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  isVisible: boolean;
  order: number;
}

export interface LayoutConfig {
  components: ComponentConfig[];
  order: string[];
  visibility: Record<string, boolean>;
  variants: Record<string, LayoutConfig>;
  currentVariant: string;
  componentProps?: Record<string, Record<string, any>>;
}

export interface ComponentRegistryItem {
  component: React.ComponentType<any>;
  defaultProps: Record<string, any>;
  name: string;
}

export interface FearGreedIndexProps {
  value: number; // 0-100
  sentiment: 'Extreme Fear' | 'Fear' | 'Neutral' | 'Greed' | 'Extreme Greed';
  description: string;
  lastUpdated: string;
  historicalData?: Array<{
    date: string;
    value: number;
    sentiment: string;
  }>;
} 