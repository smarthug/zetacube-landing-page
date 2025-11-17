import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  // Data arrays from translations
  const metrics = t('home.metrics', { returnObjects: true })
  const gpuPlans = t('home.gpuPlans', { returnObjects: true })
  const workflowSteps = t('home.workflow', { returnObjects: true })
  const features = t('home.featureSection.items', { returnObjects: true })
  const pricingRows = t('home.pricingSection.rows', { returnObjects: true })
  const useCases = t('home.useCases.items', { returnObjects: true })
  const faqItems = t('home.faq.items', { returnObjects: true })
  const trustLogos = t('home.trustLogos', { returnObjects: true })
  const testimonial = {
    quote: t('home.testimonial.quote'),
    author: t('home.testimonial.name'),
    role: t('home.testimonial.role')
  }

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t('home.hero.title')}</h1>
            <p className="hero-subtitle">
              {t('home.hero.description')}
            </p>
            <div className="hero-buttons">
              <Button className="btn-primary" variant="contained" color="primary">
                {t('home.hero.primaryCta')}
              </Button>
              <Button className="btn-secondary" variant="outlined" color="inherit">
                {t('home.hero.secondaryCta')}
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="placeholder-card">
              <div className="placeholder-line"></div>
              <div className="placeholder-line"></div>
              <div className="placeholder-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust-bar">
        <p className="text-muted">{t('home.trustTag')}</p>
        <div className="trust-logos">
          {trustLogos.map((logo, i) => (
            <div key={i} className="trust-logo">{logo}</div>
          ))}
        </div>
      </section>

      {/* Key metrics */}
      <section className="section metrics">
        <div className="grid-3">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-card">
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
              <p className="text-muted">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GPU catalog */}
      <section className="section gpu-catalog">
        <h2 className="section-title">{t('home.gpuTitle')}</h2>
        <div className="grid-3">
          {gpuPlans.map((plan, i) => (
            <div key={i} className="gpu-card">
              <h3>{plan.name}</h3>
              <div className="gpu-price">{plan.price}</div>
              <ul className="gpu-specs">
                {plan.specs.map((spec, j) => (
                  <li key={j}>{spec}</li>
                ))}
              </ul>
              <Button className="btn-secondary" variant="outlined" color="inherit">
                {t('home.gpuCta')}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow timeline */}
      <section className="section workflow">
        <h2 className="section-title">{t('home.workflowTitle')}</h2>
        <div className="workflow-steps">
          {workflowSteps.map((step, i) => (
            <div key={i} className="workflow-step">
              <div className="step-number">{i + 1}</div>
              <h3>{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature columns */}
      <section className="section features">
        <div className="feature-layout">
          <div className="feature-text">
            <h2 className="section-title">{t('home.featureSection.title')}</h2>
            <p className="text-muted">
              {t('home.featureSection.description')}
            </p>
          </div>
          <div className="feature-cards">
            {features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon"></div>
                <h4>{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="section pricing">
        <h2 className="section-title">{t('home.pricingSection.title')}</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>{t('home.pricingSection.columns.offering')}</th>
              <th>{t('home.pricingSection.columns.specs')}</th>
              <th>{t('home.pricingSection.columns.price')}</th>
              <th>{t('home.pricingSection.columns.notes')}</th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row, i) => (
              <tr key={i}>
                <td data-label={t('home.pricingSection.columns.offering')}>{row.offering}</td>
                <td data-label={t('home.pricingSection.columns.specs')}>{row.specs}</td>
                <td data-label={t('home.pricingSection.columns.price')}><strong>{row.price}</strong></td>
                <td data-label={t('home.pricingSection.columns.notes')} className="text-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Use cases */}
      <section className="section use-cases">
        <h2 className="section-title">{t('home.useCases.title')}</h2>
        <div className="grid-3">
          {useCases.map((useCase, i) => (
            <div key={i} className="use-case-card">
              <div className="use-case-icon"></div>
              <h3>{useCase.title}</h3>
              <p className="text-muted">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="section testimonial">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            {testimonial.quote}
          </p>
          <div className="testimonial-author">
            <strong>{testimonial.author}</strong>
            <span className="text-muted">{testimonial.role}</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <h2 className="section-title">{t('home.faq.title')}</h2>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <h4>{item.question}</h4>
              <p className="text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <h2>{t('home.finalCta.title')}</h2>
        <p className="text-muted">{t('home.finalCta.description')}</p>
        <div className="cta-form">
          <TextField
            type="email"
            placeholder={t('home.finalCta.placeholder')}
            variant="outlined"
            fullWidth
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: '999px',
                backgroundColor: 'transparent',
                color: 'var(--muted)',
                '& fieldset': { borderColor: 'var(--stroke)' },
                '&:hover fieldset': { borderColor: 'var(--stroke-bright)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--accent)' }
              },
              '& .MuiInputBase-input': {
                padding: '16px 24px'
              }
            }}
            inputProps={{
              sx: {
                '::placeholder': {
                  color: 'var(--muted-dark)'
                }
              }
            }}
          />
          <Button className="btn-primary" variant="contained" color="primary">
            {t('home.finalCta.button')}
          </Button>
        </div>
      </section>
    </>
  )
}

export default Home
