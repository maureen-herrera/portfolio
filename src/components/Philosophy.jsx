import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current.querySelectorAll('.philo-word')
      gsap.from(words, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
      gsap.from('.philo-small', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const dramaticWords = ['precision', 'that', 'protects.']

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-16 bg-[#111111] overflow-hidden"
    >
      {/* Background texture — document signing photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80")',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="philo-small font-sans text-[#F5F3EE]/40 text-base md:text-xl mb-6">
          Most financial operations focus on:{' '}
          <span className="text-[#F5F3EE]/60">speed over scrutiny.</span>
        </p>

        <p className="font-sans text-[#F5F3EE]/60 text-lg md:text-2xl mb-4">
          I focus on:
        </p>

        <h2 className="font-serif italic text-[#F5F3EE] text-5xl md:text-8xl lg:text-9xl leading-none">
          {dramaticWords.map((word, i) => (
            <span
              key={i}
              className={`philo-word inline-block mr-4 ${word === 'precision' ? 'text-[#E63B2E]' : ''}`}
            >
              {word}
            </span>
          ))}
        </h2>

        <div className="mt-16 pt-8 border-t border-[#F5F3EE]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stat: '5+', label: 'Years of operations experience' },
            { stat: '100%', label: 'Accuracy-first approach' },
            { stat: '3', label: 'Specialized domains mastered' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="font-mono text-4xl text-[#E63B2E] font-bold mb-1">{stat}</p>
              <p className="font-sans text-sm text-[#F5F3EE]/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
