'use client';

import { useState } from 'react';
import { MetricCard } from './MetricCard';
import { Chart } from './Chart';
import { FarcasterProfileCard } from './FarcasterProfileCard';
import { ContributionBadge } from './ContributionBadge';
import { LimitDisplay } from './LimitDisplay';
import { TierSelector } from './TierSelector';
import { User } from '../types';

// Mock data
const mockUser: User = {
  fid: '12345',
  walletAddress: '0x1234567890123456789012345678901234567890',
  username: 'john_creator',
  contributionScore: 738,
  tier: 'premium',
  tokenHoldings: 250,
  avatar: '/api/placeholder/40/40'
};

const contributionData = [28, 45, 52, 38, 65, 72, 48, 59, 67, 45, 52, 48];
const engagementData = [68, 72, 78, 65, 88, 92, 85, 89, 94, 87, 91, 88];

export function Dashboard() {
  const [selectedTier, setSelectedTier] = useState<'free' | 'premium' | 'token-gated'>('premium');

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-white">SustainSphere</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Easily incentivize quality articles from Contributors via Quests 
          and increase visitor experience via Rewards infrastructure built on top!
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contribution Metrics */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <MetricCard
              title="Active Contributors"
              value="439.86"
              change={12.5}
              changeLabel="From last week"
            >
              <Chart data={contributionData.slice(0, 8)} />
            </MetricCard>
            
            <MetricCard
              title="Engagement Rate"
              value="86%"
              change={8.2}
              changeLabel="From last month"
            >
              <Chart data={engagementData.slice(0, 8)} />
            </MetricCard>
          </div>

          <MetricCard title="Contribution Users" value="12,548.00">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <ContributionBadge score={mockUser.contributionScore} />
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-orange-400">● Weekly Quantity</div>
                  <div className="text-white font-semibold">8,456.25</div>
                </div>
                <div>
                  <div className="text-blue-400">● Premium Rewards</div>
                  <div className="text-white font-semibold">1,864.50</div>
                </div>
                <div>
                  <div className="text-purple-400">● Total Distributed</div>
                  <div className="text-white font-semibold">28,840</div>
                </div>
              </div>
            </div>
          </MetricCard>
        </div>

        {/* Token Center & Community Access */}
        <div className="lg:col-span-3 space-y-6">
          <MetricCard title="Token Center" value="168.00">
            <div className="space-y-4">
              <FarcasterProfileCard user={mockUser} variant="compact" />
              <div className="text-center">
                <div className="text-white/60 text-sm mb-2">Earned points</div>
                <div className="text-accent text-sm">+3 this week</div>
              </div>
            </div>
          </MetricCard>

          <MetricCard title="Community Access" value="Free Tier">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                <span className="text-white text-sm">Free</span>
                <div className="w-12 h-6 bg-white/20 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <LimitDisplay label="Posts" current={8} limit={10} />
                <LimitDisplay label="API Calls" current={450} limit={1000} />
                <LimitDisplay label="Storage" current={2.5} limit={5} />
              </div>

              <button className="w-full bg-accent hover:bg-accent/80 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Unlock
              </button>
            </div>
          </MetricCard>
        </div>

        {/* Engagement Chart */}
        <div className="lg:col-span-4">
          <MetricCard title="Engagement Trends" value="3,776" change={12.5} changeLabel="↑ Increased">
            <div className="space-y-4">
              
              <div className="text-white/60 text-sm">
                <span className="text-accent">64%</span> 4318.00
              </div>
              
              <Chart data={engagementData} height={160} />
              
              <div className="text-white/60 text-xs">
                659 Up from last week
              </div>
            </div>
          </MetricCard>
        </div>
      </div>

      {/* Tier Selection */}
      <div className="space-y-6">
        <h2 className="text-white font-semibold text-xl">Choose Your Tier</h2>
        <TierSelector currentTier={selectedTier} onTierSelect={setSelectedTier} />
      </div>
    </div>
  );
}
