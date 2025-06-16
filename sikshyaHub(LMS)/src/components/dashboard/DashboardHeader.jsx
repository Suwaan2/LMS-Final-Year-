import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function DashboardHeader() {
  const { user } = useAuth();

  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm flex items-center justify-between border-b">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">Welcome, {user?.name || 'User'}</span>
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'U'}`}
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
