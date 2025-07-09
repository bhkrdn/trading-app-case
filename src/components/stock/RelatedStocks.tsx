import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const RelatedStocks = () => {
  const relatedStocks = [
    {
      symbol: "TSLA",
      name: "Tesla",
      change: -0.10,
      changePercent: -0.10,
      logo: "🔴" // Using emoji as placeholder
    },
    {
      symbol: "NVDA", 
      name: "NVIDIA",
      change: 1.33,
      changePercent: 1.33,
      logo: "🟢"
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Class A", 
      change: 0.50,
      changePercent: 0.50,
      logo: "🔵"
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      change: 0.85,
      changePercent: 0.85,
      logo: "🟦"
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      change: -0.25,
      changePercent: -0.25,
      logo: "🟠"
    }
  ];

  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">Birlikte Alınan Hisseler</h3>
      <p className="text-sm text-muted-foreground mb-4">
        AAPL hissesi olan Midas kullanıcılarının birlikte aldığı diğer hisseler
      </p>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 pb-4">
          {relatedStocks.map((stock, index) => (
            <div key={index} className="flex-shrink-0 w-32 p-4 bg-muted/50 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-2 text-xl">
                  {stock.logo}
                </div>
                <div className="font-semibold text-foreground text-sm mb-1">
                  {stock.symbol}
                </div>
                <div className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {stock.name}
                </div>
                <div className={`text-xs font-medium ${stock.changePercent >= 0 ? 'text-success' : 'text-danger'}`}>
                  {stock.changePercent >= 0 ? '↗' : '↘'} {stock.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};