import { useState, useEffect, useRef } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
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

  const scrollToContact = () => {
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
            <img src="images/01.jpg" alt="Gallery 1" onClick={() => openLightbox(0)} style={{ cursor: 'pointer' }} />
            <img src="images/02.jpg" alt="Gallery 2" onClick={() => openLightbox(1)} style={{ cursor: 'pointer' }} />
            <img src="images/03.jpg" alt="Gallery 3" onClick={() => openLightbox(2)} style={{ cursor: 'pointer' }} />
            <img src="images/04.jpg" alt="Gallery 4" onClick={() => openLightbox(3)} style={{ cursor: 'pointer' }} />
            <img src="images/05.jpg" alt="Gallery 5" onClick={() => openLightbox(4)} style={{ cursor: 'pointer' }} />
            <img src="images/06.jpg" alt="Gallery 6" onClick={() => openLightbox(5)} style={{ cursor: 'pointer' }} />
            <img src="images/07.jpg" alt="Gallery 7" onClick={() => openLightbox(6)} style={{ cursor: 'pointer' }} />
            <img src="images/08.jpg" alt="Gallery 8" onClick={() => openLightbox(7)} style={{ cursor: 'pointer' }} />
            <img src="images/09.jpg" alt="Gallery 9" onClick={() => openLightbox(8)} style={{ cursor: 'pointer' }} />
            <img src="images/10.jpg" alt="Gallery 10" onClick={() => openLightbox(9)} style={{ cursor: 'pointer' }} />
            <img src="images/11.jpg" alt="Gallery 11" onClick={() => openLightbox(10)} style={{ cursor: 'pointer' }} />
            <img src="images/12.jpg" alt="Gallery 12" onClick={() => openLightbox(11)} style={{ cursor: 'pointer' }} />
            <img src="images/13.jpg" alt="Gallery 13" onClick={() => openLightbox(12)} style={{ cursor: 'pointer' }} />
            <img src="images/14.jpg" alt="Gallery 14" onClick={() => openLightbox(13)} style={{ cursor: 'pointer' }} />
            <img src="images/15.jpg" alt="Gallery 15" onClick={() => openLightbox(14)} style={{ cursor: 'pointer' }} />
            <img src="images/16.jpg" alt="Gallery 16" onClick={() => openLightbox(15)} style={{ cursor: 'pointer' }} />
            <img src="images/17.jpg" alt="Gallery 17" onClick={() => openLightbox(16)} style={{ cursor: 'pointer' }} />
            <img src="images/18.jpg" alt="Gallery 18" onClick={() => openLightbox(17)} style={{ cursor: 'pointer' }} />
            <img src="images/19.jpg" alt="Gallery 19" onClick={() => openLightbox(18)} style={{ cursor: 'pointer' }} />
            <img src="images/20.jpg" alt="Gallery 20" onClick={() => openLightbox(19)} style={{ cursor: 'pointer' }} />
            <img src="images/21.jpg" alt="Gallery 21" onClick={() => openLightbox(20)} style={{ cursor: 'pointer' }} />
            <img src="images/22.jpg" alt="Gallery 22" onClick={() => openLightbox(21)} style={{ cursor: 'pointer' }} />
            <img src="images/23.jpg" alt="Gallery 23" onClick={() => openLightbox(22)} style={{ cursor: 'pointer' }} />
            <img src="images/24.jpg" alt="Gallery 24" onClick={() => openLightbox(23)} style={{ cursor: 'pointer' }} />
            <img src="images/25.jpg" alt="Gallery 25" onClick={() => openLightbox(24)} style={{ cursor: 'pointer' }} />
            <img src="images/26.jpg" alt="Gallery 26" onClick={() => openLightbox(25)} style={{ cursor: 'pointer' }} />
            <img src="images/27.jpg" alt="Gallery 27" onClick={() => openLightbox(26)} style={{ cursor: 'pointer' }} />
            <img src="images/28.jpg" alt="Gallery 28" onClick={() => openLightbox(27)} style={{ cursor: 'pointer' }} />
            <img src="images/29.jpg" alt="Gallery 29" onClick={() => openLightbox(28)} style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <button className="marquee-nav marquee-nav-right" onClick={scrollMarqueeRight} aria-label="Scroll right">
          ›
        </button>
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
            <button className="lightbox-prev" onClick={showPreviousImage} aria-label="Previous image">‹</button>
            <button className="lightbox-next" onClick={showNextImage} aria-label="Next image">›</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
