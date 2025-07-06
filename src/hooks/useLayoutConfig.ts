import { useState, useEffect, useCallback } from 'react';
import { LayoutConfig } from '@/types/layout';
import { DEFAULT_COMPONENT_ORDER, DEFAULT_VISIBILITY, COMPONENT_REGISTRY } from '@/utils/componentRegistry';
import { getPresetById } from '@/utils/layoutPresets';

const STORAGE_KEY = 'trading-app-layout-config';

const getDefaultLayoutConfig = (): LayoutConfig => ({
  components: [],
  order: DEFAULT_COMPONENT_ORDER,
  visibility: DEFAULT_VISIBILITY,
  variants: {},
  currentVariant: 'default',
  componentProps: Object.keys(COMPONENT_REGISTRY).reduce((acc, key) => {
    acc[key] = COMPONENT_REGISTRY[key].defaultProps;
    return acc;
  }, {} as Record<string, Record<string, any>>)
});

const loadLayoutConfig = (): LayoutConfig => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to load layout config from localStorage:', error);
  }
  return getDefaultLayoutConfig();
};

const saveLayoutConfig = (config: LayoutConfig) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.warn('Failed to save layout config to localStorage:', error);
  }
};

export const useLayoutConfig = () => {
  const [config, setConfig] = useState<LayoutConfig>(loadLayoutConfig);

  // Save to localStorage whenever config changes
  useEffect(() => {
    saveLayoutConfig(config);
  }, [config]);

  const updateVisibility = useCallback((componentId: string, isVisible: boolean) => {
    setConfig(prev => ({
      ...prev,
      visibility: {
        ...prev.visibility,
        [componentId]: isVisible
      }
    }));
  }, []);

  const updateOrder = useCallback((newOrder: string[]) => {
    setConfig(prev => ({
      ...prev,
      order: newOrder
    }));
  }, []);

  const resetToDefault = useCallback(() => {
    setConfig(getDefaultLayoutConfig());
  }, []);

  const toggleComponent = useCallback((componentId: string) => {
    setConfig(prev => ({
      ...prev,
      visibility: {
        ...prev.visibility,
        [componentId]: !prev.visibility[componentId]
      }
    }));
  }, []);

  const moveComponent = useCallback((componentId: string, direction: 'up' | 'down') => {
    setConfig(prev => {
      const currentIndex = prev.order.indexOf(componentId);
      if (currentIndex === -1) return prev;

      const newOrder = [...prev.order];
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

      if (newIndex < 0 || newIndex >= newOrder.length) return prev;

      // Swap positions
      [newOrder[currentIndex], newOrder[newIndex]] = [newOrder[newIndex], newOrder[currentIndex]];

      return {
        ...prev,
        order: newOrder
      };
    });
  }, []);

  const updateComponentProps = useCallback((componentId: string, props: Record<string, any>) => {
    setConfig(prev => ({
      ...prev,
      componentProps: {
        ...prev.componentProps,
        [componentId]: props
      }
    }));
  }, []);

  const loadPreset = useCallback((presetId: string) => {
    const preset = getPresetById(presetId);
    if (preset) {
      setConfig(prev => ({
        ...prev,
        ...preset.config,
        componentProps: prev.componentProps // Preserve existing component props
      }));
    }
  }, []);

  return {
    config,
    updateVisibility,
    updateOrder,
    resetToDefault,
    toggleComponent,
    moveComponent,
    updateComponentProps,
    loadPreset
  };
}; 