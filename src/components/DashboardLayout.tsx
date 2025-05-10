
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
}

const DashboardLayout = ({ children, className }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen bg-background">
      {!isMobile && <Sidebar />}
      
      <main className={cn('flex-1 overflow-auto', className)}>
        <div className="container py-6 px-4 md:px-6 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
