import React from "react";
import styles from "./Footer.module.css"; // Import CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <a href='https://aiclub.ku.edu.np/aimeet/' style={{
                    width:'fit-content',
                    height:'fit-content',
                    display:'inline-block',
                }}><img src="https://firebasestorage.googleapis.com/v0/b/basaisaraiofficial.appspot.com/o/AICrusade%2FFrame%208%402x.png?alt=media&token=cb3b4dbe-a2fb-4a72-ba2e-24c6d4a8d332" alt="AICrusade Logo" className={styles.logo} /></a>
          <p className={styles.description}>
            Empowering innovation through AI.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <ul className={styles.socialIcons}>
            <li>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </li>
            
            <li>
              <a href="https://www.instagram.com/aicrusade/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/aicrusade" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
          <div className={styles.status}>
            <span className={styles.statusIndicator}></span> All services are online
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© AICrusade 2024 — Empowering AI Innovation</p>
        <ul className={styles.bottomLinks}>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfEcr_0CwR9BaKQFGzclGH1cDiRfJE_tSuYmyqayElZRxJrrg/viewform"
          target="_blank"
          rel="noopener noreferrer">Register</a></li>
          <li><a href="https://maps.app.goo.gl/VioTXkrhTpAZK8qm8"
          target="_blank"
          rel="noopener noreferrer">Venue</a></li>
          <li><a href="https://aiclub.ku.edu.np/wp-content/uploads/2023/08/AI-Hackathon-Code-of-Conduct.pdf"
          target="_blank"
          rel="noopener noreferrer">Code of Conduct</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
