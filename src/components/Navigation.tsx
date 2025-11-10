import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LinkedInIcon from './LinkedInIcon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = [
    { name: 'Hero', to: 'hero', isExternal: false },
    { name: 'About', to: 'about', isExternal: false },
    { name: 'Work', to: 'projects', isExternal: false },
    { name: 'Experience', to: 'experience', isExternal: false },
    { name: 'Contact', to: 'contact', isExternal: false },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY); // Debug log
      if (window.scrollY > 0) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Detect if we're in the Hero section (near the top)
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        if (window.scrollY < heroBottom - 100) {
          setActiveSection('hero');
        }
      }
    };

    // Check initial scroll position
    handleScroll();

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm"
      style={{ backgroundColor: '#EBF8FD' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Scroll to Top Button - Left Side */}
          <div className="flex items-center">
            <AnimatePresence>
              {showScrollTop && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-gray-600 hover:text-blue-700 transition-colors focus-outline cursor-pointer p-2"
                    aria-label="Scroll to top"
                  >
                    <ArrowUp size={24} />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(item.to)}
                className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200 focus-outline rounded-md ${
                  item.to === 'hero' ? 'hidden' : ''
                } ${
                    activeSection === item.to && activeSection !== 'hero'
                    ? 'text-blue-700 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
                aria-current={activeSection === item.to && activeSection !== 'hero' ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            {/* LinkedIn Icon Link */}
            <a
              href="https://www.linkedin.com/in/sarapratis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition-colors focus-outline p-2 rounded-md hover:bg-blue-50"
              aria-label="Visit LinkedIn profile"
            >
              <LinkedInIcon size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus-outline"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`block px-3 py-2 text-base font-medium cursor-pointer focus-outline rounded-md ${
                    item.to === 'hero' ? 'hidden' : ''
                  } ${
                    activeSection === item.to && activeSection !== 'hero'
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                  aria-current={activeSection === item.to && activeSection !== 'hero' ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* LinkedIn Icon Link - Mobile */}
              <a
                href="https://www.linkedin.com/in/jamelscott"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus-outline rounded-md"
                aria-label="Visit LinkedIn profile"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;