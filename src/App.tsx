import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
