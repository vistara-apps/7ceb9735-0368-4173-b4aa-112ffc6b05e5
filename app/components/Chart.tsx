'use client';

interface ChartProps {
  data: number[];
  labels?: string[];
  height?: number;
}

export function Chart({ data, labels, height = 128 }: ChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      {data.map((value, index) => {
        const heightPercent = range === 0 ? 50 : ((value - min) / range) * 100;
        const barHeight = Math.max(heightPercent, 5);
        
        return (
          <div
            key={index}
            className="chart-bar"
            style={{
              height: `${barHeight}%`,
              width: `${Math.max(100 / data.length - 4, 8)}%`,
            }}
            title={labels ? `${labels[index]}: ${value}` : value.toString()}
          />
        );
      })}
    </div>
  );
}
