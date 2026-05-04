import { TESTIMONIALS } from '@/lib/constants'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Testimonials(): JSX.Element {
  return (
    <section
      id="parole"
      aria-labelledby="testimonials-heading"
      className="section-pad container-brand"
    >
      {/* Header */}
      <AnimateIn>
        <div className="text-center mb-14">
          <p className="label-tag mb-3">Parole di chi indossa</p>
          <h2
            id="testimonials-heading"
            className="font-heading font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.2]"
          >
            Cosa dicono.
          </h2>
        </div>
      </AnimateIn>

      {/* Cards */}
      <ul
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        role="list"
      >
        {TESTIMONIALS.map((t, i) => (
          <AnimateIn key={i} delay={i * 0.1}>
            <li
              className="bg-brand-surface rounded-sm p-8
                         border border-transparent hover:border-brand-border-d
                         transition-colors duration-300 h-full"
            >
              {/* Aspas decorativas */}
              <p
                className="font-heading text-3xl text-brand-accent mb-3 leading-none select-none"
                aria-hidden="true"
              >
                "
              </p>

              <blockquote className="font-heading text-[1.1rem] font-light italic
                                     leading-[1.65] text-brand-text mb-6">
                {t.quote}
              </blockquote>

              <footer>
                <p className="text-xs font-medium tracking-wider uppercase text-brand-muted">
                  {t.author}
                </p>
                <p className="text-xs text-brand-faint mt-0.5">{t.location}</p>
              </footer>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  )
}
