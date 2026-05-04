export type PieceStatus = 'available' | 'reserved' | 'sold'

export type PieceSpan = 'tall' | 'wide' | 'normal'

export interface Piece {
  id: string
  name: string
  material: string
  size: string
  priceInCents: number
  status: PieceStatus
  imageSrc: string
  imageAlt: string
  span: PieceSpan
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  interest: string
  message: string
}
