import React from 'react';
import { photographerInfo } from '../mock';
import recaiPhoto from '../assets/recai.jpg'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing-large bg-dark">
    <Slide left duration={600}>
      <div className="container-artworld">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="type-indicator text-accent mb-4">
                Hakkında
              </div>
              {/* <h2 className="hero-title text-3xl mb-6">
                Capturing Stories Through
                <span className="text-accent block">Yemek & Ürünler</span>
              </h2> */}
            </div>

            <div className="space-y-6">
              <p className="body-text text-gray-300 leading-relaxed">
                4 yılı aşkın bir süredir yemek ve ürün fotoğrafçılığı alanında çalışıyorum. Bu süre zarfında, tanınmış restoranlar, yeni çıkan yiyecek markaları ve yenilikçi ürün şirketleriyle çalışma fırsatı buldum. Tutkum, sadece ürünleri göstermekle kalmayan; aynı zamanda hikaye anlatan ve izleyicide duygu uyandıran görseller yaratmak.
              </p>

              <p className="body-text text-gray-300 leading-relaxed">
                Her fotoğraf, ışıklandırma, kompozisyon ve styling gibi detaylara özen gösterilerek hazırlanır. Benim için iyi fotoğrafçılık yalnızca teknik mükemmeliyetle sınırlı değildir; her markanın benzersiz özünü yakalayan ve hedef kitlesiyle daha derin bir bağ kuran görseller ortaya çıkarmaktır.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="caption-text">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="caption-text">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4+</div>
                <div className="caption-text">Yıllık Deneyim</div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <Zoom clear>
              <div className="aspect-[4/5] max-w-[450px] rounded-lg overflow-hidden image-overlay">
                <img
                  src={recaiPhoto}
                  alt="Food photography workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </Zoom>
              

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <Fade up delay={500} duration={600}>
        <div className="mt-24 text-center">
          <blockquote className="text-2xl lg:text-3xl font-light text-gray-200 italic max-w-4xl mx-auto leading-relaxed">
            "Her şeyin bir hikayesi vardır. Benim işim, o hikayeyi tek bir karede, sessizce ama en etkili şekilde anlatmak."
          </blockquote>
          <div className="mt-8">
            <div className="artist-name text-xl">— {photographerInfo.name}</div>
            <div className="caption-text mt-2">{photographerInfo.title}</div>
          </div>
        </div>
        </Fade>
      </div>
      </Slide>
    </section>
  );
};

export default AboutSection;