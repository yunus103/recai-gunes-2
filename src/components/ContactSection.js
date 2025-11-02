import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { photographerInfo } from '../mock';
import emailjs from "@emailjs/browser";
import Fade from 'react-reveal/Fade';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

     try {
    await emailjs.send(
      'service_8mb0akj',
      'template_3lato3l',
      formData,
      'iZGAlJSdJGKtU0uIB'
    );

    
    toast.success('Mesajınız gönderildi! En kısa zamanda geri dönüş sağlanacaktır.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  }catch (error) {
    console.error(error);
    toast.error('Oops, something went wrong. Try again later.');
  } finally {
    setIsSubmitting(false);
  };
  }
  return (
    <section id="contact" className="section-spacing-large">
      
      <div className="container-artworld">
        <Fade top distance='40px'>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="type-indicator text-accent mb-4">
            İletişime Geç
          </div>
          <h2 className="hero-title text-4xl mb-6">
            Hadi Birlikte 
            <span className="text-accent block">Harika Şeyler Yaratalım</span>
          </h2>
          <p className="body-text text-gray-300 max-w-2xl mx-auto">
            Fikrinizi gerçeğe dönüştürmeye hazır mısınız? Projeniz hakkında konuşmayı ve markanız için etkileyici görseller yaratmayı çok isterim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Type Selection */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Project Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'food', label: 'Food Photography' },
                    { value: 'product', label: 'Product Photography' }
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.projectType === type.value
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-gray-600 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    İsim *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-dark border-gray-600 text-white focus:border-accent"
                    placeholder="İsminiz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-dark border-gray-600 text-white focus:border-accent"
                    placeholder="mail@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Konu *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-dark border-gray-600 text-white focus:border-accent"
                  placeholder="Proje Konusu"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-dark border-gray-600 text-white focus:border-accent resize-none"
                  placeholder="Bana projenizden, zaman çizelgenizden ve özel gereksinimlerinizden bahseder misiniz?"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black hover:bg-accent-hover font-medium py-6 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Mesaj Gönderiliyor...
                  </>
                ) : (
                  <>
                    Mesaj Gönder
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">İletişim Bilgisi</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Email</h4>
                      <a 
                        href={`mailto:${photographerInfo.email}`}
                        className="text-gray-400 hover:text-accent transition-colors duration-200"
                        >
                        {photographerInfo.email}
                    </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Telefon</h4>
                      <p className="text-gray-300">{photographerInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Konum</h4>
                      <p className="text-gray-300">{photographerInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Cevap Süresi</h4>
                      <p className="text-gray-300">24 saat içinde</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
        </Fade>
      </div>
      
    </section>
  );
};

export default ContactSection;