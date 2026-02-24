import Layout from '../components/Layout'
import { useState } from 'react'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ]

  const skills = [
    { category: 'Frontend', items: ['Vue 2', 'Vue 3', 'Angular', 'React', 'Next.js', 'Nuxt', 'TypeScript', 'Bootstrap', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Laravel', 'CodeIgniter', 'Node.js', 'Python', 'Express', 'MySQL', 'PostgreSQL', 'Firebase', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Gulp', 'Webpack', 'Vite', 'Jira', 'Postman', 'Docker', 'AWS'] }
  ]

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Clark Outsourcing (Remote)',
      link: 'https://clarkoutsourcing.com/',
      period: 'October 2025 - Present',
      description: 'Maintaining and enhancing a e-commerce platform using Vue.js, Nuxt.js, Node.js - <a href="https://spectorandco.com/" class="text-blue-500">https://spectorandco.com/</a>'
    },
    {
      role: 'Frontend Developer',
      company: 'Eastvantage (Remote)',
      link: 'https://eastvantage.com/',
      period: 'November 2022 - September 2025',
      description: 'Modernizing legacy SaaS codebase by migrating to Vue.js and implementing new features using Vue.js - <a href="https://www.optimy.com/" class="text-blue-500">https://www.optimy.com/</a>'
    },
    {
      role: 'VueJS Developer',
      company: 'Codev (Remote)',
      link: 'https://www.codev.com/',
      period: 'May 2021 - October 2022',
      description: 'Updating and maintain a SaaS using Vue.js, Rivets.js, Backbone.js, firebase, etc. - <a href="https://meetingpulse.net/" class="text-blue-500">https://meetingpulse.net/</a>'
    },
    {
      role: 'Software Engineer',
      company: 'Sprobe Inc.',
      link: 'https://sprobe.com/',
      period: 'December 2018 - April 2021',
      description: 'Experience building software applications from frontend to backend, and also had the opportunity to lead and manage a development team.'
    },
    {
      role: 'Fullstack Web Developer',
      company: 'Bluefrog Support & Contents Inc.',
      link: 'http://bluefrog.codes/',
      period: 'June 2018 - September 2018',
      description: 'Designed and developed a player portal for an online casino platform. Contributed to the project for several months before the company unfortunately went bankrupt.'
    },
    {
      role: 'Software Developer',
      company: 'Freelance | Project-based',
      link: 'https://eastvantage.com/',
      period: 'June 2014 - January 2025',
      description: 'Building applications for small businesses and clients using a variety of technologies.'
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Eastern Visayas State University - Ormoc City Campus',
      link: 'https://evsu.edu.ph',
      year: '2010 - 2014'
    }
  ]

  return (
    <Layout>
      <section className="mt-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            About Me
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            An experienced fullstack developer passionate about creating exceptional digital experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white shadow-md text-blue-600 transform scale-105'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillSet) => (
                  <div
                    key={skillSet.category}
                    className="transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">{skillSet.category}</h3>
                    <ul className="space-y-2">
                      {skillSet.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-gray-700"
                        >
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:-translate-x-1"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-blue-600"><a href={exp.link} target="_blank">{exp.company}</a></p>
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600"><a href={edu.link} target="_blank">{edu.school}</a></p>
                    <p className="text-gray-600">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
