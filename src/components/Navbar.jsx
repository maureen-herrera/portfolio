import { useEffect, useRef, useState } from 'react'
import { Mail } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['About', 'Experience', 'Skills', 'Contact']

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8
        ${scrolled
          ? 'bg-[#F5F3EE]/70 backdrop-blur-xl border border-[#111111]/10 shadow-lg text-[#111111]'
          : 'bg-transparent text-[#F5F3EE]'
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

      {/* CTA */}
      <a
        href="#contact"
        className="btn-magnetic hidden md:inline-flex items-center gap-2 bg-[#E63B2E] text-[#F5F3EE] text-sm font-semibold px-5 py-2 rounded-full no-underline"
      >
        <span className="btn-slide bg-[#111111] rounded-full" />
        <Mail size={14} className="relative z-10" />
        <span className="relative z-10">Get in Touch</span>
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-[#111111]' : 'bg-[#F5F3EE]'}`} />
        <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-[#111111]' : 'bg-[#F5F3EE]'}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#F5F3EE] border border-[#111111]/10 rounded-3xl shadow-xl p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-sm font-medium text-[#111111] no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-magnetic inline-flex items-center gap-2 bg-[#E63B2E] text-[#F5F3EE] text-sm font-semibold px-5 py-3 rounded-full no-underline text-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <span className="btn-slide bg-[#111111] rounded-full" />
            <span className="relative z-10">Get in Touch</span>
          </a>
        </div>
      )}
    </nav>
  )
}
