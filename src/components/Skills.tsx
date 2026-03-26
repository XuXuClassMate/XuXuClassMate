'use client'

import { motion } from 'framer-motion'
import { 
  TestTube2, 
  Code2, 
  Cpu, 
  Globe, 
  Shield,
  Zap,
  Database,
  Cloud,
  Terminal
} from 'lucide-react'

const skillCategories = [
  {
    key: 'testing',
    icon: TestTube2,
    color: 'from-green-500 to-emerald-600',
    skills: [
      { name: '自动化测试', level: 95, icon: Zap },
      { name: '性能测试', level: 90, icon: Zap },
      { name: 'Kubernetes 测试', level: 88, icon: Shield },
      { name: 'Web3 测试', level: 85, icon: Globe },
      { name: '测试开发', level: 92, icon: Code2 }
    ]
  },
  {
    key: 'automation',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'CI/CD', level: 90, icon: Terminal },
      { name: 'Test Automation', level: 95, icon: Zap },
      { name: 'AI Agents', level: 85, icon: Cpu },
      { name: 'Workflow Automation', level: 88, icon: Cpu }
    ]
  },
  {
    key: 'devops',
    icon: Cloud,
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'Kubernetes', level: 88, icon: Cloud },
      { name: 'Docker', level: 90, icon: Cloud },
      { name: 'Monitoring', level: 85, icon: Shield },
      { name: 'Cloud Platforms', level: 82, icon: Cloud }
    ]
  },
  {
    key: 'programming',
    icon: Code2,
    color: 'from-orange-500 to-red-600',
    skills: [
      { name: 'Python', level: 92, icon: Code2 },
      { name: 'Go', level: 85, icon: Code2 },
      { name: 'Java', level: 88, icon: Code2 },
      { name: 'TypeScript', level: 80, icon: Code2 }
    ]
  }
]

export default function Skills() {

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Title
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Subtitle
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.key === 'testing' && 'Testing & Automation'}
                  {category.key === 'automation' && 'CI/CD & DevOps'}
                  {category.key === 'devops' && 'Cloud & Infrastructure'}
                  {category.key === 'programming' && 'Programming Languages'}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut" 
                        }}
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            More Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Pytest', 'Selenium', 'Appium', 'JMeter', 
              'GitLab CI', 'Jenkins', 'GitHub Actions',
              'Prometheus', 'Grafana', 'ELK Stack',
              'AWS', 'Azure', 'GCP',
              'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
              'Linux', 'Shell Scripting', 'REST APIs', 'GraphQL'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
