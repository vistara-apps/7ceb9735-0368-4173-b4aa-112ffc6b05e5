'use client';

import { Check, Star, Crown, Zap } from 'lucide-react';

interface TierSelectorProps {
  currentTier: 'free' | 'premium' | 'token-gated';
  onTierSelect: (tier: 'free' | 'premium' | 'token-gated') => void;
}

const tierData = {
  free: {
    name: 'Free',
    icon: Zap,
    price: '$0',
    description: 'Basic features for getting started',
    features: ['5 posts per day', '100 API calls', '1GB storage'],
    color: 'from-gray-500 to-gray-700'
  },
  premium: {
    name: 'Premium',
    icon: Star,
    price: '$19/mo',
    description: 'Enhanced features for active communities',
    features: ['Unlimited posts', '10K API calls', '10GB storage', 'Analytics dashboard'],
    color: 'from-purple-500 to-purple-700'
  },
  'token-gated': {
    name: 'Token Gated',
    icon: Crown,
    price: '100 TOKENS',
    description: 'Exclusive access for token holders',
    features: ['All premium features', 'Priority support', '50GB storage', 'Custom integrations'],
    color: 'from-yellow-500 to-yellow-700'
  }
};

export function TierSelector({ currentTier, onTierSelect }: TierSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(tierData).map(([tier, data]) => {
        const Icon = data.icon;
        const isSelected = currentTier === tier;
        
        return (
          <div
            key={tier}
            onClick={() => onTierSelect(tier as 'free' | 'premium' | 'token-gated')}
            className={`metric-card cursor-pointer transition-all duration-300 hover:scale-105 ${
              isSelected ? 'ring-2 ring-accent' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${data.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              {isSelected && (
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            
            <h3 className="text-white font-semibold text-lg mb-2">{data.name}</h3>
            <div className="text-accent font-bold text-xl mb-2">{data.price}</div>
            <p className="text-white/70 text-sm mb-4">{data.description}</p>
            
            <ul className="space-y-2">
              {data.features.map((feature, index) => (
                <li key={index} className="text-white/60 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full mt-6 py-2 px-4 rounded-lg font-medium transition-colors ${
                isSelected 
                  ? 'bg-accent text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {isSelected ? 'Current Plan' : 'Select Plan'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
