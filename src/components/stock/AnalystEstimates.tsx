import { Info } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

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
      <div className="flex items-center mb-4">
        <h3 className="font-semibold text-foreground text-lg flex-1">Analist Tahminleri</h3>
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted-foreground/20 transition-colors"
              aria-label="Bilgi"
            >
              <Info className="w-4 h-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-2xl p-6 max-w-md mx-auto pb-8">
            <div className="flex flex-col items-center text-center">
              {/* Drag indicator */}
              <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full mb-6" />
              {/* Large info icon in a light circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Info className="w-8 h-8 text-blue-600" />
              </div>
              {/* Title */}
              <h4 className="font-bold text-xl text-foreground mb-4">Bilgi</h4>
              {/* Explanatory text */}
              <p className="text-base text-muted-foreground mb-3">
                Analist Tahminleri, yatırım bankaları, aracı kurumlar ve portföy yönetim şirketlerinin ya da bu şirketlerde görev yapan analistlerin hisselerle ilgili yaptığı tahminleri içermektedir.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Analistler, yaptıkları araştırmalar sonucunda hisse fiyatları için 12 aylık hedeflerini ve hisse alımı ile ilgili tahminlerini (al, tut ya da sat) açıklarlar.
              </p>
              {/* TAMAM button */}
              <SheetClose asChild>
                <button className="w-full py-4 bg-blue-600 text-white rounded-full font-bold text-base uppercase tracking-wide shadow-sm hover:bg-blue-700 transition-colors">
                  TAMAM
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
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