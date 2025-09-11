import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Bryanly Jarito
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  router.pathname === href ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-5 h-5 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 space-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  router.pathname === href 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
