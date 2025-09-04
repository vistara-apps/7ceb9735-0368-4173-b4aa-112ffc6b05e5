export interface User {
  fid: string;
  walletAddress: string;
  username: string;
  contributionScore: number;
  tier: 'free' | 'premium' | 'token-gated';
  tokenHoldings: number;
  avatar?: string;
}

export interface Contribution {
  contributionId: string;
  fid: string;
  type: 'post' | 'engagement' | 'boost';
  timestamp: Date;
  value: number;
}

export interface CommunityPreset {
  presetId: string;
  name: string;
  description: string;
  freeTierLimits: {
    posts: number;
    apiCalls: number;
    storage: number;
  };
  premiumTierLimits: {
    posts: number;
    apiCalls: number;
    storage: number;
  };
  tokenGatedLimits: {
    posts: number;
    apiCalls: number;
    storage: number;
  };
}

export interface Community {
  communityId: string;
  name: string;
  creatorFid: string;
  presetId: string;
  tokenAddress?: string;
}

export interface MetricData {
  label: string;
  value: number;
  change: number;
}

export interface ChartData {
  labels: string[];
  values: number[];
}
