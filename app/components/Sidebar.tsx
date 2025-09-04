'use client';

import { 
  Home, 
  Users, 
  Award, 
  Settings, 
  BarChart3, 
  Shield,
  Palette,
  MessageCircle
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/', active: true },
  { name: 'Members', icon: Users, href: '/members' },
  { name: 'Rewards', icon: Award, href: '/rewards' },
  { name: 'Community', icon: MessageCircle, href: '/community' },
  { name: 'Presets', icon: Palette, href: '/presets' },
  { name: 'Permissions', icon: Shield, href: '/permissions' },
  { name: 'Themes', icon: Settings, href: '/themes' },
  { name: 'Connect', icon: BarChart3, href: '/connect' },
];

export function Sidebar() {
  return (
    <div className="w-64 glass-effect border-r border-white/10">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-white font-semibold text-lg">SustainSphere</span>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
            >
              <item.icon className="w-5 h-5 text-white/70" />
              <span className="text-white/90 text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="mt-12 p-4 glass-effect rounded-lg">
          <h4 className="text-white font-medium mb-2">Community</h4>
          <div className="space-y-2 text-sm text-white/70">
            <div>Integrations</div>
            <div>Permissions</div>
            <div>Presets</div>
            <div>Blueprints</div>
          </div>
        </div>
      </div>
    </div>
  );
}
