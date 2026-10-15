import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Bell,
  Plus,
  ChevronDown,
  GitPullRequest,
  CircleDot,
  Code2,
  Play,
} from 'lucide-react';
import { user } from '../data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);

  return (
    <nav className="bg-[#24292f] text-white sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link to="/" className="flex items-center text-white hover:text-gray-300 transition-colors">
              <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>

            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <div className={`flex items-center bg-[#3d444d] border rounded-md px-3 py-1.5 w-[300px] transition-all ${searchFocused ? 'border-blue-500 bg-[#0d1117] w-[400px]' : 'border-[#3d444d] hover:border-gray-500'}`}>
                <Search size={14} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Type / to search"
                  className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-full"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>
          </div>

          {/* Center nav - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Pull requests
            </Link>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Issues
            </Link>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Codespaces
            </Link>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Marketplace
            </Link>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Explore
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative text-white hover:text-gray-300 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Create new */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-gray-300 transition-colors text-sm"
                onClick={() => setCreateMenuOpen(!createMenuOpen)}
              >
                <Plus size={16} className="mr-1" />
                <ChevronDown size={12} />
              </button>
              {createMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                    <Code2 size={14} /> New repository
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                    <GitPullRequest size={14} /> New pull request
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                    <CircleDot size={14} /> New issue
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                    <Play size={14} /> New codespace
                  </button>
                </div>
              )}
            </div>

            {/* Profile */}
            <Link to={`/${user.username}`} className="flex items-center gap-1">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-8 h-8 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
              />
              <ChevronDown size={12} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-700 px-4 py-4 space-y-3">
          <div className="flex items-center bg-[#3d444d] border border-[#3d444d] rounded-md px-3 py-2">
            <Search size={14} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search GitHub"
              className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-full"
            />
          </div>
          <div className="space-y-2 text-sm">
            <Link to="/" className="block text-white hover:text-gray-300 py-1">Pull requests</Link>
            <Link to="/" className="block text-white hover:text-gray-300 py-1">Issues</Link>
            <Link to="/" className="block text-white hover:text-gray-300 py-1">Marketplace</Link>
            <Link to="/" className="block text-white hover:text-gray-300 py-1">Explore</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
