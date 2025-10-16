import React from 'react'

function Terms() {
  return (
    <main>
      <section className="subpage">
        <div className="container">
          <header style={{ marginBottom: '2rem', textAlign: 'center', marginTop: '2rem' }}>
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully. By using ELMA, you agree to the following.</p>
          </header>

          <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Service Description</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>ELMA provides tools for emotional wellness and self-reflection. ELMA is not a substitute for medical advice, diagnosis, or emergency services.</p>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>User Responsibilities</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                <li>Use ELMA lawfully and respectfully.</li>
                <li>Do not attempt to misuse, reverse engineer, or disrupt the service.</li>
                <li>Maintain the confidentiality of your account details.</li>
              </ul>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Limitations</h3>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                <li>ELMA is provided “as is” without warranties.</li>
                <li>We are not liable for indirect or consequential damages.</li>
              </ul>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Privacy & Data</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Your use is subject to our <a href="/privacy" style={{ color: 'var(--elma-purple)' }}>Privacy Policy</a>. We collect and use data only to provide and improve the service.</p>
            </section>

            <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 16, padding: '1.5rem' }}>
              <h3>Contact</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>For questions about these terms, contact <a href="mailto:legal@elma.ltd">legal@elma.ltd</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terms