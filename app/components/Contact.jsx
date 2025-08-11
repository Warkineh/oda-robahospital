'use client'
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

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  // Test Firebase connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const testRef = ref(database, 'connection_test');
        await push(testRef, { test: new Date().toISOString() });
        console.log('Firebase connection successful!');
      } catch (error) {
        console.error('Firebase connection failed:', error);
      }
    };
    testConnection();
  }, [database]);

  // Multilingual content
  const content = {
    en: {
      getInTouch: "GET IN TOUCH",
      title: "Contact",
      hospitalName: "Oda Roba Hospital",
      subtitle: "Our team is available 24/7 to answer your questions and assist with appointments.",
      sendMessage: "Send Us a Message",
      fullName: "Full Name",
      emailAddress: "Email Address",
      yourMessage: "Your Message",
      sendButton: "Send Message",
      contactDetails: "Our Contact Details",
      emergencyHotline: "Emergency Hotline",
      available247: "24/7 Available",
      email: "Email Address",
      responseTime: "Response within 24 hours",
      location: "Hospital Location",
      address: "Bale Robe (in front of Robe Secondary School)",
      region: "Oromia, Ethiopia",
      workingHours: "Working Hours",
      emergencyServices: "24/7 Emergency Services",
      sending: "Sending your message...",
      success: "Thank you! Your message has been received. We'll contact you shortly.",
      error: "There was an error submitting your form. Please try again."
    },
    am: {
      getInTouch: "አግኙን",
      title: "አግኙን",
      hospitalName: "ኦዳ ሮባ ሆስፒታል",
      subtitle: "ቡድናችን ለጥያቄዎችዎ ምላሽ ለመስጠት እና ለቀጠሮዎች እርዳታ ለመስጠት ሁልጊዜ ዝግጁ ነው።",
      sendMessage: "መልእክት ይላኩልን",
      fullName: "ሙሉ ስም",
      emailAddress: "ኢሜይል አድራሻ",
      yourMessage: "መልእክትዎ",
      sendButton: "መልእክትዎን ይላኩ",
      contactDetails: "የእኛ የግንኙነት ዝርዝሮች",
      emergencyHotline: "የአደጋ ጊዜ የስልክ መስመር",
      available247: "ሁልጊዜ ይገኛል",
      email: "ኢሜይል አድራሻ",
      responseTime: "በ24 ሰዓታት ውስጥ መልስ እንሰጣለን",
      location: "የሆስፒታሉ አድራሻ",
      address: "ባሌ ሮቤ (የሮቤ ሁለተኛ ደረጃ ትምህርት ቤት ፊት ለፊት)",
      region: "ኦሮሚያ, ኢትዮጵያ",
      workingHours: "የስራ ሰዓቶች",
      emergencyServices: "24/7 የአደጋ ጊዜ አገልግሎቶች",
      sending: "መልእክትዎ እየተላከ ነው...",
      success: "እናመሰግናለን! መልእክትዎ ደርሶናል። በቅርቡ ምላሽ እንሰጥዎታለን።",
      error: "በቅጹ ላይ ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።"
    },
    om: {
      getInTouch: "Karaa Kanaan Nu Qunnamuu Dandeessu",
      title: "Hospitaala Odaa Roobaa",
      hospitalName: " Qunnamuuf",
      subtitle: "Gareen keenya gaaffii keessan deebisuuf yeroo hundaa qophaa'aadha.",
      sendMessage: "Ergaa Keessan Nuuf Ergaa",
      fullName: "Maqaa Guutuu",
      emailAddress: "Email Keessan",
      yourMessage: "Ergaa Keessan",
      sendButton: "Yaada Keessan Ergaa",
      contactDetails: "Karaalee Ittiin Nu Argattan",
      emergencyHotline: "Bilbila Gargaarsaa",
      available247: "Yeroo hunda jirra",
      email: "Email Keenya",
      responseTime: "Sa'aatii 24 keessatti isiniif deebisna",
      location: "Bakka Hospitaalli keennya itti argamu",
      address: "Baalee Roobee (mana barumsaa sadarkaa lammaffaa Roobee fuul-dura)",
      region: "Oromiyaa, Itiyoophiyaa",
      workingHours: "Yeroo Hojii",
      emergencyServices: "Tajaajiloota keenya yeroo hundaa(24/7) ni argattu",
      sending: "Ergaan keessan ergamaa jira...",
      success: "Galatoomaa! Ergaa keessan nu dhaqqabee jira. Yeroo gabaabaa keessatti isiniif deebisna.",
      error: "Ergaa keessan erguudhaaf dogoggorri uumamee jira. Maaloo irra deebi'aa yaalaa."
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setResult(content[language].sending);
    
    const formData = new FormData(event.target);
    const messageData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      language: language // Track which language was used
    };

    try {
      const messagesRef = ref(database, 'messages');
      await push(messagesRef, messageData);
      
      setResult(content[language].success);
      event.target.reset();
      
      // Log success to console for debugging
      console.log('Message sent:', messageData);
    } catch (error) {
      console.error("Firebase Error:", error);
      setResult(error.code === 'PERMISSION_DENIED' 
        ? "Database permission denied. Please contact support." 
        : content[language].error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='contact' 
        className={`w-full py-20 px-4 sm:px-6 scroll-mt-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            >
              {content[language].getInTouch}
            </motion.h4>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              {content[language].title} <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{content[language].hospitalName}</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`h-1.5 mx-auto mb-6 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'}`}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {content[language].subtitle}
            </motion.p>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'} shadow-xl`}>
                <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content[language].sendMessage}
                </h3>
                
                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      <label className={`block mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {content[language].fullName} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'en' ? "Your name" : language === 'am' ? "ስምዎ" : "Maqaa keessan"} 
                        required 
                        className={`w-full px-5 py-3.5 rounded-lg border transition-all duration-300 focus:ring-2
                                  ${isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-900/50 text-white' 
                                    : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                        name='name'
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.0, duration: 0.6 }}
                    >
                      <label className={`block mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {content[language].emailAddress} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        placeholder={language === 'en' ? "your.email@example.com" : language === 'am' ? "ኢሜይል አድራሻዎ" : "email keessan"} 
                        required 
                        className={`w-full px-5 py-3.5 rounded-lg border transition-all duration-300 focus:ring-2
                                  ${isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-900/50 text-white' 
                                    : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                        name='email'
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="mb-8"
                  >
                    <label className={`block mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {content[language].yourMessage} <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows='6' 
                      placeholder={language === 'en' ? "How can we help you?" : language === 'am' ? "ምን እንርዳዎት?" : "Maal isin haa gargaarru?"} 
                      required
                      className={`w-full px-5 py-3 rounded-lg border transition-all duration-300 focus:ring-2
                                ${isDarkMode 
                                  ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-900/50 text-white' 
                                  : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                      name='message'
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type='submit'
                      disabled={isSubmitting}
                      className={`px-10 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 mx-auto transition-all shadow-lg
                                ${isDarkMode 
                                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-700/30' 
                                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/30'}
                                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {content[language].sending}
                        </span>
                      ) : (
                        <>
                          {content[language].sendButton}
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity
                            }}
                          >
                            <Image src={assets.right_arrow_white} alt='' width={20} height={20} className="w-5" />
                          </motion.span>
                        </>
                      )}
                    </motion.button>

                    {result && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`mt-6 text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        {result}
                      </motion.p>
                    )}
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`lg:w-1/2 p-4 sm:p-6 md:p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'} shadow-xl`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {content[language].contactDetails}
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Emergency Hotline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-row items-start gap-4 p-4 rounded-xl bg-white/20 dark:bg-gray-700/20"
                >
                  <div className={`p-2 sm:p-3 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-xs sm:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].emergencyHotline}
                    </h4>
                    <p className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+251 908 55 6677</p>
                    <p className={`mt-1 text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].available247}
                    </p>
                  </div>
                </motion.div>

                {/* Email - Fixed overflow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="flex flex-row items-start gap-4 p-4 rounded-xl bg-white/20 dark:bg-gray-700/20"
                >
                  <div className={`p-2 sm:p-3 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-xs sm:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].email}
                    </h4>
                    <p className={`text-sm sm:text-base md:text-lg font-semibold break-all ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      odaroba2015@gmail.com
                    </p>
                    <p className={`mt-1 text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].responseTime}
                    </p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="flex flex-row items-start gap-4 p-4 rounded-xl bg-white/20 dark:bg-gray-700/20"
                >
                  <div className={`p-2 sm:p-3 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-xs sm:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].location}
                    </h4>
                    <p className={`text-sm sm:text-base md:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {content[language].address}
                    </p>
                    <p className={`mt-1 text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].region}
                    </p>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex flex-row items-start gap-4 p-4 rounded-xl bg-white/20 dark:bg-gray-700/20"
                >
                  <div className={`p-2 sm:p-3 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-xs sm:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {content[language].workingHours}
                    </h4>
                    <p className={`text-sm sm:text-base md:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {content[language].emergencyServices}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact