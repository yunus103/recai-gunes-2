// Mock data for photographer landing page
// 1. Tüm resimleri, alt klasörler dahil (true), belirli uzantılarla al
function importAll(r) {
  let images = {};
  // r.keys() artık './iskarmoz/pancar-oreo3.JPG', './cafe-bistro/kahve-tabagi.png' gibi yollar döndürecektir.
  r.keys().map((item) => { 
    // item.replace('./', '') işlemi, webpack'in döndürdüğü yolu temizler.
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

// Resimlerinizi içeren klasörünüzü ('./assets') belirtin.
// true: Alt klasörleri ara.
const allImages = importAll(require.context('./assets', true, /\.(png|jpe?g|svg|JPE?G)$/));

export const photographerInfo = {
  name: "Recai Güneş",
  title: "Yemek & Ürün Fotoğrafçısı",
  bio: "Her çekimde profesyonel yaklaşım sergiliyor, işinize en uygun fotoğrafları ortaya çıkarmak için özenle çalışıyorum. Yaratıcı ya da teknik açıdan ne kadar zor olursa olsun, her detayı çözüme kavuşturup, markanızı en iyi şekilde yansıtacak kareler üretiyorum.",
  location: "İstanbul, Türkiye",
  phone: "+90 536 601 9436",
  email: "recaigunes52@gmail.com",
  socialLinks: {
    instagram: "https://www.instagram.com/wrecaigns/",
    linkedin: "https://www.linkedin.com/in/recai-güneş-6010b51a7",
    behance: "https://behance.net/alexcameron"
  }
};

export const services = [
  {
    id: 1,
    icon: "UtensilsCrossed",
    title: "Yemek Fotoğrafçılığı",
    description: "Yiyecekleri iştah açıcı ve estetik karelerle sunuyor, hem sosyal medyada beğeni toplamanızı hem de ürününüzün değerini artırmanızı sağlıyoruz."
  },
  {
    id: 2,
    icon: "Camera",
    title: "Ürün Fotoğrafçılığı",
    description: "Ürünlerinizi öne çıkaran, kaliteli ve göz alıcı görsellerle hem sosyal medyada etkileşimi yükseltiyor hem de markanızın profesyonel imajını güçlendiriyoruz."
  },
  {
    id: 3,
    icon: "Sparkles",
    title: "Kişisel Çekim",
    description: "Portre ve kişisel çekimlerde doğal ve etkileyici kareler yakalayarak, sosyal medyada profilinizi öne çıkarıyor ve kişisel markanızı güçlendiriyoruz."
  }
];

export const portfolioItems = [
  {
    id: 1,
    slug: "iskarmoz",
    category: "Food",
    title: "Iskarmoz Restoran",
    image: allImages["iskarmoz/pancar-oreo3.jpg"],
    description: "Marmara’nın mavisiyle buluşan taze balıklar ve mezeler",
    fullDescription: "Iskarmoz için yapılan fotoğraf çalışmasında, deniz kenarında konumlanan mekânın huzurlu atmosferi ve deniz ürünlerinin doğal tazeliği sade bir ışık düzeniyle yansıtıldı. Görsellerde balıkların parlaklığı, mezelerin dokuları ve mekanın mavi-tonlu manzarası dijital platformlarda etkili ve net bir görsel dil oluşturacak şekilde ele alındı.",
    client: "Iskarmoz Restoran",
    year: "2024",
    role: "Yemek",
    gallery: [
      allImages["iskarmoz/pancar-oreo3.jpg"],
      allImages["iskarmoz/ege-karmasi3.JPG"],
      allImages["iskarmoz/fume-yogurt3.JPG"],
      allImages["iskarmoz/gavur-dag-salatasi3.JPG"],
      allImages["iskarmoz/kadayifli-jumbo3.JPG"],
      allImages["iskarmoz/karides-salata3.JPG"],
      allImages["iskarmoz/lavunya3.JPG"],
      allImages["iskarmoz/rodos-ezmesi3.JPG"],
      allImages["iskarmoz/salyangoz3.JPG"]
    ]
  },
  {
    id: 2,
    slug: "ekleristan",
    category: "Food",
    title: "Ekleristan",
    image: allImages["ekleristan/ekler-kapak.jpg"],
    description: "Tatlıyı Sanata Dönüştüren Lezzetler",
    fullDescription: "Ekleristan için yapılan ürün çekimlerinde markanın taze ve renkli ekler çeşitleri sade bir düzenle öne çıkarıldı. Görsellerde lezzetin detaylarını vurgulayan aydınlatma tercih edilerek dijital platformlarda iştah açıcı ve dikkat çekici bir görünüm elde edildi.",
    client: "Ekleristan",
    year: "2024",
    role: "Tatlı",
    gallery: [
      allImages["ekleristan/limonlu-.JPG"],
      allImages["ekleristan/clekli3.jpg"],
      allImages["ekleristan/cikolatali2.JPG"],
      allImages["ekleristan/karemelli.JPG"],
      allImages["ekleristan/limonlu.JPG"],
      allImages["ekleristan/portakalli.JPG"],
      allImages["ekleristan/ananasli.jpg"],
      allImages["ekleristan/elmali-tarcinli.JPG"],
    ]
  },
  {
    id: 3,
    slug: "coffeeagear",
    category: "Food",
    title: "Coffeeagear",
    image: allImages["coffeeager/_DSF0117.JPG"],
    description: "Fine dining presentation showcasing culinary artistry and technique",
    fullDescription: "A sophisticated photography project capturing the artistry of fine dining. Each image tells a story of culinary excellence, showcasing the chef\'s technique and the restaurant\'s commitment to visual perfection.",
    client: "Le Bernardin Restaurant",
    year: "2023",
    role: "Food Photography & Styling",
    gallery: [
        allImages["coffeeager/_DSF0100.jpg"],
        allImages["coffeeager/_DSF0108_2.jpg"],
        allImages["coffeeager/_DSF0126.jpg"],
        allImages["coffeeager/_DSF0117.JPG"],
        allImages["coffeeager/_DSF0119_2.jpg"],
        allImages["coffeeager/_DSF0120_1.jpg"],
        allImages["coffeeager/_DSF0128.JPG"],
        allImages["coffeeager/_DSF0132_1.jpg"],
        allImages["coffeeager/_DSF0135.jpeg"],
        allImages["coffeeager/_DSF0159.jpeg"],
        allImages["coffeeager/_DSF0067.jpeg"],
        allImages["coffeeager/_DSF0074.jpeg"],
        allImages["coffeeager/_DSF0310.jpeg"]
    ]
  },
  {
    id: 4,
    slug: "coffee-collection",
    category: "Product",
    title: "Coffee Collection",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
    description: "Artisan coffee beans and brewing equipment for specialty coffee brands",
    fullDescription: "A warm and inviting photography series showcasing artisan coffee culture. From bean to cup, this project captures the passion and craftsmanship of specialty coffee roasters and their premium equipment.",
    client: "Craft Coffee Roasters",
    year: "2024",
    role: "Product Photography & Brand Imagery",
    gallery: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&q=80",
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1504627298434-2119808e0d47?w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=80"
    ]
  },
  {
    id: 5,
    slug: "fresh-ingredients",
    category: "Food",
    title: "Fresh Ingredients",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
    description: "Farm-to-table ingredients captured in their natural beauty",
    fullDescription: "Celebrating the beauty of fresh, organic ingredients in their most natural state. This series emphasizes sustainability, freshness, and the connection between farm and table through vibrant, natural photography.",
    client: "Organic Farm Market",
    year: "2023",
    role: "Food Photography & Styling",
    gallery: [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1200&q=80",
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1200&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
      "https://images.unsplash.com/photo-1522444195799-478538b28823?w=1200&q=80"
    ]
  },
  {
    id: 6,
    slug: "tech-accessories",
    category: "Product",
    title: "Tech Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "TechStyle Accessories",
    year: "2024",
    role: "Product Photography & Creative Direction",
    gallery: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80",
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80",
      "https://images.unsplash.com/photo-1574920111867-782f7702ac5a?w=1200&q=80",
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=1200&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Restaurant Owner",
    company: "The Artisan Table",
    text: "Alex's food photography transformed our menu presentation. Our online orders increased by 40% after using his stunning images.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Brand Manager",
    company: "Pure Skincare Co.",
    text: "The product shots Alex created perfectly captured our brand's essence. His attention to detail and lighting is exceptional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director",
    company: "Craft Coffee Roasters",
    text: "Working with Alex was seamless. He understood our vision and delivered images that elevated our entire brand identity.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  }
];