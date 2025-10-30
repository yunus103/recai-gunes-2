import React from 'react';
import { Instagram, Linkedin, Globe, ArrowUp } from 'lucide-react';
import { photographerInfo } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark border-t border-accent/20">
      <div className="container-artworld">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="artist-name text-2xl mb-4">{photographerInfo.name}</h3>
            <p className="body-text text-gray-400 mb-6 max-w-md">
              Markaları öne çıkaran ve izleyicilerle bağ kuran etkileyici görsel hikayeler yaratan profesyonel yemek ve ürün fotoğrafçısı.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={photographerInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={photographerInfo.socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {[
                { label: 'Ana Sayfa', id: 'home' },
                { label: 'Hakkında', id: 'about' },
                { label: 'Portfolyo', id: 'portfolio' },
                { label: 'Hizmetler', id: 'services' },
                { label: 'İletişim', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="nav-link text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">İletişim</h4>
            <div className="space-y-3">
              <div>
                <p className="caption-text text-gray-500 mb-1">Email</p>
                <a 
                  href={`mailto:${photographerInfo.email}`}
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  {photographerInfo.email}
                </a>
              </div>
              <div>
                <p className="caption-text text-gray-500 mb-1">Telefon</p>
                <a 
                  href={`tel:${photographerInfo.phone}`}
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  {photographerInfo.phone}
                </a>
              </div>
              <div>
                <p className="caption-text text-gray-500 mb-1">Konum</p>
                <p className="text-gray-400">{photographerInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="caption-text text-gray-500 text-center md:text-left">
            © 2025 {photographerInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-accent hover:text-white transition-colors duration-200 group"
            >
              <span className="caption-text">Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;