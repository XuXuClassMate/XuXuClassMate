'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <Image src="/images/logo.svg" alt="XuXuClassMate Logo" width={32} height={32} />
            <span className="logo-text">XuXuClassMate</span>
          </Link>
          
          <button 
            id="mobileNavToggle" 
            className="mobile-nav-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`nav-links ${mobileNavOpen ? 'active' : ''}`} id="navLinks">
            <Link href="/en/life.html" className="nav-item">Life</Link>
            <Link href="/en/learn.html" className="nav-item">Learn</Link>
            <Link href="/en/work.html" className="nav-item">Work</Link>
            <Link href="/zh/index.html" className="language-switch">中文</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
