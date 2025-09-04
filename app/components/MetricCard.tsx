'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  children?: React.ReactNode;
}

export function MetricCard({ title, value, change, changeLabel, children }: MetricCardProps) {
  const isPositive = change && change > 0;
  
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white/70 text-sm font-medium">{title}</h3>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-xs ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      
      <div className="text-white font-bold text-2xl mb-2">{value}</div>
      
      {changeLabel && (
        <div className="text-white/60 text-xs mb-4">{changeLabel}</div>
      )}
      
      {children}
    </div>
  );
}
