'use client';

interface LimitDisplayProps {
  label: string;
  current: number;
  limit: number;
  variant?: 'usage' | 'available';
}

export function LimitDisplay({ label, current, limit, variant = 'usage' }: LimitDisplayProps) {
  const percentage = (current / limit) * 100;
  const isNearLimit = percentage > 80;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white/70 text-sm">{label}</span>
        <span className="text-white text-sm font-medium">
          {variant === 'usage' ? `${current}/${limit}` : `${limit - current} left`}
        </span>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${
            isNearLimit ? 'bg-orange-500' : 'bg-gradient-to-r from-accent to-primary'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      
      {isNearLimit && (
        <div className="text-orange-400 text-xs">
          {variant === 'usage' ? 'Approaching limit' : 'Limited remaining'}
        </div>
      )}
    </div>
  );
}
