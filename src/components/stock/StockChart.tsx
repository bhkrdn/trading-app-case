import { useState } from "react";

const mockData = [
  { x: 0, y: 180 },
  { x: 10, y: 175 },
  { x: 20, y: 185 },
  { x: 30, y: 190 },
  { x: 40, y: 195 },
  { x: 50, y: 188 },
  { x: 60, y: 192 },
  { x: 70, y: 198 },
  { x: 80, y: 205 },
  { x: 90, y: 210 },
  { x: 100, y: 213.55 }
];

const timePeriods = [
  { label: "1G", value: "1d" },
  { label: "1H", value: "1w" },
  { label: "1A", value: "1m" },
  { label: "3A", value: "3m" },
  { label: "1Y", value: "1y" },
  { label: "5Y", value: "5y" }
];

export const StockChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1A");
  
  // Generate SVG path from data points
  const generatePath = () => {
    const width = 350;
    const height = 200;
    const padding = 20;
    
    const maxY = Math.max(...mockData.map(d => d.y));
    const minY = Math.min(...mockData.map(d => d.y));
    const maxX = Math.max(...mockData.map(d => d.x));
    
    const scaleX = (width - 2 * padding) / maxX;
    const scaleY = (height - 2 * padding) / (maxY - minY);
    
    let path = "";
    
    mockData.forEach((point, index) => {
      const x = padding + point.x * scaleX;
      const y = height - padding - (point.y - minY) * scaleY;
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });
    
    return path;
  };

  return (
    <div className="p-4">
      {/* Chart */}
      <div className="mb-6 flex justify-center">
        <svg width="350" height="200" className="overflow-visible">
          <path
            d={generatePath()}
            fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="2.5"
            className="drop-shadow-sm"
          />
          {/* Last point indicator */}
          <circle
            cx={350 - 20 + 20}
            cy={200 - 20 - ((213.55 - 175) / (213.55 - 175)) * (200 - 40)}
            r="4"
            fill="hsl(var(--success))"
            className="drop-shadow-sm"
          />
        </svg>
      </div>

      {/* Time period selector */}
      <div className="flex items-center justify-center gap-4 mb-4">
        {timePeriods.map((period) => (
          <button
            key={period.value}
            onClick={() => setSelectedPeriod(period.label)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              selectedPeriod === period.label
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {period.label}
          </button>
        ))}
        <div className="flex gap-1 ml-2">
          <div className="w-2 h-6 bg-success rounded-sm"></div>
          <div className="w-2 h-6 bg-danger rounded-sm"></div>
          <div className="w-2 h-6 bg-muted rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};