import React from 'react';
import { Info } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

const FEAR_GREED_IMAGE = '/fear_and_greed_image.png';

export interface FearGreedIndexV3Props {
  value?: number;
  label?: string;
  description?: string;
}

export const FearGreedIndexV3: React.FC<FearGreedIndexV3Props> = ({
  value = 78,
  label = 'Extreme Greed',
  description = 'is driving the US market',
}) => {
  return (
    <div className="p-6 bg-background rounded-xl border border-border shadow-sm">
      <div className="flex items-center mb-4">
        <div className="text-lg font-semibold text-foreground flex-1">Fear & Greed Index</div>
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted-foreground/20 transition-colors"
              aria-label="Info"
            >
              <Info className="w-4 h-4" />
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
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <img
            src={FEAR_GREED_IMAGE}
            alt="Fear & Greed Index Gauge"
            className="w-28 h-16 object-contain"
          />
        </div>
        <div>
          <div className="text-lg font-bold text-success mb-1">{label}</div>
          <div className="text-base text-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default FearGreedIndexV3; 