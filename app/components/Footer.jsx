import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { useLanguage } from '../context/LanguageContext';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrmbjhhJLJim7J3sUOT_H_BztUmzfq834",
  authDomain: "oda-roba-hospital.firebaseapp.com",
  databaseURL: "https://oda-roba-hospital-default-rtdb.firebaseio.com/", 
  projectId: "oda-roba-hospital",
  storageBucket: "oda-roba-hospital.appspot.com",
  messagingSenderId: "798845061187",
  appId: "1:798845061187:web:681b2f24e631243702acf6",
  measurementId: "G-5NMH3173QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Footer = ({ isDarkMode }) => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Multilingual content
  const content = {
    en: {
      navItems: [
        { name: 'Home', href: '#top' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Machines', href: '#machines' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Teams', href: '#teams' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact', href: '#contact' }
      ],
      footerLinks: [
        { 
          title: 'Services', 
          links: [
            { name: 'Emergency Care', href: '#' },
            { name: 'OPD Services', href: '#' },
            { name: 'Diagnostics', href: '#' },
            { name: 'Specialized Care', href: '#' }
          ]
        },
        { 
          title: 'Contact', 
          links: [
            { name: 'Bale Robe, Oromia, Ethiopia', href: '#contact' },
            { name: 'odaroba2015@gmail.com', href: 'mailto:odarobahospital@gmail.com' },
            { name: '+251 222 44 3000', href: 'tel:+251222443000' },
            { name: 'Emergency: 251 908 55 6677', href: 'tel:+251908556677' }
          ]
        }
      ],
      description: 'Providing compassionate and comprehensive healthcare services to our community since 2024.',
      navigation: 'Navigation',
      copyright: `© ${currentYear} Oda Roba Hospital. All rights reserved.`,
      hospitalName: 'Oda Roba Hospital',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number'
    },
    am: {
      navItems: [
        { name: 'ዋና ገጽ', href: '#top' },
        { name: 'ስለ እኛ', href: '#about' },
        { name: 'አገልግሎቶች', href: '#services' },
        { name: 'ማሽኖች', href: '#machines' },
        { name: 'ዶክተሮች', href: '#doctors' },
        { name: 'ቡድኖች', href: '#teams' },
        { name: 'ብሎጎች', href: '#blogs' },
        { name: 'አግኙን', href: '#contact' }
      ],
      footerLinks: [
        { 
          title: 'አገልግሎቶች', 
          links: [
            { name: 'የአደጋ ጊዜ አገልግሎት', href: '#' },
            { name: 'OPD አገልግሎቶች', href: '#' },
            { name: 'የጤና ምርመራ', href: '#' },
            { name: 'ልዩ ህክምና', href: '#' }
          ]
        },
        { 
          title: 'አግኙን', 
          links: [
            { name: 'ባሌ ሮቤ, ኦሮሚያ, ኢትዮጵያ', href: '#contact' },
            { name: 'odaroba2015@gmail.com', href: 'mailto:odarobahospital@gmail.com' },
            { name: '+251 222 44 3000', href: 'tel:+251222443000' },
            { name: 'ስልክ: 251 908 55 6677', href: 'tel:+251908556677' }
          ]
        }
      ],
      description: 'ከ2024 ጀምሮ ለማህበረሰባችን ርኅራኄ ያለው እና የተሟላ የጤና አገልግሎት እየሰጠን ነው።',
      navigation: 'አገናኞች',
      copyright: `© ${currentYear} ኦዳ ሮባ ሆስፒታል. ሁሉም መብቶች የተጠበቁ ናቸው።`,
      hospitalName: 'ኦዳ ሮባ ሆስፒታል',
      emailLabel: 'ኢሜይል አድራሻ',
      phoneLabel: 'ስልክ ቁጥር'
    },
    om: {
      navItems: [
        { name: 'Fuula-ijoo', href: '#top' },
        { name: 'Waa\'ee Keenya', href: '#about' },
        { name: 'Tajaajiloota', href: '#services' },
        { name: 'Mashinoota', href: '#machines' },
        { name: 'Doktortoota', href: '#doctors' },
        { name: 'Gareewwan', href: '#teams' },
        { name: 'Oduuwwan', href: '#blogs' },
        { name: 'Nu Qunnamuuf', href: '#contact' }
      ],
      footerLinks: [
        { 
          title: 'Tajaajiloota', 
          links: [
            { name: 'Tajaajila Hatattamaaa', href: '#' },
            { name: 'Tajaajila OPD', href: '#' },
            { name: 'Qorannoo Fayyaa', href: '#' },
            { name: 'Tajaajila Addaa', href: '#' }
          ]
        },
        { 
          title: 'Teessoo', 
          links: [
            { name: 'Baalee Roobee, Oromiyaa, Itoophiyaa', href: '#contact' },
            { name: 'odaroba2015@gmail.com', href: 'mailto:odarobahospital@gmail.com' },
            { name: '+251 222 44 3000', href: 'tel:+251222443000' },
            { name: 'Bilbila: +251 908 55 6677', href: 'tel:+251908556677' }
          ]
        }
      ],
      description: 'Bara 2024 irraa eegalee tajaajila eegumsa fayyaa si’ataa fi bal’aa hawaasa keenyaaf kennaa jirra.',
      navigation: 'Geessituuwwan',
      copyright: `© ${currentYear} Hospitaala Odaa Roobaa. Mirgi hundi kan eeggamedha.`,
      hospitalName: 'Hospitaala Odaa Roobaa',
      emailLabel: 'Email Keenya',
      phoneLabel: 'Bilbila Keenya'
    }
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      href: "https://www.instagram.com/oda_roba_hospital?igsh=amFvdjN5cWY0bGFk" 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ), 
      href: "https://www.facebook.com/profile.php?id=61565832213198" 
    },
    { 
      name: 'Telegram', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ), 
      href: "https://t.me/Oda_Roba_Hospital" 
    },
    { 
      name: 'Tiktok', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"></path>
          <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path>
        </svg>
      ), 
      href: "https://www.tiktok.com/@oda.roba_hospital?_t=ZM-8yNetpsunY5&_r=1" 
    }
  ];

  // Icon components with consistent styling
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <footer className={`w-full ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Hospital Logo and Description - Updated for mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Image 
                src={isDarkMode ? (assets.logo_dark || assets.logo) : assets.logo} 
                alt={content[language].hospitalName} 
                width={160}
                height={80}
                className="w-28 sm:w-36 mx-auto sm:mx-0"
              />
              <motion.span
                className={`text-lg sm:text-xl font-bold bg-gradient-to-r text-center sm:text-left 
                  ${isDarkMode 
                    ? 'from-blue-300 via-blue-400 to-blue-500' 
                    : 'from-blue-500 via-blue-600 to-blue-700'} 
                  bg-clip-text text-transparent tracking-tight`}
              >
                {content[language].hospitalName}
              </motion.span>
            </div>
            
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center sm:text-left`}>
              {content[language].description}
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <motion.a
                href="mailto:odarobahospital@gmail.com"
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                <MailIcon />
                <span>
                  {content[language].emailLabel}:<br className="sm:hidden" /> odaroba2015@gmail.com
                </span>
              </motion.a>
              
              <motion.a
                href="tel:+251908556677"
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                <PhoneIcon />
                <span>
                  {content[language].phoneLabel}:<br className="sm:hidden" /> +251 908 55 6677
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links in Two Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center`}>
              {content[language].navigation}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {content[language].navItems.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-center sm:text-left"
                >
                  <a 
                    href={item.href} 
                    className={`text-sm sm:text-base transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Footer Links */}
          {content[language].footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center`}>
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-center sm:text-left"
                  >
                    <a 
                      href={link.href} 
                      className={`text-sm sm:text-base transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8 }}
          className={`my-8 sm:my-10 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-center sm:text-left`}
          >
            {content[language].copyright}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 sm:gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-1.5 sm:p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                aria-label={social.name}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 block">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;