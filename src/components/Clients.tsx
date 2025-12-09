import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Buildings, Lightning, SunHorizon, Gear, Broadcast, Factory } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Clients() {
  const titleRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)

  const clients = [
    { name: 'Mahabala', icon: Buildings, color: 'bg-[#3B82F6]' },
    { name: 'TNEB', icon: Lightning, color: 'bg-[#39726F]' },
    { name: 'NLC India', icon: SunHorizon, color: 'bg-[#3B82F6]' },
    { name: 'Green Sparrow', icon: Broadcast, color: 'bg-[#39726F]' },
    { name: 'Kalpa-Taru', icon: Gear, color: 'bg-[#3B82F6]' },
    { name: 'TNSB', icon: Factory, color: 'bg-[#39726F]' },
  ]

  // Updated revenue data based on screenshot
  const revenueData = [
    { year: '2015-16', amount: 24, label: '₹24 Cr' },
    { year: '2016-17', amount: 9, label: '₹9 Cr' },
    { year: '2017-18', amount: 14, label: '₹14 Cr' },
    { year: '2018-19', amount: 24, label: '₹24 Cr' },
    { year: '2019-20', amount: 23, label: '₹23 Cr' },
    { year: '2020-21', amount: 12, label: '₹12 Cr' },
    { year: '2021-22', amount: 18, label: '₹18 Cr' },
    { year: '2022-23', amount: 26.56, label: '₹26.56 Cr' },
    { year: '2023-24', amount: 22.12, label: '₹22.12 Cr' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 1 })
      if (clientsRef.current?.children) {
        gsap.set(clientsRef.current.children, { opacity: 1 })
      }

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      })

      if (clientsRef.current?.children) {
        gsap.from(clientsRef.current.children, {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: clientsRef.current,
            start: 'top 85%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="clients" className="py-20 lg:py-28 bg-[#EEE8A9]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-[#3B82F6] text-white font-semibold rounded-full text-sm mb-6">
            Our Valued Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#39726F] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base lg:text-lg text-[#39726F] max-w-2xl mx-auto">
            Partnering with leading power utilities, infrastructure companies, and independent power producers 
            across Tamil Nadu and neighboring states.
          </p>
        </div>

        {/* Partners Grid - Clean horizontal cards */}
        <div ref={clientsRef} className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-20" style={{ opacity: 1 }}>
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-3 p-6 bg-white/70 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 min-w-[140px]"
            >
              <div className={`w-14 h-14 rounded-2xl ${client.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <client.icon size={28} className="text-white" weight="duotone" />
              </div>
              <span className="text-sm font-semibold text-[#39726F]">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Stats - Clean card style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6] mb-2">₹22.12 Cr</div>
            <div className="text-sm text-[#39726F] font-medium">Latest Revenue</div>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6] mb-2">₹26.56 Cr</div>
            <div className="text-sm text-[#39726F] font-medium">Peak Revenue</div>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-[#39726F] mb-2">9+ Years</div>
            <div className="text-sm text-[#39726F] font-medium">Track Record</div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="bg-[#39726F] rounded-3xl p-6 lg:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EEE8A9]/40 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Growth Journey</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-2 items-end h-64">
              {revenueData.map((data, index) => (
                <div key={data.year} className="flex flex-col items-center group">
                  <div className="relative w-full flex justify-center items-end" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-white/20 rounded-t-lg group-hover:bg-white/30 transition-all duration-300 relative"
                      style={{ height: `${(data.amount / 30) * 100}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#03045e] px-2 py-1 rounded">
                        {data.label}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-[10px] sm:text-xs text-white/60 font-medium rotate-0 whitespace-nowrap">
                    {data.year}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">2009</div>
                    <div className="text-xs text-white/60">Founded</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">2015</div>
                    <div className="text-xs text-white/60">ESA License</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">2021</div>
                    <div className="text-xs text-white/60">600MW+ O&M</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">2023</div>
                    <div className="text-xs text-white/60">₹26.56Cr Peak</div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
