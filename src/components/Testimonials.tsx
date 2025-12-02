import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Quotes, CaretLeft, CaretRight, Star } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: 'K. Sundararajan',
      role: 'Chief Engineer (Projects)',
      company: 'Tamil Nadu Electricity Board',
      rating: 5,
      text: 'MASS POWER SOLUTIONS has executed multiple EHV substation projects for TNEB with exceptional quality and adherence to timelines. Their technical expertise in civil and electrical works, combined with strict safety protocols, makes them a reliable contractor for critical power infrastructure.',
      project: '400kV Substation, Madurai',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sundararajan&backgroundColor=b6e3f4',
    },
    {
      name: 'Dr. R. Manikandan',
      role: 'Project Director',
      company: 'Independent Power Producer',
      rating: 5,
      text: 'We engaged MASS POWER SOLUTIONS for complete turnkey execution of our 230kV substation and interconnection works. Their in-house team of 300+ professionals delivered the project ahead of schedule. The testing and commissioning was flawless, demonstrating their deep technical competence.',
      project: '230kV Substation & T/L Package',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manikandan&backgroundColor=c0aede',
    },
    {
      name: 'S. Venkatesh',
      role: 'Divisional Engineer',
      company: 'CMWSSB',
      rating: 5,
      text: 'As a Class A&B CMWSSB contractor, MASS POWER SOLUTIONS has demonstrated excellent project management and execution capabilities. Their understanding of local conditions and strong supplier network ensures timely material availability and smooth project completion.',
      project: 'Infrastructure Project, Chennai',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Venkatesh&backgroundColor=d1d4f9',
    },
    {
      name: 'A. Ramachandran',
      role: 'GM (Transmission)',
      company: 'State Power Utility',
      rating: 5,
      text: '30 years of experience truly shows in MASS POWER SOLUTIONS\' work. From design to commissioning, every aspect of the transmission line project was handled professionally. Their established liaison with TNEB/CEIG authorities facilitated smooth regulatory clearances and approvals.',
      project: '400kV D/C Transmission Line',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramachandran&backgroundColor=ffd5dc',
    },
    {
      name: 'P. Krishnan',
      role: 'Operations Manager',
      company: 'Industrial Power System',
      rating: 5,
      text: 'MASS POWER SOLUTIONS\' O&M services have been exceptional. Their preventive maintenance programs and quick breakdown support ensure our 110kV substation operates at optimal efficiency. The dedicated support team understands our requirements and responds promptly.',
      project: '110kV Substation O&M',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Krishnan&backgroundColor=ffdfbf',
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
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (slidesRef.current) {
      gsap.fromTo(
        slidesRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      )
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[currentSlide]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by power utilities, independent power producers, and industrial clients 
            for delivering exceptional EHV infrastructure projects across Tamil Nadu.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-12">
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Quotes size={24} className="text-primary-foreground" weight="fill" />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold mb-1">{activeTestimonial.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{activeTestimonial.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{activeTestimonial.company}</p>
                  <div className="flex gap-1 justify-center lg:justify-start mb-4">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} weight="fill" className="text-accent" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activeTestimonial.project}
                  </Badge>
                </div>
              </div>

              <div ref={slidesRef} className="lg:col-span-3 flex flex-col justify-center" key={currentSlide}>
                <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                  "{activeTestimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevSlide}
                      className="rounded-full"
                    >
                      <CaretLeft size={20} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextSlide}
                      className="rounded-full"
                    >
                      <CaretRight size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Completed Projects</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
            <div className="text-sm text-muted-foreground">Major Incidents</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
