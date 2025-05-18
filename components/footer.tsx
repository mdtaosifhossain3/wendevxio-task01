import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Contact', href: '/contact' },
    { label: 'Work', href: '/work' },
    { label: 'About Us', href: '/about' },
    { label: 'Privacy & Policy', href: '/privacy' },
    { label: 'Terms & Condition', href: '/terms' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white ">
      {/* Top blue bar */}
      <div className="w-full h-1 bg-blue-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-600">Web</span>
                <span className="text-blue-900">Dev</span>
                <span className="text-blue-600">Xio</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Year and website */}
          <div className="hidden md:block text-gray-500 text-sm">
            2025 @webdevxio
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-sm text-gray-500">
              2025 @webdevxio
            </div>
          </div>
        </div>
      )}
      
      {/* Light gray bottom border */}
      <div className="w-full h-px bg-gray-100 shadow-sm"></div>
    </header>
  );
}