import { MARQUEE_ITEMS } from '@/lib/constants'

export function Marquee(): JSX.Element {
  // Duplica para loop seamless
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="bg-brand-text overflow-hidden py-[1.1rem] group"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[0.6875rem] font-light tracking-[0.18em] uppercase
                       text-brand-bg/50 px-10
                       after:content-['·'] after:text-brand-accent after:ml-10 after:text-base"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
