import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

const CURATED_GALLERY = [
  { crop: 'images/gallery-crop-01.png', full: 'images/16.jpg', tag: 'No. 01', label: 'Weddings' },
  { crop: 'images/gallery-crop-02.png', full: 'images/06.jpg', tag: 'No. 02', label: 'Receptions' },
  { crop: 'images/gallery-crop-03.jpg', full: 'images/12.jpg', tag: 'No. 03', label: 'Corporate' },
  { crop: 'images/gallery-crop-04.jpg', full: 'images/26.jpg', tag: 'No. 04', label: 'Birthdays' },
];

const FEATURED_NUMBERS = new Set(['16', '06', '12', '26']);
const MORE_SAMPLES = Array.from({ length: 29 }, (_, i) => String(i + 1).padStart(2, '0'))
  .filter((n) => !FEATURED_NUMBERS.has(n))
  .map((n) => `images/${n}.jpg`);

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [printLightbox, setPrintLightbox] = useState<string | null>(null);
  const [moreSamplesOpen, setMoreSamplesOpen] = useState(false);
  const [openAddons, setOpenAddons] = useState<{ base: boolean; sweet: boolean }>({ base: false, sweet: false });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPrintLightbox(null);
        setMoreSamplesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToContact = (pkg = '') => {
    if (pkg) setSelectedPackage(pkg);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAddon = (key: 'base' | 'sweet') => {
    setOpenAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Contact</a></li>
          </ul>
          <img src="/logo.svg" alt="Sweetbooth" className="logo" onClick={scrollToTop} />
          <button className="nav-book-btn" onClick={() => scrollToContact()}>Book Now</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Vancouver, BC · Est. 2023</p>
          <h1 className="hero-title">A photo experience<br />that <span className="script">takes the cake.</span></h1>
          <p className="hero-subtitle">Elevate your Greater Vancouver event with SweetBooth's open-air photo booth rental experiences.</p>
          <button className="hero-btn" onClick={() => scrollToContact()}>Book My SweetBooth</button>
        </div>
        <div className="hero-image">
          <div className="hero-frame">
            <span className="frame-tick tl"></span><span className="frame-tick tr"></span>
            <span className="frame-tick bl"></span><span className="frame-tick br"></span>
            <img src="images/booth.jpg" alt="SweetBooth open-air booth" />
            <div className="hero-frame-cap">
              <span className="frame-tag">SweetBooth · No. 01</span>
              <span className="frame-tag">Vintage Oak</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-inner"><div className="rule-double"></div></div>

      {/* Gallery */}
      <section className="section-shell" id="gallery">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <p className="eyebrow">From the booth</p>
              <h2 className="section-title">Our <em>Samples</em></h2>
            </div>
            <p className="section-note">A contact sheet, not a scrapbook — real strips from real Vancouver weddings and parties.</p>
          </div>
          <div className="gallery-strip">
            {CURATED_GALLERY.map((item) => (
              <div className="gallery-frame" key={item.tag} onClick={() => setPrintLightbox(item.full)}>
                <div className="gallery-frame-img"><img src={item.crop} alt={`Gallery sample — ${item.label}`} /></div>
                <div className="gallery-frame-foot">
                  <span className="frame-tag">{item.tag}</span>
                  <span className="frame-tag">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="more-toggle-wrap">
            <button className="more-toggle" onClick={() => setMoreSamplesOpen(true)}>
              <span className="plus">+</span> More Samples
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-shell" id="pricing">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <p className="eyebrow">Boutique packages</p>
              <h2 className="section-title">Our <em>Packages</em></h2>
            </div>
            <p className="section-note">Minimum 2-hour booking. Everything you need to make your event unforgettable.</p>
          </div>

          <div className="pricing-grid">

            {/* Base Rate */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-name">Base Rate</h3>
                <div className="pricing-card-price">
                  <span className="pricing-amount">$500</span>
                </div>
                <span className="pricing-duration">2 Hours · +$250 per add'l hour</span>
              </div>
              <div className="pricing-rule"></div>
              <div className="pricing-card-body">
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
              </div>
              <button className="pricing-btn" onClick={() => scrollToContact('base')}>Book This Package</button>
              <button className="addon-toggle" onClick={() => toggleAddon('base')}>
                <span className={`plus ${openAddons.base ? 'open' : ''}`}>+</span> Add Ons
              </button>
              <div className="addon-drawer" style={{ maxHeight: openAddons.base ? '260px' : '0px' }}>
                <div className="addon-drawer-inner">
                  <ul className="pricing-list">
                    <li>$50 — Standard props</li>
                    <li>$50 — Per additional photo layout option</li>
                    <li>$75/hr — Idle time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sweet Package */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-card-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3 className="pricing-card-name">The Sweet Package</h3>
                <div className="pricing-card-price">
                  <span className="pricing-amount">$1,000</span>
                </div>
                <span className="pricing-duration">4h open + up to 2h idle</span>
              </div>
              <div className="pricing-rule"></div>
              <div className="pricing-card-body">
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
              </div>
              <button className="pricing-btn" onClick={() => scrollToContact('sweet')}>Book This Package</button>
              <button className="addon-toggle" onClick={() => toggleAddon('sweet')}>
                <span className={`plus ${openAddons.sweet ? 'open' : ''}`}>+</span> Add Ons
              </button>
              <div className="addon-drawer" style={{ maxHeight: openAddons.sweet ? '260px' : '0px' }}>
                <div className="addon-drawer-inner">
                  <ul className="pricing-list">
                    <li>$50 — Standard props</li>
                    <li>$50 — Per additional photo layout option</li>
                    <li>$250/hr — Per additional hour open</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <p className="pricing-footnote">Minimum 2-hour booking. 10'×10'×10' space with available outlet required. Access to location 30 mins before &amp; after booking time for setup/takedown.</p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm selectedPackage={selectedPackage} />

      {/* Footer */}
      <footer className="footer">
        <img className="footer-logo" src="/logo.svg" alt="Sweetbooth" />
        <p className="footer-tag">You dessert the best!</p>
        <div className="rule-double footer-rule"></div>
        <p className="footer-fine">Vancouver, BC · Est. 2023</p>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}

      {/* More Samples Modal */}
      {moreSamplesOpen && (
        <div className="more-modal" onClick={(e) => { if (e.target === e.currentTarget) setMoreSamplesOpen(false); }}>
          <div className="more-modal-inner">
            <div className="more-modal-head">
              <p className="more-modal-title">More from the booth</p>
              <button className="more-modal-close" onClick={() => setMoreSamplesOpen(false)} aria-label="Close">&times;</button>
            </div>
            <div className="more-grid">
              {MORE_SAMPLES.map((src) => (
                <img key={src} src={src} alt="SweetBooth sample photo" onClick={() => setPrintLightbox(src)} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Print Lightbox */}
      {printLightbox && (
        <div className="print-lightbox" onClick={(e) => { if (e.target === e.currentTarget) setPrintLightbox(null); }}>
          <div className="print-lightbox-inner">
            <img src={printLightbox} alt="Full photobooth print" />
            <p className="print-lightbox-cap">The original print — straight off the booth</p>
          </div>
          <button className="print-lightbox-close" onClick={() => setPrintLightbox(null)} aria-label="Close">&times;</button>
        </div>
      )}
    </>
  )
}

export default App
