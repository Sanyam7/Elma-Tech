import React from 'react'

function Privacy() {
  return (
    <main>
      <section className="subpage">
        <div className="container">
          <header style={{ marginBottom: '2rem', textAlign: 'center', marginTop: '2rem' }}>
            <h1>Privacy Policy</h1>
            <p>Your privacy and trust are core to ELMA. This page explains what we collect, why we collect it, and how we protect it.</p>
          </header>

          <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>What We Collect</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                <li>Account details you provide (e.g., email) for communication and waitlist purposes.</li>
                <li>Basic usage information to improve features and reliability.</li>
                <li>Optional inputs you submit inside ELMA (e.g., mood logs) — encrypted at rest and handled with care.</li>
              </ul>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>How We Use Data</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                <li>To deliver core experiences and improve app performance.</li>
                <li>To communicate service updates you opt into.</li>
                <li>We do not sell personal data. Limited sharing may occur with trusted processors strictly to provide the service.</li>
              </ul>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Your Choices</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                <li>Request data access or deletion by emailing <a href="mailto:support@elma.ltd">support@elma.ltd</a>.</li>
                <li>Opt out of non-essential communications anytime.</li>
              </ul>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Security</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>We use modern security practices, encryption at rest for sensitive entries, and restricted access controls. If a security issue is discovered, we act promptly.</p>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Contact</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Questions about privacy? Reach us at <a href="mailto:support@elma.ltd">support@elma.ltd</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Privacy