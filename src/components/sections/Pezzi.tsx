import { ArrowRight } from 'lucide-react'
import { PIECES } from '@/lib/constants'
import { PieceCard } from '@/components/ui/PieceCard'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Pezzi(): JSX.Element {
  const [tall, ...rest] = PIECES
  const [p2, p3, p4] = rest

  return (
    <section
      id="pezzi"
      aria-labelledby="pezzi-heading"
      className="section-pad container-brand"
    >
      {/* Header */}
      <AnimateIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end
                        gap-4 mb-10">
          <h2
            id="pezzi-heading"
            className="font-heading font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.15]"
          >
            Pezzi disponibili.
          </h2>
          <p className="text-sm text-brand-muted max-w-[28ch] md:text-right leading-relaxed">
            Ogni capo è unico.
            <br />
            Quando è venduto, è andato per sempre.
          </p>
        </div>
      </AnimateIn>

      {/* Grid editorial assimétrico — desktop: [tall | p2] [tall | p3+p4] */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[5fr_3fr_4fr] gap-3
                      lg:[grid-template-rows:minmax(280px,1fr)_minmax(280px,1fr)]">

        {/* Peça tall — ocupa 2 linhas no desktop */}
        <AnimateIn delay={0.05} className="lg:row-span-2 min-h-[360px] lg:min-h-0">
          <PieceCard piece={tall} className="h-full min-h-[360px] lg:min-h-full" />
        </AnimateIn>

        <AnimateIn delay={0.1} className="min-h-[260px]">
          <PieceCard piece={p2} className="h-full" />
        </AnimateIn>

        <AnimateIn delay={0.15} className="min-h-[260px]">
          <PieceCard piece={p3} className="h-full" />
        </AnimateIn>

        {/* Wide — ocupa 2 colunas no desktop */}
        <AnimateIn delay={0.2} className="md:col-span-1 lg:col-span-2 min-h-[260px]">
          <PieceCard piece={p4} className="h-full" />
        </AnimateIn>

      </div>

      {/* CTA */}
      <AnimateIn delay={0.1}>
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 px-8 py-3.5
                       border border-brand-border-d text-brand-text
                       text-xs font-medium tracking-wider uppercase rounded-sm
                       transition-all duration-300
                       hover:border-brand-text hover:bg-brand-text hover:text-brand-bg"
          >
            Richiedi un pezzo su misura
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </AnimateIn>

    </section>
  )
}
