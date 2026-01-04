import { useMemo, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { ThemeToggle } from '../theme/ThemeToggle'
import { cn } from '../../lib/cn'

export function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const activePath = useMemo(() => {
    if (location.pathname.startsWith('/blogs/')) return '/blogs'
    return location.pathname
  }, [location.pathname])

  useEffect(() => {
    // Close the mobile menu when the route changes
    setIsOpen(false)
  }, [activePath])

  return (
    <header className="sticky top-0 z-40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 border-b border-border bg-background/70 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
            aditya raj
          </motion.span>
        </NavLink>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 text-sm md:flex">
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

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground hover:border-accent hover:text-accent md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-b border-border bg-background/90 px-4 pb-4 shadow-sm md:hidden">
          <nav className="flex flex-col gap-2 text-sm">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 transition',
                    activePath === item.href || isActive
                      ? 'bg-card text-foreground shadow-soft'
                      : 'text-foreground/80 hover:text-accent',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-1">
              <ThemeToggle className="w-full justify-start" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
