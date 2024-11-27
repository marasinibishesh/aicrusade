import React from 'react'
import './CodeofConduct.css'
const CodeofConduct = () => {
  return (
    <div>
      
      <div class="footer-text">
      
  <p class="footer-content">
  
  By participating in this hackathon, you agree to the 
    <a class="footer-link" href="https://aiclub.ku.edu.np/wp-content/uploads/2023/08/AI-Hackathon-Code-of-Conduct.pdf" target="_blank"
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
    }}>Code of Conduct</a>of this Hackathon. Please read them carefully before proceeding. 
      Failure to comply with these rules may result in disqualification.
      Ensure you maintain a spirit of collaboration and integrity throughout the event. Good luck!
  </p>
</div>

</div>
  )
}

export default CodeofConduct