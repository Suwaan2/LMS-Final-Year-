import React from 'react';
import { BookOpen, Users, Home, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SidebarLink = ({ icon: Icon, label, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-100 rounded-md w-full text-left"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
};

export default function DashboardSidebar() {
  const { logout } = useAuth();

  return (
    <aside className="h-screen w-64 bg-white shadow-lg p-6 border-r">
      <div className="text-2xl font-bold text-orange-600 mb-10">SikshyaHub</div>
      <nav className="flex flex-col gap-2">
        <SidebarLink icon={Home} label="Dashboard" to="/dashboard" />
        <SidebarLink icon={BookOpen} label="Courses" to="/dashboard/courses" />
        <SidebarLink icon={Users} label="Students" to="/dashboard/students" />
        <SidebarLink icon={User} label="Profile" to="/dashboard/profile" />
      </nav>
      <button
        onClick={logout}
        className="flex items-center gap-3 mt-10 text-sm text-red-600 hover:text-red-800"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
}
