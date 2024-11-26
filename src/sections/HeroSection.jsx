import React from 'react'
import HackathonInfo from './HackathonInfo'
const HeroSection = () => {     
  return (
    <div style={{
        backgroundColor: '#f0f0f0',
        height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }}>
    <div>
    <div style={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <img src='https://firebasestorage.googleapis.com/v0/b/basaisaraiofficial.appspot.com/o/AICrusade%2FFrame%208%402x.png?alt=media&token=cb3b4dbe-a2fb-4a72-ba2e-24c6d4a8d332' style={{
            width: '100px',
        }}/>
        <h1 style={{
            marginLeft: '20px',
            marginRight: '20px',
            fontSize: '3rem',
            color: '#283346',
        }}> 🞨</h1>
        <img src='https://firebasestorage.googleapis.com/v0/b/basaisaraiofficial.appspot.com/o/AICrusade%2Fkuaic-logo-transparent-background.webp?alt=media&token=8a4094af-8035-468a-93c6-4d8e40d88567'
        style={{
            width: '75px',
        }}/>
    </div>
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-70px',
    }}>
        <img src="https://firebasestorage.googleapis.com/v0/b/basaisaraiofficial.appspot.com/o/AICrusade%2Fijkl.png?alt=media&token=153a7f09-041d-42aa-954a-04ea3029e420"/>
        <div style={{
            zIndex:500,
            marginTop:'-37vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <h1 style={{fontSize: '6vw',
                color: '#283346',
                fontWeight: 'bold',
                fontFamily: 'fantasy',
                }}
            className='fontSize'>
            AICrusade 2024
            </h1>
            <div style={{
                width: '50vw',
                backgroundColor:'#ffffff'
            }}>
            <h2 style={{
                fontSize: '3vh',
                color: '#283346',
                textAlign: 'center',
                padding: '0px',
                fontFamily:'monospace',
                width: '100%',
            }}>
                Registration is OPEN for <b>AI Crusade 2024</b> Hackathon! Bring your innovative ideas to life and compete with the best! Don't wait, secure your spot today!
            </h2>
            </div>
        </div>  
       
    </div>
    <div
    style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',    
    }}>
    <HackathonInfo/>
    </div>
    </div>
    </div>
  )
}

export default HeroSection