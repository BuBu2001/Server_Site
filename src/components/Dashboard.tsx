import { Link } from 'react-router-dom';
import {
  Code2,
  Shield,
  Users,
} from 'lucide-react';

// SVG иконка дракона
function DragonIcon({ size = 32, className = '' }: { size?: number; className?: string }) {
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

export default function Dashboard() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero секция */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-red-950/30 border border-red-900/50 rounded-full flex items-center justify-center text-red-500">
                <DragonIcon size={64} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Создавайте <span className="text-red-500">великое</span> вместе
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 mb-8">
              Платформа для хостинга кода, совместной работы и управления проектами.
              Присоединяйтесь к миллионам разработчиков по всему миру.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg">
                Начать бесплатно
              </button>
              <button className="w-full sm:w-auto border border-neutral-600 hover:border-red-600 text-neutral-300 hover:text-red-400 font-semibold px-8 py-3 rounded-md transition-colors text-lg">
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Возможности */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">
          Почему выбирают <span className="text-red-500">нас</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-red-900/50 transition-colors">
            <Code2 size={32} className="text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Хостинг кода</h3>
            <p className="text-neutral-400 text-sm">
              Безопасное хранение вашего кода с неограниченным количеством публичных и приватных репозиториев.
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-red-900/50 transition-colors">
            <Users size={32} className="text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Совместная работа</h3>
            <p className="text-neutral-400 text-sm">
              Пул-реквесты, ревью кода, задачи и обсуждения — всё для эффективной командной разработки.
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-red-900/50 transition-colors">
            <Shield size={32} className="text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Безопасность</h3>
            <p className="text-neutral-400 text-sm">
              Автоматическое сканирование уязвимостей, защита секретов и контроль доступа на всех уровнях.
            </p>
          </div>
        </div>
      </div>

      {/* Пустое состояние */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 sm:p-12 text-center">
          <div className="w-16 h-16 bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <DragonIcon size={40} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            У вас пока нет репозиториев
          </h3>
          <p className="text-neutral-400 mb-6 max-w-md mx-auto">
            Создайте свой первый репозиторий и начните работу над проектом.
            Это займёт всего минуту.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-md transition-colors">
            Создать репозиторий
          </button>
        </div>
      </div>
    </div>
  );
}
