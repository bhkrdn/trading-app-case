import { useState, useEffect } from 'react';
import { X, Settings, Save } from 'lucide-react';
import { COMPONENT_REGISTRY } from '@/utils/componentRegistry';

interface ComponentConfigPanelProps {
  componentId: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (componentId: string, props: Record<string, any>) => void;
  currentProps: Record<string, any>;
}

export const ComponentConfigPanel = ({
  componentId,
  isOpen,
  onClose,
  onSave,
  currentProps
}: ComponentConfigPanelProps) => {
  const [localProps, setLocalProps] = useState(currentProps);
  const registryItem = COMPONENT_REGISTRY[componentId];

  useEffect(() => {
    setLocalProps(currentProps);
  }, [currentProps, componentId]);

  if (!isOpen || !registryItem) return null;

  const handleSave = () => {
    onSave(componentId, localProps);
    onClose();
  };

  const handleReset = () => {
    setLocalProps(registryItem.defaultProps);
  };

  const updateProp = (key: string, value: any) => {
    setLocalProps(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderPropEditor = (key: string, value: any) => {
    const type = typeof value;

    switch (type) {
      case 'string':
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => updateProp(key, e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          />
        );
      
      case 'number':
        return (
          <input
            type="number"
            step="any"
            value={value || 0}
            onChange={(e) => updateProp(key, parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          />
        );
      
      case 'boolean':
        return (
          <select
            value={value ? 'true' : 'false'}
            onChange={(e) => updateProp(key, e.target.value === 'true')}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        );
      
      default:
        return (
          <textarea
            value={JSON.stringify(value, null, 2)}
            onChange={(e) => {
              try {
                updateProp(key, JSON.parse(e.target.value));
              } catch {
                // Invalid JSON, ignore
              }
            }}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground font-mono text-sm"
            rows={3}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background border border-border rounded-lg w-full max-w-md mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            <h3 className="font-semibold text-foreground">
              Configure {registryItem.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          <div className="space-y-4">
            {Object.entries(registryItem.defaultProps).map(([key, defaultValue]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                {renderPropEditor(key, localProps[key] ?? defaultValue)}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-border">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Reset to Default
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 