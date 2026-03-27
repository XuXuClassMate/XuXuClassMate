'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="header" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e6eb',
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <nav className="nav" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <Link href="/" className="logo" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#1d2129'
          }}>
            <Image src="/images/logo.svg" alt="XuXuClassMate Logo" width={32} height={32} />
            <span className="logo-text" style={{
              fontSize: '20px',
              fontWeight: 600,
              marginLeft: '8px',
              color: '#1d2129'
            }}>XuXuClassMate</span>
          </Link>
          
          <button 
            id="mobileNavToggle" 
            className="mobile-nav-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#1d2129',
              marginBottom: '6px'
            }}></span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#1d2129',
              marginBottom: '6px'
            }}></span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#1d2129'
            }}></span>
          </button>
          
          <div className={`nav-links ${mobileNavOpen ? 'active' : ''}`} id="navLinks" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            height: '100%'
          }}>
            <Link href="/en/life.html" className="nav-item" style={{
              textDecoration: 'none',
              color: '#4e5969',
              fontSize: '15px',
              fontWeight: 500,
              padding: '10px 20px',
              lineHeight: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              height: '44px',
              transition: 'all 0.3s ease',
              borderRadius: '4px'
            }}>Life</Link>
            <Link href="/en/learn.html" className="nav-item" style={{
              textDecoration: 'none',
              color: '#4e5969',
              fontSize: '15px',
              fontWeight: 500,
              padding: '10px 20px',
              lineHeight: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              height: '44px',
              transition: 'all 0.3s ease',
              borderRadius: '4px'
            }}>Learn</Link>
            <Link href="/en/work.html" className="nav-item" style={{
              textDecoration: 'none',
              color: '#4e5969',
              fontSize: '15px',
              fontWeight: 500,
              padding: '10px 20px',
              lineHeight: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              height: '44px',
              transition: 'all 0.3s ease',
              borderRadius: '4px'
            }}>Work</Link>
            <Link href="/zh/index.html" className="language-switch" style={{
              textDecoration: 'none',
              color: '#1677ff',
              fontSize: '15px',
              fontWeight: 500,
              padding: '10px 20px',
              lineHeight: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              height: '44px',
              transition: 'all 0.3s ease',
              border: '1px solid #1677ff',
              borderRadius: '4px',
              marginLeft: '16px'
            }}>中文</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
