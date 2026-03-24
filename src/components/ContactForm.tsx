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
        alert('Thank you for your message! We\'ll get back to you soon.')
        setFormData({ firstName: '', lastName: '', email: '', package: '', hearAboutUs: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
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
      <div className="contact-container">
        <h2 className="section-title">Get the scoop.</h2>
        <p className="contact-subtitle">Get started on booking your SweetBooth by sending us some details about your event. We’ll let you know if we’re available and also send you some pricing details.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              name="package"
              value={formData.package}
              onChange={(e) => setFormData({ ...formData, package: e.target.value })}
              className="form-select"
            >
              <option value="" disabled>Which Package Would You Like To Book?</option>
              <option value="base">Base Package</option>
              <option value="sweet">Sweet Package</option>
              <option value="unsure">Not Sure Yet</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="hearAboutUs"
              placeholder="How did you hear about us?"
              value={formData.hearAboutUs}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your event or request. Some details that would be helpful are date, time, type of event, and location"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
