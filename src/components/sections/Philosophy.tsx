import { PHILOSOPHY_ITEMS } from '@/lib/constants'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Philosophy(): JSX.Element {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-brand-text section-pad"
    >
      <div className="container-brand">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end
                        gap-4 pb-12 border-b border-brand-bg/[0.08] mb-0">
          <p className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-brand-bg/30">
            Il metodo
          </p>
          <h2
            id="philosophy-heading"
            className="font-heading font-light text-[clamp(2rem,4vw,3rem)]
                       text-brand-bg leading-[1.2] md:text-right"
          >
            Tre cose<br />in cui credo.
          </h2>
        </div>

        {/* Grid dos 3 princípios */}
        <ol
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x
                     divide-brand-bg/[0.08]"
          role="list"
        >
          {PHILOSOPHY_ITEMS.map((item, i) => (
            <AnimateIn key={item.num} delay={i * 0.12} direction="up">
              <li className="py-10 md:py-12 md:px-10 first:md:pl-0 last:md:pr-0">
                <p
                  className="font-heading text-[3.5rem] font-light leading-none
                             text-brand-bg/[0.10] mb-6 select-none"
                  aria-hidden="true"
                >
                  {item.num}
                </p>
                <h3 className="font-heading text-xl font-light text-brand-bg mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-brand-bg/45 leading-[1.8]">
                  {item.body}
                </p>
              </li>
            </AnimateIn>
          ))}
        </ol>

      </div>
    </section>
  )
}
