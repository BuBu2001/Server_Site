import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  LinkIcon,
  Users,
  Building2,
  Mail,
  Twitter,
  BookOpen,
  Star,
  Search,
  Filter,
  ChevronDown,
} from 'lucide-react';
import { user, repositories, pinnedRepos, contributions } from '../data/mockData';

function ContributionGraph() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  const getColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#161b22] border-[#1b1f23]';
      case 1: return 'bg-[#0e4429] border-[#0e4429]';
      case 2: return 'bg-[#006d32] border-[#006d32]';
      case 3: return 'bg-[#26a641] border-[#26a641]';
      case 4: return 'bg-[#39d353] border-[#39d353]';
      default: return 'bg-[#161b22] border-[#1b1f23]';
    }
  };

  const totalContributions = contributions.filter(c => c.level > 0).length * Math.floor(Math.random() * 5 + 3);

  return (
    <div className="mt-6">
      <h2 className="text-sm text-gray-600 mb-2">
        <span className="font-bold text-gray-900">{totalContributions} contributions</span> in the last year
      </h2>
      <div className="border border-gray-200 rounded-md p-3 overflow-x-auto">
        <div className="min-w-[720px]">
          {/* Month labels */}
          <div className="flex mb-1 ml-8">
            {months.map((month, i) => (
              <span key={i} className="text-[10px] text-gray-500 flex-1">{month}</span>
            ))}
          </div>
          <div className="flex gap-0">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] mr-1">
              {days.map((day, i) => (
                <span key={i} className="text-[10px] text-gray-500 h-[11px] leading-[11px]">{day}</span>
              ))}
            </div>
            {/* Grid */}
            <div className="flex gap-[3px]">
              {Array.from({ length: 52 }, (_, week) => (
                <div key={week} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }, (_, day) => {
                    const idx = week * 7 + day;
                    const contrib = contributions[idx] || { level: 0 };
                    return (
                      <div
                        key={day}
                        className={`w-[11px] h-[11px] rounded-sm border ${getColor(contrib.level)}`}
                        title={`${contrib.date}: ${contrib.level > 0 ? 'Some' : 'No'} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          {/* Legend */}
          <div className="flex items-center justify-end gap-1 mt-2">
            <span className="text-[10px] text-gray-500 mr-1">Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className={`w-[11px] h-[11px] rounded-sm border ${getColor(level)}`} />
            ))}
            <span className="text-[10px] text-gray-500 ml-1">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PinnedRepo({ repo }: { repo: typeof repositories[0] }) {
  return (
    <div className="border border-gray-200 rounded-md p-4 flex flex-col justify-between hover:border-gray-400 transition-colors">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BookOpen size={14} className="text-gray-500" />
          <Link to={`/repo/${repo.name}`} className="text-sm font-semibold text-blue-600 hover:underline">
            {repo.name}
          </Link>
          <span className="text-xs border border-gray-300 rounded-full px-2 py-0.5 text-gray-500">
            {repo.isPublic ? 'Public' : 'Private'}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2">{repo.description}</p>
      </div>
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
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
          {repo.forks}
        </span>
      </div>
    </div>
  );
}

export default function Profile() {
  const [repoFilter, setRepoFilter] = useState('');
  const [repoType, setRepoType] = useState('All');

  const filteredRepos = repositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(repoFilter.toLowerCase()) ||
      repo.description?.toLowerCase().includes(repoFilter.toLowerCase());
    const matchesType = repoType === 'All' ||
      (repoType === 'Public' && repo.isPublic) ||
      (repoType === 'Private' && !repo.isPublic) ||
      (repoType === 'Sources' && repo.isPublic);
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left sidebar - Profile */}
        <div className="lg:w-[296px] flex-shrink-0">
          <div className="sticky top-24">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-[296px] h-[296px] rounded-full border border-gray-200 mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-xl text-gray-500 font-light">{user.username}</p>
            <p className="mt-3 text-sm text-gray-700">{user.bio}</p>

            <button className="mt-4 w-full border border-gray-300 rounded-md py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Edit profile
            </button>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              <span><strong className="text-gray-900">{user.followers}</strong> followers</span>
              <span>·</span>
              <span><strong className="text-gray-900">{user.following}</strong> following</span>
            </div>

            <div className="mt-4 space-y-1.5 text-sm">
              {user.company && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 size={16} className="text-gray-400" />
                  <span>{user.company}</span>
                </div>
              )}
              {user.location && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.email && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} className="text-gray-400" />
                  <a href="#" className="hover:text-blue-600 hover:underline">{user.email}</a>
                </div>
              )}
              {user.twitter && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Twitter size={16} className="text-gray-400" />
                  <a href="#" className="hover:text-blue-600 hover:underline">@{user.twitter}</a>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <LinkIcon size={16} className="text-gray-400" />
                <a href="#" className="hover:text-blue-600 hover:underline">github.com/{user.username}</a>
              </div>
            </div>

            <ContributionGraph />
          </div>
        </div>

        {/* Right content - Repositories */}
        <div className="flex-1 min-w-0">
          {/* Pinned repos */}
          <div className="mb-6">
            <h2 className="text-sm text-gray-500 mb-2">
              Pinned <span className="text-blue-600 text-xs ml-1 cursor-pointer hover:underline">Customize your pins</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pinnedRepos.map(repo => (
                <PinnedRepo key={repo.id} repo={repo} />
              ))}
            </div>
          </div>

          {/* Repositories section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h2 className="text-base font-medium text-gray-900">Repositories</h2>
              <div className="flex items-center gap-2">
                <button className="bg-[#2da44e] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-[#2c974b] transition-colors flex items-center gap-1">
                  <BookOpen size={14} /> New
                </button>
              </div>
            </div>

            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex-1 flex items-center border border-gray-300 rounded-md px-3 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <Search size={14} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Find a repository..."
                  className="text-sm outline-none w-full"
                  value={repoFilter}
                  onChange={(e) => setRepoFilter(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white"
                  value={repoType}
                  onChange={(e) => setRepoType(e.target.value)}
                >
                  <option>All</option>
                  <option>Public</option>
                  <option>Private</option>
                  <option>Sources</option>
                  <option>Forks</option>
                </select>
                <button className="border border-gray-300 rounded-md px-3 py-1.5 text-sm flex items-center gap-1 hover:bg-gray-50">
                  <Filter size={14} /> Filter <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Repo list */}
            <div className="divide-y divide-gray-200">
              {filteredRepos.map(repo => (
                <div key={repo.id} className="py-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Link to={`/repo/${repo.name}`} className="text-xl font-semibold text-blue-600 hover:underline">
                          {user.username}
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link to={`/repo/${repo.name}`} className="text-xl font-semibold text-blue-600 hover:underline">
                          {repo.name}
                        </Link>
                        <span className="text-xs border border-gray-300 rounded-full px-2 py-0.5 text-gray-500">
                          {repo.isPublic ? 'Public' : 'Private'}
                        </span>
                      </div>
                      {repo.description && (
                        <p className="text-sm text-gray-600 mb-2 max-w-lg">{repo.description}</p>
                      )}
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
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
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                          </svg>
                          {repo.forks}
                        </span>
                        <span>Updated {repo.updatedAt}</span>
                      </div>
                    </div>
                    <button className="ml-4 border border-gray-300 rounded-md px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                      <Star size={12} /> Star
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
