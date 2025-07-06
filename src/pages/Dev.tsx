import { useLayoutConfig } from '@/hooks/useLayoutConfig';
import { ControlPanel } from '@/components/ControlPanel';
import { DynamicStockScreen } from '@/components/DynamicStockScreen';
import { getPresetById } from '@/utils/layoutPresets';

const Dev = () => {
  const { 
    config, 
    toggleComponent, 
    moveComponent, 
    resetToDefault,
    updateOrder,
    updateComponentProps
  } = useLayoutConfig();

  const handleLoadPreset = (presetId: string) => {
    const preset = getPresetById(presetId);
    if (preset) {
      // Update the config with preset values
      // This is a simplified implementation - in a real app you'd want to merge properly
      Object.assign(config, preset.config);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Control Panel */}
      <ControlPanel
        config={config}
        onToggleComponent={toggleComponent}
        onMoveComponent={moveComponent}
        onResetToDefault={resetToDefault}
        onReorder={updateOrder}
        onUpdateComponentProps={updateComponentProps}
        onLoadPreset={handleLoadPreset}
      />
      
      {/* Stock Screen Preview */}
      <div className="flex-1 overflow-hidden">
        <DynamicStockScreen config={config} />
      </div>
    </div>
  );
};

export default Dev; 