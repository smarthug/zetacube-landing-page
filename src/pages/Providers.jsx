import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

function Providers() {
  const { t } = useTranslation()
  const providerStats = t('providers.metrics', { returnObjects: true })
  const requirements = t('providers.requirements', { returnObjects: true })
  const benefits = t('providers.benefits', { returnObjects: true })
  const testimonial = t('providers.testimonial', { returnObjects: true })
  const finalCta = t('providers.finalCta', { returnObjects: true })

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>{t('providers.heroTitle')}</h1>
          <p className="hero-subtitle">{t('providers.heroDescription')}</p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <Button className="btn-primary" variant="contained" color="primary">
              {t('providers.heroPrimary')}
            </Button>
            <Button className="btn-secondary" variant="outlined" color="inherit">
              {t('providers.heroSecondary')}
            </Button>
          </div>
        </div>
      </section>

      <section className="section metrics">
        <div className="grid-3">
          {providerStats.map((metric, i) => (
            <div key={i} className="metric-card">
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
              <p className="text-muted">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('providers.benefitTitle')}</h2>
        <div className="grid-3">
          {benefits.map((benefit, i) => (
            <div key={i} className="use-case-card">
              <div className="use-case-icon"></div>
              <h3>{benefit.title}</h3>
              <p className="text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('providers.requirementsTitle')}</h2>
        <div className="grid-3">
          {requirements.map((req, i) => (
            <div key={i} className="gpu-card">
              <h3>{req.title}</h3>
              <ul className="gpu-specs">
                {req.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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

      <section className="section final-cta">
        <h2>{finalCta.title}</h2>
        <p className="text-muted">{finalCta.description}</p>
        <div className="cta-form">
          <TextField
            type="email"
            placeholder={finalCta.placeholder}
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
            {finalCta.button}
          </Button>
        </div>
      </section>
    </>
  )
}

export default Providers
