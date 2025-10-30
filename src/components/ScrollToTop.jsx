import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // pathname her değiştiğinde (yani sayfa değiştiğinde)
    window.scrollTo(0, 0); 
    
    // NOT: Sayfanızda yatay kaydırma varsa, şunu da ekleyebilirsiniz:
    // window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); 
    
  }, [pathname]); // pathname değiştiğinde bu kod tekrar çalışır

  return null; // Bu bileşenin görsel bir çıktısı yok
};

export default ScrollToTop;