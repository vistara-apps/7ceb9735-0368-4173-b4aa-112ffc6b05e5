'use client';

import { User } from '../types';
import { Avatar } from '@coinbase/onchainkit/identity';

interface FarcasterProfileCardProps {
  user: User;
  variant?: 'default' | 'compact';
}

export function FarcasterProfileCard({ user, variant = 'default' }: FarcasterProfileCardProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
        <Avatar address={user.walletAddress as `0x${string}`} className="w-10 h-10" />
        <div>
          <div className="text-white font-medium text-sm">{user.username}</div>
          <div className="text-white/60 text-xs">Score: {user.contributionScore}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="metric-card">
      <div className="flex items-center gap-4 mb-4">
        <Avatar address={user.walletAddress as `0x${string}`} className="w-16 h-16" />
        <div>
          <h3 className="text-white font-semibold text-lg">{user.username}</h3>
          <div className="text-white/70 text-sm">FID: {user.fid}</div>
          <div className="text-accent text-sm font-medium capitalize">{user.tier} Member</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-white/60">Contribution Score</div>
          <div className="text-white font-semibold text-xl">{user.contributionScore}</div>
        </div>
        <div>
          <div className="text-white/60">Token Holdings</div>
          <div className="text-white font-semibold text-xl">{user.tokenHoldings}</div>
        </div>
      </div>
    </div>
  );
}
