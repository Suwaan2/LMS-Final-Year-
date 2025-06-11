import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Search, Bell, User, LogOut, BookOpen, BarChart3 } from 'lucide-react';
function Header() {
 

  const handleLogout = () => {
    // Add logout logic here, e.g., clearing user data, redirecting, etc.
    console.log('User logged out');
  };
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const user = null; // Replace null with actual user data or state management logic

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                LMS Ace
              </span>
            </Link>

            {user && (
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/dashboard')
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/courses"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/courses')
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Courses</span>
                </Link>
              </nav>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <div className="hidden sm:block relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button className="relative p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent-500 rounded-full animate-bounce-subtle"></span>
                </button>

                <div className="relative group">
                  <button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {!user && (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  
    </>
  )
}

export default Header
