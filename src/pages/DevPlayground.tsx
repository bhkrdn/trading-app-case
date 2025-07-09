import React, { useState } from 'react';
import { FearGreedIndexV1Modular } from '@/components/markets/FearGreedIndexV1Modular';
import { FearGreedIndexV2 } from '@/components/markets/FearGreedIndexV2';
import { FearGreedIndexV3 } from '@/components/markets/FearGreedIndexV3';

const DevPlayground = () => {
  const [value, setValue] = useState(78);
  const [label, setLabel] = useState('Extreme Greed');
  const [description, setDescription] = useState('is driving the US market');

  const props = { value, label, description };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Fear & Greed Index Playground</h1>
      <div className="max-w-3xl mx-auto mb-10">
        <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row md:items-end gap-6 border border-border">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Value</label>
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={e => setValue(Number(e.target.value))}
              className="w-full accent-success"
            />
            <div className="text-xs text-muted-foreground mt-1">{value}</div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Label</label>
            <input
              type="text"
              className="border rounded px-2 py-1 w-full"
              value={label}
              placeholder="e.g. Extreme Greed"
              onChange={e => setLabel(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              className="border rounded px-2 py-1 w-full"
              value={description}
              placeholder="e.g. is driving the US market"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground bg-muted rounded p-3 font-mono">
          <span className="font-semibold">Current Props:</span> {JSON.stringify(props, null, 2)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-card rounded-xl shadow p-4 border border-border flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-3 border-b border-border w-full pb-2 text-center">V1 (Modular)</h2>
          <FearGreedIndexV1Modular {...props} />
        </div>
        <div className="bg-card rounded-xl shadow p-4 border border-border flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-3 border-b border-border w-full pb-2 text-center">V2</h2>
          <FearGreedIndexV2 {...props} />
        </div>
        <div className="bg-card rounded-xl shadow p-4 border border-border flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-3 border-b border-border w-full pb-2 text-center">V3</h2>
          <FearGreedIndexV3 {...props} />
        </div>
      </div>
    </div>
  );
};

export default DevPlayground; 