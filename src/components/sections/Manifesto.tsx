import Image from 'next/image'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Manifesto(): JSX.Element {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="section-pad"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Imagem principal */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-brand-surface-2">
                <Image
                  src="/giu/giulia.jpg"
                  alt="Giulia em Silvi, Abruzzo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay sutil */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-text/30 via-transparent to-transparent"
                />
              </div>

              {/* Badge "Fatto in Italia" */}
              <div
                aria-label="Fatto in Italia"
                className="absolute -bottom-5 -right-5 md:bottom-6 md:-right-6
                           w-24 h-24 rounded-full bg-brand-surface border border-brand-border
                           flex items-center justify-center text-center"
              >
                <p className="font-heading text-[0.875rem] font-light italic leading-snug text-brand-text">
                  Fatto<br />in Italia
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Texto */}
          <AnimateIn delay={0.15}>
            <div className="pt-4">
              <p className="label-tag mb-6">Chi sono</p>

              <h2
                id="manifesto-heading"
                className="font-heading font-light text-[clamp(2.2rem,4vw,3.4rem)]
                           leading-[1.15] tracking-tight mb-8"
              >
                Non vendo vestiti.
                <br />
                <em className="italic text-brand-muted">Salvo storie</em>
                <br />
                dal dimenticare.
              </h2>

              <p className="text-[0.9375rem] font-light text-brand-muted leading-[1.85] mb-10 max-w-[42ch]">
                Sono Giulia. Lavoro con le mani, i tessuti e la pazienza.
                <br /><br />
                Ogni capo che creo comincia con qualcosa che qualcuno aveva già
                abbandonato — una giacca di seconda mano, un metro di lana dimenticato,
                un lenzuolo di lino antico.{' '}
                <strong className="font-medium text-brand-text">
                  Lo prendo. Lo ascolto. Lo trasformo.
                </strong>
                <br /><br />
                Il risultato è sempre uno solo. Non ci sono copie. Non può esserci.
              </p>

              {/* Divider */}
              <div className="w-10 h-px bg-brand-border-d mb-8" aria-hidden="true" />

              {/* Stats */}
              <dl className="flex gap-10">
                <div>
                  <dt className="sr-only">Materiali</dt>
                  <dd className="font-heading text-4xl font-light leading-none text-brand-text mb-1">
                    100%
                  </dd>
                  <p className="text-xs text-brand-muted tracking-wide">materiali recuperati</p>
                </div>
                <div>
                  <dt className="sr-only">Pezzi per modello</dt>
                  <dd className="font-heading text-4xl font-light leading-none text-brand-text mb-1">
                    1
                  </dd>
                  <p className="text-xs text-brand-muted tracking-wide">pezzo per modello</p>
                </div>
                <div>
                  <dt className="sr-only">Possibilità</dt>
                  <dd className="font-heading text-4xl font-light leading-none text-brand-text mb-1">
                    ∞
                  </dd>
                  <p className="text-xs text-brand-muted tracking-wide">possibilità nel tessuto</p>
                </div>
              </dl>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
