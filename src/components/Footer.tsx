import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Projects', href: '#products' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    capabilities: [
      { label: 'EHV Substations', href: '#products' },
      { label: 'Transmission Lines', href: '#products' },
      { label: 'T&C Services', href: '#services' },
      { label: 'O&M Support', href: '#services' },
    ],
    support: [
      { label: 'Quality & Safety', href: '#about' },
      { label: 'Technical Support', href: '#contact' },
      { label: 'Project Consultation', href: '#contact' },
      { label: 'Certifications', href: '#certifications' },
    ],
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-background text-foreground rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">MPS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">MASS POWER SOLUTIONS</h3>
                <p className="text-xs text-background/70">EHV Infrastructure</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Trusted EHV substation and transmission line contractor with 30 years of expertise. 
              TNEB Class I certified, serving power utilities across Tamil Nadu and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © {currentYear} MASS POWER SOLUTIONS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-background/70 hover:text-background transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
