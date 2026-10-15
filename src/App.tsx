import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import RepositoryPage from './components/RepositoryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/repo/:repoName" element={<RepositoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
