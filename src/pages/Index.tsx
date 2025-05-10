
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/components/DashboardHeader';
import StatCard from '@/components/StatCard';
import ConfettiButton from '@/components/ConfettiButton';
import ConfettiContainer from '@/components/ConfettiContainer';
import { BarChart2, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <DashboardLayout>
      <ConfettiContainer enabled={showConfetti} />
      
      <DashboardHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <StatCard
          title="Total Users"
          value="12,543"
          trend={{ value: "+12% from last month", positive: true }}
          icon={Users}
        />
        <StatCard
          title="Revenue"
          value="$48,352"
          trend={{ value: "+8.2% from last month", positive: true }}
          icon={DollarSign}
        />
        <StatCard
          title="Active Projects"
          value="34"
          trend={{ value: "+3 from last week", positive: true }}
          icon={TrendingUp}
        />
        <StatCard
          title="Conversion Rate"
          value="6.4%"
          trend={{ value: "-0.5% from last month", positive: false }}
          icon={BarChart2}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
            <CardDescription>Your platform usage over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-muted-foreground flex flex-col items-center">
              <BarChart2 className="h-12 w-12 mb-2" />
              <p>Analytics chart will appear here</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest user activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">User #{i} signed up</p>
                    <p className="text-xs text-muted-foreground">{i}h ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" /> Try the Confetti Animation
            </CardTitle>
            <CardDescription>Click the button below to see the confetti animation</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-8">
            <Tabs defaultValue="info" className="w-full max-w-lg">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">About</TabsTrigger>
                <TabsTrigger value="demo">Demo</TabsTrigger>
              </TabsList>
              <TabsContent value="info" className="p-4">
                <div className="space-y-4">
                  <p>This demo showcases a minimalist SaaS dashboard with a fun confetti animation powered by tsparticles.</p>
                  <p>The confetti effect can be triggered on important events like:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>User achievements</li>
                    <li>Goal completions</li>
                    <li>Milestone celebrations</li>
                    <li>Feature unlocks</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="demo" className="p-8 flex flex-col items-center justify-center">
                <p className="text-center mb-6">Click the button below to trigger the confetti animation!</p>
                <ConfettiButton onConfetti={handleConfetti} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
