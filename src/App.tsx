import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LearningPage } from './pages/LearningPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { TeamPage } from './pages/TeamPage';
import { FAQsPage } from './pages/FAQsPage';
import { ContactPage } from './pages/ContactPage';
import { TourPage } from './pages/TourPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-a-tour" element={<TourPage />} />
        {/* Catch-all fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#222521] selection:bg-[#E7ECE6] selection:text-[#2C3827]">
        <Navbar />
        <main className="grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
