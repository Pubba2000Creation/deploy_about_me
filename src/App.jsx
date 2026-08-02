import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState, Suspense } from 'react';
import { trackPageView, initGA, trackVisitor } from './lib/analytics';

const Home = React.lazy(() => import('./pages/Home'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const ResearchDetails = React.lazy(() => import('./pages/ResearchDetails'));
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage'));
const ResearchPage = React.lazy(() => import('./pages/ResearchPage'));
const TechnologiesPage = React.lazy(() => import('./pages/TechnologiesPage'));

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
  useEffect(() => {
    initGA();
    trackVisitor();
  }, []);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="overflow-x-hidden text-neutral-900 dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800 min-h-screen transition-colors duration-500 ease-in-out">
      {/* Dynamic Background Background */}
      <div className="fixed top-0 -z-10 h-full w-full bg-white dark:bg-black transition-colors duration-500">
        {/* Main top-centered gradient */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        {/* Decorative left-corner glow (Large secondary ornament) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] lg:w-[1000px] h-[500px] lg:h-[1000px] rounded-full bg-purple-500/10 dark:bg-purple-900/10 blur-[120px] -z-20 transition-all duration-1000"></div>
      </div>

      <Router>
        <ScrollToHash />
        <PageViewTracker />
        <Suspense fallback={
          <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/experience" element={<ExperiencePage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/research" element={<ResearchPage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/technologies" element={<TechnologiesPage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/project/:id" element={<ProjectDetails theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/research/:id" element={<ResearchDetails theme={theme} toggleTheme={toggleTheme} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
