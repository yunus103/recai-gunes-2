import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Briefcase } from 'lucide-react';
import { portfolioItems } from '../mock';
import PhotographyHeader from './PhotographyHeader';
import Footer from './Footer';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = portfolioItems.find(item => item.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      // If project not found, redirect to portfolio
      navigate('/');
    }
  }, [slug, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Yükleniyor...</div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleBackToPortfolio = () => {
    navigate('/#portfolio');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <PhotographyHeader />
      
      {/* Back Button */}
      <div className="pt-24 pb-8">
        <div className="container-artworld">
          <button
            onClick={handleBackToPortfolio}
            className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Portfolyö</span>
          </button>
        </div>
      </div>

      {/* Project Header */}
      <section className="pb-16">
        <div className="container-artworld">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <div className="type-indicator text-accent mb-4">
                  {project.category}
                </div>
                <h1 className="hero-title text-4xl lg:text-5xl mb-6">
                  {project.title}
                </h1>
                <p className="body-text text-gray-300 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <User size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="caption-text text-gray-500 mb-1">Müşteri</div>
                    <div className="text-white font-medium">{project.client}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="caption-text text-gray-500 mb-1">Tarih</div>
                    <div className="text-white font-medium">{project.year}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="caption-text text-gray-500 mb-1">Rol</div>
                    <div className="text-white font-medium">{project.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Arrows */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                  >
                    <ArrowRight size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-spacing-large bg-dark">
        <div className="container-artworld">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Proje Galerisi
          </h2>
          
          {/* Thumbnail Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  currentImageIndex === index 
                    ? 'ring-2 ring-accent scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Full Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/5] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => goToImage(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-spacing">
        <div className="container-artworld">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Diğer Projeler
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems
              .filter(item => item.id !== project.id)
              .slice(0, 3)
              .map((item) => (
                <div 
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/project/${item.slug}`)}
                >
                  <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="type-indicator text-accent">{item.category}</div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="caption-text text-gray-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Back to Portfolio Button */}
          <div className="text-center mt-16">
            <button
              onClick={handleBackToPortfolio}
              className="btn-inverse"
            >
              <ExternalLink size={16} />
              Tüm Projeler
            </button>
          </div>
        </div>
      </section>

      <Footer />
       {/* Custom Cursor Enhancement */}
      <style jsx>{`
        .cursor-pointer:hover {
          cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iI2QwYjhhYyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==') 12 12, pointer;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
