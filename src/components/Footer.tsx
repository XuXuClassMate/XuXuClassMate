'use client';

import { useState } from 'react';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="logo-text">XuXuClassMate</span>
            <p className="footer-desc">
              A personal space for learning and sharing
            </p>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <a
                href="https://github.com/XuXuClassMate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://fgg6gzb6uk.feishu.cn/docx/LkwDdpLjnoIdGwxOH6zcRwEWnhd?from=from_copylink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-blog"></i>
                <span>Blog</span>
              </a>
              <a
                href="javascript:void(0);"
                className="wechat-link"
                onClick={() => setModalOpen(true)}
              >
                <i className="fab fa-weixin"></i>
                <span>WeChat</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2020-2026 XuXuClassMate</p>
        </div>
      </div>
    </footer>
  );
}
