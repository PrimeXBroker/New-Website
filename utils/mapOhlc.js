// utils/mapOhlc.ts

export function mapToCandles(graphData) {
  return graphData
    .map(([ts, open, high, low, close]) => ({
      time: ts > 1e12 ? Math.floor(ts / 1000) : ts,
      open,
      high,
      low,
      close,
    }))
    .sort((a, b) => a.time - b.time);
}
