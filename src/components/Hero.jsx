import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2,
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80")',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <p className="hero-item font-mono text-xs text-[#E63B2E] tracking-[0.3em] uppercase mb-4">
          Underwriting &amp; Financial Operations
        </p>

        <h1 className="leading-none mb-6">
          <span className="hero-item block font-sans font-bold text-[#F5F3EE] text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Command the
          </span>
          <span className="hero-item block font-serif italic text-[#F5F3EE] text-[4rem] md:text-[8rem] lg:text-[11rem] leading-none -mt-2">
            Details.
          </span>
        </h1>

        <p className="hero-item font-sans text-[#F5F3EE]/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Maureen Kris E. Herrera — Detail-driven financial operations and
          underwriting professional with 5+ years across payments, fraud
          analysis, and lead generation.
        </p>

        <div className="hero-item flex flex-wrap gap-4">
          <a
            href="#contact"
            className="btn-magnetic inline-flex items-center gap-2 bg-[#E63B2E] text-[#F5F3EE] font-semibold px-8 py-4 rounded-full no-underline"
          >
            <span className="btn-slide bg-[#111111] rounded-full" />
            <span className="relative z-10">Get in Touch</span>
            <ArrowDownRight size={18} className="relative z-10" />
          </a>
          <a
            href="#experience"
            className="btn-magnetic inline-flex items-center gap-2 bg-[#F5F3EE]/10 backdrop-blur border border-[#F5F3EE]/20 text-[#F5F3EE] font-semibold px-8 py-4 rounded-full no-underline"
          >
            <span className="btn-slide bg-[#F5F3EE]/20 rounded-full" />
            <span className="relative z-10">View Experience</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[10px] text-[#F5F3EE] tracking-widest uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-[#F5F3EE]/40" />
      </div>
    </section>
  )
}
