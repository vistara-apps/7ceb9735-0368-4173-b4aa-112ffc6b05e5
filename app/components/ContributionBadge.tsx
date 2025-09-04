'use client';

import { Award } from 'lucide-react';

interface ContributionBadgeProps {
  score: number;
  variant?: 'bronze' | 'silver' | 'gold';
}

export function ContributionBadge({ score, variant }: ContributionBadgeProps) {
  const getBadgeVariant = (score: number) => {
    if (score >= 1000) return 'gold';
    if (score >= 500) return 'silver';
    return 'bronze';
  };

  const actualVariant = variant || getBadgeVariant(score);

  const variantStyles = {
    bronze: 'from-orange-600 to-orange-800',
    silver: 'from-gray-400 to-gray-600',
    gold: 'from-yellow-400 to-yellow-600'
  };

  const variantText = {
    bronze: 'Bronze Contributor',
    silver: 'Silver Contributor',
    gold: 'Gold Contributor'
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg glass-effect">
      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${variantStyles[actualVariant]} flex items-center justify-center`}>
        <Award className="w-4 h-4 text-white" />
      </div>
      <div>
        <div className="text-white font-medium text-sm">{variantText[actualVariant]}</div>
        <div className="text-white/60 text-xs">{score} points</div>
      </div>
    </div>
  );
}
