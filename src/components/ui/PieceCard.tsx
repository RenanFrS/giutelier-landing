'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'
import type { Piece } from '@/types'

interface PieceCardProps {
  piece: Piece
  className?: string
}

const STATUS_LABELS: Record<Piece['status'], string> = {
  available: 'Disponibile',
  reserved:  'Riservato',
  sold:      'Venduto',
}

export function PieceCard({ piece, className }: PieceCardProps): JSX.Element {
  return (
    <article
      className={cn('group relative overflow-hidden rounded-sm cursor-pointer', className)}
      tabIndex={0}
      aria-label={`${piece.name} — ${STATUS_LABELS[piece.status]}`}
      role="article"
    >
      {/* Imagem */}
      <div className="absolute inset-0">
        <Image
          src={piece.imageSrc}
          alt={piece.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-smooth
                     group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Overlay on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-text/50
                   opacity-0 group-hover:opacity-100 transition-opacity duration-400
                   flex flex-col justify-end p-5 md:p-6"
      >
        <p className="font-heading text-[1.2rem] font-light text-brand-bg mb-0.5">
          {piece.name}
        </p>
        <p className="text-xs tracking-wider uppercase text-brand-bg/65">
          {piece.material} · {piece.size} · {formatPrice(piece.priceInCents)}
        </p>
      </div>

      {/* Status badge */}
      <div className="absolute top-3 left-3">
        <span
          className={cn(
            'text-[0.6rem] font-medium tracking-[0.12em] uppercase px-2 py-1 rounded-[2px]',
            piece.status === 'available' && 'bg-brand-bg/92 text-brand-text',
            piece.status === 'reserved'  && 'bg-brand-accent/90 text-white',
            piece.status === 'sold'      && 'bg-brand-text/70 text-brand-bg/60',
          )}
        >
          {STATUS_LABELS[piece.status]}
        </span>
      </div>
    </article>
  )
}
