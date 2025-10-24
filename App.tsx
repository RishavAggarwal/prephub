
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrelimsPage from './pages/PrelimsPage';
import MainsPage from './pages/MainsPage';
import InterviewPage from './pages/InterviewPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import ResourcesPage from './pages/ResourcesPage';
import PlaceholderPage from './pages/PlaceholderPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout />
    </HashRouter>
  );
};

const MainLayout: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-text-primary">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prelims" element={<PrelimsPage />} />
          <Route path="/mains" element={<MainsPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/current-affairs" element={<CurrentAffairsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/mock-tests" element={<PlaceholderPage title="Mock Tests" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/login" element={<PlaceholderPage title="Login / Sign Up" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
