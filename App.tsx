
import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyMarquee from './components/CompanyMarquee';

const VideoSection = lazy(() => import('./components/VideoSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Process = lazy(() => import('./components/Process'));
const Comparison = lazy(() => import('./components/Comparison'));
const Exclusivity = lazy(() => import('./components/Exclusivity'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const ManagedSection: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '15% 0px', threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={`section-reveal ${isVisible ? 'visible' : ''}`}
    >
      {isVisible ? (
        <Suspense fallback={<div className="h-40 bg-brand-dark/50 animate-pulse" />}>
          {children}
        </Suspense>
      ) : (
        <div className="h-[20vh]" />
      )}
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white antialiased">
      <Header />
      <main>
        <div id="top">
          <Hero />
        </div>
        
        <ManagedSection id="video">
          <VideoSection />
        </ManagedSection>

        <CompanyMarquee />

        <ManagedSection id="process">
          <Process />
        </ManagedSection>
        
        <ManagedSection id="testimonials">
          <Testimonials />
        </ManagedSection>
        
        <ManagedSection id="comparison">
          <Comparison />
        </ManagedSection>
        
        <ManagedSection id="exclusivity">
          <Exclusivity />
        </ManagedSection>
        
        <ManagedSection id="pricing">
          <Pricing />
        </ManagedSection>
        
        <ManagedSection id="faq">
          <FAQ />
        </ManagedSection>
      </main>

      <Footer />
    </div>
  );
};

export default App;
