interface DividendDetailsProps {
  dividendDate?: string;
  paymentFrequency: string;
}

export const DividendDetails = ({ 
  dividendDate = "Açıklanmadı",
  paymentFrequency 
}: DividendDetailsProps) => {
  return (
    <div className="p-6 bg-background">
      <h3 className="font-semibold text-foreground mb-4 text-lg">Temettü Detayları</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Temettü Tarihi</p>
            <p className="font-semibold">{dividendDate}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Temettü Ödeme Sıklığı</p>
            <p className="font-semibold">{paymentFrequency}</p>
          </div>
        </div>

        <button className="text-primary text-sm font-medium mt-2">
          Şirketin Temettü Geçmişini Göster
        </button>
      </div>
    </div>
  );
};