import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Eye,
  GitFork,
  Code2,
  Shield,
  GitPullRequest,
  CircleDot,
  Play,
  Settings,
  BookOpen,
  ChevronDown,
  Folder,
  File,
  Tag,
  GitBranch,
  History,
  Download,
  Copy,
  Check,
} from 'lucide-react';
import { repositories, repoFiles, repoBranches, repoLanguages, user } from '../data/mockData';

export default function RepositoryPage() {
  const { repoName } = useParams();
  const repo = repositories.find(r => r.name === repoName) || repositories[0];
  const [activeTab, setActiveTab] = useState('code');
  const [branchOpen, setBranchOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('main');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'code', label: 'Code', icon: Code2 },
    { id: 'issues', label: 'Issues', icon: CircleDot, count: 12 },
    { id: 'pulls', label: 'Pull requests', icon: GitPullRequest, count: 5 },
    { id: 'actions', label: 'Actions', icon: Play },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'insights', label: 'Insights', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#f6f8fa] min-h-screen">
      {/* Repo header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
            <div className="flex items-center gap-2 text-xl">
              <BookOpen size={18} className="text-gray-500" />
              <Link to={`/${user.username}`} className="text-blue-600 hover:underline font-semibold">
                {user.username}
              </Link>
              <span className="text-gray-400">/</span>
              <Link to={`/repo/${repo.name}`} className="text-blue-600 hover:underline font-bold">
                {repo.name}
              </Link>
              <span className="text-xs border border-gray-300 rounded-full px-2 py-0.5 text-gray-500 ml-2">
                {repo.isPublic ? 'Public' : 'Private'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Eye size={14} /> Watch
                <span className="bg-gray-100 rounded-full px-1.5 text-xs ml-1">23</span>
              </button>
              <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <GitFork size={14} /> Fork
                <span className="bg-gray-100 rounded-full px-1.5 text-xs ml-1">{repo.forks}</span>
              </button>
              <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Star size={14} /> Star
                <span className="bg-gray-100 rounded-full px-1.5 text-xs ml-1">{repo.stars}</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto -mb-px">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
                {tab.count !== undefined && (
                  <span className="bg-gray-100 rounded-full px-1.5 text-xs">{tab.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'code' ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Branch selector and actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  {/* Branch selector */}
                  <div className="relative">
                    <button
                      onClick={() => setBranchOpen(!branchOpen)}
                      className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium bg-white hover:bg-gray-50"
                    >
                      <GitBranch size={14} />
                      <span>{selectedBranch}</span>
                      <ChevronDown size={14} />
                    </button>
                    {branchOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="p-2 border-b border-gray-200">
                          <input
                            type="text"
                            placeholder="Filter branches..."
                            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="py-1 max-h-60 overflow-y-auto">
                          {repoBranches.map(branch => (
                            <button
                              key={branch}
                              onClick={() => { setSelectedBranch(branch); setBranchOpen(false); }}
                              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                                branch === selectedBranch ? 'font-semibold' : ''
                              }`}
                            >
                              <GitBranch size={14} className="text-gray-400" />
                              {branch}
                              {branch === selectedBranch && <Check size={14} className="ml-auto text-gray-600" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    <strong>{repoBranches.length}</strong> branches
                  </span>
                  <span className="text-sm text-gray-500">
                    <strong>42</strong> tags
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
                    <History size={14} />
                    <span className="font-medium">1,234</span> commits
                  </button>
                </div>
              </div>

              {/* Code button and clone */}
              <div className="flex items-center justify-between mb-4">
                <button className="bg-[#2da44e] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-[#2c974b] flex items-center gap-2">
                  <Code2 size={14} /> Code
                  <ChevronDown size={12} />
                </button>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
                    <Download size={14} /> Download ZIP
                  </button>
                </div>
              </div>

              {/* Clone URL */}
              <div className="flex items-center border border-gray-300 rounded-md mb-4 overflow-hidden">
                <div className="bg-gray-50 border-r border-gray-300 px-3 py-1.5 text-sm text-gray-600 font-mono">
                  https://github.com/{user.username}/{repo.name}.git
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 hover:bg-gray-50 text-gray-500 hover:text-gray-700"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              {/* File browser */}
              <div className="border border-gray-200 rounded-md overflow-hidden">
                {/* Latest commit info */}
                <div className="bg-[#f6f8fa] border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                  <img src={user.avatar} alt={user.username} className="w-6 h-6 rounded-full" />
                  <span className="text-sm font-medium text-gray-900">{user.username}</span>
                  <span className="text-sm text-gray-600">Update README with new instructions</span>
                  <span className="text-sm text-gray-500 ml-auto">Latest commit 2 hours ago</span>
                  <span className="text-sm text-gray-500">
                    <History size={12} className="inline mr-1" />
                    1,234
                  </span>
                </div>

                {/* File list */}
                <div className="divide-y divide-gray-200">
                  {repoFiles.map((file, index) => (
                    <div key={index} className="px-4 py-2 flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
                      {file.type === 'folder' ? (
                        <Folder size={16} className="text-[#54aeff]" />
                      ) : (
                        <File size={16} className="text-gray-400" />
                      )}
                      <span className="text-sm text-gray-900 flex-1">{file.name}</span>
                      <span className="text-sm text-gray-500 hidden sm:block">{file.message}</span>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{file.updatedAt}</span>
                    </div>
                  ))}
                </div>

                {/* README preview */}
                <div className="border-t border-gray-200 bg-white">
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-900">README.md</span>
                  </div>
                  <div className="p-6 prose prose-sm max-w-none">
                    <h1 className="text-2xl font-bold mb-4">{repo.name}</h1>
                    <p className="text-gray-600 mb-4">{repo.description}</p>
                    <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
                    <p className="text-gray-600 mb-2">To get started with this project:</p>
                    <pre className="bg-gray-100 rounded-md p-4 text-sm mb-4 overflow-x-auto">
                      <code>git clone https://github.com/{user.username}/{repo.name}.git{'\n'}cd {repo.name}{'\n'}npm install{'\n'}npm start</code>
                    </pre>
                    <h2 className="text-lg font-semibold mb-2">Features</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Modern and clean UI</li>
                      <li>Responsive design</li>
                      <li>Built with latest technologies</li>
                      <li>Well documented</li>
                    </ul>
                    <h2 className="text-lg font-semibold mb-2">License</h2>
                    <p className="text-gray-600">This project is licensed under the MIT License.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[296px] flex-shrink-0">
              {/* About */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  About
                </h3>
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
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} /> Readme
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield size={14} /> MIT License
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {repo.stars} stars
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> 23 watching
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} /> {repo.forks} forks
                  </span>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">Languages</h3>
                <div className="flex h-2 rounded-full overflow-hidden mb-2">
                  {repoLanguages.map(lang => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {repoLanguages.map(lang => (
                    <span key={lang.name} className="text-xs text-gray-600 flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      {lang.name} <span className="text-gray-400">{lang.percentage}%</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Contributors */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">Contributors</h3>
                <div className="flex flex-wrap gap-1">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white"
                      title={`Contributor ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Releases */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-1">
                  <Tag size={14} /> Releases
                </h3>
                <div className="text-sm">
                  <span className="bg-[#2da44e] text-white text-xs px-2 py-0.5 rounded-full mr-2">Latest</span>
                  <span className="text-blue-600 hover:underline cursor-pointer">v2.0.0</span>
                  <p className="text-gray-500 text-xs mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              {activeTab === 'issues' && <CircleDot size={48} className="mx-auto" />}
              {activeTab === 'pulls' && <GitPullRequest size={48} className="mx-auto" />}
              {activeTab === 'actions' && <Play size={48} className="mx-auto" />}
              {activeTab === 'security' && <Shield size={48} className="mx-auto" />}
              {activeTab === 'insights' && <BookOpen size={48} className="mx-auto" />}
              {activeTab === 'settings' && <Settings size={48} className="mx-auto" />}
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {activeTab === 'issues' && 'Issues'}
              {activeTab === 'pulls' && 'Pull Requests'}
              {activeTab === 'actions' && 'Actions'}
              {activeTab === 'security' && 'Security'}
              {activeTab === 'insights' && 'Insights'}
              {activeTab === 'settings' && 'Settings'}
            </h2>
            <p className="text-gray-500">This is a demo - {activeTab} tab content would appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
