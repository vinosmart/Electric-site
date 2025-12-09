import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { List, X, Phone } from '@phosphor-icons/react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Capabilities', id: 'products' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/70 shadow-sm border-b border-[#BFDBFE]' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#03045e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MPI</span>
              </div>
              <div>
                <h1 className="font-bold text-base leading-tight text-[#03045e]">Mass Power Infra</h1>
                <p className="text-xs text-[#1E3A5A] leading-tight">Power Infrastructure Experts Since 2009</p>
                <p className="text-[11px] text-[#1E3A5A] leading-tight">Ayyappan &amp; Co</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-[#1E3A5A] hover:text-[#03045e] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919442152528" className="flex items-center gap-2 text-sm font-medium text-[#03045e]">
                <Phone size={16} weight="bold" className="text-[#06d6a0]" />
                +91 94421 52528
              </a>
              <Button
                size="sm"
                className="bg-[#06d6a0] hover:bg-[#06d6a0] text-white font-semibold h-9 px-4"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/70 lg:hidden animate-in slide-in-from-right duration-300"
          style={{ top: '64px' }}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 text-base font-medium text-[#03045e] hover:bg-[#E0F2FE] rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-[#BFDBFE]">
              <Button
                className="w-full bg-[#06d6a0] hover:bg-[#06d6a0] text-white font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

