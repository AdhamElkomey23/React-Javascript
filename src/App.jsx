import './App.css'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">PixelCraft</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>We Design Websites That Work</h1>
        <p>Simple, clean, and effective web solutions for your business</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Design</h3>
            <p>Custom designs tailored to your brand identity</p>
          </div>
          <div className="service-card">
            <h3>Development</h3>
            <p>Fast, responsive websites built with modern tech</p>
          </div>
          <div className="service-card">
            <h3>SEO</h3>
            <p>Get found online with search optimization</p>
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <h2>Recent Work</h2>
        <div className="work-grid">
          <div className="work-item">Project 1</div>
          <div className="work-item">Project 2</div>
          <div className="work-item">Project 3</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's Talk</h2>
        <p>Ready to start your project? Get in touch today.</p>
        <button className="cta-button">Contact Us</button>
      </section>

      <footer className="footer">
        <p>PixelCraft Web Agency - 2025</p>
      </footer>
    </div>
  )
}
