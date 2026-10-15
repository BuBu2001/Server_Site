import { Link } from 'react-router-dom';
import {
  BookOpen,
  Star,
  GitPullRequest,
  CircleDot,
  GitFork,
  ArrowRight,
  TrendingUp,
  Users,
} from 'lucide-react';
import { user, repositories, recentActivity } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left sidebar */}
        <div className="lg:w-[300px] flex-shrink-0">
          {/* User card */}
          <div className="flex items-center gap-3 mb-6">
            <Link to={`/${user.username}`}>
              <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full" />
            </Link>
            <div>
              <Link to={`/${user.username}`} className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                {user.username}
              </Link>
            </div>
          </div>

          {/* Recent activity */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              Recent activity
            </h3>
            <div className="space-y-3">
              {recentActivity.slice(0, 5).map((activity, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5">
                    {activity.type === 'push' && <GitPullRequest size={14} className="text-green-600" />}
                    {activity.type === 'star' && <Star size={14} className="text-yellow-500" />}
                    {activity.type === 'fork' && <GitFork size={14} className="text-purple-600" />}
                    {activity.type === 'issue' && <CircleDot size={14} className="green-600" />}
                    {activity.type === 'pr' && <GitPullRequest size={14} className="text-green-600" />}
                  </div>
                  <div>
                    <span className="text-gray-700">{activity.message}</span>
                    <Link to={`/repo/${activity.repo}`} className="text-blue-600 hover:underline ml-1 font-medium">
                      {activity.repo}
                    </Link>
                    <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore repos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp size={14} />
              Explore repositories
            </h3>
            <div className="space-y-3">
              {[
                { name: 'facebook/react', desc: 'A declarative, efficient, and flexible JavaScript library', stars: '215k', lang: 'JavaScript' },
                { name: 'vercel/next.js', desc: 'The React Framework for the Web', stars: '117k', lang: 'JavaScript' },
                { name: 'tailwindlabs/tailwindcss', desc: 'A utility-first CSS framework', stars: '77k', lang: 'CSS' },
              ].map((repo, i) => (
                <div key={i} className="text-sm">
                  <Link to="/" className="text-blue-600 hover:underline font-medium">{repo.name}</Link>
                  <p className="text-xs text-gray-500 mt-0.5">{repo.desc}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star size={10} /> {repo.stars}
                    </span>
                    <span>{repo.lang}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Feed header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-semibold text-gray-900">Home</h2>
            <div className="flex items-center gap-2">
              <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <Users size={14} /> Following
              </button>
              <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <TrendingUp size={14} /> For you
              </button>
            </div>
          </div>

          {/* Quick create */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
              <input
                type="text"
                placeholder="Start a new discussion or create an issue..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <button className="hover:text-blue-600">📎 Attach files</button>
                <button className="hover:text-blue-600">🏷️ Labels</button>
              </div>
              <button className="bg-[#2da44e] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-[#2c974b]">
                Submit
              </button>
            </div>
          </div>

          {/* Repository feed */}
          <div className="space-y-4">
            {repositories.slice(0, 5).map(repo => (
              <div key={repo.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-gray-400" />
                    <Link to={`/repo/${repo.name}`} className="text-lg font-semibold text-blue-600 hover:underline">
                      {repo.name}
                    </Link>
                    <span className="text-xs border border-gray-300 rounded-full px-2 py-0.5 text-gray-500">
                      {repo.isPublic ? 'Public' : 'Private'}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-xs border border-gray-300 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50">
                    <Star size={12} /> Star
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">{repo.description}</p>
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {repo.topics.map(topic => (
                      <span key={topic} className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full hover:bg-blue-100 cursor-pointer">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks}
                  </span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Show more */}
          <div className="text-center mt-6">
            <Link to={`/${user.username}`} className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1">
              View all repositories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
