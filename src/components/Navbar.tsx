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

// SVG иконка дракона
export function DragonIcon({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M52 18c-2-4-6-6-10-6-1 0-2 0-3 1-2-3-5-5-9-5-3 0-6 1-8 4-1-1-3-1-4-1-4 0-7 2-9 6-2 4-2 9 0 13 1 2 2 3 4 4-1 3 0 6 2 8 2 2 5 3 8 2 1 2 3 4 5 5 3 1 6 1 8-1 2 1 4 1 6 0 3-1 5-4 5-7 0-1 0-2-1-3 3-1 5-4 5-7 0-2-1-4-2-5 2-2 3-5 1-8z"
        fill="currentColor"
      />
      <path
        d="M20 22c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
        fill="#000"
      />
      <path
        d="M42 22c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
        fill="#000"
      />
      <path
        d="M28 32c2 2 6 2 8 0"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14c-2-2-4-2-6-1 2 1 3 3 3 5 1-2 2-3 3-4z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M50 14c2-2 4-2 6-1-2 1-3 3-3 5-1-2-2-3-3-4z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M24 10c-1-2-3-3-5-2 2 0 3 2 3 4 1-1 1-1 2-2z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M40 10c1-2 3-3 5-2-2 0-3 2-3 4-1-1-1-1-2-2z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

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

            <Link to="/" className="flex items-center text-red-500 hover:text-red-400 transition-colors">
              <DragonIcon size={32} />
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
