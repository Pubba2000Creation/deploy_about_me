import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ResearchDetails from './pages/ResearchDetails';
import ExperiencePage from './pages/ExperiencePage';
import ResearchPage from './pages/ResearchPage';
import { trackPageView } from './lib/analytics';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800 min-h-screen bg-[radial-gradient(90%_120%_at_34%_10%,#000000_70%,#020617_60%,#6366f1_120%)]">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <Router>
        <ScrollToHash />
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/research/:id" element={<ResearchDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
