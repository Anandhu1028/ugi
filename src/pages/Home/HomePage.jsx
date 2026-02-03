import Header from '../../components/layouts/Header';
import Hero from '../../components/home/Hero';
import Footer from '../../components/layouts/Footer';
import ChairmanMessage from '../../components/home/ChairmanMessage';
import ServicesSection from '../../components/home/ServicesSection';
import Established from '../../components/home/Established';
import ScrollGallery from '../../components/home/ScrollGallery';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ChairmanMessage />
      <ServicesSection />
      <Established />
      <ScrollGallery />
      <Footer />
    </>
  );
};

export default HomePage;
