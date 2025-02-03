import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Twitter, Mail, ChevronDown, Smartphone, Layers, Send, Code, Zap, Cpu, ArrowRight, DogIcon, Notebook, MessageCircleIcon, BotIcon, NotepadText, Calculator, Newspaper, DollarSign, NewspaperIcon, Linkedin, ArrowDownToLine, Phone, Clock } from 'lucide-react'
import img from './assets/mydog.png'
import img1 from './assets/calculator.png'
import img2 from './assets/todo.png'
import Resume from './assets/Resume.pdf'
import { Link } from 'react-router-dom'

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      {`${words[index].substring(0, subIndex)}${subIndex === words[index].length ? '' : '|'}`}
    </span>
  );
};

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

export const projects = [
{
  id: '10',
  title: 'Pomo Timer',
  description: 'Pomodoro Timer app designed to help users stay focused and boost productivity with customizable features like custom timer, background according to the custom background music, integrated todo with room and saved settings using datastore',
  videoUrl: 'https://www.youtube.com/embed/JCUmk2c3YIk?si=ySqeDmTx0rQFKSqU',
  technologies: ['Kotlin', 'Jetpack Compose','Room Database', 'Datastore'],
  icon: <Clock className="w-8 h-8 text-yellow-400" />,
  color: "from-yellow-400 to-orange-500"
},
{
  id: '0',
  title: 'Chat App',
  description: 'This is a real time chat application made using Kotlin as programming language and Jetpack compose for UI. To support the real time chat Firebase realtime database has been used.',
  videoUrl: 'https://www.youtube.com/embed/iHGFtZezuqA?si=x3_IE3NBPeBwJsgM',
  technologies: ['Kotlin', 'Jetpack Compose','Firebase', 'Realtime Database'],
  icon: <MessageCircleIcon className="w-8 h-8 text-yellow-400" />,
  color: "from-yellow-400 to-orange-500"
},
{ 
  id: '9',
  title: "zVideoCaller",
  description: "This is a video caller app made using Zego Cloud Service. For this project Kotlin is used as the programming langugage and Jetpack compose is used for the UI.",
  icon: <Smartphone className="w-8 h-8 text-green-400" />,
    videoUrl: 'https://www.youtube.com/embed/Y4bI75vXVBk?si=5QLwkfQoZ-HEld_3',
technologies: ['Kotlin', 'Jetpack Compose', 'Zego Cloud'],
icon: <Phone className="w-8 h-8 text-yellow-400" />,
  color: "from-green-400 to-teal-500"
},
  { 
    id: '2',
    title: "Local Vibes (IOS)",
    description: "Local Vibes is a local event finder application made for IOS platform using Swift as the programming language. It is a local event finder app where user can create event, read, update and delete it, add organisers and many more",
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
      videoUrl: 'https://www.youtube.com/embed/ZMINrbLLX3E?si=0ny8sqbzAbMD_rhV',
  technologies: ['Swift', 'Storyboard', 'IOS'],
  icon: <DogIcon className="w-8 h-8 text-yellow-400" />,
    color: "from-green-400 to-teal-500"
  },
  { 
    id: '3',
    title: "MyDog",
    description: "MyDog is an android application made using Java and Xmls for the UI. Its a petcare application specially focused on dogs....",
    icon: <DogIcon className="w-8 h-8 text-yellow-50" />,
      videoUrl: 'https://www.youtube.com/embed/kUTNGbS-uEo?si=uP1hjT4NKT9VDx7U',
  technologies: ['Java', 'Xmls', 'Android'],
  icon: <DogIcon className="w-8 h-8 text-gray-100" />,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    id: '4',
    title: "To Do App",
    description: "This is a to do application made with Kotlin and Jetpack compose. It supports room database and stores data locally...",
    icon: <Notebook className="w-8 h-8 text-yellow-400" />,
      videoUrl: 'https://www.youtube.com/embed/rvYSVu4BmiA?si=5ojx3t40fGj1IBOT',
  technologies: ['Kotlin', 'Jetpack Compose','Android', 'Room Database'],
  icon: <NotepadText className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    id: '5',
    title: "Calculator application",
    description: "Calculator application demo. An android app created using Kotlin and Jetpack compose for UI.",
    icon: <Send className="w-8 h-8 text-yellow-400" />,
      videoUrl: 'https://youtube.com/embed/Bp3Pi_ABhsM?si=EVejNjQWE1xVRLLR',
  technologies: ['Kotlin', 'Jetpack Compose','Android'],
  icon: <Calculator className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    id: '6',
    title: "News Now",
    description: "Simple news application that fetches data from News API. Made for android using Kotlin and Jetpack compose having search functionality.",
    icon: <Send className="w-8 h-8 text-yellow-400" />,
      videoUrl: 'https://youtube.com/embed/LlnoZLcQyKo',
  technologies: ['Kotlin', 'Jetpack Compose','API','Android'],
  icon: <Newspaper className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    id: '7',
    title: "Crypto App",
    description: "This a crypto data displaying app that fetches data from the API and displays it to the user. Simple app created using Kotlin and Jetpack compose",
    icon: <Send className="w-8 h-8 text-yellow-400" />,
      videoUrl: 'https://youtube.com/embed/Pivk1VHhAs8',
  technologies: ['Kotlin', 'Jetpack Compose','API','Android'],
  icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    id: '8',
    title: "News App",
    description: "This is a demo of news application named Khabar. It simply fetches news from NewsApi and displays it. Has onboarding screens, shimmer effects, search functionality, saves bookmarks and many more.",
    icon: <Send className="w-8 h-8 text-yellow-400" />,
      videoUrl: 'https://www.youtube.com/embed/c3NPK7wBpa8?si=J8nJpCINv29JRqYT',
  technologies: ['Kotlin', 'Jetpack Compose','API','Android'],
  icon: <NewspaperIcon className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  



]

const PhoneGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img,
    img1,
    img2
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[300px] h-[600px] bg-gray-800 rounded-[60px] p-4 shadow-lg">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-3xl"></div>
      <div className="w-full h-full bg-white rounded-[48px] overflow-hidden relative">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`App Screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
    </div>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'works']
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
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'My Works', id: 'works' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            <Link href = "/"> 
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Portfolio
            </span>
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
              <a href={Resume} download className='bg-white flex items-center gap-2 text-blue-800 rounded-full px-3 py-2 cursor-pointer hover:bg-slate-300'>
                <span>Download Resume</span>
                <ArrowDownToLine className="w-5 h-8" />
              </a>
              
            </div>
          </motion.div>
        </nav>
      </header>

      <main className="relative pt-20">
        <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <FloatingIcon icon={Code} delay={0} />
            <FloatingIcon icon={Smartphone} delay={1} />
            <FloatingIcon icon={Zap} delay={2} />
            <FloatingIcon icon={Cpu} delay={3} />
          </div>
          <motion.div
            className="text-center z-10 md:w-1/2 px-6 md:px-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Hi, I am Bijaya Gurung
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
              Final year student at Academy of Interactive Technology currently studying Mobile Apps Development.
            </p>
            <p className="text-xl md:text-2xl mb-8">
             Having experience in <TypeWriter words={['React Native', 'iOS Development', 'Android Development', 'API Integration', 'Java', 'Kotlin', 'Swift']} />
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-full"
                onClick={() => scrollToSection('works')}
              >
                Explore My Works
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <PhoneGallery />
          </motion.div>
        </section>

        <section id="skills" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['React Native', 'iOS Development', 'Android Development', 'Kotlin', 'API Integration', 'Java'].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6 rounded-lg shadow-lg text-center backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{['📱', '🍎', '🤖', '🎨', '👾', '☕️'][index]}</div>
                  <h3 className="text-xl font-semibold text-white">{skill}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              My Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg">
                    <div className="p-6">
                      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                      <div className="mt-4 flex justify-end">
                        <Link to={`/${project.id}`}>
                          <button className="text-blue-400 hover:text-blue-300 group flex items-center">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
              <a href="https://www.linkedin.com/in/bzay" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-8 h-8" />
                </motion.div>
                <span className="sr-only">LinkedIn</span>
              </a>
             
              <a href="mailto:12510@ait.nsw.edu.au" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
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