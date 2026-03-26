'use client'

import { Heart, CodeXml, UserRoundCheck, Bird, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              XuXu
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Senior Test Engineer & Automation Expert
            </p>
            <p className="text-slate-500 text-xs">
              Exploring cutting-edge testing technologies and building quality software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/XuXuClassMate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <CodeXml className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/xuxuclassmate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <UserRoundCheck className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/xuxuclassmate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Bird className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@xuxuclassmate.com"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} XuXu. All rights reserved.
          </p>
          
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
