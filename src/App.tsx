import './App.css'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">Sweetbooth</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Sweetbooth</h1>
          <p className="hero-subtitle">Delicious treats for every occasion</p>
          <button className="hero-btn">Explore Our Gallery</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1550617931-e17a7b70daa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sweet treats" />
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Our Sweet Collection</h2>
        <div className="marquee">
          <div className="marquee-content">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cupcakes" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Macarons" />
            <img src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Donuts" />
            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cake" />
            <img src="https://images.unsplash.com/photo-1549007908-1c3d3aa1fde8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cookies" />
            <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Ice cream" />
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cupcakes" />
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Macarons" />
            <img src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Donuts" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Sweetbooth. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
