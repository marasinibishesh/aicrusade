import React, { useEffect } from 'react';
import './Challenge.css';
import WhyJoin from './WhyJoin';
import Judging from './Judging';
import PrizePool from './PrizePool';
import Track from './Track';
import Navigation from './Navigation';
const Challenge = () => {
  useEffect(() => {
    const handleScroll = () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => {
        const scrollY = window.scrollY;
        const offset = parseInt(star.getAttribute('data-offset'), 10);
        star.style.transform = `translateY(${scrollY * offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#283346',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Stars */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            data-offset={Math.random() * 0.2 + 0.1}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-white text-center relative z-10">
        <div className='changName'>
        <h1 className="text-4xl font-bold mt-11">The Challenge !</h1>
        <div className='box'>
          <p style={{
            fontFamily:'monospace',
          }}className='changPara'>
          Build something extraordinary with AI! Whether you’re solving critical societal issues, enhancing everyday life, or pushing the boundaries of what's possible, we want to see your boldest ideas come to life.We encourage you to bring your vision to the table.
          </p>
        </div>
        </div>
        <WhyJoin/>
        <Judging/>
        <section id="prizes" style={{ }}>
        <PrizePool/>
        </section>
        <section id="tracks" style={{ }}>
        <Track/>
        </section>
        
        <div style={{
          height:'100px',
        }}>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: white;
          border-radius: 50%;
          animation: blink 2s infinite;
          transform: translateY(0);
        }

        @keyframes blink {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Challenge;
