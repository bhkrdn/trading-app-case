import { useLayoutConfig } from '@/hooks/useLayoutConfig';
import { ControlPanel } from '@/components/development/ControlPanel';
import { DynamicStockScreen } from '@/components/development/DynamicStockScreen';
import Markets from '@/pages/Markets';
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
  const [devMode, setDevMode] = useState<'stock' | 'markets'>('stock');
  
  // Markets page controls
  const [showFullFearGreed, setShowFullFearGreed] = useState(true);
  const [showCompactFearGreed, setShowCompactFearGreed] = useState(true);

  return (
    <div className="flex h-screen bg-background relative">
      {/* Control Panel */}
      {showPanel && (
        <div className="w-80 border-r border-border bg-card">
          {/* Mode Selector */}
          <div className="p-4 border-b border-border">
            <h3 className="text-sm font-semibold mb-2">Dev Mode</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setDevMode('stock')}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  devMode === 'stock' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Stock Screen
              </button>
              <button
                onClick={() => setDevMode('markets')}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  devMode === 'markets' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Markets Page
              </button>
            </div>
          </div>
          
          {/* Control Panel - Only show for stock mode */}
          {devMode === 'stock' && (
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
      
          {/* Markets Controls */}
          {devMode === 'markets' && (
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-3">Fear & Greed Index Controls</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-muted-foreground">Full F&G Index</label>
                    <button
                      onClick={() => setShowFullFearGreed(!showFullFearGreed)}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        showFullFearGreed 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {showFullFearGreed ? 'ON' : 'OFF'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-muted-foreground">Compact F&G Index</label>
                    <button
                      onClick={() => setShowCompactFearGreed(!showCompactFearGreed)}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        showCompactFearGreed 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {showCompactFearGreed ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold mb-3">Markets Page Info</h3>
                <div className="space-y-3 text-xs text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-1">Features:</p>
                    <ul className="space-y-1 ml-2">
                      <li>• Market indices display</li>
                      <li>• Fear & Greed Index</li>
                      <li>• Top stocks listing</li>
                      <li>• Tab navigation (ABD, BİST, Fonlar, Kripto)</li>
                      <li>• Mobile-responsive design</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Navigation:</p>
                    <p>Use the back button to return to previous page</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Bottom Nav:</p>
                    <p>Fixed bottom navigation with 5 tabs</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Content Preview */}
      <div className="flex-1 h-screen overflow-y-auto relative">
        {devMode === 'stock' ? (
        <DynamicStockScreen config={config} />
        ) : (
          <div className="max-w-md mx-auto">
            <Markets 
              showFullFearGreed={showFullFearGreed}
              showCompactFearGreed={showCompactFearGreed}
            />
          </div>
        )}
        
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