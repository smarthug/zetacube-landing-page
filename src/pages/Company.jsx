import { useTranslation } from 'react-i18next'

function Company() {
  const { t } = useTranslation()
  const timeline = t('company.timeline', { returnObjects: true })
  const team = t('company.team', { returnObjects: true })
  const values = t('company.values', { returnObjects: true })
  const storyParagraphs = t('company.storyParagraphs', { returnObjects: true })
  const testimonial = t('company.testimonial', { returnObjects: true })
  const finalCta = t('company.finalCta', { returnObjects: true })

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>{t('company.heroTitle')}</h1>
          <p className="hero-subtitle">{t('company.heroDescription')}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('company.storyTitle')}</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {storyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: index < storyParagraphs.length - 1 ? '24px' : '0'
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('company.valuesTitle')}</h2>
        <div className="grid-3">
          {values.map((value, i) => (
            <div key={i} className="use-case-card">
              <div className="use-case-icon"></div>
              <h3>{value.title}</h3>
              <p className="text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('company.timelineTitle')}</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '32px',
                paddingBottom: '32px',
                borderBottom: i < timeline.length - 1 ? '1px solid #e9e9e9' : 'none'
              }}
            >
              <div style={{ minWidth: '100px', fontWeight: 600, fontSize: '16px' }}>{item.year}</div>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.event}</h4>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('company.teamTitle')}</h2>
        <div className="grid-3">
          {team.map((member, i) => (
            <div key={i} className="metric-card" style={{ textAlign: 'left' }}>
              <div className="use-case-icon" style={{ margin: '0 0 16px 0' }}></div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{member.name}</h3>
              <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px', color: '#555' }}>{member.role}</div>
              <p className="text-muted" style={{ fontSize: '14px' }}>{member.background}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonial">
        <div className="testimonial-card">
          <p className="testimonial-quote">{testimonial.quote}</p>
          <div className="testimonial-author">
            <strong>{testimonial.author}</strong>
            <span className="text-muted">{testimonial.role}</span>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <h2>{finalCta.title}</h2>
        <p className="text-muted">{finalCta.description}</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn-primary">{finalCta.primary}</button>
          <button className="btn-secondary">{finalCta.secondary}</button>
        </div>
      </section>
    </>
  )
}

export default Company
