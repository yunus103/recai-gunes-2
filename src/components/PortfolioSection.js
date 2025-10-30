import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { portfolioItems } from '../mock';
import { useNavigate } from 'react-router-dom';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const categories = ['All', 'Food', 'Product'];
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-spacing-large">
      <div className="container-artworld">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="type-indicator text-accent mb-4">
            Portfolyo
          </div>
          {/* <h2 className="hero-title text-4xl mb-6">
            Recent Work
          </h2> */}
          <p className="body-text text-gray-300 max-w-2xl mx-auto">
            “Son fotoğraf projelerimden özenle seçilmiş örnekler; yemek ve ürün hikayelerini etkileyici görsellerle anlatıyor.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-accent text-black font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full mb-3">
                      <span className="type-indicator text-accent">{item.category}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="caption-text text-gray-200 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* View Button */}
                    <button 
                      onClick={() => navigate(`/project/${item.slug}`)}
                      className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-lg transition-colors duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="btn-inverse">
            <Filter size={16} />
            Bütün Projeler
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;