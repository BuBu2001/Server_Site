import { useParams } from 'react-router-dom';
import {
  UserX,
  BookOpen,
  Search,
  AlertCircle,
} from 'lucide-react';

export default function Profile() {
  const { username } = useParams();

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Пустой профиль */}
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-20 h-20 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
            <UserX size={32} className="text-neutral-600" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">
            Пользователь не найден
          </h1>
          <p className="text-neutral-400 text-center max-w-md mb-6">
            Аккаунт <span className="text-red-400 font-mono">{username}</span> не существует
            или был удалён. Возможно, вы ввели неверное имя пользователя.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-md transition-colors">
              Зарегистрироваться
            </button>
            <button className="border border-neutral-700 hover:border-red-700 text-neutral-300 hover:text-red-400 font-medium px-6 py-2.5 rounded-md transition-colors">
              На главную
            </button>
          </div>
        </div>

        {/* Информация */}
        <div className="max-w-lg mx-auto mt-8 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Нет такого пользователя
              </h3>
              <p className="text-xs text-neutral-400">
                Вы можете создать новый аккаунт или проверить правильность введённого имени.
                Имена пользователей чувствительны к регистру.
              </p>
            </div>
          </div>
          <div className="flex items-center border border-neutral-700 rounded-md px-3 py-2 focus-within:border-red-500">
            <Search size={14} className="text-neutral-500 mr-2" />
            <input
              type="text"
              placeholder="Найти пользователя..."
              className="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-full"
            />
          </div>
        </div>

        {/* Подсказки */}
        <div className="max-w-lg mx-auto mt-6">
          <h3 className="text-sm font-semibold text-neutral-400 mb-3">Полезные ссылки:</h3>
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">
              <BookOpen size={14} />
              <span>Документация по созданию аккаунта</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">
              <BookOpen size={14} />
              <span>Руководство по началу работы</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">
              <BookOpen size={14} />
              <span>Часто задаваемые вопросы</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
