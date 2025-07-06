import { StockHeader } from "@/components/StockHeader";
import { StockPrice } from "@/components/StockPrice";
import { StockChart } from "@/components/StockChart";
import { PositionDetails } from "@/components/PositionDetails";
import { Statistics } from "@/components/Statistics";
import { DividendDetails } from "@/components/DividendDetails";
import { AnalystEstimates } from "@/components/AnalystEstimates";
import { TradingTrends } from "@/components/TradingTrends";
import { RelatedStocks } from "@/components/RelatedStocks";
import { RelatedNews } from "@/components/RelatedNews";
import { TransactionHistory } from "@/components/TransactionHistory";
import { TradingActions } from "@/components/TradingActions";
import { toast } from "@/hooks/use-toast";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-background">
        <StockHeader symbol="AAPL" />
      </div>
      
      {/* Scrollable Content */}
      <div className="pb-20"> {/* Space for fixed trading actions */}
        <StockPrice
          symbol="AAPL"
          price={213.55}
          change={1.11}
          changePercent={0.52}
          companyName="Apple"
        />
        
        <StockChart />
        
        <PositionDetails
          quantity={1}
          totalValue={213.55}
          averagePrice={165.42}
          portfolioDistribution={13.87}
          todayReturn={1.11}
          todayReturnPercent={0.52}
          totalReturn={48.12}
          totalReturnPercent={29.09}
        />
        
        <Statistics
          open={212.15}
          previousClose={212.44}
          high={214.65}
          low={211.81}
        />
        
        <DividendDetails
          paymentFrequency="Yılda 4 Kez"
        />
        
        <AnalystEstimates
          averageTarget={226.36}
          highTarget={270.00}
          lowTarget={173.00}
          buyPercent={56}
          buyAnalysts={15}
          holdPercent={37}
          holdAnalysts={10}
          sellPercent={7}
          sellAnalysts={2}
        />
        
        <TradingTrends />
        
        <RelatedStocks />
        
        <RelatedNews />
        
        <TransactionHistory />
      </div>
      
      {/* Fixed Trading Actions */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background">
        <TradingActions onBuy={handleBuy} onSell={handleSell} />
      </div>
    </div>
  );
};

export default Index;
