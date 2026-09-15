import { useState, useEffect } from 'react'

function ContactForm({ selectedPackage = '' }: { selectedPackage?: string }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    package: '',
    hearAboutUs: '',
    message: ''
  })

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }))
    }
  }, [selectedPackage])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusModal, setStatusModal] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setStatusModal(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xpqdlkkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          package: formData.package,
          hearAboutUs: formData.hearAboutUs,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatusModal({ type: 'success', message: "Thank you for your message! We'll get back to you soon." })
        setFormData({ firstName: '', lastName: '', email: '', package: '', hearAboutUs: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatusModal({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-row">
        <form className="contact-form-col" onSubmit={handleSubmit}>
          <p className="eyebrow">Start your booking</p>
          <h2 className="section-title contact-heading">Let's <em>Celebrate</em></h2>
          <p className="section-note contact-note" style={{ maxWidth: 'none' }}>Tell us the basics — we'll follow up within a day with availability and next steps.</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cf-firstName">First Name</label>
              <input
                id="cf-firstName"
                type="text"
                name="firstName"
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cf-lastName">Last Name</label>
              <input
                id="cf-lastName"
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              type="email"
              name="email"
              placeholder="jane@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cf-package">Which package would you like to book?</label>
            <select
              id="cf-package"
              name="package"
              value={formData.package}
              onChange={(e) => setFormData({ ...formData, package: e.target.value })}
              className="form-select"
            >
              <option value="" disabled>Select a package</option>
              <option value="base">Base Package</option>
              <option value="sweet">Sweet Package</option>
              <option value="unsure">Not Sure Yet</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cf-hearAboutUs">How did you hear about us?</label>
            <input
              id="cf-hearAboutUs"
              type="text"
              name="hearAboutUs"
              placeholder="Instagram, referral, Google..."
              value={formData.hearAboutUs}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cf-message">Tell us about your event</label>
            <textarea
              id="cf-message"
              name="message"
              placeholder="Date, time, type of event, and location..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>

        <div className="contact-photo">
          <img src="images/contact-img.png" alt="SweetBooth event moment" />
        </div>
      </div>

      {statusModal && (
        <div className="status-modal" onClick={(e) => { if (e.target === e.currentTarget) setStatusModal(null); }}>
          <div className={`status-modal-card ${statusModal.type === 'error' ? 'is-error' : ''}`}>
            <p className="eyebrow">{statusModal.type === 'success' ? 'Booking request' : 'Something went wrong'}</p>
            <h3 className="status-modal-title">
              {statusModal.type === 'success' ? <>Message <em>sent!</em></> : <>Not quite <em>sent.</em></>}
            </h3>
            <p className="status-modal-message">{statusModal.message}</p>
            <button className="status-modal-btn" onClick={() => setStatusModal(null)}>Got It</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactForm
