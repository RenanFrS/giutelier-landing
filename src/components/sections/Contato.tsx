'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'
import { AnimateIn } from '@/components/ui/AnimateIn'
import type { ContactFormData } from '@/types'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.005a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.74.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.885-9.885 9.885zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.475-8.413z" />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

const schema = z.object({
  name:     z.string().min(2, 'Nome troppo corto'),
  email:    z.string().email('Email non valida'),
  interest: z.string().min(1, 'Scegli un\'opzione'),
  message:  z.string().min(10, 'Racconta un po\' di più'),
})

type FormValues = z.infer<typeof schema>

function InputField({
  label,
  error,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}): JSX.Element {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={props.id}
        className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase
                   text-brand-bg/30"
      >
        {label}
      </label>
      <input
        {...props}
        className={cn(
          'w-full bg-brand-bg/[0.05] border rounded-sm px-4 py-3',
          'text-[0.9375rem] font-light text-brand-bg placeholder:text-brand-bg/20',
          'outline-none transition-colors duration-200',
          'focus:border-brand-bg/30',
          error ? 'border-red-400/60' : 'border-brand-bg/[0.12]'
        )}
      />
      {error && (
        <p role="alert" className="text-xs text-red-400/80">{error}</p>
      )}
    </div>
  )
}

export function Contato(): JSX.Element {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues): Promise<void> => {
    // Substituir pelo endpoint real (Resend / Formspree / etc.)
    await new Promise((r) => setTimeout(r, 800))
    console.info('Form data:', data)
    setSent(true)
    reset()
  }

  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="bg-brand-text section-pad"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
          <AnimateIn direction="left">
            <div>
              <p className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase
                             text-brand-bg/30 mb-6">
                Encomende
              </p>

              <h2
                id="contato-heading"
                className="font-heading font-light text-[clamp(2.2rem,4vw,3.4rem)]
                           text-brand-bg leading-[1.15] tracking-tight mb-6"
              >
                Hai in mente<br />
                <em className="italic text-brand-bg/60">qualcosa di unico?</em>
              </h2>

              <p className="text-[0.9375rem] font-light text-brand-bg/50 leading-[1.85]
                             max-w-[38ch] mb-10">
                Racconta cosa stai cercando. Posso creare su misura,
                trasformare un capo che hai già, o semplicemente
                farti sapere cosa ho disponibile in questo momento.
              </p>

              {/* Canais alternativos */}
              <nav aria-label="Contatti diretti" className="flex flex-col gap-4">
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-light
                             text-brand-bg/55 hover:text-brand-bg transition-colors duration-200"
                >
                  <span
                    className="w-8 h-8 rounded-full border border-brand-bg/15
                               flex items-center justify-center text-brand-bg/70"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  @giutelier
                </a>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-light
                             text-brand-bg/55 hover:text-brand-bg transition-colors duration-200"
                >
                  <span
                    className="w-8 h-8 rounded-full border border-brand-bg/15
                               flex items-center justify-center text-brand-bg/70"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  WhatsApp diretto
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-3 text-sm font-light
                             text-brand-bg/55 hover:text-brand-bg transition-colors duration-200"
                >
                  <span
                    className="w-8 h-8 rounded-full border border-brand-bg/15
                               flex items-center justify-center text-brand-bg/70"
                  >
                    <MailIcon className="w-4 h-4" />
                  </span>
                  {SITE_CONFIG.email}
                </a>
              </nav>
            </div>
          </AnimateIn>

          {/* Right — formulário */}
          <AnimateIn delay={0.15}>
            {sent ? (
              <div
                className="flex flex-col items-start gap-4 py-8"
                role="status"
                aria-live="polite"
              >
                <p className="font-heading text-3xl font-light italic text-brand-bg/80">
                  Messaggio ricevuto.
                </p>
                <p className="text-sm font-light text-brand-bg/45 leading-relaxed">
                  Ti rispondo entro 48 ore.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs tracking-wider uppercase text-brand-bg/40
                             hover:text-brand-bg/70 transition-colors duration-200 mt-2"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4"
                aria-label="Modulo di contatto"
              >
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    id="name"
                    label="Nome"
                    placeholder="Il tuo nome"
                    autoComplete="given-name"
                    {...register('name')}
                    error={errors.name?.message}
                  />
                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="la@tua.email"
                    autoComplete="email"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="interest"
                    className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase
                               text-brand-bg/30"
                  >
                    Mi interessa
                  </label>
                  <select
                    id="interest"
                    {...register('interest')}
                    defaultValue=""
                    className={cn(
                      'w-full bg-brand-text border rounded-sm px-4 py-3 appearance-none',
                      'text-[0.9375rem] font-light text-brand-bg/70 outline-none',
                      'transition-colors duration-200 focus:border-brand-bg/30',
                      errors.interest
                        ? 'border-red-400/60'
                        : 'border-brand-bg/[0.12]'
                    )}
                  >
                    <option value="" disabled className="text-brand-bg/30">
                      Scegli...
                    </option>
                    <option value="pezzo-disponibile">Un pezzo già disponibile</option>
                    <option value="su-misura">Un pezzo su misura</option>
                    <option value="trasformazione">Trasformare qualcosa che ho</option>
                    <option value="regalo">Un regalo speciale</option>
                    <option value="altro">Altro</option>
                  </select>
                  {errors.interest && (
                    <p role="alert" className="text-xs text-red-400/80">
                      {errors.interest.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase
                               text-brand-bg/30"
                  >
                    Raccontami
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Cosa hai in mente? Nessun dettaglio è troppo piccolo."
                    {...register('message')}
                    className={cn(
                      'w-full bg-brand-bg/[0.05] border rounded-sm px-4 py-3 resize-none',
                      'text-[0.9375rem] font-light text-brand-bg placeholder:text-brand-bg/20',
                      'outline-none transition-colors duration-200 focus:border-brand-bg/30',
                      'font-body',
                      errors.message
                        ? 'border-red-400/60'
                        : 'border-brand-bg/[0.12]'
                    )}
                  />
                  {errors.message && (
                    <p role="alert" className="text-xs text-red-400/80">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 py-3.5 bg-brand-accent text-white rounded-sm
                             text-xs font-medium tracking-wider uppercase
                             transition-colors duration-300 hover:bg-brand-accent-h
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Invio...' : 'Invia messaggio'}
                </button>
              </form>
            )}
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
