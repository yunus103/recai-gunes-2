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
const allImages = importAll(require.context('./assets', true, /\.(png|jpe?g|svg|JPE?G|webp)$/));

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
    behance: "https://www.behance.net/rgunesoffical"
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
    description: "Zengin kahve deneyimi ve sofistike ekipmanla",
    fullDescription: "Coffee Ager markası için yapılan çekimlerde, kahve ekipmanlarının detayları ve yüksek kaliteli ürün sunumu sade bir arka planla birleşti. İçerik, dijital platformlara uygun şekilde ürünün dokusu, formu ve premium hissiyatını net bir şekilde iletecek şekilde kurgulandı.",
    year: "2023",
    role: "İçecek",
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
    slug: "usta-katmer",
    category: "Food",
    title: "Usta Katmer",
    image: allImages["usta-katmer/_DSF2723.webp"],
    description: "Katmerin geleneksel lezzetiyle buluştuğu her kare Usta Katmer’de tatlı bir durak.",
    fullDescription: "Usta Katmer markası için yapılan ürün çekimlerinde, tatlının ince hamuru, sıcak dokusu ve zengin içeriği sade bir arka planda öne çıkarıldı. Görsellerde kaymak ve nutella gibi malzemelerin parlaklığı ile ürünün iştah açıcı hali dijital platformlar için etkili bir biçimde sunuldu.",
    client: "Usta Katmer",
    year: "2024",
    role: "Tatlı",
    gallery: [
      allImages["usta-katmer/_DSF2723.webp"],
      allImages["usta-katmer/_DSF2669.webp"],
      allImages["usta-katmer/_DSF2749.webp"],
      allImages["usta-katmer/_DSF2814.webp"],
      allImages["usta-katmer/_DSF5194.webp"],
      allImages["usta-katmer/_DSF2746.webp"]
    ]
  },
  {
    id: 5,
    slug: "moso",
    category: "Food",
    title: "Moso Gelato & Coffee",
    image: allImages["moso/Tokyo.webp"],
    description: "Gerçek meyvelerle, ev yapımı dondurmalar — Moso Gelato & Coffee’de doğallık ön planda.",
    fullDescription: "Moso Gelato & Coffee markası için yapılan çekimlerde, yüksek kaliteli A2 proteinli süt, katkısız meyve içerikleri ve sade zarafeti vurgulayan ürünler minimalist bir ışık düzeninde sunuldu. Görseller dijital platformlarda markanın doğal-rafine kimliğini ve lezzet odaklı yaklaşımını net şekilde iletecek şekilde biçimlendirildi.",
    client: "Moso Gelato & Coffee",
    year: "2024",
    role: "İçecek & Tatlı",
    gallery: [
      allImages["moso/Tokyo.webp"],
      allImages["moso/Affogato.webp"],
      allImages["moso/Amsterdam.webp"],
      allImages["moso/Chocolate.webp"],
      allImages["moso/cilekMatcha.webp"],
      allImages["moso/ColdBrewLemonade.webp"],
      allImages["moso/NaneFrozen.webp"],
      allImages["moso/FındıkÇikolata.webp"],
      allImages["moso/Tiramisulu.webp"],
      allImages["moso/Fıstıklı.webp"],
      allImages["moso/SutluLimon.webp"],
      allImages["moso/Vanilin.webp"],
    ]
  },
  {
    id: 6,
    slug: "paqo",
    category: "Food",
    title: "Paqo Bakery & Coffee",
    image: allImages["paqo/macha.webp"],
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "Paqo Bakery & Coffee",
    year: "2024",
    role: "İçecek & Tatlı",
    gallery: [
      allImages["paqo/macha.webp"],
      allImages["paqo/brown.webp"],
      allImages["paqo/cilek-ma.webp"],
      allImages["paqo/dubai.webp"],
      allImages["paqo/gelin.webp"],
      allImages["paqo/kruv.webp"],
      allImages["paqo/latte.webp"],
      allImages["paqo/mganol.webp"],
      allImages["paqo/mojito.webp"],
      allImages["paqo/mus.webp"],
      allImages["paqo/prof.webp"],
      allImages["paqo/san.webp"],
      allImages["paqo/sponful.webp"],
      allImages["paqo/tiramisu.webp"],
    ]
  },
  {
    id: 7,
    slug: "ercan",
    category: "Food",
    title: "Ercan Steakhouse",
    image: allImages["ercan/et.webp"],
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "Ercan Steakhouse",
    year: "2024",
    role: "Yemek",
    gallery: [
      allImages["ercan/et.webp"],
      allImages["ercan/et2.webp"],
      allImages["ercan/image.webp"],
      allImages["ercan/mekan.webp"],
      allImages["ercan/mekan2.webp"],
      allImages["ercan/mekan3.webp"],
    ]
  },
  {
    id: 8,
    slug: "massmavi",
    category: "Food",
    title: "Massmavi Balık Restaurant",
    image: allImages["mavi/kapak.webp"],
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "Massmavi Balık Restaurant",
    year: "2024",
    role: "Yemek",
    gallery: [
      allImages["mavi/kapak.webp"],
      allImages["mavi/mavi2.webp"],
      allImages["mavi/mavi1.webp"],
      allImages["mavi/mavi3.webp"],
      allImages["mavi/mavi4.webp"],
      allImages["mavi/mavi5.webp"],
      allImages["mavi/mavi6.webp"],
      allImages["mavi/mavi7.webp"],
      allImages["mavi/mavi8.webp"],
    ]
  },
  {
    id: 9,
    slug: "beyza",
    category: "Food",
    title: "Beyza Piliç",
    image: allImages["beyza/beyza1.webp"],
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "Beyza Piliç",
    year: "2024",
    role: "Yemek",
    gallery: [
        allImages["beyza/beyza1.webp"],
        allImages["beyza/beyza2.webp"],
        allImages["beyza/beyza3.webp"],
        allImages["beyza/beyza4.webp"],
        allImages["beyza/beyza5.webp"],
        allImages["beyza/beyza6.webp"],
        allImages["beyza/beyza7.webp"],
        allImages["beyza/beyza8.webp"],
        allImages["beyza/beyza9.webp"],
        allImages["beyza/beyza10.webp"],
        allImages["beyza/beyza11.webp"],
        allImages["beyza/beyza12.webp"],

    ]
  },
  {
    id: 10,
    slug: "chef-erdal",
    category: "Food",
    title: "Chef Erdal",
    image: allImages["erdal/erdal9.webp"],
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "Chef Erdal Adana Kebap ",
    year: "2024",
    role: "Yemek",
    gallery: [
        allImages["erdal/erdal9.webp"],
        allImages["erdal/erdal1.webp"],
        allImages["erdal/erdal2.webp"],
        allImages["erdal/erdal3.webp"],
        allImages["erdal/erdal4.webp"],
        allImages["erdal/erdal5.webp"],
        allImages["erdal/erdal6.webp"],
        allImages["erdal/erdal7.webp"],
        allImages["erdal/erdal8.webp"],
        allImages["erdal/erdal10.webp"],
    ]
  },
  {
    id: 11,
    slug: "barbisos",
    category: "Food",
    title: "Barbisos",
    image: allImages["barbisos/barbisos1.webp"],
    description: "Modern technology accessories with sleek design and functionality",
    fullDescription: "A minimalist approach to technology product photography, emphasizing clean lines, modern aesthetics, and the innovative design of contemporary tech accessories.",
    client: "Barbisos",
    year: "2024",
    role: "Yemek",
    gallery: [
        allImages["barbisos/barbisos5.webp"],
        allImages["barbisos/barbisos1.webp"],
        allImages["barbisos/barbisos2.webp"],
        allImages["barbisos/barbisos3.webp"],
        allImages["barbisos/barbisos4.webp"],
        allImages["barbisos/barbisos6.webp"],
        allImages["barbisos/barbisos7.webp"],
        allImages["barbisos/barbisos8.webp"],
        allImages["barbisos/barbisos9.webp"],
    ]
  },

];

