function Documentation() {
  const quickStartSteps = [
    {
      number: 1,
      title: 'Install CLI',
      code: 'npm install -g zetacube-cli',
      description: 'Install the ZetaCube command-line tool globally'
    },
    {
      number: 2,
      title: 'Authenticate',
      code: 'zetacube auth login',
      description: 'Log in with your ZetaCube account credentials'
    },
    {
      number: 3,
      title: 'Launch GPU',
      code: 'zetacube launch --gpu h100 --image pytorch/pytorch:latest',
      description: 'Start a GPU instance with your preferred configuration'
    }
  ]

  const docSections = [
    {
      title: 'Getting Started',
      items: ['Quick Start Guide', 'Installation', 'Authentication', 'First GPU Launch', 'Basic Concepts']
    },
    {
      title: 'Core Features',
      items: ['GPU Selection', 'Container Management', 'Storage & Volumes', 'Networking', 'Cost Optimization']
    },
    {
      title: 'API Reference',
      items: ['REST API', 'Python SDK', 'Node.js SDK', 'CLI Commands', 'Authentication']
    },
    {
      title: 'Advanced Topics',
      items: ['Multi-GPU Workloads', 'Auto-scaling', 'Provider Selection', 'Custom Images', 'Monitoring']
    },
    {
      title: 'Frameworks',
      items: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face', 'Ray']
    },
    {
      title: 'Resources',
      items: ['Tutorials', 'Best Practices', 'Troubleshooting', 'FAQ', 'Community Forum']
    }
  ]

  const codeExamples = [
    {
      title: 'Python SDK',
      language: 'Python',
      code: `from zetacube import Client

client = Client(api_key="your_api_key")

# Launch H100 GPU instance
instance = client.launch(
    gpu="h100",
    image="pytorch/pytorch:latest",
    command="python train.py"
)

print(f"Instance ID: {instance.id}")
print(f"Status: {instance.status}")`
    },
    {
      title: 'REST API',
      language: 'cURL',
      code: `curl -X POST https://api.zetacube.com/v1/instances \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "gpu": "h100",
    "image": "pytorch/pytorch:latest",
    "command": "python train.py"
  }'`
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Documentation</h1>
          <p className="hero-subtitle">
            Everything you need to get started with ZetaCube GPU. From quick start guides
            to advanced topics and API references.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Quick Start</h2>
        <div className="workflow-steps">
          {quickStartSteps.map((step, i) => (
            <div key={i} className="workflow-step">
              <div className="step-number">{step.number}</div>
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
        <h2 className="section-title">Documentation Sections</h2>
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
        <h2 className="section-title">Code Examples</h2>
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
            <h2 className="section-title">Need help?</h2>
            <p className="text-muted">
              Our documentation is continuously updated with new guides, tutorials, and examples.
              Can't find what you're looking for? Reach out to our support team or join the
              community forum.
            </p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Community Forum</h4>
              <p className="text-muted">Get help from other developers and share your experiences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Support Tickets</h4>
              <p className="text-muted">Direct assistance from our technical support team</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Discord Community</h4>
              <p className="text-muted">Real-time chat with developers and ZetaCube engineers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Documentation
