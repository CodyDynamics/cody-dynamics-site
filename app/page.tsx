export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Technology Consulting & Platform Engineering</div>
            <h1>Fix Your Systems. Scale Your Business.</h1>
            <p className="hero-copy">
              We design and build scalable backend platforms, automation, and data
              systems that eliminate inefficiencies and give you full control of
              your operations.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Schedule a Consultation
              </a>
              <a className="btn btn-secondary" href="#services">
                View Services
              </a>
            </div>

            <div className="trust-row">
              <span>Backend Platforms</span>
              <span>System Integration</span>
              <span>Data & Analytics</span>
              <span>Automation</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="metric-card">
              <div className="metric-label">What we solve</div>
              <div className="metric-value">Disconnected systems</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">What we improve</div>
              <div className="metric-value">Operational efficiency</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">What you gain</div>
              <div className="metric-value">Scalable infrastructure</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container narrow center">
          <div className="section-tag">The Problem</div>
          <h2>Your Technology Is Holding You Back</h2>
          <p className="section-copy">
            Too many companies are running on fragmented tools, manual workflows,
            and disconnected data. That slows teams down, increases overhead, and
            makes it harder to scale.
          </p>

          <div className="problem-grid">
            <div className="problem-item">Disconnected systems</div>
            <div className="problem-item">Manual workflows</div>
            <div className="problem-item">Limited operational visibility</div>
            <div className="problem-item">Too many tools that do not integrate</div>
            <div className="problem-item">Slow reporting and decision-making</div>
            <div className="problem-item">Inefficient processes that create waste</div>
          </div>

          <p className="callout">
            This is not just a software issue. It is a <strong>system design problem</strong>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="section-tag">The Solution</div>
            <h2>We Build the System That Fixes Everything Else</h2>
          </div>
          <div>
            <p className="section-copy left">
              Cody Dynamics designs unified platforms that connect your backend
              systems, data, and workflows into one scalable architecture — so your
              business runs faster, cleaner, and with full visibility.
            </p>
            <p className="section-copy left">
              We focus on practical, business-aligned technology that improves
              operations, reduces overhead, and creates a foundation for long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section section-muted">
        <div className="container">
          <div className="center narrow">
            <div className="section-tag">Services</div>
            <h2>What We Do</h2>
            <p className="section-copy">
              We help organizations modernize the foundation of how they operate.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <h3>Backend Platform Development</h3>
              <p>
                Scalable, secure systems built to support growth, performance, and reliability.
              </p>
            </article>

            <article className="card">
              <h3>Data & Analytics Platforms</h3>
              <p>
                Centralized reporting and data visibility that support faster, better decisions.
              </p>
            </article>

            <article className="card">
              <h3>AI & Automation Solutions</h3>
              <p>
                Intelligent automation that reduces manual work and improves operational efficiency.
              </p>
            </article>

            <article className="card">
              <h3>System Integration</h3>
              <p>
                Connected tools, workflows, and data flows that eliminate silos across the business.
              </p>
            </article>

            <article className="card">
              <h3>Cloud Architecture</h3>
              <p>
                Cloud-native foundations designed for flexibility, security, and scale.
              </p>
            </article>

            <article className="card">
              <h3>Technology Strategy</h3>
              <p>
                Clear architecture and execution planning aligned to business outcomes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center narrow">
            <div className="section-tag">Our Approach</div>
            <h2>A Structured Process That Delivers Results</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <h3>Assess</h3>
              <p>Evaluate current systems, workflows, risks, and technical gaps.</p>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <h3>Design</h3>
              <p>Create a scalable architecture aligned with operational goals.</p>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <h3>Build</h3>
              <p>Develop the platform, integrations, and automation needed to execute.</p>
            </div>
            <div className="step">
              <span className="step-number">04</span>
              <h3>Optimize</h3>
              <p>Improve visibility, performance, and scalability over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container two-col">
          <div>
            <div className="section-tag">Why Cody Dynamics</div>
            <h2>Technology That Supports the Business, Not Just the Stack</h2>
          </div>

          <div className="bullets">
            <div className="bullet">We focus on backend and infrastructure where the biggest problems usually exist.</div>
            <div className="bullet">We connect business operations with practical technical execution.</div>
            <div className="bullet">We build scalable systems, not short-term patches.</div>
            <div className="bullet">We design around performance, visibility, and long-term growth.</div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="center narrow">
            <div className="section-tag">Outcomes</div>
            <h2>What You Gain</h2>
          </div>

          <div className="outcomes">
            <div className="outcome">Reduced operational overhead</div>
            <div className="outcome">Faster workflows and execution</div>
            <div className="outcome">Better visibility into performance</div>
            <div className="outcome">Stronger decision-making with better data</div>
            <div className="outcome">Scalable systems that support growth</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section cta">
        <div className="container center narrow">
          <div className="section-tag">Let’s Talk</div>
          <h2>Let’s Build the Right Foundation</h2>
          <p className="section-copy">
            If your systems are fragmented, slow, or difficult to scale, we can help
            you redesign and build a platform that actually works.
          </p>

          <div className="hero-actions center-actions">
            <a className="btn btn-primary" href="mailto:you@example.com">
              Email Us
            </a>
            <a className="btn btn-secondary" href="https://calendly.com/your-link">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-brand">Cody Dynamics</div>
            <div className="footer-text">Technology Consulting & Platform Engineering</div>
          </div>
          <div className="footer-text">Texas</div>
        </div>
      </footer>
    </main>
  );
}