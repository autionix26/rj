
import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyMarquee from './components/CompanyMarquee';

// Lazy load below-the-fold components
const VideoSection = lazy(() => import('./components/VideoSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Process = lazy(() => import('./components/Process'));
const Comparison = lazy(() => import('./components/Comparison'));
const Exclusivity = lazy(() => import('./components/Exclusivity'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const LazySection: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      id={id} 
      className={`section-fade-in ${isVisible ? 'section-visible' : ''}`}
      style={{ minHeight: isVisible ? 'auto' : '300px' }}
    >
      {isVisible && (
        <Suspense fallback={<div className="h-64 w-full bg-brand-dark opacity-10" />}>
          {children}
        </Suspense>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-dark antialiased bg-brand-dark text-white">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <CompanyMarquee />

        <LazySection id="video">
          <VideoSection />
        </LazySection>
        
        <LazySection id="process">
          <Process />
        </LazySection>
        
        <LazySection id="testimonials">
          <Testimonials />
        </LazySection>
        
        <LazySection id="comparison">
          <Comparison />
        </LazySection>
        
        <LazySection id="exclusivity">
          <Exclusivity />
        </LazySection>
        
        <LazySection id="pricing">
          <Pricing />
        </LazySection>
        
        <LazySection id="faq">
          <FAQ />
        </LazySection>
      </main>

      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
};

export default App;
