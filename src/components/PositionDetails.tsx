interface PositionDetailsProps {
  quantity: number;
  totalValue: number;
  averagePrice: number;
  portfolioDistribution: number;
  todayReturn: number;
  todayReturnPercent: number;
  totalReturn: number;
  totalReturnPercent: number;
}

export const PositionDetails = ({
  quantity,
  totalValue,
  averagePrice,
  portfolioDistribution,
  todayReturn,
  todayReturnPercent,
  totalReturn,
  totalReturnPercent
}: PositionDetailsProps) => {
  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">Pozisyonum</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Adet</p>
            <p className="font-semibold text-lg">{quantity}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Toplam Değer</p>
            <p className="font-semibold text-lg">${totalValue.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Ort. Fiyat</p>
            <p className="font-semibold text-lg">${averagePrice.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Portföy Dağılımı</p>
            <p className="font-semibold text-lg">{portfolioDistribution.toFixed(2)}%</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Bugünkü Getiri</p>
          </div>
          <div className="text-right">
            <p className={`font-semibold text-lg ${todayReturn >= 0 ? 'text-success' : 'text-danger'}`}>
              ${todayReturn.toFixed(2)} ({todayReturnPercent >= 0 ? '+' : ''}{todayReturnPercent.toFixed(2)}%)
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Toplam Getiri</p>
          </div>
          <div className="text-right">
            <p className={`font-semibold text-lg ${totalReturn >= 0 ? 'text-success' : 'text-danger'}`}>
              ${totalReturn.toFixed(2)} ({totalReturnPercent >= 0 ? '+' : ''}{totalReturnPercent.toFixed(2)}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};