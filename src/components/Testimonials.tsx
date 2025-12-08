import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Star, Quotes } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      text: "Ayyappan & Co delivered exceptional support for the RPTL 800KV HVDC Raigarh–Pugalur TL-1 works at Salem. Their execution during the 400KV–230KV MC Transmission Line at Puliyanthope and the 400KV Quad DC Ottapidaram TL package was precise, safe, and ahead of schedule.",
      author: "Project Manager – L&T Construction",
      location: "Salem, Tamil Nadu",
      company: "L&T Construction"
    },
    {
      text: "The LILO of the 400KV Karaikudi–Pugalur Transmission Line (Feeder II) required high accuracy and disciplined safety practices. Ayyappan & Co delivered flawlessly, keeping all technical parameters and schedule commitments on track.",
      author: "Senior Engineer – KEC International",
      location: "Tamil Nadu",
      company: "KEC International"
    },
    {
      text: "Ayyappan & Co executed piling and civil foundation works for the TLSP K-3 220/110KV line with excellent workmanship. Their coordination with KSEB and multi-agency teams ensured a smooth execution process.",
      author: "Project Lead – Sterlite Power Transmission Ltd.",
      location: "Kerala & Tamil Nadu",
      company: "Sterlite Power"
    },
    {
      text: "Their work on multiple 400KV DC lines under JICA Package 7/8—including Korattur–Manali, Manali–Thervaikandikai, and related deviations for IOCL—was highly commendable. Tower erection, stringing, and Panther conductor works were executed with excellent quality.",
      author: "Executive Engineer – TNEB / IOCL",
      location: "Chennai, Tamil Nadu",
      company: "TNEB / IOCL"
    },
    {
      text: "Ayyappan & Co executed the 110/33KV 50MVA power transformer foundation civil works with outstanding precision and engineering discipline. Their quality, safety adherence, and project coordination ensured a seamless readiness for electrical erection and commissioning.",
      author: "Project Director – Green Sparrow Solar Nest Pvt",
      location: "Tamil Nadu",
      company: "Green Sparrow Solar Nest"
    },
    {
      text: "Ayyappan & Co professionally carried out the shifting of existing 11KV HT/LT overhead lines and conversion to RMU systems for the ECR road-widening project. Their execution minimized disruptions, maintained safety, and ensured timely completion despite the complex working conditions.",
      author: "Divisional Engineer – Highway Department",
      location: "East Coast Road, Tamil Nadu",
      company: "Highway Department"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#F0F9FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#DBEAFE] text-[#3B82F6] font-bold rounded-full text-sm mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#1E3A5A] max-w-2xl mx-auto">
            Read what our partners say about our execution excellence and engineering precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <Card key={idx} className="testimonial-card p-8 hover:shadow-xl transition-shadow border-[#BFDBFE] bg-white/70 group">
              <Quotes size={48} weight="duotone" className="text-[#BFDBFE] mb-6 group-hover:text-[#93C5FD] transition-colors" />
              
              <p className="text-[#0F172A] leading-relaxed mb-6 italic text-sm sm:text-base">
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className="text-[#3B82F6]" />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#E0F2FE]">
                <div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#3B82F6] font-bold text-lg">
                  {item.company.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#0F172A] text-sm">{item.author}</div>
                  <div className="text-[#1E3A5A] text-xs">{item.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
