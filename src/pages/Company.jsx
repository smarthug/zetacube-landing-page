import Button from '@mui/material/Button'

function Company() {
  const timeline = [
    { year: '2023', event: 'ZetaCube founded', description: 'Started with mission to democratize GPU access' },
    { year: '2023 Q4', event: 'Beta launch', description: 'First 50 users onboarded to the platform' },
    { year: '2024 Q1', event: 'Series A funding', description: 'Raised $15M to expand provider network' },
    { year: '2024 Q2', event: 'Global expansion', description: 'Reached 100+ providers across 45 countries' },
    { year: '2024 Q3', event: 'Enterprise tier', description: 'Launched dedicated support for large teams' }
  ]

  const team = [
    { name: 'Jennifer Park', role: 'CEO & Co-founder', background: 'Ex-Google Cloud, Stanford CS' },
    { name: 'Michael Chen', role: 'CTO & Co-founder', background: 'Ex-AWS, MIT CSAIL' },
    { name: 'Sarah Johnson', role: 'VP Engineering', background: 'Ex-Databricks, Berkeley PhD' },
    { name: 'David Kim', role: 'VP Operations', background: 'Ex-DigitalOcean, Cornell MBA' }
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'Clear pricing, open communication, and honest about our capabilities and limitations'
    },
    {
      title: 'Accessibility',
      description: 'Making powerful GPU compute available to everyone, from students to enterprises'
    },
    {
      title: 'Reliability',
      description: 'Building infrastructure you can depend on for mission-critical workloads'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our platform with cutting-edge technology and features'
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>About ZetaCube</h1>
          <p className="hero-subtitle">
            We're building the future of distributed GPU computing. Our mission is to make
            high-performance compute accessible, affordable, and reliable for everyone.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Story</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>
            ZetaCube was founded in 2023 by a team of cloud infrastructure veterans who experienced
            firsthand the challenges of accessing affordable GPU compute. We saw researchers waiting
            weeks for GPU allocations, startups burning through runway on cloud bills, and data centers
            with idle capacity unable to monetize their infrastructure.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            Our platform connects these dots—creating a global marketplace where anyone can access
            high-performance GPUs instantly, while providers earn revenue from their existing infrastructure.
            Today, we serve thousands of developers, researchers, and companies worldwide.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Values</h2>
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
        <h2 className="section-title">Company Timeline</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {timeline.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '32px',
              paddingBottom: '32px',
              borderBottom: i < timeline.length - 1 ? '1px solid #e9e9e9' : 'none'
            }}>
              <div style={{
                minWidth: '100px',
                fontWeight: '600',
                fontSize: '16px'
              }}>
                {item.year}
              </div>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.event}</h4>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Leadership Team</h2>
        <div className="grid-3">
          {team.map((member, i) => (
            <div key={i} className="metric-card" style={{ textAlign: 'left' }}>
              <div className="use-case-icon" style={{ margin: '0 0 16px 0' }}></div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{member.name}</h3>
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#555' }}>
                {member.role}
              </div>
              <p className="text-muted" style={{ fontSize: '14px' }}>{member.background}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonial">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Our goal is to eliminate the barriers between great ideas and the compute power needed
            to bring them to life. Every researcher, developer, and company should have access to
            the GPUs they need, when they need them, at a fair price."
          </p>
          <div className="testimonial-author">
            <strong>Jennifer Park</strong>
            <span className="text-muted">CEO & Co-founder, ZetaCube</span>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <h2>Join us on our mission</h2>
        <p className="text-muted">We're always looking for talented people who share our vision</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Button className="btn-primary" variant="contained" color="primary">
            View Open Positions
          </Button>
          <Button className="btn-secondary" variant="outlined" color="inherit">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}

export default Company
