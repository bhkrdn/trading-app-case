import { ChevronUp, ChevronDown, Eye, EyeOff, RotateCcw, Settings, Palette } from 'lucide-react';
import { COMPONENT_REGISTRY } from '@/utils/componentRegistry';
import { LayoutConfig } from '@/types/layout';
import { DragDropReorder } from './DragDropReorder';
import { ComponentConfigPanel } from './ComponentConfigPanel';
import { useState } from 'react';
import { getPresetNames, getPresetById } from '@/utils/layoutPresets';

interface ControlPanelProps {
  config: LayoutConfig;
  onToggleComponent: (componentId: string) => void;
  onMoveComponent: (componentId: string, direction: 'up' | 'down') => void;
  onResetToDefault: () => void;
  onReorder: (newOrder: string[]) => void;
  onUpdateComponentProps: (componentId: string, props: Record<string, any>) => void;
  onLoadPreset: (presetId: string) => void;
}

export const ControlPanel = ({ 
  config, 
  onToggleComponent, 
  onMoveComponent, 
  onResetToDefault,
  onReorder,
  onUpdateComponentProps,
  onLoadPreset
}: ControlPanelProps) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  const [activeTab, setActiveTab] = useState<'components' | 'presets'>('components');
  return (
    <div className="w-80 bg-card border-r border-border p-4 overflow-y-auto h-screen">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Layout Controls</h2>
        <p className="text-sm text-muted-foreground">
          Modify the stock screen layout and component visibility
        </p>
      </div>

      {/* Tabs */}
      <div className="flex mb-4 border-b border-border">
        <button
          onClick={() => setActiveTab('components')}
          className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === 'components'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Components
        </button>
        <button
          onClick={() => setActiveTab('presets')}
          className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === 'presets'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Presets
        </button>
      </div>

      {/* Reset Button */}
      <div className="mb-6">
        <button
          onClick={onResetToDefault}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset to Default
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'components' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">Components</h3>
            <button
              onClick={() => {
                setSelectedComponent('stock-price');
                setShowConfigPanel(true);
              }}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              title="Configure Component"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
          
          <DragDropReorder
            items={config.order}
            visibility={config.visibility}
            onReorder={onReorder}
            onToggleVisibility={onToggleComponent}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Layout Presets</h3>
          <div className="space-y-2">
            {getPresetNames().map((preset) => (
              <button
                key={preset.id}
                onClick={() => onLoadPreset(preset.id)}
                className="w-full text-left p-3 border border-border rounded-lg bg-background hover:bg-muted transition-colors"
              >
                <div className="font-medium text-foreground">{preset.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {getPresetById(preset.id)?.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <div>Visible: {Object.values(config.visibility).filter(Boolean).length}</div>
          <div>Total: {config.order.length}</div>
        </div>
      </div>

      {/* Component Configuration Panel */}
      {showConfigPanel && selectedComponent && (
        <ComponentConfigPanel
          componentId={selectedComponent}
          isOpen={showConfigPanel}
          onClose={() => {
            setShowConfigPanel(false);
            setSelectedComponent(null);
          }}
          onSave={onUpdateComponentProps}
          currentProps={config.componentProps?.[selectedComponent] || COMPONENT_REGISTRY[selectedComponent]?.defaultProps || {}}
        />
      )}
    </div>
  );
}; 