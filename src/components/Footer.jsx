import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] rounded-t-[3rem] px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-mono text-xs font-bold tracking-[0.3em] text-[#E63B2E] uppercase mb-3">MKH</h3>
            <p className="font-sans font-bold text-2xl text-[#F5F3EE] mb-3">
              Maureen Kris<br />E. Herrera
            </p>
            <p className="font-sans text-sm text-[#F5F3EE]/50 max-w-xs">
              Detail-driven financial operations and underwriting professional based in the Philippines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-[#F5F3EE]/30 tracking-widest uppercase mb-6">Navigation</p>
            <ul className="space-y-3">
              {['About', 'Experience', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover-lift font-sans text-sm text-[#F5F3EE]/60 hover:text-[#F5F3EE] no-underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-[#F5F3EE]/30 tracking-widest uppercase mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mau.kherrera@gmail.com"
                  className="hover-lift flex items-center gap-2 font-sans text-sm text-[#F5F3EE]/60 hover:text-[#F5F3EE] no-underline transition-colors"
                >
                  <Mail size={14} className="text-[#E63B2E]" />
                  mau.kherrera@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/maureen-kris-herrera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift flex items-center gap-2 font-sans text-sm text-[#F5F3EE]/60 hover:text-[#F5F3EE] no-underline transition-colors"
                >
                  <Linkedin size={14} className="text-[#E63B2E]" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F5F3EE]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#F5F3EE]/30">
            © {year} Maureen Kris E. Herrera
          </p>

          {/* System status */}
          <div className="flex items-center gap-2">
            <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="font-mono text-xs text-[#F5F3EE]/40 tracking-widest">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
