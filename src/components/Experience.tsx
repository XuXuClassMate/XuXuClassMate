'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin,
  Award,
  TrendingUp
} from 'lucide-react'

const experiences = [
  {
    title: 'Senior Test Engineer',
    company: '某科技公司',
    period: '2022 - Present',
    location: 'Remote',
    description: {
      en: 'Leading test automation initiatives and architecting comprehensive testing solutions for cloud-native applications.',
      zh: '领导测试自动化计划，为云原生应用架构设计综合测试解决方案。'
    },
    highlights: [
      'Implemented automated testing framework reducing test time by 70%',
      'Led Kubernetes testing strategy for microservices architecture',
      'Mentored team of 5 QA engineers',
      'Introduced AI-powered testing tools'
    ],
    icon: TrendingUp
  },
  {
    title: 'Test Automation Engineer',
    company: '某互联网企业',
    period: '2020 - 2022',
    location: 'Beijing, China',
    description: {
      en: 'Developed and maintained automated test suites for web and mobile applications.',
      zh: '为 Web 和移动应用开发和维护自动化测试套件。'
    },
    highlights: [
      'Built CI/CD pipelines with 95% test coverage',
      'Reduced production bugs by 60% through comprehensive testing',
      'Implemented performance testing framework',
      'Integrated testing into DevOps workflow'
    ],
    icon: Award
  },
  {
    title: 'QA Engineer',
    company: '某软件公司',
    period: '2018 - 2020',
    location: 'Shanghai, China',
    description: {
      en: 'Performed manual and automated testing for enterprise software products.',
      zh: '为企业软件产品执行手动和自动化测试。'
    },
    highlights: [
      'Executed test cases for 50+ releases',
      'Developed automated regression test suites',
      'Collaborated with development teams on quality standards',
      'Documented test plans and reports'
    ],
    icon: Building2
  }
]

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: '某大学',
    period: '2014 - 2018',
    location: 'China',
    description: {
      en: 'Focused on Software Engineering and Quality Assurance',
      zh: '专注于软件工程和质量保证'
    }
  }
]

export default function Experience() {

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600" />

              {/* Experiences */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 w-16 h-16 bg-white dark:bg-slate-800 rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg">
                      <exp.icon className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {exp.description.en}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Skills Summary */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {edu.description.en}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg text-white"
            >
              <h3 className="text-xl font-bold mb-4">Career Highlights</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-blue-100 text-sm">Projects Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">70%</div>
                  <div className="text-blue-100 text-sm">Test Time Reduced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-blue-100 text-sm">Test Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
