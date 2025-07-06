import { useLayoutConfig } from '@/hooks/useLayoutConfig';
import { ControlPanel } from '@/components/ControlPanel';
import { DynamicStockScreen } from '@/components/DynamicStockScreen';
import { useState } from 'react';

const Dev = () => {
  const { 
    config, 
    toggleComponent, 
    moveComponent, 
    resetToDefault,
    updateOrder,
    updateComponentProps,
    loadPreset
  } = useLayoutConfig();

  const [showPanel, setShowPanel] = useState(true);

  return (
    <div className="flex h-screen bg-background relative">
      {/* Control Panel */}
      {showPanel && (
        <ControlPanel
          config={config}
          onToggleComponent={toggleComponent}
          onMoveComponent={moveComponent}
          onResetToDefault={resetToDefault}
          onReorder={updateOrder}
          onUpdateComponentProps={updateComponentProps}
          onLoadPreset={loadPreset}
          onHidePanel={() => setShowPanel(false)}
        />
      )}
      
      {/* Stock Screen Preview */}
      <div className="flex-1 h-screen overflow-y-auto relative">
        <DynamicStockScreen config={config} />
        {!showPanel && (
          <button
            onClick={() => setShowPanel(true)}
            className="fixed left-2 top-1/2 -translate-y-1/2 z-30 px-3 py-2 bg-muted text-muted-foreground rounded-full shadow border border-border hover:bg-muted/80"
          >
            Show Controls
          </button>
        )}
      </div>
    </div>
  );
};

export default Dev; 