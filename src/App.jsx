import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    services: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Lexievo LPO</h2>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Efficient Legal Support, Delivered with Precision.</h1>
          <p className="hero-subtitle">
            Outsourced legal services tailored for law firms and legal departments around the world.
          </p>
          <div className="hero-intro">
            <p>
              Lexievo LPO is a trusted partner for law firms and corporate legal teams looking to optimize their operations. 
              We deliver cost-effective, accurate, and confidential legal support across estate planning, litigation, immigration, and more.
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#contact" className="btn btn-secondary">Request Free Consultation</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" alt="Legal professionals" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Core Legal Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop" alt="Estate Planning" />
              <h3>Estate Planning</h3>
              <p>Comprehensive estate planning documents and compliance</p>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop" alt="Probate" />
              <h3>Probate</h3>
              <p>Streamlined estate administration and court filings</p>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop" alt="Civil Litigation" />
              <h3>Civil Litigation</h3>
              <p>Complete litigation support from research to trial prep</p>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=300&h=200&fit=crop" alt="Immigration" />
              <h3>Immigration</h3>
              <p>Visa petitions, forms, and compliance documentation</p>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop" alt="Bankruptcy" />
              <h3>Bankruptcy</h3>
              <p>Chapter 7 & 13 filing support and documentation</p>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop" alt="Personal Injury" />
              <h3>Personal Injury</h3>
              <p>Demand letters, records organization, settlement docs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lexievo */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Lexievo LPO?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>Lower Legal Costs</h3>
              <p>Save up to 60% in operational costs</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">👥</div>
              <h3>Experienced Legal Team</h3>
              <p>Qualified professionals with international experience</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🔒</div>
              <h3>100% Confidentiality</h3>
              <p>Secure processes and strict non-disclosure</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">⚡</div>
              <h3>Quick Turnaround</h3>
              <p>24/7 support with fast delivery times</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📈</div>
              <h3>Scalable Support</h3>
              <p>Grow your practice without expanding overhead</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Lexievo LPO</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Lexievo LPO was founded with a vision to revolutionize the way legal services are delivered. 
                We believe law firms should focus on legal strategy and client advocacy—not paperwork and admin.
              </p>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional legal support services with precision, reliability, and cost-efficiency 
                for legal professionals worldwide.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>Integrity</li>
                <li>Accuracy</li>
                <li>Confidentiality</li>
                <li>Efficiency</li>
                <li>Client-Centricity</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop" alt="Legal team" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="services-detailed">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-detail">
            <h3>⚖️ Estate Planning Support</h3>
            <p><strong>Secure your clients' futures with precise legal documentation.</strong></p>
            <p>
              We assist attorneys by preparing a full range of estate planning documents, including wills, trusts, 
              powers of attorney, healthcare directives, and more. Our team ensures all documents meet jurisdictional 
              requirements and are delivered promptly and error-free.
            </p>
            <ul>
              <li>✅ Ideal for estate planning firms, elder law attorneys, and solo practitioners</li>
              <li>✅ Saves time and reduces internal drafting workload</li>
            </ul>
          </div>

          <div className="service-detail">
            <h3>⚖️ Probate Assistance</h3>
            <p><strong>Simplify estate administration and reduce delays.</strong></p>
            <p>
              Our probate support team manages the preparation and filing of court documents, assembles asset and 
              liability inventories, and assists with communication templates for beneficiaries and creditors.
            </p>
            <ul>
              <li>✅ Supports probate attorneys, paralegals, and estate law firms</li>
              <li>✅ Reduces administrative pressure and boosts client satisfaction</li>
            </ul>
          </div>

          <div className="service-detail">
            <h3>⚖️ Civil Litigation Support</h3>
            <p><strong>Power your litigation strategy with strong backend support.</strong></p>
            <p>
              From legal research to drafting complaints, answers, discovery documents, motions, and trial preparation, 
              we provide reliable support for all stages of civil litigation.
            </p>
            <ul>
              <li>✅ Serves litigation attorneys, solo litigators, and boutique firms</li>
              <li>✅ Enables faster, more effective case preparation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Free Consultation</h3>
              <p>Discuss your legal support needs and pain points</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Custom Proposal</h3>
              <p>Receive a tailored scope of work and pricing plan</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Onboarding</h3>
              <p>Set up secure access, define workflows, assign points of contact</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Work Execution</h3>
              <p>Tasks completed by our legal professionals and delivered on time</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Ongoing Collaboration</h3>
              <p>Regular updates, performance check-ins, and long-term partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get Started Today</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="organization">Law Firm or Organization</label>
              <input 
                type="text" 
                id="organization" 
                name="organization" 
                value={formData.organization}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="services">Services Interested In</label>
              <select 
                id="services" 
                name="services"
                value={formData.services}
                onChange={handleInputChange}
              >
                <option value="">Select a service</option>
                <option value="estate-planning">Estate Planning</option>
                <option value="probate">Probate</option>
                <option value="litigation">Civil Litigation</option>
                <option value="immigration">Immigration</option>
                <option value="bankruptcy">Bankruptcy</option>
                <option value="personal-injury">Personal Injury</option>
                <option value="custom">Custom Legal Support</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Lexievo LPO</h3>
              <p>Efficient Legal Support, Delivered with Precision.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Estate Planning</a></li>
                <li><a href="#services">Probate</a></li>
                <li><a href="#services">Civil Litigation</a></li>
                <li><a href="#services">Immigration</a></li>
                <li><a href="#services">Bankruptcy</a></li>
                <li><a href="#services">Personal Injury</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 info@lexievolpo.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🌍 Available 24/7</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Lexievo LPO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App