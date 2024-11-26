import React from 'react';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import Challenge from './sections/Challenge';



const App = () => {
  return (
    <div>
    <main className='max-w-7xl mx-auto'>
      <Navigation />
      <div style={{
        height: '15vh',
      }}/>
      <HeroSection/>
      <AboutSection/>
      
    </main>
    <div style={{
        width: '100%',
        position:'absolute',
        zIndex: '1000',
      }}>
    <Challenge/>
      </div>
    </div>
  );
};

export default App;