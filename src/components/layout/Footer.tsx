import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export function Footer(): JSX.Element {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark pt-12 pb-8 px-6 md:px-12 lg:px-20" aria-label="Rodapé">
      <div className="max-w-content mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10
                        border-b border-brand-bg/[0.07] mb-8">
          <div>
            <Link
              href="/"
              aria-label={SITE_CONFIG.name}
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/logo/logo.jpg"
                alt={SITE_CONFIG.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-brand-bg/30 mt-3 tracking-wide">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div className="flex gap-12 md:gap-16">
            <div>
              <h5 className="text-[0.625rem] font-medium tracking-[0.15em] uppercase
                             text-brand-bg/25 mb-4">
                Navigazione
              </h5>
              <ul className="flex flex-col gap-2" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-brand-bg/45
                                 hover:text-brand-bg/85 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[0.625rem] font-medium tracking-[0.15em] uppercase
                             text-brand-bg/25 mb-4">
                Contatti
              </h5>
              <ul className="flex flex-col gap-2" role="list">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm font-light text-brand-bg/45
                               hover:text-brand-bg/85 transition-colors duration-200"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-brand-bg/45
                               hover:text-brand-bg/85 transition-colors duration-200"
                  >
                    @giutelier
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-brand-bg/45
                               hover:text-brand-bg/85 transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-brand-bg/20 leading-relaxed">
            © {year} Giutelier di Giulia Lorenzi · {SITE_CONFIG.location}
          </p>
          <p className="text-xs text-brand-bg/15">
            Tutti i diritti riservati
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-brand-sand/20">
          <p className="font-sans text-xs font-light text-brand-sand/40">
            Desenvolvido por:{' '}
            <a
              href="https://instagram.com/renanrocha.01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-sand/60 hover:text-brand-sand transition-colors"
            >
              Renan Rocha
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
