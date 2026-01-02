import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import type { Language } from 'prism-react-renderer'
import type { Snippet } from '../../types/content'
import { Badge } from '../ui/Badge'
import { motion } from 'framer-motion'

export function SnippetCard({ snippet, index }: { snippet: Snippet; index: number }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (error) {
      console.error('Unable to copy snippet', error)
    }
  }

  return (
    <motion.article
      className="glass-card flex flex-col gap-3 p-5 md:p-6"
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground">{snippet.title}</h3>
          <p className="text-sm text-muted">{snippet.description}</p>
        </div>
        <Badge variant="muted" className="capitalize text-[11px]">
          {snippet.language}
        </Badge>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-slate-900 text-slate-50 dark:bg-[#0b1221]">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground/80 transition hover:border-accent hover:text-accent"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
        <Highlight code={snippet.code.trim()} language={mapLanguage(snippet.language)} theme={themes.nightOwl}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} overflow-x-auto p-4 text-sm`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="flex">
                  <span className="mr-3 w-8 select-none text-right text-[11px] text-muted">
                    {i + 1}
                  </span>
                  <span className="flex-1">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </motion.article>
  )
}

function mapLanguage(lang: string): Language {
  const lower = lang.toLowerCase()
  if (lower.includes('typescript')) return 'tsx'
  if (lower.includes('javascript')) return 'jsx'
  if (lower.includes('react')) return 'tsx'
  if (lower.includes('css')) return 'css'
  return 'tsx'
}
