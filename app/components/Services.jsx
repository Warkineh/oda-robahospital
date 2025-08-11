'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from '../context/LanguageContext';

const Services = ({ isDarkMode }) => {
  const [expandedCards, setExpandedCards] = useState([]);
  const { language } = useLanguage();

  const toggleCardExpand = (index) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Complete translations for all services
  const translations = {
    en: {
      title: "Our",
      highlightedTitle: "Healthcare Services",
      subtitle: "Comprehensive healthcare across 12+ specialized departments",
      showLess: "Show Less",
      learnMore: "Learn More",
      services: [
        { 
          name: 'Internal Medicine', 
          icon: '🩺',
          shortDesc: 'Comprehensive adult healthcare',
          fullDesc: 'Our internists provide personalized care for adults, managing both common and complex illnesses with evidence-based approaches.'
        },
        { 
          name: 'General Surgery', 
          icon: '🔪',
          shortDesc: 'Advanced surgical procedures',
          fullDesc: 'From appendectomies to hernia repairs, our surgeons perform minimally invasive procedures with precision and care.'
        },
        { 
          name: 'Orthopedics', 
          icon: '🦴',
          shortDesc: 'Bone and joint specialists',
          fullDesc: 'We treat musculoskeletal conditions including sports injuries, arthritis, and fractures with both surgical and non-surgical methods.'
        },
        { 
          name: 'Pediatrics', 
          icon: '👶',
          shortDesc: 'Child healthcare experts',
          fullDesc: 'Our pediatricians provide compassionate care from infancy through adolescence, including vaccinations and developmental screenings.'
        },
        { 
          name: 'Gynecology', 
          icon: '🌸',
          shortDesc: "Women's health services",
          fullDesc: 'Comprehensive care including annual exams, contraceptive counseling, and treatment for gynecological conditions.'
        },
        { 
          name: 'Dermatology', 
          icon: '🧴',
          shortDesc: 'Skin condition treatment',
          fullDesc: 'Diagnosis and treatment of skin disorders, cosmetic procedures, and skin cancer screenings with advanced technologies.'
        },
        { 
          name: 'Maxillofacial', 
          icon: '🦷',
          shortDesc: 'Oral and facial surgery',
          fullDesc: 'Specialized surgical treatment for dental implants, facial trauma, corrective jaw surgery, and oral pathology.'
        },
        { 
          name: 'Radiology', 
          icon: '🩻',
          shortDesc: 'Diagnostic imaging',
          fullDesc: 'High-quality imaging services including X-rays, ultrasounds and MRIs with expert interpretation.'
        },
        { 
          name: 'Pathology', 
          icon: '🔬',
          shortDesc: 'Lab testing and analysis',
          fullDesc: 'Accurate diagnostic testing including blood work, biopsies, and microbiology services for precise diagnoses.'
        },
        { 
          name: 'Cardiology', 
          icon: '❤️',
          shortDesc: 'Heart health specialists',
          fullDesc: 'Comprehensive cardiac care including EKGs, stress tests, echocardiograms, and management of heart conditions.'
        },
        { 
          name: 'ENT', 
          icon: '👂',
          shortDesc: 'Ear, nose and throat care',
          fullDesc: 'Treatment for hearing disorders, sinus conditions, tonsillitis, and other ENT-related health issues.'
        },
        { 
          name: 'Ophthalmology', 
          icon: '👁️',
          shortDesc: 'Eye care and vision services',
          fullDesc: 'Complete eye care including vision correction, cataract surgery, glaucoma treatment, and retinal exams.'
        }
      ]
    },
    am: {
      title: "የእኛ",
      highlightedTitle: "የጤና አገልግሎቶች",
      subtitle: "አጠቃላይ የጤና እንክብካቤ በ12+ ልዩ ክፍሎች",
      showLess: "በትንሹ አሳይ",
      learnMore: "ተጨማሪ ይመልከቱ",
      services: [
        { 
          name: 'የውስጥ ሕክምና', 
          icon: '🩺',
          shortDesc: 'አጠቃላይ የአዋቂዎች የጤና እንክብካቤ',
          fullDesc: 'የእኛ የውስጥ ስፔሻሊስቶች ሁለቱንም የተለመዱ እና ውስብስብ በሽታዎች በማስረጃ ላይ የተመሰረቱ አካሄዶችን በማስተዳደር ለአዋቂዎች ግላዊ እንክብካቤ ይሰጣሉ።'
        },
        { 
          name: 'አጠቃላይ ቀዶ ጥገና', 
          icon: '🔪',
          shortDesc: 'የላቀ የቀዶ ጥገና ሂደቶች',
          fullDesc: 'የቀዶ ጥገና ሀኪሞቻችን ከአፓንቴክቶሚዎች እስከ ሄርኒያ ጥገና ድረስ በትንሹ ወራሪ ሂደቶችን በትክክል እና በጥንቃቄ ያከናውናሉ።'
        },
        { 
          name: 'ኦርቶፔዲክስ', 
          icon: '🦴',
          shortDesc: 'የአጥንት እና የመገጣጠሚያዎች ስፔሻሊስቶች',
          fullDesc: 'የስፖርት ጉዳቶችን፣ የአርትራይተስ እና የአጥንት ስብራትን ጨምሮ የጡንቻኮላክቶሌሽን ሁኔታዎችን በሁለቱም በቀዶ ጥገና እና በቀዶ ጥገና ባልሆኑ ዘዴዎች እያከምን ነው።'
        },
        { 
          name: 'የሕፃናት ሕክምና', 
          icon: '👶',
          shortDesc: 'በሕፃናት ጤና ባለሙያዎች',
          fullDesc: 'የኛ የሕፃናት ሐኪሞች ክትባቶችን እና የእድገት ምርመራዎችን ጨምሮ ከሕፃንነት እስከ ጉርምስና ጊዜ ድረስ ርህራሄ ይሰጣሉ።'
        },
        { 
          name: 'ጋይኖኮሎጂ', 
          icon: '🌸',
          shortDesc: 'የሴቶች ጤና አገልግሎቶች',
          fullDesc: 'አጠቃላይ እንክብካቤ ዓመታዊ ምርመራዎችን፣ የወሊድ መከላከያ ምክሮችን እና የማህፀን ህክምናን ጨምሮ።'
        },
        { 
          name: 'የቆዳ ሕክምና', 
          icon: '🧴',
          shortDesc: 'የቆዳ ችግሮች ሕክምና',
          fullDesc: 'የቆዳ በሽታዎችን መመርመር እና ማከም, የመዋቢያ ቅደም ተከተሎች እና የቆዳ ነቀርሳ ምርመራዎች በላቁ ቴክኖሎጂዎች ይከናወናል።'
        },
        { 
          name: 'የአፍ እና የፊት ሕክምና', 
          icon: '🦷',
          shortDesc: 'የአፍ እና የፊት ቀዶ ጥገና',
          fullDesc: 'ልዩ የቀዶ ጥገና ሕክምና ለጥርስ ተከላ ፣ ለፊት ላይ ጉዳት ፣ የማስተካከያ መንጋጋ ቀዶ ጥገና እና የአፍ ውስጥ ፓቶሎጂ።'
        },
        { 
          name: 'ራዲዮሎጂ', 
          icon: '🩻',
          shortDesc: 'የምርመራ ምስሎች',
          fullDesc: 'ከፍተኛ ጥራት ያላቸው የምስል አገልግሎቶች ኤክስሬይ፣ አልትራሳውንድ፣ እና ኤምአርአይ ከባለሙያ ትርጓሜ ጋር።'
        },
        { 
          name: 'ፓቶሎጂ', 
          icon: '🔬',
          shortDesc: 'የላብራቶሪ ምርመራ እና ትንታኔ',
          fullDesc: 'ለትክክለኛ ምርመራዎች የደም ሥራን፣ ባዮፕሲዎችን እና የማይክሮባዮሎጂ አገልግሎቶችን ጨምሮ ትክክለኛ የምርመራ ምርመራ።'
        },
        { 
          name: 'ካርዲዮሎጂ', 
          icon: '❤️',
          shortDesc: 'በልብ ጤና ባለሙያዎች',
          fullDesc: 'አጠቃላይ የልብ እንክብካቤ EKGዎችን፣ የጭንቀት ሙከራዎችን፣ echocardiogramsን፣ እና የልብ ሁኔታዎችን አያያዝን ጨምሮ።'
        },
        { 
          name: 'ENT', 
          icon: '👂',
          shortDesc: 'የጆሮ፣ አፍንጫ እና ጉሮሮ እንክብካቤ',
          fullDesc: 'የመስማት ችግር, የ sinus ሁኔታዎች, የቶንሲል በሽታ እና ሌሎች ከ ENT ጋር የተያያዙ የጤና ጉዳዮች ሕክምና።'
        },
        { 
          name: 'የዓይን ሕክምና', 
          icon: '👁️',
          shortDesc: 'የዓይን እንክብካቤ እና የእይታ አገልግሎቶች',
          fullDesc: 'የተሟላ የዓይን እንክብካቤ የእይታ ማስተካከያ፣ የዓይን ሞራ ግርዶሽ ቀዶ ጥገና፣ የግላኮማ ህክምና እና የሬቲና ምርመራዎችን ያካትታል።'
        }
      ]
    },
    om: {
      title: "Tajaajiloota Fayyaa",
      highlightedTitle: "Keenya",
      subtitle: "Kunuunsa fayyaa kutaalee addaa 12+ irratti",
      showLess: "Xiqqeessuu",
      learnMore: "Odeeffannoo dabalataaf",
      services: [
        { 
          name: 'Yaala Keessoo', 
          icon: '🩺',
          shortDesc: 'Kunuunsa fayyaa ga’eessotaa bal’aa',
          fullDesc: 'Ogeeyyiin keessaa keenyaa ga’eessotaaf kunuunsa dhuunfaa ni kennu, dhukkuboota beekamoo fi walxaxaa mala ragaa irratti hundaa’een ni yaalu'
        },
        { 
          name: 'Baqaqsanii Hodhuu Waliigalaa', 
          icon: '🔪',
          shortDesc: 'Hojimaata baqaqsanii hodhuu sadarkaa olaanaa',
          fullDesc: 'Appendectomies irraa kaasee hanga suphaa herniaatti, ogeeyyiin baqaqsanii hodhuu keenya sirritti fi of eeggannoodhaan raawwatu.'
        },
        { 
          name: 'Ortoopeediksii', 
          icon: '🦴',
          shortDesc: 'Ogeessota lafee fi buusaa',
          fullDesc: 'Miidhama ispoortii, dhukkuba arthritis, fi caba dabalatee haala maashaalee lafee mala baqaqsanii hodhuu fi baqaqsanii hodhuu malee ni yaalla.'
        },
        { 
          name: 'Yaala Daa’immanii', 
          icon: '👶',
          shortDesc: 'Ogeessota eegumsa fayyaa daa’immaniitiin',
          fullDesc: 'Ogeeyyiin fayyaa daa’immanii keenya daa’imummaa irraa kaasee hanga dargaggummaatti kunuunsa gara laafina qabu, talaallii fi qorannoo guddinaa dabalatee ni kennu.'
        },
        { 
          name: 'Fayyaa dubartootaa', 
          icon: '🌸',
          shortDesc: 'Tajaajiloota fayyaa dubartootaa',
          fullDesc: 'Qorannoo guutuu, gorsa ittisa ulfaa, fi wal’aansa haalawwan dubartootaa dabalatee kunuunsa bal’aa haadholiif ni kennina.'
        },
        { 
          name: 'Gogaa (Dermatology) ', 
          icon: '🧴',
          shortDesc: 'Qorannoo dhukkuboota gogaa',
          fullDesc: 'Rakkoo gogaa, adeemsa miidhaginaa, fi qorannoo kaansarii gogaa teknooloojiiwwan sadarkaa olaanaa qabaniin adda baasuun ni yaalla.'
        },
        { 
          name: 'Maaksilofeeshaalii', 
          icon: '🦷',
          shortDesc: 'Qorannoo afaanii fi fuulaa',
          fullDesc: 'Wal’aansa baqaqsanii hodhuu addaa, miidhaa fuulaa, baqaqsanii hodhuu, sirreessuu fi paatolojii afaanii.'
        },
        { 
          name: 'Raadiyooloojii', 
          icon: '🩻',
          shortDesc: 'Suuraan adda baasuu',
          fullDesc: 'Tajaajila suuraa qulqullina olaanaa qabu kanneen akka X-ray, ultrasound, fi MRI hiikkaa ogeessaa waliin.'
        },
        { 
          name: 'Paatooloojii', 
          icon: '🔬',
          shortDesc: 'Qorannoo fi xiinxala laabraatoorii',
          fullDesc: 'Qorannoo dhiigaa, baayoopsii, fi tajaajila maaykiroobaayoloojii dabalatee qorannoo sirrii ta’eef.'
        },
        { 
          name: 'Kaardiyooloojii', 
          icon: '❤️',
          shortDesc: 'Qorannoo fayyaa onnee',
          fullDesc: 'Kunuunsa onnee bal’aa EKG, qorannoo dhiphina, echocardiograms, fi bulchiinsa haala onnee dabalatee.'
        },
        { 
          name: 'ENT', 
          icon: '👂',
          shortDesc: 'Qorannoo gurra, funyaanii fi qoonqoo',
          fullDesc: 'Wal’aansa rakkoo dhageettii, haala saayinisii, dhukkuba tonsilii fi dhimmoota fayyaa ENT wajjin walqabatan biroo.'
        },
        { 
          name: 'Yaala Ijaa', 
          icon: '👁️',
          shortDesc: 'Tajaajila kunuunsa ijaa ',
          fullDesc: 'Kunuunsa ijaa guutuu kan agartuu sirreessuu, baqaqsanii hodhuu ijaa,  fi qorannoo retiinaa dabalatee.'
        }
      ]
    }
  };

  return (
    <section id='services' className={`py-12 px-2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-2 sm:px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {translations[language].title} <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{translations[language].highlightedTitle}</span>
          </h2>
          <div className={`w-20 h-1 mx-auto mb-3 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations[language].subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {translations[language].services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-lg p-3 sm:p-4 flex flex-col transition-all duration-300
                        ${isDarkMode 
                          ? 'bg-gray-800 border-gray-700 hover:shadow-blue-900/20' 
                          : 'bg-white border-gray-200 hover:shadow-lg'}
                        border hover:shadow-md ${expandedCards.includes(index) ? 'h-auto' : 'h-44'}`}
            >
              <div className={`flex items-start mb-2 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl mr-3
                              ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
                >
                  {service.icon}
                </motion.div>
                <h3 className={`text-md font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {service.name}
                </h3>
              </div>
              
              <p className={`mb-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.shortDesc}
              </p>
              
              {expandedCards.includes(index) && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mb-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {service.fullDesc}
                </motion.p>
              )}
              
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleCardExpand(index)}
                className={`mt-auto text-xs sm:text-sm font-medium self-start flex items-center
                           ${isDarkMode 
                             ? 'text-blue-400 hover:text-blue-300' 
                             : 'text-blue-600 hover:text-blue-800'}`}
              >
                {expandedCards.includes(index) ? translations[language].showLess : translations[language].learnMore}
                <svg 
                  className={`w-3 h-3 ml-1 transition-transform duration-300
                            ${expandedCards.includes(index) ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;