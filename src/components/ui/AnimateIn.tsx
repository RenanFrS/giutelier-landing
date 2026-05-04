'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

const variants: Record<NonNullable<AnimateInProps['direction']>, Variants> = {
  up: {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden:  { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimateInProps): JSX.Element {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants[direction]}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
