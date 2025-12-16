import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/Testimonials';
import Roadmap from './components/Roadmap';
import Authority from './components/Authority';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TubelightNavbar from './components/ui/tubelight-navbar';

// Pages
import HelpCenter from './pages/HelpCenter';
import Tutorials from './pages/Tutorials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Componente que rola para o topo quando a rota muda
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-white overflow-x-hidden selection:bg-primary selection:text-black">
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="pilares">
          <Pillars />
        </section>
        <section id="funcionalidades">
          <FeaturesGrid />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="seguranca">
          <Authority />
        </section>
        <section id="precos">
          <Pricing />
        </section>
        <section id="contato">
          <CTA />
        </section>
      </main>
      <Footer />
      <TubelightNavbar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ajuda" element={<HelpCenter />} />
        <Route path="/tutoriais" element={<Tutorials />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
