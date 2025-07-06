interface TradingActionsProps {
  onBuy?: () => void;
  onSell?: () => void;
}

export const TradingActions = ({ onBuy, onSell }: TradingActionsProps) => {
  return (
    <div className="p-4 bg-background border-t border-border">
      {/* Position Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Pozisyonum</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Adet</p>
            <p className="font-medium">—</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Toplam Değer</p>
            <p className="font-medium">—</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onSell}
          className="flex-1 py-4 bg-danger text-danger-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          SAT
        </button>
        <button
          onClick={onBuy}
          className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          AL
        </button>
      </div>
    </div>
  );
};