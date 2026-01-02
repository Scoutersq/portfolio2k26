import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

const baseClasses = 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition'

const variants = {
  primary:
    'border-transparent bg-accent text-accent-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  ghost:
    'border-border bg-card/60 text-foreground hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
}

type ButtonProps = {
  href?: string
  variant?: keyof typeof variants
  className?: string
  children: React.ReactNode
  target?: string
}

export function Button({ href, variant = 'primary', className, children, target }: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], className)

  if (href) {
    const isInternal = href.startsWith('/')
    if (isInternal) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={classes} target={target ?? '_blank'} rel="noreferrer">
        {children}
      </a>
    )
  }

  return <button className={classes}>{children}</button>
}
