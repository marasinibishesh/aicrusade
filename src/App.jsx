import React from 'react';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import Challenge from './sections/Challenge';
import Submission from './sections/Submission';
import Faqs from './sections/Faqs';
import CodeofConduct from './sections/CodeofConduct';
import Register from './sections/Register';
import Footer from './sections/Footer';





const App = () => {
  return (
    <div>
    <main className='max-w-7xl mx-auto'>
      <Navigation />
      <div style={{
        height: '15vh',
      }}/>
      <HeroSection/>
      <section id="about" style={{ }}>
      <div style={{
        height: '100px',
      }}/>
      </section>
      <AboutSection/>
      <section id="challenge" style={{ }}>
      <div style={{
        height: '0.1px',
      }}/>
      </section>
      
      
    </main>
    <div>
    <div style={{
        width: '100%',
        position:'relative',
        zIndex: '1000',
      }}>
        
        <Challenge/>
      
    
      </div>
      <main className='max-w-7xl mx-auto'>
      <Submission/>
      <section id="faqs" style={{ }}>
      <div style={{
        height: '5px',
      }}/>
      
      </section>
      <Faqs/>
      <CodeofConduct/>
      <section id="register" style={{ }}>
      
      
      </section>
      <Register/>
      </main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;