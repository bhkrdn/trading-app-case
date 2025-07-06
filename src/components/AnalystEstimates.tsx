interface AnalystEstimatesProps {
  averageTarget: number;
  highTarget: number;
  lowTarget: number;
  buyPercent: number;
  buyAnalysts: number;
  holdPercent: number;
  holdAnalysts: number;
  sellPercent: number;
  sellAnalysts: number;
}

export const AnalystEstimates = ({
  averageTarget,
  highTarget,
  lowTarget,
  buyPercent,
  buyAnalysts,
  holdPercent,
  holdAnalysts,
  sellPercent,
  sellAnalysts
}: AnalystEstimatesProps) => {
  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">Analist Tahminleri</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Ortalama Fiyat Hedefi</p>
          <p className="font-bold text-2xl">${averageTarget.toFixed(2)}</p>
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>En yüksek verilen fiyat hedefi ${highTarget.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>En düşük verilen fiyat hedefi ${lowTarget.toFixed(2)}</span>
        </div>

        <div className="space-y-3 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <span className="font-medium text-primary">Al</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${buyPercent}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium ml-4">
              {buyPercent}% ({buyAnalysts} Analist)
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <span className="font-medium text-muted-foreground">Tut</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-muted-foreground h-2 rounded-full" 
                  style={{ width: `${holdPercent}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium ml-4">
              {holdPercent}% ({holdAnalysts} Analist)
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <span className="font-medium text-danger">Sat</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-danger h-2 rounded-full" 
                  style={{ width: `${sellPercent}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium ml-4">
              {sellPercent}% ({sellAnalysts} Analist)
            </span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground mt-4 leading-relaxed">
          Son 3 ayda 27 analistin verdiği tahminlerdir.<br />
          Bu veriler yatırım tavsiyesi değildir.
        </div>
      </div>
    </div>
  );
};