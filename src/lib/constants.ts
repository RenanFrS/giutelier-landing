export const SITE_CONFIG = {
  name: 'Giutelier',
  tagline: 'Pezzi unici. Fatti a mano. Silvi, Italia.',
  description:
    'Ogni pezzo che indossi racconta una storia. Giutelier trasforma tessuti dimenticati in capi unici, fatti a mano in Abruzzo.',
  url: 'https://giutelier.com',
  locale: 'it_IT',
  instagram: 'https://instagram.com/giutelier',
  whatsapp: 'https://wa.me/39XXXXXXXXXX',
  email: 'teste@giutelier.com',
  location: 'Silvi, Abruzzo, Italia',
} as const

export const NAV_LINKS = [
  { label: 'Atelier',   href: '#manifesto' },
  { label: 'Pezzi',     href: '#pezzi' },
  { label: 'Processo',  href: '#processo' },
] as const

export const PHILOSOPHY_ITEMS = [
  {
    num: '01',
    title: 'Il tessuto ha memoria.',
    body: 'Ogni fibra porta con sé il tempo che ha vissuto. Il mio lavoro non è cancellarlo — è riconoscerlo e portarlo avanti in una forma nuova.',
  },
  {
    num: '02',
    title: 'Lento è meglio.',
    body: 'Non lavoro in serie. Non ho una linea di produzione. Ho le mani, una macchina da cucire, e tutto il tempo che serve per fare le cose bene.',
  },
  {
    num: '03',
    title: 'Unico è eterno.',
    body: 'Il fast fashion vende la sensazione di novità. Io vendo qualcosa di raro: un capo che nessun altro avrà mai. Questo non passa di moda.',
  },
] as const

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Ricerca',
    body: 'Mercati vintage, donazioni, stock abbandonati. Cerco tessuti con storia.',
  },
  {
    num: '02',
    title: 'Ascolto',
    body: 'Ogni pezzo di tessuto suggerisce già cosa vuole diventare.',
  },
  {
    num: '03',
    title: 'Trasformazione',
    body: 'Taglio, cuci, adatto a mano. Nessuna macchina industriale.',
  },
  {
    num: '04',
    title: 'Il tuo pezzo',
    body: 'Un capo unico, con certificato di origine e storia del tessuto.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote: 'Mt chique eu amei.',
    author: 'Heloisa G.',
    location: 'Brasil',
  },
  {
    quote: 'arrasa muuuuuitoooo 🧡',
    author: 'Giovanna S.',
    location: 'Brasil',
  },
  {
    quote: 'Essa bota ta um arrasooooooo',
    author: 'Isabella H.',
    location: 'Brasil',
  },
] as const

export interface Piece {
  id: string
  name: string
  material: string
  size: string
  priceInCents: number
  status: 'available' | 'reserved' | 'sold'
  imageSrc: string
  imageAlt: string
  span: 'tall' | 'wide' | 'normal'
}

export const PIECES: Piece[] = [
  {
    id: 'cappotto-lana-01',
    name: 'Cappotto teddy beige',
    material: 'Lana vintage',
    size: 'Size L',
    priceInCents: 1960,
    status: 'available',
    imageSrc: '/produtos/jaqueta.webp',
    imageAlt: 'Cappotto teddy beige effetto peluche',
    span: 'tall',
  },
  {
    id: 'giacca-patchwork-01',
    name: 'Giacca di lana COQUETTE',
    material: 'Lana / Poliestere',
    size: 'Size M',
    priceInCents: 1645,
    status: 'available',
    imageSrc: '/produtos/jaqueta-preta.webp',
    imageAlt: 'giacca di lana stile edgy/girly stilizzata',
    span: 'normal',
  },
  {
    id: 'gonna-lino-01',
    name: 'Scarpa da neve',
    material: 'Pelle',
    size: '39',
    priceInCents: 1645,
    status: 'available',
    imageSrc: '/produtos/tenis.webp',
    imageAlt: 'scarpa da neve con interno termico',
    span: 'normal',
  },
  {
    id: 'blazer-sartoriale-01',
    name: 'Cardigan azzurro',
    material: 'Acrilico',
    size: 'Size S',
    priceInCents: 385,
    status: 'available',
    imageSrc: '/produtos/cardigan.webp',
    imageAlt: 'cardigan azzurro elegante',
    span: 'wide',
  },
]

export const MARQUEE_ITEMS = [
  'Upcycling artigianale',
  'Pezzi unici',
  'Fatto a mano',
  'Silvi · Abruzzo',
  'Tessuti ritrovati',
  'Zero sprechi',
  'Moda lenta',
] as const
