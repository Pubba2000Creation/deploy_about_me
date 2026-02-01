import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ResearchDetails from './pages/ResearchDetails';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800 min-h-screen bg-[radial-gradient(90%_120%_at_34%_10%,#000000_70%,#020617_60%,#6366f1_120%)]">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/research/:id" element={<ResearchDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
