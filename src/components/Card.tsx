interface CardProps {
  title?: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <section className="card" aria-label={title ?? 'Card'}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  )
}
