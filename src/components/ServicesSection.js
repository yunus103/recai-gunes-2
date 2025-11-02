import React from 'react';
import { UtensilsCrossed, Camera, Sparkles, ArrowRight, Check } from 'lucide-react';
import { services } from '../mock';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const ServicesSection = () => {
  const iconMap = {
    UtensilsCrossed,
    Camera,
    Sparkles
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-spacing-large bg-dark">
    
      <div className="container-artworld">
        {/* Header */}
        <Slide right>
        <div className="text-center mb-16">
          <div className="type-indicator text-accent mb-4">
            Hizmetler
          </div>
          {/* <h2 className="hero-title text-4xl mb-6">
            What I Do Best
          </h2> */}
          <p className="body-text text-gray-300 max-w-2xl mx-auto">
            Markanızı yükseltmek ve hedef kitlenizle etkileşim kuran etkileyici görsel hikayeler yaratmak için tasarlanmış uzmanlaşmış fotoğrafçılık hizmetleri.
          </p>
        </div>
    </Slide>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
            <Zoom cascade duration={600}>
              <div 
                key={service.id}
                className={`group glass rounded-2xl p-8 hover:bg-accent/5 transition-all duration-300 animate-fade-in-up hover:transform hover:-translate-y-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <IconComponent size={32} className="text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="body-text text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {[
                    'Profesyonel aydınlatma kurulumu',
                    'Yüksek çözünürlüklü teslimatlar',
                    'Hızlı teslim süresi'
                  ].map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors duration-200 group/btn"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
              </Zoom>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="glass rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Çekim Sürecim
            </h3>
            <p className="body-text text-gray-300">
              Her çekimde en iyi sonuç için adım adım yaklaşım.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Danışmanlık',
                description: 'Vizyonunuzu, markanızı ve özel gereksinimlerinizi anlamak.'
              },
              {
                step: '02',
                title: 'Planlama',
                description: 'Stil, aksesuar ve ışık kurulumu dahil ayrıntılı çekim planlaması.'
              },
              {
                step: '03',
                title: 'Fotoğrafçılık',
                description: 'Her detaya titizlikle dikkat ederek profesyonel çekim.'
              },
              {
                step: '04',
                title: 'Teslimat',
                description: 'Yüksek kaliteli düzenlenmiş görsellerin teslimi.'
              }
            ].map((step, index) => (
            <Fade left delay={index * 50} key={step.step} duration={500}>
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <span className="text-xl font-bold text-accent">{step.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="caption-text text-gray-400">{step.description}</p>
              </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;