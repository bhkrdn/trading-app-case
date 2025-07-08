import React from 'react';
import { Info } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

const FEAR_GREED_IMAGE = '/fear_and_greed_modular.png';

export interface FearGreedIndexV2Props {
  value?: number;
  label?: string;
  description?: string;
}

export const FearGreedIndexV2: React.FC<FearGreedIndexV2Props> = ({
  value = 78,
  label = 'Aşırı Açgözlülük',
  description = 'is driving the US market',
}) => {
  return (
    <div className="p-3 bg-background rounded-xl border border-border shadow-sm">
      <div className="flex items-center mb-2">
        <div className="text-base font-semibold text-foreground flex-1">Fear & Greed Index</div>
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted-foreground/20 transition-colors"
              aria-label="Info"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-2xl p-6 max-w-md mx-auto pb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full mb-6" />
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Info className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-xl text-foreground mb-4">Fear & Greed Index</h4>
              <p className="text-base text-muted-foreground mb-3">
                The Fear & Greed Index measures the emotions driving the market. A higher value indicates more greed, while a lower value signals more fear among investors.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                This index is a composite of several market indicators and is not investment advice.
              </p>
              <SheetClose asChild>
                <button className="w-full py-4 bg-blue-600 text-white rounded-full font-bold text-base uppercase tracking-wide shadow-sm hover:bg-blue-700 transition-colors">
                  OK
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={FEAR_GREED_IMAGE}
            alt="Fear & Greed Index Modular Gauge"
            className="w-24 h-12 object-contain"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-success whitespace-nowrap">{label}</span>
          <span className="text-sm text-foreground whitespace-nowrap">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default FearGreedIndexV2; 