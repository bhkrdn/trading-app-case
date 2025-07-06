export const RelatedNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Yılın ikinci yarısına girerken portföyüne sorman gereken 5 soru",
      timeAgo: "1 gün önce",
      tickers: [
        { symbol: "TUR", change: -0.09, changePercent: -0.09 },
        { symbol: "TQQQ", change: 2.80, changePercent: 2.80 }
      ],
      readCount: 19,
      image: "📊" // Using emoji as placeholder
    },
    {
      id: 2,
      title: "Alibaba 1,5 milyar dolarlık tahvil ihraç etti",
      timeAgo: "2 gün önce", 
      tickers: [
        { symbol: "AAPL", change: 0.52, changePercent: 0.52 },
        { symbol: "BABA", change: -1.82, changePercent: -1.82 }
      ],
      readCount: 0,
      image: "🏢"
    }
  ];

  return (
    <div className="p-6 bg-background">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground text-lg">İlgili Haberler</h3>
        <button className="text-primary text-sm font-medium">
          Tümünü Gör
        </button>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((news) => (
          <div key={news.id} className="flex gap-3">
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-1">
                {news.timeAgo}
              </div>
              <h4 className="font-medium text-foreground leading-tight mb-3">
                {news.title}
              </h4>
              
              <div className="flex items-center gap-2 flex-wrap">
                {news.tickers.map((ticker, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-sm font-medium text-foreground">
                      {ticker.symbol}
                    </span>
                    <span className={`text-sm font-medium ${
                      ticker.changePercent >= 0 ? 'text-success' : 'text-danger'
                    }`}>
                      {ticker.changePercent.toFixed(2)}%
                    </span>
                  </div>
                ))}
                {news.readCount > 0 && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      +{news.readCount}
                    </span>
                  </>
                )}
              </div>
            </div>
            
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
              {news.image}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};