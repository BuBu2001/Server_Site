import { Link } from 'react-router-dom';
import {
  BookOpen,
  TrendingUp,
  GitFork,
  Star,
  Code2,
  Shield,
  Zap,
  Users,
  Globe,
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero секция */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
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
          <div className="w-16 h-16 bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen size={28} className="text-red-500" />
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

      {/* Популярные репозитории */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp size={20} className="text-red-500" />
          Популярные репозитории
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'torvalds/linux', desc: 'Ядро операционной системы Linux', stars: '172k', lang: 'C', color: '#555555' },
            { name: 'microsoft/vscode', desc: 'Визуальный редактор кода', stars: '158k', lang: 'TypeScript', color: '#3178c6' },
            { name: 'facebook/react', desc: 'Библиотека для создания интерфейсов', stars: '223k', lang: 'JavaScript', color: '#f1e05a' },
            { name: 'tensorflow/tensorflow', desc: 'Фреймворк машинного обучения', stars: '183k', lang: 'C++', color: '#f34b7d' },
          ].map((repo, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-red-900/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-neutral-500" />
                  <span className="text-sm font-semibold text-red-400 hover:underline cursor-pointer">
                    {repo.name}
                  </span>
                </div>
                <button className="flex items-center gap-1 text-xs border border-neutral-700 rounded-md px-2 py-1 text-neutral-400 hover:text-red-400 hover:border-red-700 transition-colors">
                  <Star size={10} /> В избранное
                </button>
              </div>
              <p className="text-xs text-neutral-500 mb-3">{repo.desc}</p>
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={10} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={10} /> {Math.floor(parseInt(repo.stars) / 4)}k
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Статистика */}
      <div className="border-t border-neutral-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">100M+</div>
              <div className="text-sm text-neutral-400">Разработчиков</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">420M+</div>
              <div className="text-sm text-neutral-400">Репозиториев</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">90%</div>
              <div className="text-sm text-neutral-400">Компаний Fortune 100</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">4M+</div>
              <div className="text-sm text-neutral-400">Организаций</div>
            </div>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="border-t border-neutral-800 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <svg height="20" viewBox="0 0 16 16" width="20" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>© 2026 GitHub Clone</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <Link to="/" className="hover:text-red-400 transition-colors">Условия</Link>
              <Link to="/" className="hover:text-red-400 transition-colors">Конфиденциальность</Link>
              <Link to="/" className="hover:text-red-400 transition-colors">Безопасность</Link>
              <Link to="/" className="hover:text-red-400 transition-colors">Статус</Link>
              <Link to="/" className="hover:text-red-400 transition-colors">Документация</Link>
              <Link to="/" className="hover:text-red-400 transition-colors flex items-center gap-1">
                <Globe size={14} /> Русский
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
