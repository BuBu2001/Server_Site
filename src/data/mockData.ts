export const user = {
  username: 'octocat',
  name: 'The Octocat',
  bio: 'Full-stack developer. Open source enthusiast. Building the future of code.',
  avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
  company: '@github',
  location: 'San Francisco, CA',
  email: 'octocat@github.com',
  twitter: 'octocat',
  followers: 1247,
  following: 9,
  repos: 8,
  stars: 342,
  joinedDate: 'Jan 2011',
};

export const repositories = [
  {
    id: 1,
    name: 'hello-world',
    description: 'My first repository on GitHub!',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 156,
    forks: 75,
    updatedAt: '2 hours ago',
    isPublic: true,
    topics: ['javascript', 'beginner', 'hello-world'],
  },
  {
    id: 2,
    name: 'react-dashboard',
    description: 'A modern dashboard built with React and TypeScript',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 89,
    forks: 23,
    updatedAt: '5 hours ago',
    isPublic: true,
    topics: ['react', 'typescript', 'dashboard'],
  },
  {
    id: 3,
    name: 'api-server',
    description: 'RESTful API server built with Node.js and Express',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 234,
    forks: 56,
    updatedAt: '1 day ago',
    isPublic: true,
    topics: ['nodejs', 'express', 'api', 'rest'],
  },
  {
    id: 4,
    name: 'machine-learning-basics',
    description: 'Introduction to machine learning with Python',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 445,
    forks: 112,
    updatedAt: '3 days ago',
    isPublic: true,
    topics: ['python', 'machine-learning', 'data-science'],
  },
  {
    id: 5,
    name: 'css-animations',
    description: 'Collection of beautiful CSS animations and transitions',
    language: 'CSS',
    languageColor: '#563d7c',
    stars: 67,
    forks: 18,
    updatedAt: '1 week ago',
    isPublic: true,
    topics: ['css', 'animations', 'web-design'],
  },
  {
    id: 6,
    name: 'docker-compose-examples',
    description: 'Useful docker-compose configurations for development',
    language: 'Dockerfile',
    languageColor: '#384d54',
    stars: 178,
    forks: 45,
    updatedAt: '2 weeks ago',
    isPublic: true,
    topics: ['docker', 'devops', 'containers'],
  },
  {
    id: 7,
    name: 'vim-config',
    description: 'My personal Vim/Neovim configuration files',
    language: 'Lua',
    languageColor: '#000080',
    stars: 34,
    forks: 8,
    updatedAt: '3 weeks ago',
    isPublic: true,
    topics: ['vim', 'neovim', 'config'],
  },
  {
    id: 8,
    name: 'private-notes',
    description: 'Personal notes and documentation',
    language: 'Markdown',
    languageColor: '#083fa1',
    stars: 0,
    forks: 0,
    updatedAt: '1 month ago',
    isPublic: false,
    topics: [],
  },
];

export const contributions = Array.from({ length: 365 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (365 - i));
  const level = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0;
  return { date: date.toISOString().split('T')[0], level };
});

export const pinnedRepos = repositories.slice(0, 6);

export const recentActivity = [
  { type: 'push', repo: 'hello-world', message: 'Update README.md', time: '2 hours ago' },
  { type: 'star', repo: 'facebook/react', message: 'Starred', time: '5 hours ago' },
  { type: 'push', repo: 'react-dashboard', message: 'Add dark mode support', time: '1 day ago' },
  { type: 'fork', repo: 'vercel/next.js', message: 'Forked', time: '2 days ago' },
  { type: 'issue', repo: 'api-server', message: 'Opened issue #42: Fix CORS headers', time: '3 days ago' },
  { type: 'push', repo: 'machine-learning-basics', message: 'Add neural network example', time: '4 days ago' },
  { type: 'pr', repo: 'react-dashboard', message: 'Opened PR #15: Add chart components', time: '5 days ago' },
];

export const repoFiles = [
  { name: 'src', type: 'folder', updatedAt: '2 hours ago', message: 'Add dark mode support' },
  { name: 'public', type: 'folder', updatedAt: '1 day ago', message: 'Update favicon' },
  { name: 'node_modules', type: 'folder', updatedAt: '3 days ago', message: 'Update dependencies' },
  { name: '.github', type: 'folder', updatedAt: '1 week ago', message: 'Add CI workflow' },
  { name: '.gitignore', type: 'file', updatedAt: '2 weeks ago', message: 'Initial commit' },
  { name: 'package.json', type: 'file', updatedAt: '2 hours ago', message: 'Bump version to 2.0.0' },
  { name: 'README.md', type: 'file', updatedAt: '1 day ago', message: 'Update documentation' },
  { name: 'tsconfig.json', type: 'file', updatedAt: '1 week ago', message: 'Configure strict mode' },
  { name: 'vite.config.ts', type: 'file', updatedAt: '3 days ago', message: 'Add proxy configuration' },
  { name: 'tailwind.config.js', type: 'file', updatedAt: '5 days ago', message: 'Add custom colors' },
];

export const repoBranches = ['main', 'develop', 'feature/dark-mode', 'feature/charts', 'bugfix/cors'];

export const repoLanguages = [
  { name: 'TypeScript', percentage: 65.2, color: '#3178c6' },
  { name: 'JavaScript', percentage: 18.5, color: '#f1e05a' },
  { name: 'CSS', percentage: 10.3, color: '#563d7c' },
  { name: 'HTML', percentage: 6.0, color: '#e34c26' },
];
