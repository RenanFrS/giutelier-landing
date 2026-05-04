import { PROCESS_STEPS } from '@/lib/constants'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Processo(): JSX.Element {
  return (
    <section
      id="processo"
      aria-labelledby="processo-heading"
      className="bg-brand-surface section-pad"
    >
      <div className="container-brand">

        {/* Intro — 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <AnimateIn>
            <p className="label-tag mb-4">Come lavoro</p>
            <h2
              id="processo-heading"
              className="font-heading font-light text-[clamp(2.2rem,4vw,3.2rem)]
                         leading-[1.15] tracking-tight"
            >
              Dal tessuto<br />
              <em className="italic text-brand-muted">dimenticato</em>
              <br />al tuo guardaroba.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-[0.9375rem] font-light text-brand-muted leading-[1.85]">
              Non esiste una formula. Ogni pezzo è un processo diverso,
              guidato dal tessuto stesso. Ma ci sono quattro momenti
              che ritornano sempre.
            </p>
          </AnimateIn>
        </div>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0
                     lg:divide-x divide-brand-border"
          role="list"
        >
          {PROCESS_STEPS.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 0.1} direction="up">
              <li className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                {/* Numero decorativo */}
                <div
                  className="w-10 h-10 rounded-full border border-brand-border-d
                             flex items-center justify-center mb-6
                             font-heading text-sm text-brand-muted"
                  aria-hidden="true"
                >
                  {step.num}
                </div>

                <h3 className="font-heading text-xl font-light mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-brand-muted leading-[1.75]">
                  {step.body}
                </p>
              </li>
            </AnimateIn>
          ))}
        </ol>

      </div>
    </section>
  )
}
