'use client';

import { Search, Moon, Plus } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

export function Header() {
  return (
    <header className="h-16 glass-effect border-b border-white/10 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Moon className="w-5 h-5 text-white/70" />
        </button>
        
        <button className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-white/90 transition-colors font-medium">
          <Plus className="w-4 h-4" />
          Add New
        </button>

        <ConnectWallet />
      </div>
    </header>
  );
}
