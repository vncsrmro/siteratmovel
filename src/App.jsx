import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Critical path - load immediately
import Hero from './components/Hero';
import TubelightNavbar from './components/ui/tubelight-navbar';

// Lazy load below-the-fold components
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const Pillars = lazy(() => import('./components/Pillars'));
const FeaturesGrid = lazy(() => import('./components/FeaturesGrid'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Roadmap = lazy(() => import('./components/Roadmap'));
const Authority = lazy(() => import('./components/Authority'));
const Pricing = lazy(() => import('./components/Pricing'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const QRCodeHighlight = lazy(() => import('./components/QRCodeHighlight'));

// Lazy load pages
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Scroll to top on route change
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
        <Suspense fallback={<LoadingFallback />}>
          <section id="problema">
            <ProblemSolution />
          </section>
          <section id="qrcode">
            <QRCodeHighlight />
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
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      <TubelightNavbar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ajuda" element={<HelpCenter />} />
          <Route path="/tutoriais" element={<Tutorials />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfUse />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
