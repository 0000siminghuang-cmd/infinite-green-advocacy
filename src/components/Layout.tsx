import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logoLoop from '../assets/logo-loop.png';
import logoText from '../assets/logo-text.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F6FC] font-sans selection:bg-[#2F81F7] selection:text-white">
      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logoLoop} alt="Infinite Green Logo" className="h-8 md:h-10 mix-blend-screen invert hue-rotate-180 brightness-110" />
            <img src={logoText} alt="Infinite Green" className="h-6 md:h-8 mix-blend-screen invert hue-rotate-180 brightness-110" />
          </Link>
          <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
            <Link to="/pathology" className="hover:text-white transition-colors">Pathology</Link>
            <Link to="/epr" className="hover:text-white transition-colors">EPR Framework</Link>
            <Link to="/" className="hover:text-white transition-colors">Join Coalition</Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-sm text-gray-500">
        <p className="mb-2 font-bold tracking-widest uppercase text-[#2F81F7]">LESS PLASTIC, MORE LIFE.</p>
        <p className="mb-4">© {new Date().getFullYear()} INFINITE GREEN. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          <Link to="#" className="hover:text-white transition-colors">Data Ethics</Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
