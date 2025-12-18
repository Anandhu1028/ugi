import Header from '../../components/layouts/Header';
import Hero from '../../components/home/Hero';
import Footer from '../../components/layouts/Footer';
import ChairmanMessage from '../../components/ChairmanMessage/ChairmanMessage';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Established from '../../components/Established/Established';
import ScrollGallery from '../../components/ScrollGallery/ScrollGallery';

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
