import type { Variants } from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1] as const

export function staggerContainer(reduce: boolean | null, stagger = 0.08, delay = 0.08): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  }
}

export function riseIn(reduce: boolean | null, distance = 20, duration = 0.7): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : distance,
      filter: reduce ? 'none' : 'blur(6px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0 : duration, ease: easeOut },
    },
  }
}

export function slideIn(reduce: boolean | null, x = 24, duration = 0.65, delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : x,
      filter: reduce ? 'none' : 'blur(5px)',
    },
    show: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: easeOut },
    },
  }
}

export const hoverLift = {
  y: -6,
  transition: { type: 'spring', stiffness: 320, damping: 22 },
} as const
