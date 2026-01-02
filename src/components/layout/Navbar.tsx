import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../../data/navigation'
import { ThemeToggle } from '../theme/ThemeToggle'
import { cn } from '../../lib/cn'

export function Navbar() {
  const location = useLocation()

  const activePath = useMemo(() => {
    if (location.pathname.startsWith('/blogs/')) return '/blogs'
    return location.pathname
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 border-b border-border bg-background/70 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
            aditya.dev 
          </motion.span>
        </NavLink>
        <nav className="flex items-center gap-2 text-sm">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-2 text-foreground/80 transition hover:text-accent',
                  activePath === item.href || isActive
                    ? 'bg-card text-foreground shadow-soft'
                    : 'text-foreground/70',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle className="ml-1" />
        </nav>
      </div>
    </header>
  )
}
