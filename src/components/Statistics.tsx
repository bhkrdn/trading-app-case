interface StatisticsProps {
  open: number;
  previousClose: number;
  high: number;
  low: number;
}

export const Statistics = ({ open, previousClose, high, low }: StatisticsProps) => {
  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">İstatistikler</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Açılış</p>
            <p className="font-semibold text-lg">${open.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Önceki Kapanış</p>
            <p className="font-semibold text-lg">${previousClose.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">En Yüksek</p>
            <p className="font-semibold text-lg">${high.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">En Düşük</p>
            <p className="font-semibold text-lg">${low.toFixed(2)}</p>
          </div>
        </div>

        <button className="text-primary text-sm font-medium mt-2">
          Daha Fazla Göster
        </button>
      </div>
    </div>
  );
};