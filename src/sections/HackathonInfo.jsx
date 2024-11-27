import React, { useState, useEffect } from "react";
import "./HackathonInfo.css"; // Include this CSS file for styling

const HackathonInfo = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const hackathonEndDate = new Date("2024-11-30T23:59:59"); // Hackathon end date and time

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeDiff = hackathonEndDate - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = () => {
    const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;
    return `${days}D : ${hours}H : ${minutes}M`;
  };

  return (
    <div className="hackathon-info">
      <div className="info-section">
        <span className="info-label">Dates</span><br></br>
        <span className="info-value" style={{
        fontFamily:'monospace',
    }}>Nov 30 - Dec 1, 2024</span>
      </div>
      <div className="divider" />
      <div className="info-section">
        <span className="info-label">Starts in</span><br></br>
        <span className="info-value" style={{
        fontFamily:'monospace',
    }}>{formatTimeLeft()}</span>
      </div>
      <div className="divider" />
      <div className="info-section">
        <span className="info-label">Venue</span><br></br>
        <span className="info-value" style={{
        fontFamily:'monospace',
        
    }}><a href='https://maps.app.goo.gl/VioTXkrhTpAZK8qm8'target="_blank"
    rel="noopener noreferrer"
    style={{
        color: '#283346',

        transition: 'color 0.3s ease, textDecorationColor 0.3s ease'
    }}
    onMouseEnter={(e) => {
        e.target.style.color = '#FF7F7F';
        e.target.style.textDecorationColor = '#FF7F7F';
    }}
    onMouseLeave={(e) => {
        e.target.style.color = '#283346';
        e.target.style.textDecorationColor = '#283346';
    }}>Hotel View Bhrikuti, Godawari, Lalitpur</a></span>
      </div>
    </div>
  );
};

export default HackathonInfo;
