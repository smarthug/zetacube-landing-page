import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

function Products() {
  const { t } = useTranslation()
  const products = t('products.items', { returnObjects: true })
  const featureCards = t('products.featureCards', { returnObjects: true })

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>{t('products.heroTitle')}</h1>
          <p className="hero-subtitle">{t('products.heroDescription')}</p>
        </div>
      </section>

      <section className="section gpu-catalog">
        <h2 className="section-title">{t('products.gridTitle')}</h2>
        <div className="grid-3">
          {products.map((product, i) => (
            <div key={i} className="gpu-card">
              <div style={{ marginBottom: '8px' }}>
                <span className="pill">{product.category}</span>
              </div>
              <h3>{product.name}</h3>
              <div className="gpu-price">{product.price}</div>
              <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                {product.description}
              </p>
              <ul className="gpu-specs">
                {product.specs.map((spec, j) => (
                  <li key={j}>{spec}</li>
                ))}
              </ul>
              <Button className="btn-secondary" variant="outlined" color="inherit">
                {t('products.cta')}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="feature-layout">
          <div className="feature-text">
            <h2 className="section-title">{t('products.sectionTitle')}</h2>
            <p className="text-muted">{t('products.sectionDescription')}</p>
          </div>
          <div className="feature-cards">
            {featureCards.map((card, index) => (
              <div key={index} className="feature-card">
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

export default Products
