import { useState, useEffect, useRef } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const marqueeRef = useRef<HTMLDivElement>(null);

  const galleryImages = Array.from({ length: 29 }, (_, i) => `images/${String(i + 1).padStart(2, '0')}.jpg`);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === 'ArrowLeft') {
          showPreviousImage();
        } else if (e.key === 'ArrowRight') {
          showNextImage();
        } else if (e.key === 'Escape') {
          setLightboxImage(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, currentImageIndex]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxImage(galleryImages[index]);
  };

  const showPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(galleryImages[newIndex]);
  };

  const showNextImage = () => {
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(galleryImages[newIndex]);
  };

  const scrollToContact = (pkg = '') => {
    if (pkg) setSelectedPackage(pkg);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollMarqueeLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollMarqueeRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <img src="/logo.svg" alt="Sweetbooth" className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }} />
          <ul className="nav-links">
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">A photo experience that takes the cake.</h1>
          <p className="hero-subtitle">Elevate your Greater Vancouver event with SweetBooth’s open-air photo booth rental experiences.</p>
          <button className="hero-btn" onClick={() => scrollToContact()}>BOOK MY SWEETBOOTH</button>
        </div>
        <div className="hero-image">
          <img src="images/booth.jpg" alt="Sweet treats" />
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Our Samples</h2>
        <div className="marquee-container">
          <button className="marquee-nav marquee-nav-left" onClick={scrollMarqueeLeft} aria-label="Scroll left">
            ‹
          </button>
          <div 
            className="marquee" 
            ref={marqueeRef}
            onMouseEnter={() => setIsMarqueeHovered(true)}
            onMouseLeave={() => setIsMarqueeHovered(false)}
          >
            <div className="marquee-content" style={{ animationPlayState: isMarqueeHovered ? 'paused' : 'running' }}>
              {galleryImages.map((src, i) => (
                <img key={i} src={src} alt={`Gallery ${i + 1}`} onClick={() => openLightbox(i)} style={{ cursor: 'pointer' }} />
              ))}
              {galleryImages.map((src, i) => (
                <img key={`dup-${i}`} src={src} alt="" aria-hidden="true" onClick={() => openLightbox(i)} style={{ cursor: 'pointer' }} />
              ))}
            </div>
        </div>
        <button className="marquee-nav marquee-nav-right" onClick={scrollMarqueeRight} aria-label="Scroll right">
          ›
        </button>
      </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <h2 className="section-title">Our Packages</h2>
        <p className="pricing-subtitle">Everything you need to make your event unforgettable.</p>
        <div className="pricing-cards">

          {/* Base Rate */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-card-name">Base Rate</h3>
              <div className="pricing-card-price">
                <span className="pricing-amount">$500</span>
                <span className="pricing-duration">2 hours</span>
              </div>
              <p className="pricing-card-note">+$250 per add'l hour</p>
            </div>
            <div className="pricing-card-body">
              <p className="pricing-section-label">Includes</p>
              <ul className="pricing-list">
                <li>Unlimited photo sessions, 1 printout (4×6") per session</li>
                <li>Online album</li>
                <li>Choice of 1 photo layout</li>
                <li>Custom text</li>
                <li>Standard white backdrop</li>
                <li>Classy minimal look (no props)</li>
                <li>Choice of full colour or black &amp; white photos</li>
                <li>Professional attendee + setup &amp; takedown</li>
              </ul>
              <p className="pricing-section-label">Add-ons</p>
              <ul className="pricing-addons">
                <li><span className="addon-price">+$50</span> Standard props</li>
                <li><span className="addon-price">+$50</span> Per additional photo layout option</li>
                <li><span className="addon-price">+$75/hr</span> Idle time</li>
              </ul>
            </div>
            <button className="pricing-btn" onClick={() => scrollToContact('base')}>Book This Package</button>
          </div>

          {/* Sweet Package */}
          <div className="pricing-card pricing-card-featured">
            <div className="pricing-card-badge">Most Popular</div>
            <div className="pricing-card-header">
              <h3 className="pricing-card-name">The Sweet Package</h3>
              <div className="pricing-card-price">
                <span className="pricing-amount">$1,000</span>
                <span className="pricing-duration">4h open + up to 2h idle</span>
              </div>
              <p className="pricing-card-note">2 hours idle time included complimentary</p>
            </div>
            <div className="pricing-card-body">
              <p className="pricing-section-label">Includes</p>
              <ul className="pricing-list">
                <li>Full event coverage (up to 4 hours open)</li>
                <li>Unlimited photo sessions, unlimited prints per session</li>
                <li>Option for complimentary additional photo layout</li>
                <li>Online album</li>
                <li>Custom text</li>
                <li>Standard white backdrop</li>
                <li>Classy minimal look (no props)</li>
                <li>Choice of full colour or black &amp; white photos</li>
                <li>Professional attendees + setup &amp; takedown</li>
              </ul>
              <p className="pricing-section-label">Add-ons</p>
              <ul className="pricing-addons">
                <li><span className="addon-price">+$50</span> Standard props</li>
                <li><span className="addon-price">+$50</span> Per additional photo layout option</li>
                <li><span className="addon-price">+$250/hr</span> Per additional hour open</li>
              </ul>
            </div>
            <button className="pricing-btn pricing-btn-featured" onClick={() => scrollToContact('sweet')}>Book This Package</button>
          </div>

        </div>
        <p className="pricing-footnote">Minimum 2-hour booking. 10'×10'×10' space with available outlet required. Access to location 30 mins before &amp; after booking time for setup/takedown.</p>
      </section>

      {/* Contact Form */}
      <ContactForm selectedPackage={selectedPackage} />

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
            <button className="lightbox-prev" onClick={showPreviousImage} aria-label="Previous image">‹</button>
            <button className="lightbox-next" onClick={showNextImage} aria-label="Next image">›</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
