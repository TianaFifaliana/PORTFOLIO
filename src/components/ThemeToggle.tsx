import { Moon, Sun } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduce = useReducedMotion()
  const isDark = theme === 'dark'
  const label = isDark ? 'Activer le mode clair' : 'Activer le mode sombre'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      whileTap={reduce ? undefined : { scale: 0.9 }}
      className="quiet-link inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lilac/20 text-silver transition-colors hover:border-lavender hover:text-lilac"
    >
      <motion.span
        key={theme}
        initial={reduce ? false : { opacity: 0, rotate: -45, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        className="flex items-center justify-center"
      >
        {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      </motion.span>
    </motion.button>
  )
}
