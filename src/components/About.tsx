import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Crosshair, Users, ShieldCheck, Clock, Handshake, Network } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const valuePropositions = [
    {
      icon: Crosshair,
      title: 'Proven Expertise & Experience',
      description: '30 years of specialized experience in EHV Substation and Transmission Line civil and electrical works',
    },
    {
      icon: Clock,
      title: 'Timely Project Delivery',
      description: 'Focused on on-time delivery of projects within budgeted cost with strict adherence to timelines',
    },
    {
      icon: Users,
      title: 'Dedicated Professional Team',
      description: 'In-house team of 300+ professionals and skilled technicians experienced in all construction aspects',
    },
    {
      icon: ShieldCheck,
      title: 'Quality & Safety Standards',
      description: 'Strict adherence to quality protocols and safety regulations on every project site',
    },
    {
      icon: Network,
      title: 'Resource Network',
      description: 'Good understanding of local conditions with access to technical and financial resources',
    },
    {
      icon: Handshake,
      title: 'Strong Supplier Relationships',
      description: 'Extensive network of suppliers ensuring timely delivery of materials and equipment',
    },
  ]

  const capabilities = [
    'EHV Substation Design',
    'Civil & Electrical Works',
    'Transmission Line Construction',
    'Testing & Commissioning',
    'Operation & Maintenance',
    'Turnkey Project Execution',
    'TNEB Class I Certified',
    'ESA Grade License Holder',
    'CMWSSB Class A&B Contractor',
    'TNEB/CEIG Liaison',
    'Power Utility Projects',
    'Independent Power Producers',
  ]

  const titleRef = useRef<HTMLDivElement>(null)
  const contentLeftRef = useRef<HTMLDivElement>(null)
  const contentRightRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      })

      gsap.from(contentLeftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentLeftRef.current,
          start: 'top 75%',
        },
      })

      gsap.from(contentRightRef.current?.children || [], {
        opacity: 0,
        x: 50,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRightRef.current,
          start: 'top 75%',
        },
      })

      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Power Infrastructure Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three decades of specialized expertise in designing, engineering, and executing EHV substation 
            and transmission line projects for power utilities and independent power producers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div ref={contentLeftRef} className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop" 
                alt="High voltage electrical substation with transformers and switchgear"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-background mb-2">Powering Progress Since 1993</h3>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Heritage</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With <strong>30 years of proven expertise</strong>, MASS POWER SOLUTIONS has 
                established itself as a leading contractor for EHV substation and transmission line works. 
                We specialize in complete turnkey solutions covering Design, Engineering, Procurement, 
                Construction, Testing & Commissioning, and Operation & Maintenance services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a <strong>TNEB certified Class I contractor</strong> and <strong>ESA Grade License 
                (ESA:530) holder</strong> issued by the Electrical Licensing Board of Tamil Nadu, we execute 
                complex EHV substation and transmission line projects for state power utilities and independent 
                power producers across Tamil Nadu and neighboring states.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Class A&B CMWSSB contractor certification further demonstrates our commitment to delivering 
                infrastructure projects of the highest standards. We maintain established relationships and constant 
                liaison with TNEB/CEIG authorities for seamless project execution.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-2">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} weight="fill" />
                    <span className="text-xs text-foreground leading-tight">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={contentRightRef} className="grid gap-6">
            {valuePropositions.map((item, index) => (
              <Card
                key={item.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1509390874765-c2168d4d4e1f?w=1920&h=1080&fit=crop" 
              alt="Power transmission lines and infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Value of Association with MASS POWER SOLUTIONS
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Partner with a contractor who understands the complexities of power infrastructure. Our proven track 
              record, dedicated team, and commitment to quality ensure successful project delivery every time.
            </p>
            <div className="grid sm:grid-cols-4 gap-6">
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-primary-foreground/80 text-sm">Years of Experience</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-primary-foreground/80 text-sm">Skilled Professionals</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80 text-sm">Quality Compliance</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80 text-sm">Project Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
