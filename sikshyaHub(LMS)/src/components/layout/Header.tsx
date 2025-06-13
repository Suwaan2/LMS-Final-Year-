import React, { useState } from 'react';
import { BookOpen, User, LayoutDashboard, LogOut, ChevronRight } from 'lucide-react';

const LMSAceApp = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-12 bg-teal-50">
      {/* Header */}
      <header className="bg-teal-50 px-6 py-4 relative">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-teal-600 p-2 rounded">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-teal-700">Sikshya Hub</span>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
            >
              Courses
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
            >
              Login
            </a>
            
            {/* Profile Avatar */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors duration-200"
              >
                <User className="h-5 w-5 text-pink-600" />
              </button>
              
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Sam Student</p>
                    <p className="text-sm text-gray-500">student@example.com</p>
                  </div>
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <LayoutDashboard className="h-4 w-4 mr-3" />
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Log out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

    
      
    </div>
  );
};

export default LMSAceApp;