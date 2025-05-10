
import React from 'react';
import { Home, BarChart2, Settings, Users, Bell, Calendar, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: Bell, label: 'Notifications' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
  ];

  return (
    <div className={cn('h-screen w-64 bg-sidebar border-r border-border flex flex-col', className)}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary flex items-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Dashify
          </span>
        </h1>
      </div>
      
      <nav className="flex-1 px-4 mt-6">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors',
                  item.active 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                )}
              >
                <item.icon size={18} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
            U
          </div>
          <div>
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-muted-foreground">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
