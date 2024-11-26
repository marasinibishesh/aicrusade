import React from 'react'
import './AboutSection.css'
const AboutSection = () => {
  return (
    <div className='AboutBck'>
        <div style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <h1 style={{
            fontSize: '30px',
            color: '#283346',
            marginTop: '10px',
            fontWeight:'bold',
            fontFamily: 'Helvetica',
        }}>
            About AICrusade
        </h1>
        <div className='AboutText'>
            <img src="https://firebasestorage.googleapis.com/v0/b/basaisaraiofficial.appspot.com/o/AICrusade%2FCat_Coding-ai-brush-removebg-gxqog7ms.png?alt=media&token=a7eabf7f-7331-4026-b936-68d66e7cb634"  className='Catlogo'/>
            <p style={{
                fontFamily:'monospace',
            }} className='textPara'>
            AI Crusade 2024 is a premier hackathon by the Kathmandu University Artificial Intelligence Club (KUAIC) and the Department of AI (DoAI). As a pre-event for AI Meet 2024, it brings students together to create impactful AI solutions for real-world challenges. Celebrate innovation, collaboration, and the transformative power of AI!
            </p>
        </div>
        </div>
    </div>
  )
}

export default AboutSection