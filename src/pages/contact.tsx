import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = [
    {
      type: 'Mobile',
      value: '+639161864945',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      type: 'Email',
      value: 'bryan.jarito@gmail.com',
      link: 'mailto:bryan.jarito@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      type: 'LinkedIn',
      value: 'https://linkedin.com/in/bryan-jarito',
      link: 'https://linkedin.com/in/bryan-jarito',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      type: 'Get a copy of my resume',
      icon: (
        <img width="50" height="50" src="https://img.icons8.com/color/50/resume.png" alt="resume"/>
      ),
      class: 'mt-8'
    },
  ]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume.pdf'
    link.download = 'BryanlyJarito-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Layout>
      <section className="mt-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.type}
                className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow ${info.class ?? ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">{info.type}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                          target={info.type === 'Email' ? undefined : '_blank'}
                          rel={info.type === 'Email' ? undefined : 'noopener noreferrer'}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.value}</span>
                      )}
                    </div>
                  </div>
                  { info.class === 'mt-8' ? 
                  <button
                    onClick={() => downloadResume()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Copy to clipboard"
                  >
                    <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/download--v1.png" alt="download--v1"/>
                  </button>
                  : 
                  <button
                    onClick={() => copyToClipboard(info.value!, info.type)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied === info.type ? (
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
