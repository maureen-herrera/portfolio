import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Activity, Zap, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Card 1: Diagnostic Shuffler ── */
const UNDERWRITING_LABELS = [
  { label: 'Loan Analysis', sub: 'Review application data' },
  { label: 'Fraud Screening', sub: 'Identity & pattern checks' },
  { label: 'Risk Review', sub: 'Final approval decision' },
]

function ShufflerCard() {
  const [cards, setCards] = useState(UNDERWRITING_LABELS)

  useEffect(() => {
    const id = setInterval(() => {
      setCards((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-[#F5F3EE] border border-[#111111]/10 rounded-[2rem] p-6 shadow-sm h-full flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Activity size={16} className="text-[#E63B2E]" />
          <span className="font-mono text-xs text-[#111111]/50 tracking-widest uppercase">Underwriting</span>
        </div>
        <h3 className="font-sans font-bold text-xl text-[#111111] mb-1">End-to-End Analysis</h3>
        <p className="font-sans text-sm text-[#111111]/60">Fraud detection and loan underwriting for Canadian financial applications.</p>
      </div>
      <div className="relative h-[120px] mt-4">
        {cards.map((card, i) => (
          <div
            key={card.label}
            className="absolute left-0 right-0 bg-white border border-[#111111]/10 rounded-2xl px-4 py-3 transition-all duration-700"
            style={{
              top: `${i * 16}px`,
              zIndex: 3 - i,
              opacity: 1 - i * 0.25,
              transform: `scale(${1 - i * 0.04})`,
              transformOrigin: 'top center',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <p className="font-sans font-semibold text-sm text-[#111111]">{card.label}</p>
            <p className="font-mono text-xs text-[#111111]/50">{card.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Card 2: Telemetry Typewriter ── */
const PAYMENT_MESSAGES = [
  'Processing payment batch #4821...',
  'Settlement confirmed: ₱284,500.00',
  'Reconciliation complete — 0 discrepancies',
  'Back-office records updated.',
  'Transaction log exported.',
  'Banking gateway response: 200 OK',
]

function TypewriterCard() {
  const [lineIndex, setLineIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const target = PAYMENT_MESSAGES[lineIndex]
    if (charIndex < target.length) {
      const t = setTimeout(() => {
        setDisplayed(target.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 45)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        const next = (lineIndex + 1) % PAYMENT_MESSAGES.length
        setLineIndex(next)
        setDisplayed('')
        setCharIndex(0)
      }, 1800)
      return () => clearTimeout(t)
    }
  }, [charIndex, lineIndex])

  return (
    <div className="bg-[#111111] border border-[#E8E4DD]/10 rounded-[2rem] p-6 shadow-sm h-full flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="pulse-dot w-2 h-2 rounded-full bg-[#E63B2E] inline-block" />
          <span className="font-mono text-xs text-[#E63B2E] tracking-widest uppercase">Live Feed</span>
        </div>
        <h3 className="font-sans font-bold text-xl text-[#F5F3EE] mb-1">Payment Processing</h3>
        <p className="font-sans text-sm text-[#F5F3EE]/50">Precision settlement and banking back-office operations.</p>
      </div>
      <div className="mt-4 bg-[#F5F3EE]/5 rounded-2xl p-4 min-h-[80px] flex items-start">
        <p className="font-mono text-sm text-[#E8E4DD] leading-relaxed">
          <span className="text-[#E63B2E]">$ </span>
          {displayed}
          <span className="cursor-blink text-[#E63B2E]">█</span>
        </p>
      </div>
    </div>
  )
}

/* ── Card 3: Cursor Protocol Scheduler ── */
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function SchedulerCard() {
  const [activeDay, setActiveDay] = useState(null)
  const [savedDay, setSavedDay] = useState(null)
  const [saving, setSaving] = useState(false)
  const dayIndexRef = useRef(1)

  useEffect(() => {
    const runSequence = () => {
      const day = dayIndexRef.current % 7
      dayIndexRef.current = day + 1

      setTimeout(() => setActiveDay(day), 400)
      setTimeout(() => {
        setSaving(true)
        setSavedDay(day)
      }, 1200)
      setTimeout(() => setSaving(false), 1800)
    }

    runSequence()
    const id = setInterval(runSequence, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-[#F5F3EE] border border-[#111111]/10 rounded-[2rem] p-6 shadow-sm h-full flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target size={16} className="text-[#E63B2E]" />
          <span className="font-mono text-xs text-[#111111]/50 tracking-widest uppercase">Lead Generation</span>
        </div>
        <h3 className="font-sans font-bold text-xl text-[#111111] mb-1">Strategic Outreach</h3>
        <p className="font-sans text-sm text-[#111111]/60">Finding and qualifying leads through targeted online research.</p>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-7 gap-1 mb-3">
          {DAYS.map((d, i) => (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded-xl text-xs font-mono font-bold transition-all duration-300
                ${activeDay === i || savedDay === i
                  ? 'bg-[#E63B2E] text-[#F5F3EE] scale-110'
                  : 'bg-[#111111]/5 text-[#111111]/50'
                }`}
              style={activeDay === i ? { transform: 'scale(0.95)' } : {}}
            >
              {d}
            </div>
          ))}
        </div>
        <div
          className={`w-full py-2 rounded-xl text-center font-mono text-xs font-bold transition-all duration-300
            ${saving ? 'bg-[#E63B2E] text-[#F5F3EE]' : 'bg-[#111111]/5 text-[#111111]/40'}`}
        >
          {saving ? '✓ Schedule Saved' : 'Save Outreach Plan'}
        </div>
      </div>
    </div>
  )
}

/* ── Main Features Section ── */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#E63B2E] tracking-[0.3em] uppercase mb-4">Core Competencies</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#111111] tracking-tight max-w-lg">
            Three pillars of precision.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card"><ShufflerCard /></div>
          <div className="feature-card"><TypewriterCard /></div>
          <div className="feature-card"><SchedulerCard /></div>
        </div>
      </div>
    </section>
  )
}
