import founderImage from '@/assets/founder_bright.png'
import ceoImage from '@/assets/ceo.jpg'

export function Team() {
  const stats = [
    { title: '300+ Professionals', desc: 'Dedicated in-house engineering and field team' },
    { title: '15+ Years', desc: 'Proven delivery of substation and transmission projects' },
    { title: 'TNEB Class I', desc: 'Certified leadership across EHV projects' },
    { title: '24/7 Support', desc: 'Project governance and client success focus' },
  ]

  return (
    <section id="team" className="py-16 lg:py-20 bg-white/70 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#E2E8F0]/80 bg-white/70 aspect-[4/5] max-h-[320px]">
              <img
                src={founderImage}
                alt="Company Founder"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06d6a0]">Founder</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#03045e] leading-tight">
              A. Ayyappan — Building Excellence in Power Infrastructure
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              With over 14 years of EPC excellence, Ayyappan leads Mass Power Infra with a focus on reliability,
              safety, and precision-engineered solutions across transmission line and substation projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#E2E8F0]/80 bg-white/70 aspect-[4/5] max-h-[320px]">
              <img
                src={ceoImage}
                alt="Company CEO"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06d6a0]">CEO</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#03045e] leading-tight">
              A. Ayyappan — Driving Growth with Precision
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              As CEO, Ayyappan ensures every project meets rigorous safety and quality standards while guiding
              teams to deliver on time and within budget for utilities and independent power producers.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl border border-[#E2E8F0] bg-white/80 shadow-sm min-h-[140px] flex flex-col gap-2"
            >
              <div className="text-xl font-semibold text-[#03045e]">{item.title}</div>
              <div className="text-sm text-[#475569] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
