import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <img src="/logo.svg" alt="Sweetbooth" className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }} />
          <ul className="nav-links">
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">A photo experience that takes the cake.</h1>
          <p className="hero-subtitle">Elevate your Greater Vancouver event with SweetBooth’s open-air photo booth rental experiences.</p>
          <button className="hero-btn" onClick={scrollToContact}>BOOK MY SWEETBOOTH</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sweet treats" />
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Our Samples</h2>
        <div className="marquee">
          <div className="marquee-content">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cupcakes" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Macarons" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Donuts" />
            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cake" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cookies" />
            <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Ice cream" />
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cupcakes" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Macarons" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Donuts" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Sweetbooth. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </>
  )
}

export default App
