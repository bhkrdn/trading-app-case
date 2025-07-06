interface StockPriceProps {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  companyName?: string;
}

export const StockPrice = ({ 
  symbol, 
  price, 
  change, 
  changePercent, 
  companyName 
}: StockPriceProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="p-6 bg-background">
      <div className="flex items-center gap-3 mb-4">
        <img
          src="/stock_image.jpeg"
          alt="Apple Logo"
          className="w-10 h-10 rounded-full bg-foreground object-cover"
        />
        <div>
          <h2 className="font-semibold text-foreground">{companyName || "Apple"}</h2>
          <p className="text-sm text-muted-foreground">
            Piyasa Kapalı • Emrin açılışta gerçekleşir
          </p>
        </div>
      </div>
      
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground">
          ${price.toFixed(2)}
        </span>
        <div className={`flex items-center gap-1 ${
          isPositive ? 'text-success' : 'text-danger'
        }`}>
          <span className="text-sm font-medium">
            {isPositive ? '↗' : '↘'} {changePercent.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};