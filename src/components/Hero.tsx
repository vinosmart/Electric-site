import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lightning } from '@phosphor-icons/react'

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const circuitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.from(badgeRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out',
      })
      .from(contentRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=0.4')
      .from(statsRef.current?.children || [], {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.4)',
      }, '-=0.3')
      .from(featuresRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.6')
      
      if (circuitRef.current) {
        gsap.to(circuitRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: 'none',
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background via-50% to-accent/8"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/3 via-transparent to-primary/5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div ref={badgeRef}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm border border-accent/20">
                  <Lightning size={18} weight="fill" />
                  30 Years of Excellence in Power Infrastructure
                </span>
              </div>
              
              <div ref={contentRef} className="space-y-4">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
                  EHV Substation &{' '}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Transmission Line
                  </span>{' '}
                  Specialists
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  MASS POWER SOLUTIONS - Your trusted partner for complete Design, Engineering, Procurement, 
                  Construction, Testing & Commissioning of EHV substations and transmission lines. TNEB Class I 
                  certified contractor with ESA Grade License (ESA:530).
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all group"
                onClick={() => scrollToSection('services')}
              >
                Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-2"
              >
                Get Quote
              </Button>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border">
              <div className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all hover:scale-105 cursor-pointer">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-all hover:scale-105 cursor-pointer">
                <div className="text-3xl font-bold text-accent">300+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-all hover:scale-105 cursor-pointer">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all hover:scale-105 cursor-pointer">
                <div className="text-3xl font-bold text-primary">TNEB</div>
                <div className="text-sm text-muted-foreground">Class I Certified</div>
              </div>
            </div>
          </div>

          <div ref={featuresRef} className="hidden lg:block">
            <div className="relative">
              <div ref={circuitRef} className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary transition-all group cursor-pointer">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">EHV</div>
                          <div className="text-xs text-muted-foreground mt-1">Substations</div>
                        </div>
                      </div>
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-accent transition-all group cursor-pointer">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">T&D</div>
                          <div className="text-xs text-muted-foreground mt-1">Lines</div>
                        </div>
                      </div>
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-secondary transition-all group cursor-pointer">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform">T&C</div>
                          <div className="text-xs text-muted-foreground mt-1">Services</div>
                        </div>
                      </div>
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary transition-all group cursor-pointer">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">O&M</div>
                          <div className="text-xs text-muted-foreground mt-1">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}
