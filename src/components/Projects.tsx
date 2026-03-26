'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { 
  Github, 
  ExternalLink, 
  Code2, 
  TestTube2, 
  Cpu,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react'

const projects = [
  {
    name: 'Trading Assistant',
    description: {
      en: 'Advanced trading analysis system with 10+ technical indicators, automated daily reports, and AI-powered predictions',
      zh: '高级交易分析系统，包含 10+ 技术指标、自动化日报和 AI 预测'
    },
    icon: TrendingUp,
    github: 'https://github.com/XuXuClassMate/trading-assistant',
    live: 'https://clawhub.ai/xuxuclassmate/trading-assistant',
    tech: ['Python', 'Technical Analysis', 'AI/ML', 'Automation'],
    featured: true,
    status: 'Published on ClawHub'
  },
  {
    name: 'OpenClaw Automation',
    description: {
      en: 'Intelligent automation framework for AI agents with proactive capabilities and self-improving memory systems',
      zh: '智能 AI 代理自动化框架，具有主动能力和自我改进记忆系统'
    },
    icon: Cpu,
    github: 'https://github.com/XuXuClassMate/claw-auto',
    tech: ['TypeScript', 'AI Agents', 'Automation', 'Memory Systems'],
    featured: true,
    status: 'Active Development'
  },
  {
    name: 'Test Automation Framework',
    description: {
      en: 'Comprehensive testing framework supporting automated testing, performance testing, and CI/CD integration',
      zh: '综合测试框架，支持自动化测试、性能测试和 CI/CD 集成'
    },
    icon: TestTube2,
    github: 'https://github.com/XuXuClassMate/My_Test_PyProject',
    tech: ['Python', 'Pytest', 'Selenium', 'CI/CD'],
    featured: true,
    status: 'Production Ready'
  },
  {
    name: 'Kubernetes Testing Tools',
    description: {
      en: 'Tools and utilities for testing Kubernetes deployments, monitoring, and orchestration',
      zh: 'Kubernetes 部署、监控和编排测试工具和实用程序'
    },
    icon: Shield,
    github: 'https://github.com/XuXuClassMate',
    tech: ['Kubernetes', 'Go', 'Docker', 'Monitoring'],
    featured: false,
    status: 'In Progress'
  },
  {
    name: 'Web3 Testing Platform',
    description: {
      en: 'Testing platform for blockchain applications, smart contracts, and Web3 technologies',
      zh: '区块链应用、智能合约和 Web3 技术测试平台'
    },
    icon: Globe,
    github: 'https://github.com/XuXuClassMate',
    tech: ['Web3', 'Solidity', 'Blockchain', 'Testing'],
    featured: false,
    status: 'Research Phase'
  },
  {
    name: 'Java Test Projects',
    description: {
      en: 'Collection of Java-based testing projects demonstrating various testing patterns and frameworks',
      zh: '基于 Java 的测试项目集合，展示各种测试模式和框架'
    },
    icon: Code2,
    github: 'https://github.com/XuXuClassMate/My_Test_JAProject',
    tech: ['Java', 'JUnit', 'TestNG', 'Maven'],
    featured: false,
    status: 'Learning Projects'
  }
]

export default function Projects() {
  const t = useTranslations('Projects')

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Status Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="p-6 pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description.en}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="px-6 pb-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  {t('view_code')}
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t('live_demo')}
                  </a>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/XuXuClassMate?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
