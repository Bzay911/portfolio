import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, Twitter, aedin, Mail, Code, Smartphone, Layers, Send, Zap, Cpu, DogIcon, Notebook } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { projects } from './Portfolio'



const techIcons = {
  'React': <Code className="w-6 h-6" />,
  'React Native': <Smartphone className="w-6 h-6" />,
  'iOS': <Layers className="w-6 h-6" />,
  'Android': <Smartphone className="w-6 h-6" />,
  'Node.js': <Zap className="w-6 h-6" />,
  'MongoDB': <Cpu className="w-6 h-6" />,
  'Swift': <Send className="w-6 h-6" />,
  'Kotlin': <Send className="w-6 h-6" />,
  'Flutter': <Send className="w-6 h-6" />,
}

const FloatingIcon = ({ icon: Icon, delay }) => {
  return (
    <motion.div
      className="absolute text-gray-700 opacity-20"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        transition: { repeat: Infinity, duration: 3, delay }
      }}
    >
      <Icon size={32} />
    </motion.div>
  );
};

const ProjectDetail = ({ project }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

  let { id } = useParams();

  const prj = projects.filter((x)=>x.id==id)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'video', 'technologies']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Overview', id: 'overview' },
    { name: 'Demo Video', id: 'video' },
    { name: 'Technologies', id: 'technologies' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Default project data if not provided
  const defaultProject = {
...prj[0]
  }

  const { title, description, videoUrl, technologies, icon, color } = project || defaultProject

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <motion.div 
            className="flex justify-between items-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          <Link href="/Portfolio">
        <a className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Portfolio
        </a>
      </Link>
           
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`text-white hover:text-blue-400 ${activeSection === item.id ? 'text-blue-400' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        </nav>
      </header>

      <main className="relative pt-20">
        <section id="overview" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-24">
          <div className="absolute inset-0">
            <FloatingIcon icon={Code} delay={0} />
            <FloatingIcon icon={Smartphone} delay={1} />
            <FloatingIcon icon={Zap} delay={2} />
            <FloatingIcon icon={Cpu} delay={3} />
          </div>
          <motion.div
            className="text-center z-10 px-6 md:px-12 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`w-24 h-24 mx-auto rounded-full mb-8 flex items-center justify-center bg-gradient-to-br ${color}`}>
              {icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              {description}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-full"
                onClick={() => scrollToSection('video')}
              >
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </section>

        <section id="video" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Project Demo
            </h2>
            <motion.div 
              className="aspect-w-16 aspect-h-9 mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full h-[500px] rounded-lg shadow-lg transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsVideoLoaded(true)}
              />
            </motion.div>
          </div>
        </section>

        <section id="technologies" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6 rounded-lg shadow-lg text-center backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{techIcons[tech] || '🔧'}</div>
                  <h3 className="text-xl font-semibold text-white">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <p className="text-gray-400 text-lg">&copy; 2024 Bijaya. Transforming ideas into digital realities.</p>
            <div className="flex space-x-8">
              <a href="https://github.com/Bzay911" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-8 h-8" />
                </motion.div>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://x.com/Bzay_03" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-8 h-8" />
                </motion.div>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <aedin className="w-8 h-8" />
                </motion.div>
                <span className="sr-only">aedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-8 h-8" />
                </motion.div>
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProjectDetail