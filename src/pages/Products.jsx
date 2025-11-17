import Button from '@mui/material/Button'

function Products() {
  const products = [
    {
      name: 'H100 PCIe 80GB',
      category: 'High Performance',
      specs: ['80GB HBM3 Memory', '3.35 TB/s Memory Bandwidth', 'PCIe Gen5 Interface', 'FP8 Tensor Cores', '3.9 petaFLOPS FP8'],
      price: '$2.49/hr',
      description: 'Top-tier performance for large language model training and inference workloads'
    },
    {
      name: 'A100 80GB SXM',
      category: 'High Performance',
      specs: ['80GB HBM2e Memory', '2 TB/s Memory Bandwidth', 'SXM4 Interface', 'TF32 Precision', '312 teraFLOPS'],
      price: '$1.89/hr',
      description: 'Industry-standard GPU for deep learning training and HPC applications'
    },
    {
      name: 'L40S',
      category: 'Graphics & AI',
      specs: ['48GB GDDR6 Memory', '864 GB/s Memory Bandwidth', 'PCIe Gen4 Interface', 'Ada Lovelace Arch', 'RT Cores Gen 3'],
      price: '$0.99/hr',
      description: 'Versatile GPU for AI inference, rendering, and graphics workloads'
    },
    {
      name: 'RTX 4090',
      category: 'Consumer',
      specs: ['24GB GDDR6X Memory', '1008 GB/s Memory Bandwidth', 'PCIe Gen4 Interface', 'Ada Lovelace Arch', 'DLSS 3'],
      price: '$0.59/hr',
      description: 'Cost-effective option for smaller models and experimentation'
    },
    {
      name: 'A40',
      category: 'Professional',
      specs: ['48GB GDDR6 Memory', '696 GB/s Memory Bandwidth', 'PCIe Gen4 Interface', 'Ampere Arch', 'ECC Memory'],
      price: '$0.89/hr',
      description: 'Professional GPU for virtual workstations and AI development'
    },
    {
      name: 'V100 32GB',
      category: 'Legacy',
      specs: ['32GB HBM2 Memory', '900 GB/s Memory Bandwidth', 'SXM2 Interface', 'Volta Arch', 'Tensor Cores Gen 1'],
      price: '$0.69/hr',
      description: 'Proven solution for established ML workflows and research'
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>GPU Products</h1>
          <p className="hero-subtitle">
            Choose from our range of high-performance GPUs optimized for machine learning,
            rendering, and compute-intensive workloads. All available on-demand with transparent pricing.
          </p>
        </div>
      </section>

      <section className="section gpu-catalog">
        <h2 className="section-title">Available GPUs</h2>
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
                Configure Instance
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="feature-layout">
          <div className="feature-text">
            <h2 className="section-title">Flexible deployment options</h2>
            <p className="text-muted">
              All GPUs are available with hourly billing, instant provisioning, and the ability
              to scale up or down based on your needs. Switch between GPU types without
              long-term commitments.
            </p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Instant provisioning</h4>
              <p className="text-muted">Launch any GPU configuration in under 2 minutes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>No minimum commitment</h4>
              <p className="text-muted">Pay only for the hours you use, cancel anytime</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>API access</h4>
              <p className="text-muted">Automate deployments with our REST API and SDKs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
