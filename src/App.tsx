import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Phone, 
  Mail, 
  Calendar,
  ArrowRight,
  Play,
  Settings,
  MapPin,
  Gauge,
  Car,
  Building2,
  Truck,
  Award,
  Leaf,
  Target,
  Eye,
  Clock,
  BarChart3,
  Linkedin,
  Facebook,
  Youtube,
  Menu,
  X,
  ChevronDown,
  FileText
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/New-Logo.png" 
                alt="VOOVOO Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Dropdown Menu */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-[#03293E] hover:text-[#FF4C00] font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                <Menu className="w-5 h-5" />
                Menu
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <button 
                    onClick={() => scrollToSection('what-is-voovoo')}
                    className="block w-full text-left px-4 py-3 text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-50 transition-colors duration-200"
                  >
                    What is VOOVOO
                  </button>
                  <button 
                    onClick={() => scrollToSection('who-its-for')}
                    className="block w-full text-left px-4 py-3 text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-50 transition-colors duration-200"
                  >
                    Who It's For
                  </button>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="block w-full text-left px-4 py-3 text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-50 transition-colors duration-200"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('use-cases')}
                    className="block w-full text-left px-4 py-3 text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-50 transition-colors duration-200"
                  >
                    Use Cases
                  </button>
                  <button 
                    onClick={() => scrollToSection('business-impact')}
                    className="block w-full text-left px-4 py-3 text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-50 transition-colors duration-200"
                  >
                    Impact
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-4 py-3 text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-50 transition-colors duration-200"
                  >
                    Contact
                  </button>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <a 
                      href="https://calendly.com/vaho-voovoo/30min?back=1&month=2025-07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 bg-[#FF4C00] hover:bg-[#CC3D00] text-white font-semibold rounded-md mx-2 transition-colors duration-200"
                    >
                      Book Demo
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-[#03293E] hover:text-[#FF4C00] hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <button 
                  onClick={() => scrollToSection('what-is-voovoo')}
                  className="block px-3 py-2 text-[#03293E] hover:text-[#FF4C00] font-medium w-full text-left"
                >
                  What is VOOVOO
                </button>
                <button 
                  onClick={() => scrollToSection('who-its-for')}
                  className="block px-3 py-2 text-[#03293E] hover:text-[#FF4C00] font-medium w-full text-left"
                >
                  Who It's For
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block px-3 py-2 text-[#03293E] hover:text-[#FF4C00] font-medium w-full text-left"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('use-cases')}
                  className="block px-3 py-2 text-[#03293E] hover:text-[#FF4C00] font-medium w-full text-left"
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => scrollToSection('business-impact')}
                  className="block px-3 py-2 text-[#03293E] hover:text-[#FF4C00] font-medium w-full text-left"
                >
                  Impact
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 text-[#03293E] hover:text-[#FF4C00] font-medium w-full text-left"
                >
                  Contact
                </button>
                <a 
                  href="https://calendly.com/vaho-voovoo/30min?back=1&month=2025-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-3 mt-4 bg-[#FF4C00] hover:bg-[#CC3D00] text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors duration-200"
                >
                  Book Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#03293E] via-[#04324A] to-[#052D42] text-white overflow-hidden">
        {/* Background Image - Modern car dashboard with tech */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#03293E]/90 via-[#04324A]/85 to-[#052D42]/90"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex items-center min-h-screen">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Driving the Future of <span className="text-[#FF4C00]">Fleet Safety</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              VOOVOO transforms GPS tracking into proactive fleet control — ensuring safety, compliance, and sustainability in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://calendly.com/vaho-voovoo/30min?back=1&month=2025-07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4C00] hover:bg-[#CC3D00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Book a Demo
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Certified in 58 Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>9 Pilots Running</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Partners with City Halls & Tech Accelerators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is VOOVOO Section */}
      <section id="what-is-voovoo" className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03293E] mb-4">
              Not Just Monitoring. <span className="text-[#FF4C00]">Real Control.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-[#FF4C00]/10 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Speed Control</h3>
              <p className="text-gray-600">Automatically limits vehicle speed by road zone</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-[#FF4C00]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Safety First</h3>
              <p className="text-gray-600">Prevents aggressive driving and ensures compliance</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-[#FF4C00]/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Geo-Fencing</h3>
              <p className="text-gray-600">Keeps vehicles within geographic boundaries</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-[#FF4C00]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Remote Control</h3>
              <p className="text-gray-600">Enables remote safe immobilization when needed</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-[#FF4C00]/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Fuel Savings</h3>
              <p className="text-gray-600">Reduces fuel consumption by up to 20%</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-[#FF4C00]/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Easy Integration</h3>
              <p className="text-gray-600">Integrates easily with any GPS tracker</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#FF4C00] to-[#FF7300] text-white rounded-xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-orange-100">Reduction in Speeding</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">30%</div>
                  <div className="text-orange-100">Fewer Accidents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">20%</div>
                  <div className="text-orange-100">Fuel Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03293E] mb-4">
              Who It's For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VOOVOO serves multiple industries with tailored solutions for each sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF4C00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-[#FF4C00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-2">Fleet Integrators</h3>
              <p className="text-gray-600 mb-4">New revenue streams, stronger service offerings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF4C00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-[#FF4C00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-2">Car Rentals</h3>
              <p className="text-gray-600 mb-4">Reduce crash costs, improve safety & compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF4C00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-[#FF4C00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-2">Public Transport</h3>
              <p className="text-gray-600 mb-4">Enhance public safety without replacing fleets</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF4C00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#FF4C00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-2">Insurance</h3>
              <p className="text-gray-600 mb-4">Reduce risk and improve policy outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03293E] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Simple 3-step process: Plug, Configure, Control
            </p>
            <a 
              href="https://drive.google.com/file/d/1eOB4ai3Hortg0ReClkNS_kYSgc_xBUau/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF4C00] hover:bg-[#CC3D00] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <FileText className="w-5 h-5" />
              User Manual
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF4C00] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-4">Install</h3>
              <p className="text-gray-600">
                Retrofit the VOOVOO device (VOOBOX) into any vehicle via accelerator pedal and GPS tracker.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF4C00] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-4">Configure</h3>
              <p className="text-gray-600">
                Use easy software to set speed profiles and zones according to your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF4C00] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#03293E] mb-4">Control</h3>
              <p className="text-gray-600">
                VOOVOO intervenes automatically in real time to ensure safe and compliant driving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03293E] mb-4">
              Proven Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations showing measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-[#FF4C00] rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">Tbilisi City Hall</h3>
              <p className="text-gray-600 mb-4">Public pilot with 1,000 minibuses improving city-wide transportation safety</p>
              <div className="text-sm text-[#FF4C00] font-medium">1,000+ vehicles</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-[#FF4C00] rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">OX Drive</h3>
              <p className="text-gray-600 mb-4">Integration with Tesla car-sharing platform in Latvia</p>
              <div className="text-sm text-[#FF4C00] font-medium">Car-sharing fleet</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-[#FF4C00] rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#03293E] mb-2">B2B Integrations</h3>
              <p className="text-gray-600 mb-4">Deployments through GeoGPS, GPS Georgia, and Wialon</p>
              <div className="text-sm text-[#FF4C00] font-medium">Multiple markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section id="business-impact" className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03293E] mb-4">
              Business & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified technology with global reach and sustainability focus
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#FF4C00]" />
                  <span className="text-lg text-[#03293E]">Certified (E-mark) for use in 58 countries</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#FF4C00]" />
                  <span className="text-lg text-[#03293E]">Compatible with GPS trackers used by 8M+ vehicles</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#FF4C00]" />
                  <span className="text-lg text-[#03293E]">Aligned with EU Green Deal initiatives</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#FF4C00]" />
                  <span className="text-lg text-[#03293E]">Supports UN SDGs 3, 11, and 13</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#FF4C00]" />
                  <span className="text-lg text-[#03293E]">Complies with Net-Zero Industry Act</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#03293E] to-[#052D42] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Global Reach</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Countries Certified</span>
                    <span className="text-2xl font-bold text-[#FF4C00]">58</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Compatible Vehicles</span>
                    <span className="text-2xl font-bold text-[#FF4C00]">8M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Pilots</span>
                    <span className="text-2xl font-bold text-[#FF4C00]">9</span>
                  </div>
                </div>
              </div>
              {/* Background image for context */}
              <div className="absolute -top-4 -right-4 w-32 h-32 opacity-10">
                <img 
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Global connectivity"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#03293E] text-white relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Control Your Fleet?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the companies already improving their fleet safety and efficiency with VOOVOO
            </p>
            <a 
              href="https://calendly.com/vaho-voovoo/30min?back=1&month=2025-07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4C00] hover:bg-[#CC3D00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2 mx-auto inline-flex"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:contact@voovoo.eu" className="text-gray-300 hover:text-white transition-colors">
                contact@voovoo.eu
              </a>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <div className="space-y-1">
                <p className="text-gray-300">+995 599 320433</p>
                <p className="text-gray-300">+995 577 900061</p>
              </div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#FF4C00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <a href="https://www.voovoo.eu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                www.voovoo.eu
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/company/voovoo-voobox/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4C00]/30 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6 text-[#FF4C00]" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575660531518"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4C00]/30 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6 text-[#FF4C00]" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCTuSFOq8kO6Px8QAbwvSfXw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4C00]/30 transition-colors duration-200"
              >
                <Youtube className="w-6 h-6 text-[#FF4C00]" />
              </a>
              <a 
                href="https://www.tiktok.com/@voovoospeedlimiter?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FF4C00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4C00]/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-[#FF4C00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02202E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#FF4C00]">VOOVOO</h3>
              <p className="text-gray-400 mt-2">www.voovoo.eu</p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                VOOVOO is a trademark of TTM LLC, Latvia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;