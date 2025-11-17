function Providers() {
  const providerStats = [
    { number: '150+', label: 'Active Providers', description: 'Globally distributed data centers' },
    { number: '99.9%', label: 'Network Uptime', description: 'Guaranteed SLA with redundancy' },
    { number: '45+', label: 'Countries', description: 'Providers across 6 continents' }
  ]

  const requirements = [
    {
      title: 'Infrastructure standards',
      items: [
        'Enterprise-grade data center facilities',
        'Redundant power and cooling systems',
        'High-speed network connectivity (10Gbps+)',
        'Physical security and access controls'
      ]
    },
    {
      title: 'Performance requirements',
      items: [
        '99.5% minimum uptime commitment',
        'Sub-50ms network latency within region',
        'Regular hardware maintenance schedules',
        'Automated monitoring and alerting'
      ]
    },
    {
      title: 'Compliance & security',
      items: [
        'SOC 2 Type II certification',
        'ISO 27001 compliance',
        'Data encryption at rest and in transit',
        'Regular third-party security audits'
      ]
    }
  ]

  const benefits = [
    {
      icon: 'Revenue sharing',
      title: 'Competitive revenue share',
      description: 'Earn up to 85% of compute fees with transparent payment terms'
    },
    {
      icon: 'Management',
      title: 'Automated management',
      description: 'Our platform handles provisioning, billing, and customer support'
    },
    {
      icon: 'Utilization',
      title: 'Maximize utilization',
      description: 'Tap into global demand to keep your GPUs running at full capacity'
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Join Our Provider Network</h1>
          <p className="hero-subtitle">
            Turn your idle GPU capacity into revenue. Join a global network of compute providers
            serving enterprise customers and researchers worldwide.
          </p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <button className="btn-primary">Become a Provider</button>
            <button className="btn-secondary">Provider Portal</button>
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
        <h2 className="section-title">Why providers choose ZetaCube</h2>
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
        <h2 className="section-title">Provider Requirements</h2>
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
            "Joining ZetaCube's provider network was seamless. We went from application to first
            revenue in under two weeks. The platform handles all customer management, letting us
            focus on maintaining our infrastructure."
          </p>
          <div className="testimonial-author">
            <strong>Sarah Martinez</strong>
            <span className="text-muted">VP Operations, CloudGen Systems</span>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <h2>Ready to monetize your GPU infrastructure?</h2>
        <p className="text-muted">Apply to become a provider and start earning revenue from your idle capacity</p>
        <div className="cta-form">
          <input type="email" placeholder="your@company.com" className="email-input" />
          <button className="btn-primary">Apply Now</button>
        </div>
      </section>
    </>
  )
}

export default Providers
