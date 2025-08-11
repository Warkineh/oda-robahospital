'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useLanguage } from '../context/LanguageContext'

const Home = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false)
  const { language } = useLanguage()

  // Translations
  const translations = {
    en: {
      welcome: "Welcome to Oda Roba Hospital Official Website",
      headline1: "Many Hands,",
      headline2: "One Goal: Your Health",
      description: "Providing exceptional healthcare through our",
      departments: "12+ specialized departments",
      with: "with compassionate professionals",
      contact: "Contact Us",
      services: "Our Services",
      stats: [
        { value: '12+', label: 'Specialized Departments' },
        { value: '30+', label: 'Specialists and Sub-specialists' },
        { value: '24/7', label: 'Emergency Care' }
      ]
    },
    am: {
      welcome: "እንኳን ወደ ኦዳ ሮባ ሆስፒታል ድረ-ገጽ በደህና መጡ",
      headline1: "ብዙ እጆች፣",
      headline2: "አንድ አላማ፡ ጤናዎ",
      description: "ልዩ የጤና እንክብካቤን",
      departments: "በ12+ ልዩ ክፍሎቻችን",
      with: "በአዛኝ ባለሙያዎች በማቅረብ ላይ",
      contact: "አግኙን",
      services: "አገልግሎቶቻችን",
      stats: [
        { value: '12+', label: 'ልዩ የሆኑ ክፍሎች' },
        { value: '30+', label: 'ስፔሻሊስቶች እና ንዑስ-ስፔሻሊስቶች' },
        { value: '24/7', label: 'የድንገተኛ ጊዜ እንክብካቤ' }
      ]
    },
    om: {
      welcome: "Baga nagaan gara maarsariitii Hospitaala Odaa Robaatti dhuftan",
      headline1: "Harka hedduu,",
      headline2: "Kaayyoo tokko: Fayyaa keessan",
      description: "Kunuunsa fayyaa addaa",
      departments: "kutaalee addaa keenya 12+",
      with: "ogeessota gara laafessa ta'aniin kennuu irratti argamna",
      contact: "Nu qunnamuuf",
      services: "Tajaajiloota keenya",
      stats: [
        { value: '12+', label: 'kutaalee addaa' },
        { value: '30+', label: 'Ispeeshaalistootaa fi sab-ispeeshaalistoota' },
        { value: '24/7', label: 'Kunuunsa Hatattamaa' }
      ]
    }
  }

  // Stable random function that won't cause hydration mismatches
  const stableRandom = (seed, multiplier) => {
    const x = Math.sin(seed * multiplier) * 10000
    return x - Math.floor(x)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 relative
                    ${isDarkMode ? 'bg-gradient-to-b from-gray-900/90 to-gray-800/90' : 'bg-gradient-to-b from-blue-50/90 to-white/90'}`}
        style={{
          backgroundImage: isDarkMode ? "url('/home_dark_bg.png')" : "url('/home_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/20'}`}></div>

        {/* Animated Background Elements - Client-side only */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(6)].map((_, i) => {
              const size = stableRandom(i, 123) * 200 + 100
              const left = stableRandom(i, 456) * 100
              const top = stableRandom(i, 789) * 100
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 0.1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.2,
                    type: "spring",
                    damping: 20
                  }}
                  className={`absolute rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${left}%`,
                    top: `${top}%`,
                    filter: 'blur(60px)',
                    willChange: 'transform, opacity'
                  }}
                />
              )
            })}
          </div>
        )}

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center mt-10 sm:mt-16 md:mt-20">
          {/* Logo with Floating Animation */}
          <motion.div
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              type: 'spring',
              stiffness: 120,
              damping: 10
            }}
            whileHover={{ 
              y: -10,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.6 }
            }}
            className="relative group mb-6 sm:mb-8" 
          >
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"/>
            <Image 
              src={assets.profile_img} 
              alt="Hospital Logo" 
              width={140}
              height={140}
              className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover border-[5px] border-white shadow-2xl"
            />
            <div className={`absolute -inset-2 rounded-full border-2 ${isDarkMode ? 'border-blue-400/30' : 'border-blue-600/30'} animate-pulse`} />
          </motion.div>

          {/* Welcome Text - Responsive for all screen sizes */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center mb-4 sm:mb-6"
          >
            <h3 className={`flex flex-wrap justify-center items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center px-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {translations[language].welcome}
            </h3>
            
            {/* Animated decorative line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent my-3 sm:my-4`}
              style={{ maxWidth: '300px' }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight sm:leading-snug mb-4 sm:mb-6 px-2
                        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="relative inline-block">
              <span className="relative z-10">{translations[language].headline1}</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`absolute bottom-1 left-0 h-2 sm:h-3 ${isDarkMode ? 'bg-blue-500/30' : 'bg-blue-400/40'} z-0 rounded-full`}
              />
            </span>
            <br />
            <span className={`relative bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-800'} bg-clip-text text-transparent`}>
              {translations[language].headline2}
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className={`text-lg sm:text-xl max-w-3xl mx-auto text-center px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } mb-6 sm:mb-10`}
          >
            {translations[language].description} <span className="font-semibold text-blue-500">{translations[language].departments}</span> {translations[language].with}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 20px -5px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg font-semibold transition-all
                          ${isDarkMode 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'}`}
            >
              {translations[language].contact}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <Image src={assets.right_arrow_white} alt="arrow" width={20} height={20} className="w-4 sm:w-5" />
              </motion.span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg font-semibold transition-all border-2
                          ${isDarkMode 
                            ? 'border-blue-400 text-blue-400 hover:bg-blue-900/30' 
                            : 'border-blue-600 text-blue-600 hover:bg-blue-100'}`}
            >
              {translations[language].services}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className={`mt-12 sm:mt-16 w-full max-w-4xl grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-800/50' : 'bg-white/70'
            } shadow-lg`}
          >
            {translations[language].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-1 sm:mb-2`}>
                  {stat.value}
                </p>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home