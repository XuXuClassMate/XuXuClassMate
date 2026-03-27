'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function QuickLinks() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const links = [
    {
      href: '/en/learn.html',
      title: 'Learning Path',
      description: 'View my learning notes and resources',
      icon: '📖',
      color: '#1677ff'
    },
    {
      href: '/en/work.html',
      title: 'Project Gallery',
      description: 'Explore my recent projects and works',
      icon: '💼',
      color: '#722ed1'
    },
    {
      href: '/en/life.html',
      title: 'Life Journey',
      description: 'Share my life experiences and stories',
      icon: '🌟',
      color: '#13c2c2'
    }
  ];

  return (
    <section className="quick-links" style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, #f7f8fa 0%, #ffffff 100%)'
    }}>
      <div className="container">
        <div className="links-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="link-card card-hover"
              style={{
                display: 'block',
                padding: '32px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1px solid #e5e6eb',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div style={{
                fontSize: '40px',
                marginBottom: '16px'
              }}>
                {link.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#1d2129',
                marginBottom: '8px'
              }}>
                {link.title}
              </h3>
              <p style={{
                color: '#4e5969',
                fontSize: '15px',
                lineHeight: 1.6
              }}>
                {link.description}
              </p>
              <div style={{
                marginTop: '16px',
                color: link.color,
                fontSize: '14px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>Learn More</span>
                <span style={{
                  transition: 'transform 0.3s ease'
                }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
