# Giutelier — Landing Page

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

## Setup

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build
pnpm start

# Typecheck
pnpm typecheck
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fontes, metadata SEO
│   ├── page.tsx            # Home — compõe todas as seções
│   └── globals.css         # Tailwind base + CSS custom properties
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         # Navegação: transparente → branca no scroll
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx     # Faixa de texto animada
│   │   ├── Manifesto.tsx   # História da Giulia + stats
│   │   ├── Philosophy.tsx  # 3 princípios (fundo escuro)
│   │   ├── Pezzi.tsx       # Grid editorial de peças
│   │   ├── Processo.tsx    # 4 passos do processo
│   │   ├── Testimonials.tsx
│   │   └── Contato.tsx     # Formulário (React Hook Form + Zod)
│   └── ui/
│       ├── AnimateIn.tsx   # Wrapper de animação (Framer Motion)
│       └── PieceCard.tsx   # Card de peça com hover overlay
├── hooks/
│   └── useScrolled.ts      # Hook para detectar scroll
├── lib/
│   ├── constants.ts        # Dados, textos, configuração do site
│   ├── fonts.ts            # next/font (Cormorant Garant + Inter)
│   └── utils.ts            # cn(), formatPrice()
└── types/
    └── index.ts
```

## Personalização

### Trocar imagens
Em `src/lib/constants.ts`, editar `PIECES[].imageSrc` com as URLs reais das fotos da Giulia.

No `Hero.tsx`, o fundo atual é uma cor CSS. Para usar foto real:
```tsx
// Em Hero.tsx, substituir a div .hero-bg-color por:
<Image
  src="/images/hero.jpg"
  alt="Atelier Giutelier"
  fill
  className="object-cover"
  priority
/>
```

### Formulário de contato
Em `Contato.tsx`, a função `onSubmit` tem um `setTimeout` como placeholder.
Substituir por chamada real:

**Opção 1 — Resend (recomendado):**
```ts
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(data),
})
```

**Opção 2 — Formspree:**
```ts
await fetch('https://formspree.io/f/SEU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

### Textos e dados
Todos os textos editáveis estão em `src/lib/constants.ts`:
- `SITE_CONFIG` — nome, email, WhatsApp, Instagram, URL
- `PHILOSOPHY_ITEMS` — os 3 princípios
- `PROCESS_STEPS` — os 4 passos
- `TESTIMONIALS` — depoimentos
- `PIECES` — catálogo de peças

### WhatsApp
Em `SITE_CONFIG.whatsapp`, substituir `39XXXXXXXXXX` pelo número real com DDI italiano.

## Deploy

**Vercel (recomendado):**
```bash
pnpm dlx vercel
```

**Railway:**
Conectar repo → variáveis de ambiente → deploy automático.

## Variáveis de ambiente

Criar `.env.local`:
```env
# Resend (para formulário de contato)
RESEND_API_KEY=re_...

# URL pública
NEXT_PUBLIC_SITE_URL=https://giutelier.com
```
