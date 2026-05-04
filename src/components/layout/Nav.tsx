'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrolled'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

export function Nav(): JSX.Element {
  const scrolled = useScrolled(60)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav
        aria-label="Navigazione principale"
        className={cn(
          'fixed top-0 inset-x-0 z-50 flex items-center justify-between',
          'px-6 md:px-12 lg:px-20 py-6',
          'transition-all duration-400 ease-smooth',
          scrolled
            ? 'bg-brand-bg/95 backdrop-blur-sm shadow-[0_1px_0_theme(colors.brand.border)]'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={SITE_CONFIG.name}
          className="flex items-center transition-opacity duration-400 hover:opacity-80"
        >
          <Image
            src="/logo/logo.jpg"
            alt={SITE_CONFIG.name}
            width={120}
            height={40}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm tracking-wide transition-colors duration-300',
                  scrolled
                    ? 'text-brand-muted hover:text-brand-text'
                    : 'text-brand-bg/75 hover:text-brand-bg'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className={cn(
                'text-xs font-medium tracking-wider uppercase px-5 py-2.5 rounded-sm',
                'border transition-all duration-300',
                scrolled
                  ? 'border-brand-border-d text-brand-text hover:bg-brand-text hover:text-brand-bg hover:border-brand-text'
                  : 'border-brand-bg/40 text-brand-bg hover:bg-brand-accent hover:border-brand-accent'
              )}
            >
              Encomendar
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex flex-col gap-[5px] p-1"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                'block w-[22px] h-px transition-colors duration-400',
                scrolled ? 'bg-brand-text' : 'bg-brand-bg'
              )}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          'fixed inset-0 z-[60] bg-brand-text flex flex-col',
          'px-6 pt-24 pb-10',
          'transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <button
          aria-label="Fechar menu"
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-brand-bg/50 hover:text-brand-bg text-2xl leading-none"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
          {[...NAV_LINKS, { label: 'Encomendar', href: '#contato' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-4xl font-light text-brand-bg/80 hover:text-brand-bg
                         py-3 border-b border-brand-bg/[0.08] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <p className="text-xs text-brand-bg/25 tracking-wider uppercase">
            {SITE_CONFIG.location}
          </p>
        </div>
      </div>
    </>
  )
}
