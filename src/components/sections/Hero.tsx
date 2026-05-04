import { ArrowRight, ChevronDown } from 'lucide-react'
import { HERO_MEDIA, type HeroMedia } from '@/lib/hero-media'

function HeroBackground({ media }: { media: HeroMedia }): JSX.Element {
  if (media.kind === 'video') {
    const commonVideoProps = {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: 'auto' as const,
      poster: media.poster,
      'aria-hidden': true,
    }

    return (
      <>
        <video
          {...commonVideoProps}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src={media.desktop} type={media.desktopType ?? 'video/mp4'} />
        </video>
        <video
          {...commonVideoProps}
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src={media.mobile} type={media.mobileType ?? 'video/mp4'} />
        </video>
      </>
    )
  }

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={media.desktop} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={media.mobile}
        alt={media.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </picture>
  )
}

export function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      aria-label="Hero — Giutelier"
      className="relative h-svh min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background media (image or video — configurado em @/lib/hero-media) */}
      <HeroBackground media={HERO_MEDIA} />

      {/* Color + texture overlay (preserva o tom de marca) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hero-bg-color fabric-texture mix-blend-multiply opacity-40 pointer-events-none"
      />

      {/* Gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 container-brand w-full pb-16 md:pb-24">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-6"
          aria-label="Localização: Silvi, Abruzzo, Italia"
        >
          <span className="block w-8 h-px bg-brand-bg/35" aria-hidden="true" />
          <span className="text-[0.6875rem] font-light tracking-[0.2em] uppercase text-brand-bg/55">
            Silvi · Abruzzo · Italia
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-light text-brand-bg leading-[1.05] tracking-tight
                        text-[clamp(3rem,9vw,7rem)] max-w-[12ch] mb-6">
          Ogni pezzo{' '}
          <em className="italic text-brand-bg/70">racconta</em>
          <br />
          una storia.
        </h1>

        {/* Sub */}
        <p className="text-[0.9375rem] font-light text-brand-bg/65 max-w-[40ch] leading-[1.8] mb-10">
          Tessuti che il mondo ha dimenticato, trasformati in capi unici.
          <br />
          Fatto a mano. Uno alla volta. Solo da qui.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-8 flex-wrap">
          <a
            href="#pezzi"
            className="inline-flex items-center gap-2.5 px-6 py-3.5
                       bg-brand-bg text-brand-text text-xs font-medium tracking-wider uppercase
                       rounded-sm transition-all duration-300
                       hover:bg-brand-accent hover:text-white"
          >
            Scopri i pezzi
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </a>

          <a
            href="#manifesto"
            className="inline-flex items-center gap-2 text-xs font-light tracking-wider uppercase
                       text-brand-bg/60 hover:text-brand-bg transition-colors duration-300"
          >
            La storia di Giu
            <ChevronDown size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Scroll hint vertical */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-6 md:right-20
                   flex flex-col items-center gap-3 [writing-mode:vertical-rl]"
      >
        <span className="text-[0.5625rem] tracking-[0.22em] uppercase text-brand-bg/30">
          Scorri
        </span>
        <span className="block w-px h-12 bg-brand-bg/15" />
      </div>
    </section>
  )
}
