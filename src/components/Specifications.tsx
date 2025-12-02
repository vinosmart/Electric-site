import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Target, Users, ClipboardText, HardHat } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Specifications() {
  const titleRef = useRef<HTMLDivElement>(null)
  const qualityCardsRef = useRef<HTMLDivElement>(null)
  const bottomCtaRef = useRef<HTMLDivElement>(null)

  const executionCapabilities = [
    {
      category: 'Civil Works',
      icon: HardHat,
      capabilities: [
        'Foundation & earthwork for substations and tower structures',
        'Equipment foundations for transformers, reactors & switchgear',
        'Cable trenches & underground cable laying',
        'Control room & building construction',
        'Yard development & drainage systems',
        'Road access & compound wall construction',
      ],
    },
    {
      category: 'Electrical Works',
      icon: ClipboardText,
      capabilities: [
        'Busbar & conductor installation',
        'Switchgear & protection equipment installation',
        'Power & distribution transformer erection',
        'Overhead line stringing & sagging',
        'Cable laying, jointing & termination',
        'Earthing & lightning protection systems',
      ],
    },
    {
      category: 'Testing & Quality',
      icon: Target,
      capabilities: [
        'Pre-commissioning inspections & tests',
        'Equipment calibration & functional testing',
        'Relay protection setting & testing',
        'High voltage testing (HV/EHV)',
        'Insulation resistance & continuity tests',
        'Complete documentation & test reports',
      ],
    },
  ]

  const qualityFeatures = [
    {
      icon: CheckCircle,
      title: 'Strict Quality Control',
      description: 'Comprehensive quality assurance at every stage from procurement to commissioning',
    },
    {
      icon: Users,
      title: 'Expert Supervision',
      description: '300+ experienced professionals ensuring adherence to standards and safety protocols',
    },
    {
      icon: ClipboardText,
      title: 'Documentation',
      description: 'Complete project documentation including as-built drawings and O&M manuals',
    },
    {
      icon: HardHat,
      title: 'Safety Compliance',
      description: 'Zero-accident safety culture with strict adherence to safety regulations',
    },
  ]

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

      gsap.from(qualityCardsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: qualityCardsRef.current,
          start: 'top 80%',
        },
      })

      gsap.from(bottomCtaRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: bottomCtaRef.current,
          start: 'top 85%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const CapabilitySection = ({ capability, index }: { capability: typeof executionCapabilities[0]; index: number }) => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(sectionRef.current, {
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      })

      return () => ctx.revert()
    }, [index])

    return (
      <div ref={sectionRef}>
        <Card className="p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <capability.icon size={24} className="text-primary" weight="duotone" />
            </div>
            <h3 className="text-xl font-semibold">{capability.category}</h3>
          </div>
          <ul className="space-y-2">
            {capability.capabilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} weight="fill" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    )
  }

  return (
    <section id="specifications" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Execution Excellence</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Project Execution Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive in-house capabilities covering all aspects of EHV substation and 
            transmission line project execution with focus on quality and safety.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {executionCapabilities.map((capability, index) => (
            <CapabilitySection key={capability.category} capability={capability} index={index} />
          ))}
        </div>

        <div ref={qualityCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityFeatures.map((feature, index) => (
            <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon size={28} className="text-primary" weight="duotone" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div ref={bottomCtaRef} className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Committed to Excellence
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Our 30 years of experience, combined with a dedicated team of 300+ professionals, 
                ensures every project is delivered with the highest standards of quality, safety, 
                and reliability. We maintain strong relationships with TNEB/CEIG for seamless project execution.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-background/20 text-primary-foreground border-background/30 hover:bg-background/30">
                  TNEB Class I Certified
                </Badge>
                <Badge className="bg-background/20 text-primary-foreground border-background/30 hover:bg-background/30">
                  ESA:530 License
                </Badge>
                <Badge className="bg-background/20 text-primary-foreground border-background/30 hover:bg-background/30">
                  CMWSSB Class A&B
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80 text-sm">Quality Tested</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl font-bold mb-2">On-Time</div>
                <div className="text-primary-foreground/80 text-sm">Delivery Focus</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-primary-foreground/80 text-sm">Team Members</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-primary-foreground/80 text-sm">Compromise</div>
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
        </div>
      </div>
    </section>
  )
}
