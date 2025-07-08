import { StockHeader } from "@/components/StockHeader";
import { StockPrice } from "@/components/StockPrice";
import { StockChart } from "@/components/StockChart";
import { PositionDetails } from "@/components/PositionDetails";
import { Statistics } from "@/components/Statistics";
import { DividendDetails } from "@/components/DividendDetails";
import { AnalystEstimates } from "@/components/AnalystEstimates";
import { TradingTrends } from "@/components/TradingTrends";
import { RelatedStocks } from "@/components/RelatedStocks";
import { RelatedNews } from "@/components/RelatedNews";
import { TransactionHistory } from "@/components/TransactionHistory";
import { TradingActions } from "@/components/TradingActions";
import { ComponentRegistryItem } from "@/types/layout";
import { FearGreedIndex } from '../components/FearGreedIndex';
import { FearGreedIndexV1Modular } from '../components/FearGreedIndexV1Modular';
import { FearGreedIndexV2 } from '../components/FearGreedIndexV2';
import { FearGreedIndexV3 } from '../components/FearGreedIndexV3';

export const COMPONENT_REGISTRY: Record<string, ComponentRegistryItem> = {
  'stock-header': {
    component: StockHeader,
    defaultProps: { symbol: 'AAPL' },
    name: 'Stock Header'
  },
  'stock-price': {
    component: StockPrice,
    defaultProps: { 
      symbol: 'AAPL',
      price: 213.55,
      change: 1.11,
      changePercent: 0.52,
      companyName: 'Apple'
    },
    name: 'Stock Price'
  },
  'stock-chart': {
    component: StockChart,
    defaultProps: {},
    name: 'Stock Chart'
  },
  'position-details': {
    component: PositionDetails,
    defaultProps: {
      quantity: 1,
      totalValue: 213.55,
      averagePrice: 165.42,
      portfolioDistribution: 13.87,
      todayReturn: 1.11,
      todayReturnPercent: 0.52,
      totalReturn: 48.12,
      totalReturnPercent: 29.09
    },
    name: 'Position Details'
  },
  'statistics': {
    component: Statistics,
    defaultProps: {
      open: 212.15,
      previousClose: 212.44,
      high: 214.65,
      low: 211.81
    },
    name: 'Statistics'
  },
  'dividend-details': {
    component: DividendDetails,
    defaultProps: { paymentFrequency: 'Yılda 4 Kez' },
    name: 'Dividend Details'
  },
  'analyst-estimates': {
    component: AnalystEstimates,
    defaultProps: {
      averageTarget: 226.36,
      highTarget: 270.00,
      lowTarget: 173.00,
      buyPercent: 56,
      buyAnalysts: 15,
      holdPercent: 37,
      holdAnalysts: 10,
      sellPercent: 7,
      sellAnalysts: 2
    },
    name: 'Analyst Estimates'
  },
  'trading-trends': {
    component: TradingTrends,
    defaultProps: {},
    name: 'Trading Trends'
  },
  'related-stocks': {
    component: RelatedStocks,
    defaultProps: {},
    name: 'Related Stocks'
  },
  'related-news': {
    component: RelatedNews,
    defaultProps: {},
    name: 'Related News'
  },
  'transaction-history': {
    component: TransactionHistory,
    defaultProps: {},
    name: 'Transaction History'
  },
  'fear-greed-index': {
    name: 'Fear & Greed Index',
    component: FearGreedIndex,
    defaultProps: {
      value: 78,
      label: 'Aşırı Açgözlülük',
      description: 'is driving the US market',
    },
  },
  'fear-greed-index-v1-modular': {
    name: 'Fear & Greed Index V1 (Modular)',
    component: FearGreedIndexV1Modular,
    defaultProps: {
      value: 78,
      label: 'Aşırı Açgözlülük',
      description: 'is driving the US market',
    },
  },
  'fear-greed-index-v2': {
    name: 'Fear & Greed Index V2',
    component: FearGreedIndexV2,
    defaultProps: {
      value: 78,
      label: 'Aşırı Açgözlülük',
      description: 'is driving the US market',
    },
  },
  'fear-greed-index-v3': {
    name: 'Fear & Greed Index V3',
    component: FearGreedIndexV3,
    defaultProps: {
      value: 78,
      label: 'Aşırı Açgözlülük',
      description: 'is driving the US market',
    },
  },
};

// Default component order (matching the original Index.tsx)
export const DEFAULT_COMPONENT_ORDER = [
  'stock-header',
  'stock-price',
  'stock-chart',
  'fear-greed-index-v1-modular',
  'position-details',
  'statistics',
  'dividend-details',
  'analyst-estimates',
  'trading-trends',
  'related-stocks',
  'related-news',
  'transaction-history',
  'fear-greed-index-v2',
  'fear-greed-index-v3',
];

// Default visibility (all visible)
export const DEFAULT_VISIBILITY = Object.keys(COMPONENT_REGISTRY).reduce((acc, key) => {
  if (key === 'fear-greed-index-v1-modular') {
    acc[key] = true;
  } else if (key === 'fear-greed-index-v2' || key === 'fear-greed-index-v3') {
    acc[key] = false;
  } else {
    acc[key] = true;
  }
  return acc;
}, {} as Record<string, boolean>); 