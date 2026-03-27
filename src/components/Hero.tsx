'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="hero" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f7f8fa 0%, #ffffff 100%)',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div className="hero-content" style={{
          maxWidth: '800px',
          textAlign: 'center',
          margin: '0 auto'
        }}>
          <span 
            className="subtitle"
            style={{
              display: 'inline-block',
              color: '#1677ff',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.1s'
            }}
          >
            My Mission
          </span>
          <h1 
            className="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              background: 'linear-gradient(135deg, #1677ff 0%, #0052cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '24px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}
          >
            Keep Learning, Keep Growing
          </h1>
          <p 
            className="hero-desc"
            style={{
              fontSize: '18px',
              color: '#4e5969',
              lineHeight: 1.8,
              maxWidth: '600px',
              margin: '0 auto',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.3s'
            }}
          >
            Exploring technology, sharing knowledge, and
            building the future together
          </p>
        </div>
      </div>
    </section>
  );
}
