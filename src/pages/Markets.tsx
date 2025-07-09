import { ArrowLeft, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FearGreedIndexV1Modular } from "@/components/markets/FearGreedIndexV1Modular";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MarketsProps {
  showFullFearGreed?: boolean;
  showCompactFearGreed?: boolean;
}

const Markets = ({ showFullFearGreed = true, showCompactFearGreed = true }: MarketsProps) => {
  const navigate = useNavigate();

  const marketIndices = [
    { symbol: "SPY", name: "S&P 500", change: 0.79, isPositive: true },
    { symbol: "QQQ", name: "NASDAQ", change: 0.98, isPositive: true },
    { symbol: "DIA", name: "DOW", change: 0.76, isPositive: true },
    { symbol: "USDTRY", name: "ABD Doları", change: 0.00, isPositive: false },
    { symbol: "XU030", name: "BIST", change: 0.60, isPositive: true }
  ];

  const topStocks = [
    {
      rank: 1,
      symbol: "WULF",
      name: "TeraWulf Inc. Common Stock",
      change: 4.37,
      isPositive: true,
      logo: "W"
    },
    {
      rank: 2,
      symbol: "TSLL",
      name: "Direxion Long Tesla Hissesi 2X Kaldıraçlı Borsa Yatırım Fonu (Daily",
      change: -0.43,
      isPositive: false,
      logo: "T"
    },
    {
      rank: 3,
      symbol: "BTBT",
      name: "Bit Digital, Inc. Ordinary Shares",
      change: 11.79,
      isPositive: true,
      logo: "B"
    },
    {
      rank: 4,
      symbol: "SQQQ",
      name: "ProShares -3X Short NASDAQ 100 Endeksi ETF (UltraPro Short QQQ)",
      change: -2.70,
      isPositive: false,
      logo: "S"
    },
    {
      rank: 5,
      symbol: "RCC",
      name: "Regencell Bioscience Holdings Limited Ordinary Shares",
      change: 121.91,
      isPositive: true,
      logo: "R"
    }
  ];

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-background border-b border-border">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Piyasalar</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Market Tabs */}
        <Tabs defaultValue="abd" className="w-full">
          <div className="px-4 pt-4">
            <TabsList className="w-full grid grid-cols-4 h-auto p-1">
              <TabsTrigger value="abd" className="text-xs py-2">ABD Borsası</TabsTrigger>
              <TabsTrigger value="bist" className="text-xs py-2">BİST</TabsTrigger>
              <TabsTrigger value="fonlar" className="text-xs py-2">Fonlar</TabsTrigger>
              <TabsTrigger value="kripto" className="text-xs py-2">Kripto</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="abd" className="mt-4">
            {/* Fear & Greed Index */}
            {showFullFearGreed && (
            <div className="px-4 mb-4">
              <FearGreedIndexV1Modular 
                value={78}
                label="Extreme Greed"
                description="is driving the US market"
              />
            </div>
            )}

            {/* Market Indices */}
            <ScrollArea className="w-full whitespace-nowrap px-4">
              <div className="flex gap-4 pb-4">
                {/* Fear & Greed Index - Compact Version */}
                {showCompactFearGreed && (
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-xs text-muted-foreground">F&G</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="p-0.5 hover:bg-muted rounded-full transition-colors">
                            <Info className="w-3 h-3 text-muted-foreground" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Fear & Greed Index</p>
                          <p className="text-xs text-muted-foreground">Market sentiment indicator</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="font-medium text-sm text-foreground mb-1">Fear & Greed</div>
                  <div className="text-sm font-semibold text-success">78</div>
                </div>
                )}
                
                {marketIndices.map((index, i) => (
                  <div key={i} className="flex-shrink-0 w-24 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{index.symbol}</div>
                    <div className="font-medium text-sm text-foreground mb-1">{index.name}</div>
                    <div className={`text-sm font-semibold ${
                      index.isPositive ? 'text-success' : 'text-muted-foreground'
                    }`}>
                      {index.change.toFixed(2)}%
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {/* Today's Highlights */}
            <div className="px-4 mt-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Günün Öne Çıkanları</h2>
              
              {/* Filter Tabs */}
              <Tabs defaultValue="populer" className="w-full">
                <TabsList className="w-full grid grid-cols-4 h-auto p-1 mb-4">
                  <TabsTrigger value="populer" className="text-xs py-2">Popüler</TabsTrigger>
                  <TabsTrigger value="hacim" className="text-xs py-2">Hacim</TabsTrigger>
                  <TabsTrigger value="yukselen" className="text-xs py-2">Yükselen</TabsTrigger>
                  <TabsTrigger value="dusen" className="text-xs py-2">Düşen</TabsTrigger>
                </TabsList>

                <TabsContent value="populer">
                  {/* Stock List Header */}
                  <div className="flex justify-between items-center mb-4 text-xs text-muted-foreground">
                    <span>#    Hisse</span>
                    <span>Günlük Değişim</span>
                  </div>

                  {/* Stock List */}
                  <div className="space-y-4">
                    {topStocks.map((stock) => (
                      <div key={stock.rank} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <span className="text-muted-foreground text-sm w-4">{stock.rank}</span>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            stock.logo === 'W' ? 'bg-blue-600' :
                            stock.logo === 'T' ? 'bg-orange-500' :
                            stock.logo === 'B' ? 'bg-yellow-500' :
                            stock.logo === 'S' ? 'bg-green-600' :
                            'bg-blue-800'
                          }`}>
                            {stock.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-foreground text-sm">{stock.symbol}</div>
                            <div className="text-xs text-muted-foreground truncate">{stock.name}</div>
                          </div>
                        </div>
                        
                        <div className={`text-sm font-semibold ${
                          stock.isPositive ? 'text-success' : 'text-danger'
                        }`}>
                          {stock.isPositive ? '+' : ''}{stock.change.toFixed(2)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="hacim">
                  <div className="text-center py-8 text-muted-foreground">
                    Hacim verileri yükleniyor...
                  </div>
                </TabsContent>
                
                <TabsContent value="yukselen">
                  <div className="text-center py-8 text-muted-foreground">
                    Yükselen hisseler yükleniyor...
                  </div>
                </TabsContent>
                
                <TabsContent value="dusen">
                  <div className="text-center py-8 text-muted-foreground">
                    Düşen hisseler yükleniyor...
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          <TabsContent value="bist">
            <div className="text-center py-8 text-muted-foreground px-4">
              BİST verileri yükleniyor...
            </div>
          </TabsContent>

          <TabsContent value="fonlar">
            <div className="text-center py-8 text-muted-foreground px-4">
              Fon verileri yükleniyor...
            </div>
          </TabsContent>

          <TabsContent value="kripto">
            <div className="text-center py-8 text-muted-foreground px-4">
              Kripto verileri yükleniyor...
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background border-t border-border">
        <div className="flex justify-around py-2">
          <button 
            onClick={() => navigate("/")}
            className="flex flex-col items-center p-2 text-muted-foreground"
          >
            <div className="w-6 h-6 mb-1">📊</div>
            <span className="text-xs">Yatırım</span>
          </button>
          <button className="flex flex-col items-center p-2 text-muted-foreground">
            <div className="w-6 h-6 mb-1">₿</div>
            <span className="text-xs">Kripto</span>
          </button>
          <button className="flex flex-col items-center p-2 text-muted-foreground">
            <div className="w-6 h-6 mb-1">🔍</div>
            <span className="text-xs">Keşfet</span>
          </button>
          <button className="flex flex-col items-center p-2 text-primary">
            <div className="w-6 h-6 mb-1">📈</div>
            <span className="text-xs font-medium">Piyasalar</span>
          </button>
          <button className="flex flex-col items-center p-2 text-muted-foreground">
            <div className="w-6 h-6 mb-1">☰</div>
            <span className="text-xs">Menü</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Markets;