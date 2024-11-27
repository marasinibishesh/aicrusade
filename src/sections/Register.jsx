import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-content">
        <h1 className="register-title" style={{
            fontFamily:'Helvetica',
        }}>Participate in the AICrusade</h1>
        <h2 className="register-subtitle" style={{
            fontFamily:'monospace',
        }}>and win exciting prizes!</h2>
        <p className="register-date">Nov 30 - Dec 1, 2024</p>
        <div>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfEcr_0CwR9BaKQFGzclGH1cDiRfJE_tSuYmyqayElZRxJrrg/viewform'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    width:'fit-content',
                    height:'fit-content',
                    display:'inline-block',
                }}
                >
        <button className="register-button">
        
          <p className="regtr">Register Now</p>
        </button>
        </a>
        </div>
      </div>
      <div style={{
        position:'absolute',
      }}>
      </div>
    </div>
  );
};

export default Register;
