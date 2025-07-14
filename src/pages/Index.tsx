import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Publications from '@/components/Publications';
import Students from '@/components/Students';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait for DOM to render
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <Publications /> */}
      <Students />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
