import React, { useEffect } from 'react';
import { Toaster } from 'sonner';
import PhotographyHeader from './components/PhotographyHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/photography.css';
import { useLocation } from 'react-router-dom';

const PhotographyLandingPage = () => {
    const location = useLocation();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add CSS variables for dynamic styling
    const root = document.documentElement;
    root.style.setProperty('--color-accent', '#d0b8ac');
    root.style.setProperty('--color-accent-hover', '#b99f96');
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  // Handle hash navigation (when coming from project pages)
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is loaded
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <PhotographyHeader />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(26, 26, 27, 0.9)',
            color: 'white',
            border: '1px solid rgba(208, 184, 172, 0.2)',
          },
        }}
      />
      
      {/* Custom Cursor Enhancement */}
      <style jsx>{`
        .cursor-pointer:hover {
          cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iI2QwYjhhYyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==') 12 12, pointer;
        }
      `}</style>
    </div>
  );
};

export default PhotographyLandingPage;