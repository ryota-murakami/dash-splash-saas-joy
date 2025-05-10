
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    positive?: boolean;
  };
  icon: React.ElementType;
  className?: string;
}

const StatCard = ({ title, value, trend, icon: Icon, className }: StatCardProps) => {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "text-xs mt-1",
            trend.positive ? "text-green-500" : "text-red-500"
          )}>
            {trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
