import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── SVG Animation 1: Rotating concentric circles ── */
function RotatingCircles() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
      <style>{`
        @keyframes rotate-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotate-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .spin-cw { transform-origin: 60px 60px; animation: rotate-cw 8s linear infinite; }
        .spin-ccw { transform-origin: 60px 60px; animation: rotate-ccw 12s linear infinite; }
        .spin-cw2 { transform-origin: 60px 60px; animation: rotate-cw 20s linear infinite; }
      `}</style>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#E63B2E" strokeWidth="1" strokeOpacity="0.3" />
      <g className="spin-cw">
        <circle cx="60" cy="60" r="38" fill="none" stroke="#E63B2E" strokeWidth="1.5" strokeDasharray="8 4" />
        <circle cx="98" cy="60" r="3" fill="#E63B2E" />
      </g>
      <g className="spin-ccw">
        <circle cx="60" cy="60" r="26" fill="none" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="34" cy="60" r="2.5" fill="#111111" />
      </g>
      <g className="spin-cw2">
        <circle cx="60" cy="60" r="14" fill="none" stroke="#E63B2E" strokeWidth="2" />
        <circle cx="74" cy="60" r="2" fill="#E63B2E" />
      </g>
      <circle cx="60" cy="60" r="4" fill="#111111" />
    </svg>
  )
}

/* ── SVG Animation 2: Scanning laser line over dot grid ── */
function ScanningGrid() {
  return (
    <div className="relative w-[120px] h-[120px] overflow-hidden rounded-xl">
      <style>{`
        @keyframes laser { 0% { top: 0%; } 100% { top: 100%; } }
        .laser-line { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #E63B2E, transparent); animation: laser 2.5s linear infinite; }
      `}</style>
      <svg width="120" height="120" viewBox="0 0 120 120">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={12 + col * 20}
              cy={12 + row * 20}
              r="2"
              fill="#111111"
              fillOpacity="0.3"
            />
          ))
        )}
      </svg>
      <div className="laser-line" />
    </div>
  )
}

/* ── SVG Animation 3: EKG Waveform ── */
function EKGWaveform() {
  return (
    <svg width="160" height="60" viewBox="0 0 160 60">
      <style>{`
        @keyframes ekg-draw { from { stroke-dashoffset: 400; } to { stroke-dashoffset: -400; } }
        .ekg-path { stroke-dasharray: 400; animation: ekg-draw 3s linear infinite; }
      `}</style>
      <path
        className="ekg-path"
        d="M0 30 L20 30 L28 30 L32 10 L36 50 L40 30 L50 30 L58 30 L62 15 L66 45 L70 30 L80 30 L88 30 L92 8 L96 52 L100 30 L110 30 L118 30 L122 18 L126 42 L130 30 L160 30"
        fill="none"
        stroke="#E63B2E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="0" y1="30" x2="160" y2="30" stroke="#111111" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  )
}

const STEPS = [
  {
    num: '01',
    title: 'Analyze',
    desc: 'Deep review of loan applications, financial statements, and applicant data to build an accurate risk profile.',
    bg: 'bg-[#F5F3EE]',
    border: 'border-[#111111]/10',
    anim: <RotatingCircles />,
  },
  {
    num: '02',
    title: 'Verify',
    desc: 'Cross-check identities, detect fraud patterns, and validate supporting documents with meticulous precision.',
    bg: 'bg-[#E63B2E]',
    border: 'border-[#E63B2E]',
    anim: <ScanningGrid />,
    light: true,
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'Process final decisions, update back-office systems, and deliver accurate results with zero-error tolerance.',
    bg: 'bg-[#111111]',
    border: 'border-[#111111]',
    anim: <EKGWaveform />,
    dark: true,
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.protocol-step', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-16 bg-[#E8E4DD]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#E63B2E] tracking-[0.3em] uppercase mb-4">Work Process</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#111111] tracking-tight">
            The protocol.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ num, title, desc, bg, border, anim, light, dark }) => (
            <div
              key={num}
              className={`protocol-step ${bg} border ${border} rounded-[2rem] p-8 flex flex-col gap-8 min-h-[380px]`}
            >
              <div className="flex items-start justify-between">
                <span className={`font-mono text-xs font-bold tracking-widest ${dark ? 'text-[#F5F3EE]/40' : light ? 'text-[#F5F3EE]/70' : 'text-[#111111]/30'}`}>
                  {num}
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                {anim}
              </div>

              <div>
                <h3 className={`font-sans font-bold text-2xl mb-2 ${dark ? 'text-[#F5F3EE]' : light ? 'text-[#F5F3EE]' : 'text-[#111111]'}`}>
                  {title}
                </h3>
                <p className={`font-sans text-sm leading-relaxed ${dark ? 'text-[#F5F3EE]/60' : light ? 'text-[#F5F3EE]/80' : 'text-[#111111]/60'}`}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
