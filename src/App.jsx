import { useEffect, useState } from 'react';
import About from './components/about/About';
import Adv from './components/adv/Adv';
import Assortment from './components/assortment/Assortment';
import Banner from './components/banner/Banner';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Popup from './components/popup/Popup';

const App = () => {
  const [popupOpen, setIsPopupOpen] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const onClick = () => setIsPopupOpen(true);
  const onClose = () => setIsPopupOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const nearBottom = scrollTop + windowHeight >= docHeight - 50;

      if (nearBottom && !popupShown) {
        setIsPopupOpen(true);
        setPopupShown(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [popupShown]);
  return (
    <div className='sp'>
      <Header />
      <Banner onClick={onClick} />
      <About />
      <Assortment />
      <Adv />
      <Feedback onClick={onClick} />
      <Footer />
      <Popup isOpen={popupOpen} onClose={onClose} />
    </div>
  );
};

export default App;
