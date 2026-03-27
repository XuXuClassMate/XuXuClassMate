'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WeChatModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShow(false);
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  return (
    <>
      <div 
        className={`modal ${show ? 'show' : ''}`} 
        id="wechatModal"
        onClick={(e) => e.target === e.currentTarget && setShow(false)}
      >
        <div className="modal-content">
          <button 
            className="close-button" 
            onClick={() => setShow(false)}
            aria-label="Close modal"
          >
            ×
          </button>
          <Image 
            src="/images/wechat.jpg" 
            alt="WeChat QR Code" 
            width={280} 
            height={280} 
          />
        </div>
      </div>
    </>
  );
}
