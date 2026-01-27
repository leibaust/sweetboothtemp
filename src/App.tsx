import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
          <img src="images/booth.jpg" alt="Sweet treats" />
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Our Samples</h2>
        <div className="marquee">
          <div className="marquee-content">
            <img src="images/01.jpg" alt="Gallery 1" onClick={() => setLightboxImage('images/01.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/02.jpg" alt="Gallery 2" onClick={() => setLightboxImage('images/02.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/03.jpg" alt="Gallery 3" onClick={() => setLightboxImage('images/03.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/04.jpg" alt="Gallery 4" onClick={() => setLightboxImage('images/04.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/05.jpg" alt="Gallery 5" onClick={() => setLightboxImage('images/05.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/06.jpg" alt="Gallery 6" onClick={() => setLightboxImage('images/06.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/07.jpg" alt="Gallery 7" onClick={() => setLightboxImage('images/07.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/08.jpg" alt="Gallery 8" onClick={() => setLightboxImage('images/08.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/09.jpg" alt="Gallery 9" onClick={() => setLightboxImage('images/09.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/10.jpg" alt="Gallery 10" onClick={() => setLightboxImage('images/10.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/11.jpg" alt="Gallery 11" onClick={() => setLightboxImage('images/11.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/12.jpg" alt="Gallery 12" onClick={() => setLightboxImage('images/12.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/13.jpg" alt="Gallery 13" onClick={() => setLightboxImage('images/13.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/14.jpg" alt="Gallery 14" onClick={() => setLightboxImage('images/14.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/15.jpg" alt="Gallery 15" onClick={() => setLightboxImage('images/15.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/16.jpg" alt="Gallery 16" onClick={() => setLightboxImage('images/16.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/17.jpg" alt="Gallery 17" onClick={() => setLightboxImage('images/17.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/18.jpg" alt="Gallery 18" onClick={() => setLightboxImage('images/18.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/19.jpg" alt="Gallery 19" onClick={() => setLightboxImage('images/19.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/20.jpg" alt="Gallery 20" onClick={() => setLightboxImage('images/20.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/21.jpg" alt="Gallery 21" onClick={() => setLightboxImage('images/21.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/22.jpg" alt="Gallery 22" onClick={() => setLightboxImage('images/22.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/23.jpg" alt="Gallery 23" onClick={() => setLightboxImage('images/23.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/24.jpg" alt="Gallery 24" onClick={() => setLightboxImage('images/24.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/25.jpg" alt="Gallery 25" onClick={() => setLightboxImage('images/25.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/26.jpg" alt="Gallery 26" onClick={() => setLightboxImage('images/26.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/27.jpg" alt="Gallery 27" onClick={() => setLightboxImage('images/27.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/28.jpg" alt="Gallery 28" onClick={() => setLightboxImage('images/28.jpg')} style={{ cursor: 'pointer' }} />
            <img src="images/29.jpg" alt="Gallery 29" onClick={() => setLightboxImage('images/29.jpg')} style={{ cursor: 'pointer' }} />
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Enlarged view" />
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
