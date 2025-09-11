import Layout from '../components/Layout'
import { useState } from 'react'

const dummyProjects = [
  {
    title: `Optimy`,
    description: `Manage and align grants, volunteering, donation, and sponsorship programs.`,
    tags: ['Vue', 'Laravel', 'Bootstrap', 'Tailwind', 'Twig', 'Bitbucket'],
    image: "./optimy.png",
    link: "https://www.optimy.com/",
    note: "Saas"
  },
  {
    title: `Meeting Pulse`,
    description: `Put registration, real-time polling, voting, Q&A, scheduling, ideation, sentiment analysis or any response in the hands of your audience, employees or participants, all on one powerful, browser-based audience participation app`,
    tags: ['Vue', 'Bootstrap', 'Rivets', 'Firebase'],
    image: "./meetingpulse.png",
    link: "https://www.meetingpulse.com/",
    note: "Saas"
  },
  {
    title: `LDMS`,
    description: `Lake Database Management System for monitoring and managing water quality data.`,
    tags: ['Vue 3', 'Laravel', 'Vite', 'Tailwind', 'MySQL'],
    image: "./dholakia.png",
    link: "https://www.dholakia.app/"
  },
  {
    title: `SMS Blaster`,
    description: `Send bulk SMS to multiple contacts in CSV files using globelabs API.`,
    tags: ['JS', 'jQuery', 'Bootstrap', 'HTML5'],
    image: "./smsblaster.png",
    link: "https://github.com/bryanjarito/smsblaster"
  },
  {
    title: `Todo App - Next.js`,
    description: `Todo application built with Next.js and Tailwind CSS.`,
    tags: ['Next.js', 'JSX', 'Tailwind'],
    image: "./todonextjs.png",
    link: "https://github.com/bryanjarito/Todo-Next",
    note: "Practice"
  },
  {
    title: `Popular Movies - Laravel`,
    description: `Fetch list of popular movies from MovieDBAPI using Laravel`,
    tags: ['Laravel', 'Bootstrap'],
    image: "./laravel-themoviedbAPI.png",
    link: "https://github.com/bryanjarito/Laravel-themoviedbAPI",
    note: "Practice"
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Layout>
      <section className="mt-8 mb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my recent work and technical projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeIn 0.5s ease-out ${idx * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img src={project.image} alt="" />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title} <span className="text-red-500">{project.note ? '(' + project.note + ')' : ''}</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div role="alert" className="relative flex items-start p-4 rounded-lg bg-blue-100 text-blue-800">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-blue-500">
          
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
        </div>
        <div className="ml-3 flex-1">
          <p className="font-semibold">Old Projects Unavailable!</p>
          <p className="text-sm">No longer have a backup or copy of the other projects mentioned in the Resume.</p>
        </div>
        <button className="ml-4 text-blue-500 hover:text-blue-700" type="button">
          <span className="sr-only">Close</span>

          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>


      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  )
}
