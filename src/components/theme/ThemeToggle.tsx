import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { cn } from '../../lib/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'group relative inline-flex items-center justify-center p-1 text-foreground transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        className,
      )}
      whileTap={{ scale: 0.96 }}
      aria-label="Toggle theme"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, scale: 0.9, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotate: -20 }}
        transition={{ duration: 0.2 }}
        className="flex"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.span>
    </motion.button>
  )
}
