import React, { useState } from 'react'
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    services: '',
    message: ''
  })


  const [currentView, setCurrentView] = useState('home'); // 'home', 'blog', 'blog-detail'
  const [selectedBlogSlug, setSelectedBlogSlug] = useState(null);
  
  // Handle blog navigation
  const handleBlogClick = () => {
    setCurrentView('blog');
    window.location.hash = 'blog';
  };
  
  const handlePostClick = (slug) => {
    setSelectedBlogSlug(slug);
    setCurrentView('blog-detail');
  };
  
  const handleBackToBlog = () => {
    setCurrentView('blog');
    setSelectedBlogSlug(null);
  };
  
  const handleHomeClick = () => {
    setCurrentView('home');
    window.location.hash = '';
  };
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
    
    <div className="min-h-screen bg-white">
      {currentView === 'blog' && (
      <BlogList onPostClick={handlePostClick} />
    )}
    {currentView === 'blog-detail' && (
      <BlogDetail 
        slug={selectedBlogSlug} 
        onBackClick={handleBackToBlog}
        onPostClick={handlePostClick}
      />
    )}
      {currentView === 'home' && (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-5">
          <div className="flex justify-between items-center py-2">
          <img 
              src="/LexievoLPO.png" 
              alt="Lexievo LPO" 
              className="h-10 md:h-16 w-auto brightness-0 saturate-100"
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={handleHomeClick} className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Home</button>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">How It Works</a>
              <button onClick={handleBlogClick} className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Blog</button>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-blue-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-blue-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
                <span className={`w-5 h-0.5 bg-blue-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 lg:pt-24 py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Efficient Legal Support, 
                <span className="text-yellow-400">Delivered with Precision.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Outsourced legal services tailored for law firms and legal departments around the world.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-lg text-blue-50 leading-relaxed">
                  Lexievo LPO is a trusted partner for law firms and corporate legal teams looking to optimize their operations. 
                  We deliver cost-effective, accurate, and confidential legal support across estate planning, litigation, immigration, and more.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 text-center transform hover:scale-105">
                  Get Started
                </a>
                <a href="#contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center transform hover:scale-105">
                  Request Free Consultation
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80" 
                  alt="Legal document processing and outsourcing" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Our Core Legal Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Comprehensive legal support across multiple practice areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop",
                title: "Estate Planning",
                description: "Comprehensive estate planning documents and compliance"
              },
              {
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop",
                title: "Probate",
                description: "Streamlined estate administration and court filings"
              },
              {
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
                title: "Civil Litigation",
                description: "Complete litigation support from research to trial prep"
              },
              {
                image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=300&h=200&fit=crop",
                title: "Immigration",
                description: "Visa petitions, forms, and compliance documentation"
              },
              {
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
                title: "Bankruptcy",
                description: "Chapter 7 & 13 filing support and documentation"
              },
              {
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
                title: "Personal Injury",
                description: "Demand letters, records organization, settlement docs"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lexievo */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Lexievo LPO?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Experience the difference of working with true legal professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Lower Legal Costs",
                description: "Save up to 60% in operational costs"
              },
              {
                icon: "👥",
                title: "Experienced Legal Team",
                description: "Qualified professionals with international experience"
              },
              {
                icon: "🔒",
                title: "100% Confidentiality",
                description: "Secure processes and strict non-disclosure"
              },
              {
                icon: "⚡",
                title: "Quick Turnaround",
                description: "24/7 support with fast delivery times"
              },
              {
                icon: "📈",
                title: "Scalable Support",
                description: "Grow your practice without expanding overhead"
              },
              {
                icon: "🎯",
                title: "Precision & Quality",
                description: "Error-free documentation with rigorous QC"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">About Lexievo LPO</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Your Trusted Legal Support Partner</h3>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded with the vision to revolutionize legal support services, Lexievo LPO has been serving law firms and corporate legal departments worldwide. Our team combines legal expertise with cutting-edge technology to deliver exceptional results.
                </p>
                <p>
                  We understand the challenges facing today's legal professionals – increasing caseloads, tight deadlines, and pressure to reduce costs while maintaining quality. That's why we've built a comprehensive platform that extends your team's capabilities without compromising on excellence.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  To empower legal professionals by providing reliable, efficient, and cost-effective support services that allow them to focus on what they do best – serving their clients.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80" 
                alt="Professional legal team" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-900 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Complete Legal Support Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Comprehensive solutions across all major practice areas</p>
          </div>
          
          <div className="space-y-16">
            {/* Estate Planning */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">Estate Planning Support</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Complete estate planning documentation services including wills, trusts, powers of attorney, and advanced directives.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Last Will and Testament preparation
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Revocable and Irrevocable Trust documents
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Powers of Attorney (Financial and Healthcare)
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Advanced Healthcare Directives
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80" 
                    alt="Estate Planning Documents" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
              </div>
            </div>

            {/* Probate Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80" 
                    alt="Probate Administration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
                <div className="p-8 lg:p-12 lg:order-2">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">Probate Administration</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Streamlined probate administration services to help navigate the complex court processes efficiently.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Initial probate petitions and filings
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Inventory and appraisal coordination
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Creditor notices and debt management
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Final distribution documentation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Immigration Services */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">Immigration Support</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Comprehensive immigration document preparation and petition support for various visa categories.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Family-based petition preparation
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Employment visa documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Adjustment of status applications
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Naturalization and citizenship support
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop&q=80" 
                    alt="Immigration Documentation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
              </div>
            </div>

            {/* Civil Litigation Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80" 
                    alt="Litigation Support" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
                <div className="p-8 lg:p-12 lg:order-2">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">Civil Litigation Support</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Complete litigation support from initial research through trial preparation and post-trial documentation.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Legal research and case analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Discovery document management
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Trial preparation and exhibits
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Post-trial motions and appeals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">Bankruptcy Services</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Comprehensive bankruptcy support services for both individual and business cases across all chapters.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Chapter 7 liquidation petitions and schedules
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Chapter 13 reorganization plans
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Asset analysis and exemption planning
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Creditor matrix preparation and notices
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Meeting of creditors preparation
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80" 
                    alt="Bankruptcy Documentation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&q=80" 
                    alt="Personal Injury Case Support" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
                <div className="p-8 lg:p-12 lg:order-2">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">Personal Injury Support</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Dedicated personal injury case support from initial intake through settlement or trial preparation.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Medical records collection and organization
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Demand letter preparation and negotiations
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Insurance claim documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Expert witness coordination
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">✓</span>
                      Settlement documentation and processing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Simple, efficient process from consultation to delivery</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Discuss your specific needs and requirements with our legal experts"
              },
              {
                step: "02",
                title: "Proposal & Agreement",
                description: "Receive detailed proposal with timeline, costs, and deliverables"
              },
              {
                step: "03",
                title: "Work Execution",
                description: "Our team begins work with regular updates and quality checks"
              },
              {
                step: "04",
                title: "Review & Delivery",
                description: "Final review, revisions if needed, and secure delivery of documents"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-6xl font-bold text-yellow-400 mb-4 opacity-30">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-yellow-400"></div>
                    <div className="w-0 h-0 border-l-4 border-l-yellow-400 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Ready to streamline your legal operations? Contact us for a free consultation.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">Services Interested In</label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="estate-planning">Estate Planning</option>
                    <option value="probate">Probate Administration</option>
                    <option value="immigration">Immigration Support</option>
                    <option value="litigation">Civil Litigation Support</option>
                    <option value="bankruptcy">Bankruptcy</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your specific needs..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-900 text-white p-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">info@lexievolpo.com</p>
                    </div>
                  </div>
                  
                 {/*  <div className="flex items-center space-x-3">
                    <div className="bg-blue-900 text-white p-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div> */}
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-900 text-white p-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-700">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Join hundreds of satisfied law firms and legal departments who trust Lexievo LPO for their outsourcing needs.
                </p>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="ml-2 text-white">5.0 Client Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">Lexievo LPO</h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for comprehensive legal process outsourcing services worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Estate Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Probate Administration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Immigration Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Civil Litigation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Bankruptcy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Personal Injury</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@lexievolpo.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2024 Lexievo LPO. All rights reserved. | Confidential and Secure Legal Services
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Legal Notice</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
      )}
    </div>
    
  );
}

export default App;


