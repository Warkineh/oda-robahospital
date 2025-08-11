'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()
  const { language, changeLanguage } = useLanguage()

  // Language configuration - Simplified
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'am', name: 'አማርኛ' },
    { code: 'om', name: 'Afaan Oromoo' }
  ]

  // Translated navigation items
  const navItems = {
    en: [
      { name: 'Home', href: '#top' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Machines', href: '#machines' },
      { name: 'Doctors', href: '#doctors' },
      { name: 'Teams', href: '#teams' },
      { name: 'Blogs', href: '#blogs' },
      { name: 'Contact', href: '#contact' }
    ],
    am: [
      { name: 'ገጽ', href: '#top' },
      { name: 'ስለ እኛ', href: '#about' },
      { name: 'አገልግሎቶች', href: '#services' },
      { name: 'ማሽኖች', href: '#machines' },
      { name: 'ዶክተሮች', href: '#doctors' },
      { name: 'ቡድኖች', href: '#teams' },
      { name: 'ዜናዎች', href: '#blogs' },
      { name: 'አግኙን', href: '#contact' }
    ],
    om: [
      { name: 'Fuula', href: '#top' },
      { name: 'Waa\'ee', href: '#about' },
      { name: 'Tajaajila', href: '#services' },
      { name: 'Mashina', href: '#machines' },
      { name: 'Doktora', href: '#doctors' },
      { name: 'Garee', href: '#teams' },
      { name: 'Oduu', href: '#blogs' },
      { name: 'Qunnamuuf', href: '#contact' }
    ]
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simplified language change handler
  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    // Keep menu open after language change
  }

  // Get contact text based on language
  const getContactText = () => {
    switch (language) {
      case 'am': return 'አግኙን';
      case 'om': return 'Nu qunnamuuf';
      default: return 'Contact Us';
    }
  }

  return (
    <>
      {/* Background Decoration */}
      <motion.div 
        className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </motion.div>

      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed px-3 py-2 sm:px-4 sm:py-3 md:px-5 lg:px-8 flex items-center justify-between z-50 transition-all duration-300
          ${isScroll 
            ? "bg-white/95 backdrop-blur-md shadow-sm dark:bg-gray-900/95 dark:shadow-gray-800/30" 
            : "bg-transparent"}`}
      >
        {/* Logo - Responsive sizing */}
        <motion.a 
          href="#top"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0"
        >
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt="Oda Roba Hospital Logo" 
            width={140}
            height={60}
            className='w-24 md:w-28 lg:w-36 cursor-pointer transition-transform duration-300'
          />
        </motion.a>

        {/* Desktop Navigation - Tablet optimization */}
        <motion.ul 
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 transition-all duration-300
            ${isScroll 
              ? "bg-white/90 dark:bg-gray-800/90 shadow-lg rounded-full" 
              : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {navItems[language].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a 
                href={item.href}
                className={`font-medium px-3 py-1.5 rounded-full transition-colors duration-300 text-sm md:text-[0.92rem] lg:text-base
                  ${isDarkMode 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'}`}
              >
                {item.name}
                <motion.span 
                  className={`absolute bottom-1 left-1/2 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ transform: 'translateX(-50%)' }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side Controls - Optimized for tablet */}
        <div className='flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4'>
          {/* Compact Language Selector */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={`appearance-none pl-2 pr-6 py-1 rounded-full cursor-pointer text-xs sm:text-sm md:text-[0.92rem] border-none outline-none ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-gray-200 text-gray-700'
              }`}
              aria-label="Select language"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <div className={`absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none text-[10px] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-500'
            }`}>
              ▼
            </div>
          </motion.div>

          {/* Theme Toggle - Responsive */}
          <motion.button 
            onClick={() => setIsDarkMode(prev => !prev)}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-1.5 sm:p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt={isDarkMode ? 'Light mode' : 'Dark mode'} 
              width={20}
              height={20}
              className="w-3.5 sm:w-4 transition-transform duration-300 hover:rotate-12"
            />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className='block md:hidden p-1.5 sm:p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Image 
              src={isDarkMode ? assets.menu_white : assets.menu_black} 
              alt="Menu" 
              width={24}
              height={24}
              className="w-5 sm:w-6 transition-transform duration-300 hover:rotate-90"
            />
          </motion.button>
        </div>

        {/* Mobile Menu - Tablet optimized */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black"
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`fixed inset-y-0 right-0 w-72 z-50 h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl flex flex-col`}
                aria-modal="true"
                role="dialog"
              >
                {/* Fixed Header Section */}
                <div className="p-4 sm:p-5 pb-0 flex-shrink-0">
                  <div className="flex justify-end mb-4 sm:mb-5">
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 sm:p-2"
                      aria-label="Close menu"
                    >
                      <Image 
                        src={isDarkMode ? assets.close_white : assets.close_black} 
                        alt="Close" 
                        width={20}
                        height={20}
                        className="w-4 sm:w-5"
                      />
                    </motion.button>
                  </div>

                  {/* Theme Toggle and Language Selector */}
                  <div className="flex items-center gap-3 mb-4 px-2">
                    <motion.button 
                      onClick={() => setIsDarkMode(prev => !prev)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2.5 rounded-full flex items-center justify-center ${
                        isDarkMode 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                      <Image 
                        src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                        alt="" 
                        width={20}
                        height={20}
                        className="w-4 sm:w-5"
                      />
                    </motion.button>

                    <select
                      value={language}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      className={`flex-1 p-2 text-sm rounded-lg ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                      aria-label="Select language"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Scrollable Content Section */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-5">
                  <ul className="flex flex-col gap-3 sm:gap-3.5">
                    {navItems[language].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, type: 'spring' }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-base font-medium px-4 py-3 rounded-lg transition-all duration-300
                            ${isDarkMode 
                              ? 'text-gray-200 hover:bg-gray-700 hover:pl-6' 
                              : 'text-gray-800 hover:bg-gray-100 hover:pl-6'}`}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Fixed Footer Section */}
                <div className="p-4 sm:p-5 pt-0 flex-shrink-0">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full font-medium transition-all duration-300 hover:gap-3 text-sm
                        ${isDarkMode 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                      {getContactText()}
                      <Image 
                        src={assets.right_arrow_white} 
                        alt="" 
                        width={16}
                        height={16}
                        className="w-3.5 sm:w-4"
                      />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar