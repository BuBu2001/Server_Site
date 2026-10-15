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
  LogIn,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-red-900/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Левая часть */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-white hover:text-red-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link to="/" className="flex items-center text-white hover:text-red-500 transition-colors">
              <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>

            {/* Поиск */}
            <div className="hidden md:flex items-center relative">
              <div className={`flex items-center bg-neutral-900 border rounded-md px-3 py-1.5 w-[300px] transition-all ${searchFocused ? 'border-red-500 bg-neutral-950 w-[400px]' : 'border-neutral-700 hover:border-red-700'}`}>
                <Search size={14} className="text-neutral-500 mr-2" />
                <input
                  type="text"
                  placeholder="Поиск репозиториев..."
                  className="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-full"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>
          </div>

          {/* Центральная навигация */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="text-neutral-300 hover:text-red-400 transition-colors">
              Пул-реквесты
            </Link>
            <Link to="/" className="text-neutral-300 hover:text-red-400 transition-colors">
              Задачи
            </Link>
            <Link to="/" className="text-neutral-300 hover:text-red-400 transition-colors">
              Маркетплейс
            </Link>
            <Link to="/" className="text-neutral-300 hover:text-red-400 transition-colors">
              Обзор
            </Link>
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-3">
            {/* Уведомления */}
            <button className="relative text-neutral-400 hover:text-red-400 transition-colors">
              <Bell size={20} />
            </button>

            {/* Создать */}
            <div className="relative">
              <button
                className="flex items-center text-neutral-300 hover:text-red-400 transition-colors text-sm"
                onClick={() => setCreateMenuOpen(!createMenuOpen)}
              >
                <Plus size={16} className="mr-1" />
                <ChevronDown size={12} />
              </button>
              {createMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-neutral-900 rounded-lg shadow-lg border border-red-900/40 py-2 z-50">
                  <button className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-red-400 flex items-center gap-2">
                    <Code2 size={14} /> Новый репозиторий
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-red-400 flex items-center gap-2">
                    <GitPullRequest size={14} /> Новый пул-реквест
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-red-400 flex items-center gap-2">
                    <CircleDot size={14} /> Новая задача
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-red-400 flex items-center gap-2">
                    <Play size={14} /> Новое окружение
                  </button>
                </div>
              )}
            </div>

            {/* Вход */}
            <button className="flex items-center gap-2 border border-red-700 rounded-md px-3 py-1.5 text-sm font-medium text-red-400 hover:bg-red-950 hover:text-red-300 transition-colors">
              <LogIn size={14} />
              <span className="hidden sm:inline">Войти</span>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-red-900/40 px-4 py-4 space-y-3 bg-black">
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2">
            <Search size={14} className="text-neutral-500 mr-2" />
            <input
              type="text"
              placeholder="Поиск..."
              className="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-full"
            />
          </div>
          <div className="space-y-2 text-sm">
            <Link to="/" className="block text-neutral-300 hover:text-red-400 py-1">Пул-реквесты</Link>
            <Link to="/" className="block text-neutral-300 hover:text-red-400 py-1">Задачи</Link>
            <Link to="/" className="block text-neutral-300 hover:text-red-400 py-1">Маркетплейс</Link>
            <Link to="/" className="block text-neutral-300 hover:text-red-400 py-1">Обзор</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
