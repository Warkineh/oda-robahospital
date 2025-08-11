'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useLanguage } from '../context/LanguageContext'

const About = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false)
  const { language } = useLanguage()

  // Translations
  const translations = {
    en: {
      title: "About Us",
      subtitle: "New Standards in Bale Robe Healthcare",
      description: "Bringing fresh, modern healthcare to our community",
      approach: "A Fresh Approach to Healthcare",
      mission: "Established by a dedicated team of 30 doctors, our hospital embodies a spirit of unity and collaboration. We aspire to provide comprehensive healthcare services under one roof, ensuring that all types of care are accessible to the community. Located in Bale, Robe city, Eastern Ethiopia, we are committed to enhancing the health and well-being of our patients through compassionate and quality medical care.",
      highlights: [
        {
          icon: "🆕",
          title: "Brand New",
          subtitle: "State-of-the-art facilities",
          color: "text-blue-600 dark:text-blue-400"
        },
        {
          icon: "🌟",
          title: "Modern",
          subtitle: "Cutting-edge equipment",
          color: "text-purple-600 dark:text-purple-400"
        },
        {
          icon: "❤️",
          title: "Dedicated",
          subtitle: "Compassionate care team",
          color: "text-red-600 dark:text-red-400"
        }
      ]
    },
    am: {
      title: "ስለ እኛ",
      subtitle: "በባሌ ሮቤ የጤና እንክብካቤ ውስጥ አዲስ ደረጃዎች",
      description: "ለማህበረሰባችን ዘመናዊ የጤና አገልግሎት እያቀረብን ነው",
      approach: "ዘመናዊ የጤና አገልግሎት አቀራረብ",
      mission: "በ 30 ዶክተሮች ቡድን የተቋቋመው ሆስፒታላችን የአንድነትና የትብብር መንፈስን ያቀፈ ነው። አጠቃላይ የጤና አጠባበቅ አገልግሎቶችን በአንድ ጣሪያ ስር ለማቅረብ እንፈልጋለን፣ ይህም ሁሉም ዓይነት እንክብካቤዎች ለህብረተሰቡ ተደራሽ መሆናቸውን በማረጋገጥ ነው። በምስራቅ ኢትዮጵያ በሮቤ ከተማ በባሌ የሚገኝ ሲሆን ርህራሄ እና ጥራት ባለው የህክምና አገልግሎት የታካሚዎቻችንን ጤና እና ደህንነት ለማሳደግ ቁርጠኞች ነን።።",
      highlights: [
        {
          icon: "🆕",
          title: "አዲስ",
          subtitle: "ዘመናዊ መገልገያዎች",
          color: "text-blue-600 dark:text-blue-400"
        },
        {
          icon: "🌟",
          title: "ዘመናዊ",
          subtitle: "ዘመናዊ መሳሪያዎች",
          color: "text-purple-600 dark:text-purple-400"
        },
        {
          icon: "❤️",
          title: "የተሰጠ",
          subtitle: "ርኅራኄ ያለው የእንክብካቤ ቡድን",
          color: "text-red-600 dark:text-red-400"
        }
      ]
    },
    om: {
      title: "Waa'ee Keenya",
      subtitle: "Sadarkaa Haaraa Eegumsa Fayyaa Baalee Roobeetiif",
      description: "Kunuunsa fayyaa haaraa, ammayyaa hawaasa keenyaaf fiduuf",
      approach: "Mala Haaraa Eegumsa Fayyaa",
      mission: "Garee of kenne doktoroota 30 of keessaa qabuun kan hundeeffame hospitaalli keenya hafuura tokkummaa fi tumsa of keessaa qaba. Tajaajila eegumsa fayyaa bal’aa baaxii tokko jalatti kennuudhaaf hawwina, gosti kunuunsaa hundi hawaasaaf akka dhaqqabamu mirkaneessuudhaani. Baha Itoophiyaa magaalaa Roobee Baalee keessatti kan argamnu yoo ta'u, kunuunsa fayyaa gara laafinaafi qulqullina qabuun fayyaa fi nageenya yaalamtoota keenyaa guddisuuf kutannoo qabna.",
      highlights: [
        {
          icon: "🆕",
          title: "Haaraa",
          subtitle: "Bu'uuraalee ammayyaa",
          color: "text-blue-600 dark:text-blue-400"
        },
        {
          icon: "🌟",
          title: "Ammayyaa",
          subtitle: "Meeshaalee ammayyaa",
          color: "text-purple-600 dark:text-purple-400"
        },
        {
          icon: "❤️",
          title: "Ofkennaa",
          subtitle: "Garee kunuunsa gara laafessa",
          color: "text-red-600 dark:text-red-400"
        }
      ]
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      <motion.div 
        id='about' 
        className='w-full px-[5%] lg:px-[12%] py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      >
        <motion.div 
          className='text-center mb-16'
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-Ovo mb-4 text-gray-800 dark:text-white'>
            <span className='text-blue-600 dark:text-blue-400'>{translations[language].title}</span>
          </h1>
         <h5 className='text-3xl md:text-4xl lg:text-5xl font-Ovo mb-4 text-gray-800 dark:text-white'>
  {translations[language].subtitle}
</h5>
          <p className='text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
            {translations[language].description}
          </p>
          <div className='w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6' />
        </motion.div>

        <motion.div 
          className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
        >
          <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-full sm:w-80 lg:w-96 relative'
          >
            <div className='absolute -inset-4 bg-blue-200 dark:bg-blue-900 rounded-3xl -z-10 rotate-3'></div>
            <Image 
              src={assets.user_image} 
              alt='Our modern medical facility' 
              className='w-full rounded-3xl shadow-xl border-4 border-white dark:border-gray-800'
              width={400}
              height={500}
            />
          </motion.div>

          <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.66, delay: 0.3}}
            className='flex-1'
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white'>
              {translations[language].approach}
            </h3>
            
            <p className='mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify'>
              {translations[language].mission}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {translations[language].highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: index * 0.1 + 0.5}}
                  className={`p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all ${item.color} border-l-4 ${item.color.replace('text', 'border')}`}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About