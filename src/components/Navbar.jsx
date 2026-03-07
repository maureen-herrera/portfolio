import { useEffect, useState } from 'react'
import { Mail, X, Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = ['About', 'Experience', 'Skills', 'Contact']

  return (
    <>
      {/* ── Pill navbar ── */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-5 py-3 flex items-center gap-6
          ${scrolled || menuOpen
            ? 'bg-[#F5F3EE]/80 backdrop-blur-xl border border-[#111111]/10 shadow-lg text-[#111111]'
            : 'bg-[#111111]/30 backdrop-blur-sm text-[#F5F3EE]'
          }`}
      >
        <span className="font-mono text-xs font-bold tracking-widest uppercase whitespace-nowrap">
          MKH
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover-lift font-sans text-sm font-medium tracking-wide opacity-80 hover:opacity-100 no-underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="btn-magnetic hidden md:inline-flex items-center gap-2 bg-[#E63B2E] text-[#F5F3EE] text-sm font-semibold px-5 py-2 rounded-full no-underline whitespace-nowrap"
        >
          <span className="btn-slide bg-[#111111] rounded-full" />
          <Mail size={14} className="relative z-10" />
          <span className="relative z-10">Get in Touch</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {menuOpen
            ? <X size={18} strokeWidth={2.5} className={scrolled || menuOpen ? 'text-[#111111]' : 'text-[#F5F3EE]'} />
            : <Menu size={18} strokeWidth={2.5} className={scrolled || menuOpen ? 'text-[#111111]' : 'text-[#F5F3EE]'} />
          }
        </button>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-x-4 top-20 z-40 md:hidden transition-all duration-300 origin-top
          ${menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
      >
        <div className="bg-[#F5F3EE] rounded-[2rem] shadow-2xl overflow-hidden border border-[#111111]/8">
          {/* Links */}
          <ul className="divide-y divide-[#111111]/6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-8 py-5 font-sans font-semibold text-lg text-[#111111] no-underline hover:bg-[#E8E4DD] transition-colors"
                >
                  {link}
                  <span className="font-mono text-xs text-[#111111]/30">↓</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="p-5">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-magnetic flex items-center justify-center gap-2 bg-[#E63B2E] text-[#F5F3EE] font-semibold text-base px-6 py-4 rounded-2xl no-underline w-full"
            >
              <span className="btn-slide bg-[#111111] rounded-2xl" />
              <Mail size={16} className="relative z-10" />
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-[#111111]/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
