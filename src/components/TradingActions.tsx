interface TradingActionsProps {
  onBuy?: () => void;
  onSell?: () => void;
}

export const TradingActions = ({ onBuy, onSell }: TradingActionsProps) => {
  return (
    <div className="p-4 bg-background border-t border-border">
      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onSell}
          className="flex-1 py-4 bg-red-100 text-red-500 rounded-full font-bold text-lg uppercase tracking-wide shadow-sm hover:bg-red-200 transition-colors"
        >
          SAT
        </button>
        <button
          onClick={onBuy}
          className="flex-1 py-4 bg-blue-600 text-white rounded-full font-bold text-lg uppercase tracking-wide shadow-sm hover:bg-blue-700 transition-colors"
        >
          AL
        </button>
      </div>
    </div>
  );
};