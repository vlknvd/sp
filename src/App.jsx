import About from './components/about/About';
import Adv from './components/adv/Adv';
import Assortment from './components/assortment/Assortment';
import Banner from './components/banner/Banner';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className='sp'>
      <Header />
      <Banner />
      <About />
      <Assortment />
      <Adv />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
