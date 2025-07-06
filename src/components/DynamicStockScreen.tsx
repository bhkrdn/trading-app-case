import { COMPONENT_REGISTRY } from '@/utils/componentRegistry';
import { LayoutConfig } from '@/types/layout';
import { TradingActions } from './TradingActions';
import { toast } from '@/hooks/use-toast';

interface DynamicStockScreenProps {
  config: LayoutConfig;
}

export const DynamicStockScreen = ({ config }: DynamicStockScreenProps) => {
  const handleBuy = () => {
    toast({
      title: "Alış Emri",
      description: "Alış emri ekranı açılacak",
    });
  };

  const handleSell = () => {
    toast({
      title: "Satış Emri", 
      description: "Satış emri ekranı açılacak",
    });
  };

  // Filter visible components and sort by order, but skip 'stock-header' for the dynamic list
  const visibleComponents = config.order
    .filter(componentId => componentId !== 'stock-header' && config.visibility[componentId])
    .map(componentId => {
      const registryItem = COMPONENT_REGISTRY[componentId];
      if (!registryItem) {
        console.warn(`Component ${componentId} not found in registry`);
        return null;
      }
      
      const Component = registryItem.component;
      const props = config.componentProps?.[componentId] || registryItem.defaultProps || {};
      
      return {
        id: componentId,
        component: Component,
        props,
        name: registryItem.name
      };
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      {/* Fixed Header - Always show StockHeader if visible */}
      {config.visibility['stock-header'] && (
        <div className="sticky top-0 z-10 bg-background">
          {(() => {
            const { component: StockHeaderComponent, defaultProps } = COMPONENT_REGISTRY['stock-header'];
            return <StockHeaderComponent {...defaultProps} />;
          })()}
        </div>
      )}
      
      {/* Scrollable Content */}
      <div className="pb-16"> {/* Space for fixed trading actions */}
        {visibleComponents.map(({ id, component: Component, props }) => (
          <div key={id}>
            <Component {...props} />
          </div>
        ))}
      </div>
      
      {/* Fixed Trading Actions - Always show */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background">
        <TradingActions onBuy={handleBuy} onSell={handleSell} />
      </div>
    </div>
  );
}; 