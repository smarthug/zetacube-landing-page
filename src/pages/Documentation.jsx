import { useTranslation } from 'react-i18next'

function Documentation() {
  const { t } = useTranslation()
  const quickStartSteps = t('documentation.quickStartSteps', { returnObjects: true })
  const docSections = t('documentation.sections', { returnObjects: true })
  const codeExamples = t('documentation.examples', { returnObjects: true })
  const helpCards = t('documentation.helpCards', { returnObjects: true })

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>{t('documentation.heroTitle')}</h1>
          <p className="hero-subtitle">{t('documentation.heroDescription')}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('documentation.quickStartTitle')}</h2>
        <div className="workflow-steps">
          {quickStartSteps.map((step, i) => (
            <div key={i} className="workflow-step">
              <div className="step-number">{i + 1}</div>
              <h3>{step.title}</h3>
              <div style={{
                background: '#f9f9f9',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #d9d9d9',
                margin: '12px 0',
                fontFamily: 'monospace',
                fontSize: '13px'
              }}>
                {step.code}
              </div>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('documentation.sectionsTitle')}</h2>
        <div className="grid-3">
          {docSections.map((section, i) => (
            <div key={i} className="gpu-card">
              <h3>{section.title}</h3>
              <ul className="gpu-specs">
                {section.items.map((item, j) => (
                  <li key={j} style={{ cursor: 'pointer' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('documentation.examplesTitle')}</h2>
        {codeExamples.map((example, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{example.title}</h3>
            <div style={{
              background: '#f9f9f9',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #d9d9d9',
              fontFamily: 'monospace',
              fontSize: '13px',
              whiteSpace: 'pre-wrap',
              overflow: 'auto'
            }}>
              {example.code}
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="feature-layout">
          <div className="feature-text">
            <h2 className="section-title">{t('documentation.helpTitle')}</h2>
            <p className="text-muted">{t('documentation.helpDescription')}</p>
          </div>
          <div className="feature-cards">
            {helpCards.map((card, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon"></div>
                <h4>{card.title}</h4>
                <p className="text-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Documentation
