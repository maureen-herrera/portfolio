import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, GraduationCap, ShieldCheck, BarChart2, Users, Wrench } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Jobs where `roles` = multiple positions at same company (LinkedIn-style tree)
const JOBS = [
  {
    company: 'Mindrift',
    roles: [
      {
        role: 'AI Data Support / AI Data Annotator',
        period: 'Jan 2025 — Present',
        desc: 'Reviewed and labeled datasets to support the training of AI and machine learning models. Maintained high data accuracy and consistency through rigorous analysis and quality checks, while partnering with team members to uphold project standards and deliver on time.',
        current: true,
      },
    ],
  },
  {
    company: 'Spring Financial',
    roles: [
      {
        role: 'Underwriting Associate II',
        period: 'Mar 2, 2026 — Present',
        desc: 'Earned a merit-based promotion recognizing consistent excellence in underwriting performance. Known as a reliable go-to among teammates — always ready to help with questions on complex cases and keeping the team aligned with accuracy standards. Named Top Employee of the Month consecutively from July 2025 through present, a distinction earned through meticulous attention to detail, unwavering reliability, and a quiet commitment to doing the work right every single time.',
        current: true,
        achievements: ['Top Employee', 'July 2025 — Present'],
      },
      {
        role: 'Underwriting Associate',
        period: 'July 2024 — Mar 2026',
        desc: 'Drove end-to-end underwriting of Canadian loan applications — reviewing financial profiles, conducting fraud screenings, and delivering risk decisions with precision and consistency.',
      },
    ],
  },
  {
    company: 'C2H',
    type: 'Part-time Freelance',
    roles: [
      {
        role: 'Lead Generation',
        period: 'Nov 2022 — June 2024',
        desc: 'Finding and qualifying leads through online research and targeted outreach.',
      },
    ],
  },
  {
    company: 'Zimi Tech, Inc.',
    type: 'Full-time Freelance',
    roles: [
      {
        role: 'Payment Officer',
        period: 'Aug 2021 — Sept 2022',
        desc: 'Online banking payments and back-office operations.',
      },
    ],
  },
  {
    company: 'VPC Corp Solutions',
    roles: [
      {
        role: 'Payment Officer',
        period: 'Oct 2020 — July 2021',
        desc: 'Handles payments and settlement operations.',
      },
    ],
  },
  {
    company: 'W Bridges Manpower',
    roles: [
      {
        role: 'Encoder',
        period: 'Dec 2019 — March 2020',
        desc: 'Online banking withdrawal account management.',
      },
    ],
  },
  {
    company: 'PLDT Inc.',
    roles: [
      {
        role: 'OJT Trainee',
        period: 'Aug 2019 — Oct 2019',
        desc: 'On-the-job training in telecommunications operations.',
      },
    ],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from('.timeline-entry', {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
      gsap.from('.sidebar-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#E63B2E] tracking-[0.3em] uppercase mb-4">Career History</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#111111] tracking-tight">
            Experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* ── Timeline ── */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical rail */}
              <div className="timeline-line absolute left-[7px] top-3 bottom-3 w-px bg-[#111111]/15" />

              <div className="space-y-8">
                {JOBS.map((job, ji) => {
                  const isMulti = job.roles.length > 1

                  return (
                    <div key={ji} className="timeline-entry relative flex gap-8">
                      {/* Outer node */}
                      <div className="relative flex-shrink-0" style={{ width: 16 }}>
                        <div
                          className={`mt-1 w-4 h-4 rounded-full border-2 z-10
                            ${job.roles[0].current
                              ? 'bg-[#E63B2E] border-[#E63B2E]'
                              : 'bg-[#F5F3EE] border-[#111111]/30'
                            }`}
                        />
                        {job.roles[0].current && (
                          <span className="absolute top-1 left-0 w-4 h-4 rounded-full bg-[#E63B2E]/30 animate-ping" />
                        )}
                      </div>

                      {/* Company block */}
                      <div className="flex-1 min-w-0">
                        {/* Company header */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="font-sans font-bold text-base text-[#111111]">{job.company}</span>
                          {job.type && (
                            <span className="font-mono text-[10px] bg-[#E8E4DD] text-[#111111]/60 px-2 py-0.5 rounded-full">
                              {job.type}
                            </span>
                          )}
                        </div>

                        {isMulti ? (
                          /* ── Multi-role: stacked accent cards, no second line ── */
                          <div className="space-y-2">
                            {job.roles.map((r, ri) => (
                              <div key={ri} className="group relative">
                                {/* Progress arrow between cards */}
                                {ri > 0 && (
                                  <div className="flex items-center gap-2 py-1 px-5">
                                    <div className="h-px flex-1 bg-[#111111]/10" />
                                    <span className="font-mono text-[10px] text-[#111111]/30 tracking-widest uppercase">Prior role</span>
                                    <div className="h-px flex-1 bg-[#111111]/10" />
                                  </div>
                                )}
                                <div
                                  className={`rounded-2xl px-5 py-4 border-l-4 border border-r border-t border-b transition-all duration-300
                                    group-hover:shadow-md group-hover:-translate-y-0.5
                                    ${r.current
                                      ? 'bg-white border-l-[#E63B2E] border-r-[#E63B2E]/10 border-t-[#E63B2E]/10 border-b-[#E63B2E]/10'
                                      : 'bg-[#F5F3EE] border-l-[#111111]/20 border-r-[#111111]/8 border-t-[#111111]/8 border-b-[#111111]/8'
                                    }`}
                                >
                                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <h3 className="font-sans font-bold text-sm text-[#111111]">{r.role}</h3>
                                      {r.current && (
                                        <span className="font-mono text-[10px] bg-[#E63B2E] text-[#F5F3EE] px-2 py-0.5 rounded-full leading-none">
                                          Current
                                        </span>
                                      )}
                                      {ri === 0 && !r.current && (
                                        <span className="font-mono text-[10px] bg-[#E8E4DD] text-[#111111]/50 px-2 py-0.5 rounded-full leading-none">
                                          Promoted
                                        </span>
                                      )}
                                    </div>
                                    <span className="font-mono text-xs text-[#111111]/40 whitespace-nowrap">
                                      {r.period}
                                    </span>
                                  </div>
                                  <p className="font-sans text-xs text-[#111111]/60 leading-relaxed mb-3">{r.desc}</p>
                                  {r.achievements && (
                                    <div className="flex items-center gap-2 pt-3 border-t border-[#E63B2E]/15">
                                      <span className="text-sm">🏆</span>
                                      <span className="font-mono text-[10px] font-bold text-[#E63B2E] tracking-wide uppercase">
                                        {r.achievements[0]}
                                      </span>
                                      <span className="font-mono text-[10px] text-[#111111]/40">
                                        {r.achievements[1]}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* ── Single role card ── */
                          <div className="group">
                            <div
                              className="bg-white border border-[#111111]/8 rounded-[1.5rem] px-6 py-5
                                transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5"
                            >
                              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                <h3 className="font-sans font-bold text-sm text-[#111111]">{job.roles[0].role}</h3>
                                <span className="font-mono text-xs text-[#111111]/40 whitespace-nowrap">
                                  {job.roles[0].period}
                                </span>
                              </div>
                              <p className="font-sans text-sm text-[#111111]/60 leading-relaxed">
                                {job.roles[0].desc}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">
            <div className="sidebar-card bg-[#111111] rounded-[2rem] p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={16} className="text-[#E63B2E]" />
                <span className="font-mono text-xs text-[#F5F3EE]/50 tracking-widest uppercase">Education</span>
              </div>
              <h3 className="font-sans font-bold text-[#F5F3EE] mb-1">BS Information Technology</h3>
              <p className="font-sans text-sm text-[#E63B2E] mb-3">STI College Bacoor</p>
              <p className="font-mono text-xs text-[#F5F3EE]/40">2015 — 2019</p>
            </div>

            <div className="sidebar-card rounded-[2rem] overflow-hidden border border-[#111111]/8">
              {/* Header */}
              <div className="bg-[#E63B2E] px-8 py-5 flex items-center gap-2">
                <Briefcase size={15} className="text-[#F5F3EE]" />
                <span className="font-mono text-xs text-[#F5F3EE] tracking-[0.25em] uppercase font-bold">Skills & Expertise</span>
              </div>

              <div className="bg-[#F5F3EE] divide-y divide-[#111111]/8">
                {/* Financial Operations */}
                <div className="px-8 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart2 size={13} className="text-[#E63B2E]" />
                    <span className="font-mono text-[10px] text-[#111111]/40 tracking-widest uppercase">Financial Operations</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Payment Processing', 'Back-Office Operations', 'Settlement & Reconciliation', 'Financial Data Entry'].map(s => (
                      <span key={s} className="font-sans text-xs bg-[#E8E4DD] text-[#111111]/80 px-3 py-1.5 rounded-full font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Risk & Compliance */}
                <div className="px-8 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={13} className="text-[#E63B2E]" />
                    <span className="font-mono text-[10px] text-[#111111]/40 tracking-widest uppercase">Risk & Compliance</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Loan Underwriting', 'Fraud Detection', 'Identity Verification', 'Risk Assessment', 'Application Review'].map(s => (
                      <span key={s} className="font-sans text-xs bg-[#E63B2E]/10 text-[#E63B2E] px-3 py-1.5 rounded-full font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Research & Growth */}
                <div className="px-8 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart2 size={13} className="text-[#E63B2E]" />
                    <span className="font-mono text-[10px] text-[#111111]/40 tracking-widest uppercase">Research & Growth</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Lead Generation', 'Pipeline Qualification', 'Online Research', 'Targeted Outreach'].map(s => (
                      <span key={s} className="font-sans text-xs bg-[#E8E4DD] text-[#111111]/80 px-3 py-1.5 rounded-full font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Tools & Soft Skills */}
                <div className="px-8 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench size={13} className="text-[#E63B2E]" />
                    <span className="font-mono text-[10px] text-[#111111]/40 tracking-widest uppercase">Tools & Soft Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft Office', 'Google Workspace', 'Zero-Error Accuracy', 'Team Collaboration', 'Adaptability'].map(s => (
                      <span key={s} className="font-sans text-xs bg-[#111111]/5 text-[#111111]/70 px-3 py-1.5 rounded-full font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
