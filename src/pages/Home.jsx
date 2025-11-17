function Home() {
  // Data arrays - easy to replace with API later
  const metrics = [
    { number: '80%', label: 'Average Savings', description: 'compared to traditional cloud GPU pricing' },
    { number: '<2min', label: 'Launch Time', description: 'from request to ready workload' },
    { number: '150+', label: 'Active Providers', description: 'distributed across global network' }
  ]

  const gpuPlans = [
    {
      name: 'H100 PCIe',
      specs: ['80GB HBM3 Memory', '3.35 TB/s Memory Bandwidth', 'PCIe Gen5 Interface', 'FP8 Tensor Cores'],
      price: '$2.49/hr'
    },
    {
      name: 'A100 80GB',
      specs: ['80GB HBM2e Memory', '2 TB/s Memory Bandwidth', 'SXM4 Interface', 'TF32 Precision'],
      price: '$1.89/hr'
    },
    {
      name: 'L40S',
      specs: ['48GB GDDR6 Memory', '864 GB/s Memory Bandwidth', 'PCIe Gen4 Interface', 'Ada Lovelace Arch'],
      price: '$0.99/hr'
    }
  ]

  const workflowSteps = [
    {
      number: 1,
      title: 'Select GPU',
      description: 'Choose from H100, A100, L40S, and more based on your workload requirements'
    },
    {
      number: 2,
      title: 'Configure container',
      description: 'Bring your own Docker image or use pre-configured ML frameworks'
    },
    {
      number: 3,
      title: 'Launch workload',
      description: 'Deploy instantly on distributed network, pay only for usage time'
    }
  ]

  const features = [
    { title: 'Usage-based billing', description: 'Pay only for the compute time you use, down to the minute' },
    { title: 'Provider choice', description: 'Select from vetted providers based on price, location, and specs' },
    { title: 'Deterministic pricing', description: 'No hidden fees or surprise charges, transparent cost structure' }
  ]

  const pricingRows = [
    {
      offering: 'Fluence GPU Network',
      specs: 'H100 80GB SXM',
      price: '$2.49/hr',
      notes: 'No commitment, instant access'
    },
    {
      offering: 'Traditional Cloud',
      specs: 'H100 80GB',
      price: '$4.50-$8.00/hr',
      notes: 'Long-term contracts often required'
    },
    {
      offering: 'Bare-metal brokers',
      specs: 'H100 80GB',
      price: '$3.50-$6.00/hr',
      notes: 'Limited availability, manual onboarding'
    }
  ]

  const useCases = [
    {
      title: 'Generative AI',
      description: 'Train and deploy LLMs, diffusion models, and multimodal AI applications with high-bandwidth GPU access'
    },
    {
      title: 'Fine-tuning',
      description: 'Adapt foundation models to your specific domain with cost-efficient distributed compute resources'
    },
    {
      title: 'Rendering',
      description: 'Accelerate 3D rendering, simulation, and video processing workloads on professional GPUs'
    }
  ]

  const faqItems = [
    {
      question: 'How does distributed GPU pricing work?',
      answer: 'You pay only for the actual GPU time you consume, billed per minute. No upfront costs, no monthly minimums, no long-term contracts required.'
    },
    {
      question: 'What providers power the network?',
      answer: 'ZetaCube aggregates capacity from vetted data centers and independent providers globally. Each provider meets strict uptime and performance SLAs.'
    },
    {
      question: 'Can I bring my own Docker containers?',
      answer: 'Yes, you can deploy any containerized workload. We support custom images from Docker Hub, private registries, or prebuilt ML frameworks.'
    },
    {
      question: 'What happens if a provider goes offline?',
      answer: 'Workloads can be configured to auto-migrate to backup providers. You only pay for successful compute time, ensuring reliability and cost efficiency.'
    }
  ]

  const trustLogos = ['DataCore AI', 'RenderFarm Pro', 'ML Institute', 'Vertex Labs', 'CloudGen Systems', 'Neural Works']

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Launch GPUs in seconds at 80% lower cost</h1>
            <p className="hero-subtitle">
              Access distributed H100, A100, and L40S GPUs from a global network of providers.
              Pay only for what you use, with no commitments or hidden fees.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Request Access</button>
              <button className="btn-secondary">View Pricing</button>
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
        <p className="text-muted">Trusted by distributed GPU providers</p>
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
        <h2 className="section-title">GPU Offerings</h2>
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
              <button className="btn-secondary">Add to Queue</button>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow timeline */}
      <section className="section workflow">
        <h2 className="section-title">How it works</h2>
        <div className="workflow-steps">
          {workflowSteps.map((step, i) => (
            <div key={i} className="workflow-step">
              <div className="step-number">{step.number}</div>
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
            <h2 className="section-title">Built for developers and researchers</h2>
            <p className="text-muted">
              No vendor lock-in, no capacity constraints. Spin up compute when you need it,
              scale down when you don't. Full transparency on pricing and provider performance.
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
        <h2 className="section-title">Pricing Comparison</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Offering</th>
              <th>Specs</th>
              <th>Price/hr</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row, i) => (
              <tr key={i}>
                <td>{row.offering}</td>
                <td>{row.specs}</td>
                <td><strong>{row.price}</strong></td>
                <td className="text-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Use cases */}
      <section className="section use-cases">
        <h2 className="section-title">Use Cases</h2>
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
            "We reduced our GPU spend by 70% while maintaining the same training throughput.
            The distributed network gave us access to capacity we couldn't get from traditional
            cloud providers during peak demand."
          </p>
          <div className="testimonial-author">
            <strong>Alex Chen</strong>
            <span className="text-muted">ML Engineering Lead, Vertex Labs</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
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
        <h2>Spin up distributed GPUs whenever you need them</h2>
        <p className="text-muted">Join the waitlist to get early access and exclusive launch pricing</p>
        <div className="cta-form">
          <input type="email" placeholder="your@email.com" className="email-input" />
          <button className="btn-primary">Join Waitlist</button>
        </div>
      </section>
    </>
  )
}

export default Home
