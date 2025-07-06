export const TradingTrends = () => {
  const trendData = [
    { date: "03 Haz", netBuy: -5, netSell: 0 },
    { date: "10 Haz", netBuy: 35, netSell: 0 },
    { date: "18 Haz", netBuy: 0, netSell: -25 },
    { date: "26 Haz", netBuy: 20, netSell: 0 },
    { date: "03 Tem", netBuy: 40, netSell: 0 },
    { date: "10 Tem", netBuy: 15, netSell: 0 },
    { date: "18 Tem", netBuy: 10, netSell: 0 },
    { date: "26 Tem", netBuy: 20, netSell: 0 },
    { date: "03 Ağu", netBuy: 0, netSell: -10 },
    { date: "10 Ağu", netBuy: 0, netSell: -75 },
    { date: "18 Ağu", netBuy: 0, netSell: -50 },
    { date: "26 Ağu", netBuy: 15, netSell: 0 },
    { date: "03 Eyl", netBuy: 25, netSell: 0 },
    { date: "10 Eyl", netBuy: 0, netSell: -15 },
    { date: "18 Eyl", netBuy: 0, netSell: -15 },
    { date: "26 Eyl", netBuy: 0, netSell: -10 },
    { date: "03 Eki", netBuy: 0, netSell: -15 },
    { date: "10 Eki", netBuy: 0, netSell: -10 },
    { date: "18 Eki", netBuy: 0, netSell: -15 }
  ];

  const maxValue = Math.max(...trendData.map(d => Math.max(Math.abs(d.netBuy), Math.abs(d.netSell))));

  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">İşlem Trendleri</h3>
      
      <div className="relative h-64 mb-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
          <span>-25%</span>
          <span>-50%</span>
          <span>-75%</span>
          <span>-100%</span>
        </div>
        
        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-between gap-1">
          {trendData.map((data, index) => (
            <div key={index} className="flex flex-col items-center justify-end h-full flex-1">
              {/* Positive bar (Net Buy) */}
              {data.netBuy > 0 && (
                <div
                  className="bg-success rounded-t-sm w-full max-w-3"
                  style={{ height: `${(data.netBuy / maxValue) * 30}%` }}
                />
              )}
              
              {/* Zero line area */}
              <div className="h-1/2 flex items-center justify-center">
                {/* Negative bar (Net Sell) */}
                {data.netSell < 0 && (
                  <div
                    className="bg-danger rounded-b-sm w-full max-w-3"
                    style={{ height: `${(Math.abs(data.netSell) / maxValue) * 60}%` }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="ml-8 flex justify-between text-xs text-muted-foreground">
        <span>03 Haz</span>
        <span>10 Haz</span>
        <span>18 Haz</span>
        <span>26 Haz</span>
        <span>03 Tem</span>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-success rounded-full"></div>
          <span>Net Alış</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-danger rounded-full"></div>
          <span>Net Satış</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
        Midas'taki günlük net alış-satış adedi oranını gösterir. Tavsiye niteliği taşımaz.
      </p>
    </div>
  );
};