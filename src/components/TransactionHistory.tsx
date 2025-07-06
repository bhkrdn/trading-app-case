import { ChevronRight } from "lucide-react";

export const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: "Piyasa Alış",
      symbol: "AAPL",
      date: "19 Nisan 2024",
      price: 165.42,
      quantity: 1
    }
  ];

  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">İşlem Geçmişi</h3>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between py-2">
            <div className="flex-1">
              <div className="font-medium text-foreground">
                {transaction.symbol} {transaction.type}
              </div>
              <div className="text-sm text-muted-foreground">
                {transaction.date}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="font-semibold text-foreground">
                  ${transaction.price.toFixed(2)}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};