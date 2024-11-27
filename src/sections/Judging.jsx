import React from 'react'
import './Judging.css'
const Judging = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold mt-11">Judging.</h1>
        <div class="judging-box">
  <div class="points-container">
    <div class="point">
      <div class="bullet-box">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.50006C12.5 2.50006 12.5864 3.00043 12.5864 3.00043C14.5508 9.83398 14.1662 9.4492 21 11.4138C21 11.4138 21.5 11.5 21.5 12C21.5 12.5001 21 12.5863 21 12.5863C14.166 14.5509 14.5509 14.166 12.5862 21C12.5862 21 12.5 21.5 12 21.5C11.5 21.5 11.4138 21 11.4138 21C9.44915 14.166 9.83398 14.5509 3 12.5863C3 12.5863 2.5 12.5001 2.5 12C2.5 11.5 3 11.4138 3 11.4138C9.83385 9.4492 9.44916 9.83398 11.4136 3.00043C11.4136 3.00043 11.5 2.50006 12 2.50006Z" fill="#AC8FFF"></path>
        </svg>
      </div>
      <div class="point-content">
        <strong>Innovation:</strong>
        <p style={{
            fontFamily:'monospace',
        }}>The project's originality and creativity.</p>
      </div>
    </div>
    <div class="point">
      <div class="bullet-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.50006C12.5 2.50006 12.5864 3.00043 12.5864 3.00043C14.5508 9.83398 14.1662 9.4492 21 11.4138C21 11.4138 21.5 11.5 21.5 12C21.5 12.5001 21 12.5863 21 12.5863C14.166 14.5509 14.5509 14.166 12.5862 21C12.5862 21 12.5 21.5 12 21.5C11.5 21.5 11.4138 21 11.4138 21C9.44915 14.166 9.83398 14.5509 3 12.5863C3 12.5863 2.5 12.5001 2.5 12C2.5 11.5 3 11.4138 3 11.4138C9.83385 9.4492 9.44916 9.83398 11.4136 3.00043C11.4136 3.00043 11.5 2.50006 12 2.50006Z" fill="#AC8FFF"></path>
        </svg></div>
      <div class="point-content">
        <strong>Relevance:</strong>
        <p style={{
            fontFamily:'monospace',
        }}>How well the project uses AI.</p>
      </div>
    </div>
    <div class="point">
      <div class="bullet-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.50006C12.5 2.50006 12.5864 3.00043 12.5864 3.00043C14.5508 9.83398 14.1662 9.4492 21 11.4138C21 11.4138 21.5 11.5 21.5 12C21.5 12.5001 21 12.5863 21 12.5863C14.166 14.5509 14.5509 14.166 12.5862 21C12.5862 21 12.5 21.5 12 21.5C11.5 21.5 11.4138 21 11.4138 21C9.44915 14.166 9.83398 14.5509 3 12.5863C3 12.5863 2.5 12.5001 2.5 12C2.5 11.5 3 11.4138 3 11.4138C9.83385 9.4492 9.44916 9.83398 11.4136 3.00043C11.4136 3.00043 11.5 2.50006 12 2.50006Z" fill="#AC8FFF"></path>
        </svg></div>
      <div class="point-content">
        <strong>Presentation:</strong>
        <p style={{
            fontFamily:'monospace',
        }}>The quality and clarity of the demo, with slides encouraged but optional.</p>
      </div>
    </div>
    <div class="point">
      <div class="bullet-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.50006C12.5 2.50006 12.5864 3.00043 12.5864 3.00043C14.5508 9.83398 14.1662 9.4492 21 11.4138C21 11.4138 21.5 11.5 21.5 12C21.5 12.5001 21 12.5863 21 12.5863C14.166 14.5509 14.5509 14.166 12.5862 21C12.5862 21 12.5 21.5 12 21.5C11.5 21.5 11.4138 21 11.4138 21C9.44915 14.166 9.83398 14.5509 3 12.5863C3 12.5863 2.5 12.5001 2.5 12C2.5 11.5 3 11.4138 3 11.4138C9.83385 9.4492 9.44916 9.83398 11.4136 3.00043C11.4136 3.00043 11.5 2.50006 12 2.50006Z" fill="#AC8FFF"></path>
        </svg></div>
      <div class="point-content">
        <strong>Completeness:</strong>
        <p style={{
            fontFamily:'monospace',
        }}>How much the project functions as a useful prototype.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Judging