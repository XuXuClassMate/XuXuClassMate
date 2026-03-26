'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { 
  Code2, 
  TestTube2, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  Terminal,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Download
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const t = useTranslations('Hero')
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* 测试元素背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 代码片段装饰 */}
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-20 left-10 text-6xl text-blue-500/20 font-mono"
        >
          {'<Test />'}
        </motion.div>
        
        {/* 复选框装饰 */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-40 right-20 text-8xl text-green-500/20"
        >
          <CheckCircle2 />
        </motion.div>
        
        {/* 终端样式装饰 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-1/3 right-10 text-4xl text-purple-500/20 font-mono"
        >
          {'$ npm test'}
        </motion.div>
        
        {/* 试管装饰 */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-20 left-20 text-7xl text-cyan-500/20"
        >
          <TestTube2 />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* GitHub 头像 */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="mb-8 inline-block relative"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="https://avatars.githubusercontent.com/u/76080484?v=4"
                alt="XuXu Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 测试通过徽章 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg"
            >
              <CheckCircle2 className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* 标题 */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            {t('title')}
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
          >
            {t('subtitle')}
          </motion.p>

          {/* 描述 */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>

          {/* 技能标签 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {['Testing', 'Automation', 'Kubernetes', 'Web3', 'CI/CD', 'Python', 'Go'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                {t('cta_primary')}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                {t('cta_secondary')}
              </motion.button>
            </Link>

            {/* PWA 安装按钮 */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              onClick={() => {
                // PWA 安装逻辑
                alert('Install as App: Tap Share → Add to Home Screen (iOS) or Install App (Android)')
              }}
            >
              <Download className="w-5 h-5" />
              Install App
            </motion.button>
          </motion.div>

          {/* 社交媒体链接 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="https://github.com/XuXuClassMate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/xuxuclassmate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
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
