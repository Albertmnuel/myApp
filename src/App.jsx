import React from 'react';

// Inline styles for simplicity so you can see it working instantly
const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '20px 50px', background: '#111827', color: 'white', alignItems: 'center' },
  logo: { fontSize: '24px', fontWeight: 'bold' },
  navLinks: { listStyle: 'none', display: 'flex', gap: '20px' },
  hero: { textAlign: 'center', padding: '100px 20px', background: '#f3f4f6', color: '#111827' },
  ctaButton: { background: '#134B70', color: 'white', border: 'none', padding: '12px 24px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' },
  features: { display: 'flex', justifyContent: 'space-around', padding: '50px 20px', background: 'white' },
  card: { border: '1px solid #e5e7eb', padding: '20px', borderRadius: '8px', width: '25%', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' },
  footer: { textAlign: 'center', padding: '20px', background: '#111827', color: '#9ca3af', fontSize: '14px' }
};

function App() {
  return (
    <div>
      {/* 1. Header/Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>AlbertDev</div>
        <ul style={styles.navLinks}>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* 2. Hero Section (Main Banner) */}
      <header style={styles.hero}>
        <h1>Empowering the Next Generation of Coders</h1>
        <p style={{ maxWidth: '600px', margin: '10px auto', color: '#4b5563' }}>
          Discover interactive modules built to simplify complex programming principles from scratch.
        </p>
        <button style={styles.ctaButton}>Get Started Today</button>
      </header>

      {/* 3. Features Section */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Interactive UI</h3>
          <p>Sleek and highly responsive dashboards built for real-time tracking.</p>
        </div>
        <div style={styles.card}>
          <h3>Secure Architecture</h3>
          <p>Fully encapsulated backend systems protecting data integrity.</p>
        </div>
        <div style={styles.card}>
          <h3>Cloud Sync</h3>
          <p>Instantly deploy and update resources directly across the network.</p>
        </div>
      </section>

      {/* 4. Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AlbertDev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;