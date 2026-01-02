import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-8 flex flex-col gap-2', className)}>
      {eyebrow ? (
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        className="text-2xl font-semibold md:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="max-w-2xl text-sm text-muted md:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
