import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">Hillside Payments</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Payment Processing Made Simple</h1>
          <p>Accept credit cards, invoices, and online payments with confidence.</p>
          <button className="cta-button">Get Started Free</button>
        </section>

        <section id="features" className="features">
          <h2>Why Choose Hillside?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🔒 Secure & Compliant</h3>
              <p>PCI DSS Level 1 certified security to protect your business.</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Fast Settlements</h3>
              <p>Get paid in 24-48 hours with our express settlement options.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Detailed Analytics</h3>
              <p>Track sales, refunds, and customer insights in real-time.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Global Support</h3>
              <p>Accept payments from customers worldwide with multi-currency support.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <h2>Simple Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$0 + 2.9%</div>
              <p>Perfect for small businesses</p>
              <ul>
                <li>✓ Online payments</li>
                <li>✓ Basic reporting</li>
                <li>✓ Email support</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Professional</h3>
              <div className="price">$0 + 2.4%</div>
              <p>For growing businesses</p>
              <ul>
                <li>✓ Everything in Starter</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Phone support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <p>For high-volume merchants</p>
              <ul>
                <li>✓ Everything in Professional</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom integration</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a demo or have questions about our services.</p>
          <button className="cta-button">Contact Sales</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Hillside Payments. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
