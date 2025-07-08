import React from "react";

// Placeholder icons (replace with SVGs or icon components as needed)
const MuteIcon = () => (
  <span role="img" aria-label="mute" className="inline-block w-5 h-5 align-middle">🔇</span>
);
const WifiIcon = () => (
  <span role="img" aria-label="wifi" className="inline-block w-5 h-5 align-middle">📶</span>
);
const BatteryIcon = () => (
  <span role="img" aria-label="battery" className="inline-block w-5 h-5 align-middle">🔋</span>
);

const navTabs = ["ABD Borsası", "BIST", "Fonlar", "Kripto"];
const summaryCards = [
  { ticker: "SPY", name: "S&P 500", change: 0.79 },
  { ticker: "QQQ", name: "NASDAQ", change: 0.98 },
  { ticker: "DIA", name: "DOW", change: 0.76 },
  { ticker: "USDTRY", name: "ABD Doları", change: 0.0 },
  { ticker: "XU030", name: "BIST 100", change: 0.6 },
];
const highlightsTabs = ["Popüler", "Hacim", "Yükselen", "Düşen"];
const highlights = [
  {
    rank: 1,
    logo: "https://logo.clearbit.com/terawulf.com", // Placeholder
    symbol: "WULF",
    name: "TeraWulf Inc. Common Stock",
    change: 4.37,
  },
  {
    rank: 2,
    logo: "https://logo.clearbit.com/tesla.com", // Placeholder
    symbol: "TSLL",
    name: "Direxion Long Tesla Hissesi 2X Kaldıraçlı Borsa Yatırım Fonu (Daily)",
    change: -0.43,
  },
  {
    rank: 3,
    logo: "https://logo.clearbit.com/bit-digital.com", // Placeholder
    symbol: "BTBT",
    name: "Bit Digital, Inc. Ordinary Shares",
    change: 11.79,
  },
  {
    rank: 4,
    logo: "https://logo.clearbit.com/proshares.com", // Placeholder
    symbol: "SQQQ",
    name: "ProShares -3X Short NASDAQ 100 Endeksi ETF (UltraPro Short QQQ)",
    change: -2.7,
  },
  {
    rank: 5,
    logo: "https://logo.clearbit.com/regencellbioscience.com", // Placeholder
    symbol: "RGC",
    name: "Regencell Bioscience Holdings Limited Ordinary Shares",
    change: 121.91,
  },
];
const bottomNav = [
  { label: "Yatırım", icon: "📊" },
  { label: "Kripto", icon: "₿" },
  { label: "Keşfet", icon: "🔍" },
  { label: "Piyasalar", icon: "📈" },
  { label: "Menü", icon: "☰" },
];

const Piyasalar = () => {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 text-xs text-gray-700">
        <span className="font-mono tracking-widest">00:47</span>
        <MuteIcon />
        <div className="flex items-center gap-1">
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h1 className="text-3xl font-bold px-4 pt-2 pb-1">Piyasalar</h1>

        {/* Main Tabs */}
        <div className="flex border-b border-gray-200 px-2">
          {navTabs.map((tab, i) => (
            <div
              key={tab}
              className={`flex-1 text-center py-2 font-medium text-base cursor-pointer ${i === 0 ? "text-blue-700 border-b-2 border-blue-700 bg-white" : "text-gray-500"}`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Market Summary Cards */}
        <div className="flex overflow-x-auto gap-2 px-2 py-3">
          {summaryCards.map((card) => (
            <div
              key={card.ticker}
              className="flex flex-col items-center min-w-[90px] bg-gray-50 rounded-lg py-2 px-2"
            >
              <span className="text-xs text-gray-400 font-semibold">{card.ticker}</span>
              <span className="text-sm font-medium text-gray-700">{card.name}</span>
              <span className={`text-sm font-semibold ${card.change > 0 ? "text-green-600" : card.change < 0 ? "text-red-500" : "text-gray-500"}`}>
                {card.change > 0 ? "+" : ""}{card.change.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}%
              </span>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="px-4 pt-2">
          <h2 className="text-xl font-bold mb-2">Günün Öne Çıkanları</h2>
          {/* Highlights Tabs */}
          <div className="flex gap-2 mb-2">
            {highlightsTabs.map((tab, i) => (
              <div
                key={tab}
                className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${i === 0 ? "bg-gray-200 text-gray-900" : "text-gray-500"}`}
              >
                {tab}
              </div>
            ))}
          </div>
          {/* Table Header */}
          <div className="flex text-xs text-gray-400 font-semibold border-b border-gray-100 pb-1">
            <div className="w-6">#</div>
            <div className="flex-1">Hisse</div>
            <div className="w-24 text-right">Günlük Değişim</div>
          </div>
          {/* Highlights List */}
          <div>
            {highlights.map((item) => (
              <div key={item.rank} className="flex items-center py-2 border-b border-gray-50">
                <div className="w-6 text-gray-500 text-sm">{item.rank}</div>
                <div className="flex-1 flex items-center gap-2">
                  <img src={item.logo} alt={item.symbol} className="w-7 h-7 rounded-full bg-gray-200 object-cover" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm leading-tight">{item.symbol}</div>
                    <div className="text-xs text-gray-500 leading-tight truncate max-w-[160px]">{item.name}</div>
                  </div>
                </div>
                <div className={`w-24 text-right font-semibold ${item.change > 0 ? "text-green-600" : item.change < 0 ? "text-red-500" : "text-gray-500"}`}>
                  {item.change > 0 ? "+" : ""}{item.change.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 flex justify-between px-2 py-1 z-20">
        {bottomNav.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center flex-1 py-1 ${i === 3 ? "text-blue-700" : "text-gray-400"}`}
          >
            <span className="text-2xl leading-none">{item.icon}</span>
            <span className="text-xs mt-0.5 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piyasalar; 