import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-item', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-16 bg-[#E8E4DD]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="cta-item font-mono text-xs text-[#E63B2E] tracking-[0.3em] uppercase mb-6">
          Available for opportunities
        </p>
        <h2 className="cta-item font-sans font-bold text-5xl md:text-7xl text-[#111111] tracking-tight leading-none mb-6">
          Ready to work<br />
          <span className="font-serif italic text-[#E63B2E]">together?</span>
        </h2>
        <p className="cta-item font-sans text-[#111111]/60 text-lg max-w-lg mx-auto mb-12">
          Open to new opportunities in underwriting, operations, or lead generation — let's connect and see where I can add value.
        </p>

        <div className="cta-item flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:mau.kherrera@gmail.com"
            className="btn-magnetic inline-flex items-center gap-3 bg-[#E63B2E] text-[#F5F3EE] font-semibold px-8 py-4 rounded-full no-underline w-full sm:w-auto justify-center"
          >
            <span className="btn-slide bg-[#111111] rounded-full" />
            <Mail size={18} className="relative z-10" />
            <span className="relative z-10">mau.kherrera@gmail.com</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/maureen-kris-herrera/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-3 bg-[#111111] text-[#F5F3EE] font-semibold px-8 py-4 rounded-full no-underline w-full sm:w-auto justify-center"
          >
            <span className="btn-slide bg-[#E63B2E] rounded-full" />
            <Linkedin size={18} className="relative z-10" />
            <span className="relative z-10">LinkedIn Profile</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </a>
        </div>

        <div className="cta-item grid grid-cols-3 gap-4 max-w-sm mx-auto text-center border-t border-[#111111]/10 pt-8">
          {[
            { label: 'Remote', sub: 'Work setup' },
            { label: 'Full-time', sub: 'Availability' },
            { label: 'PH', sub: 'Based in' },
          ].map(({ label, sub }) => (
            <div key={label}>
              <p className="font-sans font-bold text-[#111111]">{label}</p>
              <p className="font-mono text-xs text-[#111111]/40">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
