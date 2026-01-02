import { cn } from '../../lib/cn'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'muted'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-accent/15 text-accent border border-border/60',
    muted: 'bg-card text-muted border border-border',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-tight',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
