import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {/* Your dashboard content here */}
          <h2 className="text-lg font-medium">Welcome to your LMS Dashboard</h2>
        </main>
      </div>
    </div>
  );
}
