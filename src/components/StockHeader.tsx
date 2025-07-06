import { ArrowLeft, Bookmark, Clock, Upload } from "lucide-react";

interface StockHeaderProps {
  symbol: string;
  onBack?: () => void;
}

export const StockHeader = ({ symbol, onBack }: StockHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-muted rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold">{symbol}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <Clock className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <Upload className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};