import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ShieldCheck, ChevronRight, Facebook, Linkedin, Twitter, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import Logo from './Logo';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Tools', path: '/tools' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-bold transition-colors hover:text-secondary',
                    location.pathname === link.path ? 'text-secondary' : 'text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary transition-all shadow-lg hover:shadow-gray-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-xl"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-base font-bold py-2',
                    location.pathname === link.path ? 'text-secondary' : 'text-primary'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-secondary text-white px-6 py-3 rounded-full text-center font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Logo light />
              <p className="text-slate-200 text-sm leading-relaxed">
                Empowering families with professional mutual fund guidance and wealth management solutions for over 20 years.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-200 hover:text-secondary text-sm transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-2" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-slate-200 hover:text-secondary text-sm transition-colors">Mutual Funds</Link></li>
                <li><Link to="/services" className="text-slate-200 hover:text-secondary text-sm transition-colors">SIP Planning</Link></li>
                <li><Link to="/services" className="text-slate-200 hover:text-secondary text-sm transition-colors">Retirement Planning</Link></li>
                <li><Link to="/services" className="text-slate-200 hover:text-secondary text-sm transition-colors">Tax Saving (ELSS)</Link></li>
                <li><Link to="/services" className="text-slate-200 hover:text-secondary text-sm transition-colors">Portfolio Review</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                  <span className="text-slate-200 text-sm">A-3, Mehra Business Center, Adjacent Akashwani Kendra, Vidhan Sabha Marg, Lucknow. 226001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-secondary shrink-0" />
                  <span className="text-slate-200 text-sm">+91 92360 87951</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="text-secondary shrink-0" />
                  <span className="text-slate-200 text-sm">shailendrasahu80@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-slate-300 text-xs mb-4">
              © {new Date().getFullYear()} Ascent Finvest. All rights reserved. AMFI Registered Mutual Fund Distributor.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
