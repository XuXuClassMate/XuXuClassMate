'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  TestTube2, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  Terminal,
  CodeXml,
  UserRoundCheck,
  Mail,
  ChevronRight,
  Download
} from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/76080484?v=4"
                alt="XuXu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              XuXu
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-4"
          >
            Senior Test Engineer & Automation Expert
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            Exploring cutting-edge testing technologies, from automated testing to test development. 
            Currently focused on Web3 testing and Kubernetes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              View Projects
              <ChevronRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/XuXuClassMate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <CodeXml className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/xuxuclassmate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              <UserRoundCheck className="w-8 h-8" />
            </a>
            <a
              href="mailto:contact@xuxuclassmate.com"
              className="text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
