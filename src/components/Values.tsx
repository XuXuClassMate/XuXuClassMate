'use client';

import { useEffect, useState } from 'react';

export default function Values() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const values = [
    {
      title: 'Continuous Learning',
      description: 'Always stay curious and keep learning new technologies and skills',
      icon: '📚',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Share & Grow',
      description: 'Share knowledge and experience to help others grow together',
      icon: '🤝',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Build Excellence',
      description: 'Strive for excellence in every project and challenge',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section className="values" style={{
      padding: '100px 0',
      background: '#ffffff'
    }}>
      <div className="container">
        <h2 
          className="section-title"
          style={{
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '60px',
            color: '#1d2129',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          My Values
        </h2>
        <div className="values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className="value-card card-hover"
              style={{
                padding: '40px 32px',
                borderRadius: '16px',
                background: '#ffffff',
                border: '1px solid #e5e6eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${0.2 + index * 0.1}s`
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                background: value.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {value.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#1d2129',
                marginBottom: '12px'
              }}>
                {value.title}
              </h3>
              <p style={{
                color: '#4e5969',
                lineHeight: 1.7,
                fontSize: '15px'
              }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
