import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cube, Gear, Wrench, Flask, TrendUp, Headset } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const services = [
    {
      icon: Cube,
      title: 'Design & Engineering',
      description: 'Comprehensive design and engineering services for EHV substations and transmission lines',
      features: ['Detailed engineering drawings', 'Load flow analysis', 'Equipment selection', 'Technical specifications'],
    },
    {
      icon: Gear,
      title: 'Procurement Services',
      description: 'End-to-end procurement of electrical equipment, materials, and components from certified vendors',
      features: ['Vendor evaluation', 'Quality assurance', 'Timely delivery', 'Cost optimization'],
    },
    {
      icon: Wrench,
      title: 'Construction (Civil & Electrical)',
      description: 'Complete civil and electrical construction works for substations and transmission line projects',
      features: ['Foundation & structures', 'Cable laying & termination', 'Equipment installation', 'Site management'],
    },
    {
      icon: Flask,
      title: 'Testing & Commissioning',
      description: 'Comprehensive testing and commissioning services ensuring operational readiness and safety compliance',
      features: ['Pre-commissioning tests', 'Equipment calibration', 'System integration', 'Performance validation'],
    },
    {
      icon: TrendUp,
      title: 'Operation & Maintenance',
      description: 'Ongoing O&M services to ensure optimal performance and longevity of power infrastructure',
      features: ['Preventive maintenance', 'Breakdown support', 'Performance monitoring', 'Upgrade services'],
    },
    {
      icon: Headset,
      title: 'Turnkey Project Execution',
      description: 'Complete end-to-end turnkey solutions from concept to commissioning and handover',
      features: ['Single-point responsibility', 'Integrated approach', 'Budget adherence', 'Timeline commitment'],
    },
  ]

  const titleRef = useRef<HTMLDivElement>(null)
  const bottomCardsRef = useRef<HTMLDivElement>(null)

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

      gsap.from(bottomCardsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bottomCardsRef.current,
          start: 'top 80%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        })
      })

      return () => ctx.revert()
    }, [index])

    return (
      <div ref={cardRef}>
        <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
            <service.icon size={28} className="text-primary" weight="duotone" />
          </div>
          <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
          <div className="space-y-2 pt-4 border-t border-border">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive Power Infrastructure Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial design to final commissioning and ongoing maintenance, we provide complete turnkey 
            solutions for EHV substations and transmission line projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div ref={bottomCardsRef} className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4">Why Choose MASS POWER SOLUTIONS?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium">TNEB Class I Certified</div>
                  <div className="text-sm text-muted-foreground">State Power Utility certified contractor for EHV works</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium">ESA Grade License Holder</div>
                  <div className="text-sm text-muted-foreground">ESA:530 license by Electrical Licensing Board of Tamil Nadu</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium">300+ Skilled Professionals</div>
                  <div className="text-sm text-muted-foreground">Dedicated in-house team for all project aspects</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium">Strong Supplier Network</div>
                  <div className="text-sm text-muted-foreground">Ensuring timely material supply and cost efficiency</div>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4">Sectors We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Power Utilities',
                'Independent Power Producers',
                'State Electricity Boards',
                'Renewable Energy Projects',
                'Industrial Power Systems',
                'Smart Grid Projects',
                'Distribution Networks',
                'Transmission Infrastructure',
              ].map((sector) => (
                <div key={sector} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium">{sector}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
