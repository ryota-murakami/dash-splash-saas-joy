
import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface DashboardHeaderProps {
  className?: string;
}

const DashboardHeader = ({ className }: DashboardHeaderProps) => {
  return (
    <header className={cn('flex items-center justify-between py-6', className)}>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your analytics.</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-9 w-[200px] lg:w-[300px]" 
          />
        </div>
        
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
