import React from 'react';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';



const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navigation />
      <div style={{
        height: '15vh',
      }}/>
      <HeroSection/>
    </main>
  );
};

export default App;