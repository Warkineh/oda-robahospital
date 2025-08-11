import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrmbjhhJLJim7J3sUOT_H_BztUmzfq834",
  authDomain: "oda-roba-hospital.firebaseapp.com",
  databaseURL: "https://oda-roba-hospital-default-rtdb.firebaseio.com",
  projectId: "oda-roba-hospital",
  storageBucket: "oda-roba-hospital.appspot.com",
  messagingSenderId: "798845061187",
  appId: "1:798845061187:web:681b2f24e631243702acf6",
  measurementId: "G-5NMH3173QS"
};

// Initialize Firebase only if it hasn't been initialized already
let app;
let database;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
} else {
  app = getApps()[0];
  database = getDatabase(app);
}

const Blogs = ({ isDarkMode }) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  // All content in English, Amharic, and Afaan Oromoo
  const content = {
    en: {
      est: "EST. 2024",
      title: "The Oda Roba Hospital Health Journal",
      subtitle: "Fresh perspectives on healthcare from Ethiopia's newest medical facility",
      categories: ['All', 'Hospital News', 'ENT Campaign', 'Blood Donate', 'Second round ENT Campaign'],
      newHospital: "New Hospital",
      readStory: "Read Story",
      stayUpdated: "Stay Updated with Oda Roba",
      newsletterText: "Subscribe to our newsletter for the latest health tips and hospital updates",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      read: "Read",
      successMessage: "Successfully subscribed!",
      errorMessage: "Error occurred, please try again later!",
      blogPosts: [
        {
          id: 1,
          title: "Oda Roba Hospital Grand Opening: A New Era in Healthcare",
          excerpt: "Marking a historic milestone in Bale Robe's healthcare landscape, our grand opening introduces a world-class medical facility equipped with the latest technology and staffed by top-tier specialists.",
          category: "Hospital News",
          date: "November 27, 2024",
          readTime: "7 min read",
          image: "/images/blogs/opening.png",
          featured: true
        },
        {
          id: 2,
          title: "ENT Campaign",
          excerpt: "Join our specialized Ear, Nose and Throat screening initiative offering free consultations and early detection services for common ENT disorders in our community.",
          category: "ENT Campaign",
          date: "February 14-16, 2025",
          readTime: "5 min read",
          image: "/images/blogs/ent_campaign.png",
        },
        {
          id: 3,
          title: "Blood Donation Drive",
          excerpt: "Participate in our life-saving blood donation campaign to help stock our blood bank and ensure emergency readiness for critical patient care.",
          category: "Blood Donate",
          date: "April 11, 2025",
          readTime: "4 min read",
          image: "/images/blogs/blood.png",
        },
        {
          id: 4,
          title: "Second Round ENT Campaign",
          excerpt: "Building on our initial success, we're expanding our ENT services with additional screening dates and specialized treatments for identified cases.",
          category: "Second round ENT Campaign",
          date: "April 3-6, 2025",
          readTime: "6 min read",
          image: "/images/blogs/2nd_ent.png",
        }
      ]
    },
    am: {
      est: "በ2024 የተመሰረተ",
      title: "የኦዳ ሮባ ሆስፒታል የጤና መጽሔት",
      subtitle: "ከኢትዮጵያ አዲሱ የህክምና ተቋም የሚገኙ አዳዲስ የጤና እይታዎች",
      categories: ['ሁሉም', 'የሆስፒታል ዜና', 'የENT ዘመቻ', 'የደም ልገሳ', 'ሁለተኛ ዙር ENT ዘመቻ'],
      newHospital: "አዲስ ሆስፒታል",
      readStory: "ጽሑፉን ያንብቡ",
      stayUpdated: "ከኦዳ ሮባ ጋር የተዘመኑ ይሁኑ",
      newsletterText: "አዳዲስ የጤና ምክሮችን እና የሆስፒታላችንን ዜና ለማግኘት ለዜና መጽሔት ይመዝገቡ",
      emailPlaceholder: "የኢሜል አድራሻዎ",
      subscribe: "ይመዝገቡ",
      read: "አንብብ",
      successMessage: "በተሳካ ሁኔታ ተመዝግበዋል!",
      errorMessage: "ስህተት ተከስቷል፣ እባክዎ ቆይተው ይሞክሩ!",
      blogPosts: [
        {
          id: 1,
          title: "የኦዳ ሮባ ሆስፒታል ታላቁ መክፈቻ፡ በጤና ክትትል ውስጥ አዲስ ዘመን",
          excerpt: "በባሌ ሮቤ የጤና ክትትል ውስጥ ታሪካዊ ማሻት በማድረግ፣ ታላቁ መክፈቻችን ከዘመናዊ ቴክኖሎጂ የተሟላ እና በከፍተኛ ደረጃ ባለሙያዎች የተሰራ ዓለም አቀፍ የህክምና ተቋም ያስተዋውቃል።",
          category: "የሆስፒታል ዜና",
          date: "ህዳር 27 ቀን 2024",
          readTime: "7 ደቂቃ ንባብ",
          image: "/images/blogs/opening.png",
          featured: true
        },
        {
          id: 2,
          title: "የENT ዘመቻ",
          excerpt: "በማህበረሰባችን ውስጥ ለተለመዱ የENT በሽታዎች ነፃ የምክር አገልግሎት እና የመጀመሪያ ደረጃ ምርመራ የሚሰጥ የተለየ የጆሮ፣ አፍንጫ እና ጉሮሮ ዘመቻችንን ይቀላቀሉ።",
          category: "የENT ዘመቻ",
          date: "ከየካቲት 14-16 ቀን 2025 ዓ.ም",
          readTime: "5 ደቂቃ ንባብ",
          image: "/images/blogs/ent_campaign.png",
        },
        {
          id: 3,
          title: "የደም ልገሳ ዘመቻ",
          excerpt: "የደም ባንካችንን ለማደስ እና ለአደጋ ደረጃ ለሚደርሱ ታካሚዎች ዝግጁ ለመሆን ሕይወት ሚያድን የደም ልገሳ ዘመቻችንን ይቀላቀሉ።",
          category: "የደም ልገሳ",
          date: "ሚያዝያ 11 ቀን 2025",
          readTime: "4 ደቂቃ ንባብ",
          image: "/images/blogs/blood.png",
        },
        {
          id: 4,
          title: "ሁለተኛ ዙር ENT ዘመቻ",
          excerpt: "በመጀመሪያው የእኛ ስኬት ላይ በመመስረት፣ የENT አገልግሎቶቻችንን በተጨማሪ የምርመራ ቀናት እና ለተለዩ ጉዳቶች የተለዩ ሕክምናዎች እያስፋፋን ነው።",
          category: "ሁለተኛ ዙር ENT ዘመቻ",
          date: "ሚያዝያ 3-6 ቀን 2025",
          readTime: "6 ደቂቃ ንባብ",
          image: "/images/blogs/2nd_ent.png",
        }
      ]
    },
    om: {
      est: "2024 Hundaa'e",
      title: "Oduuwwan Fayyaa Hospitaala Odaa Roobaa",
      subtitle: "Ilaalcha haaraa eegumsa fayyaa irratti dhaabbata yaalaa haaraa Itoophiyaa keessatti",
      categories: ['Hundaa', 'Oduu Mana Yaalaa', 'Duula ENT', 'Dhiiga Arjoomuu', 'Duula ENT Marsaa Lammaffaa'],
      newHospital: "Hospitaala Haaraa",
      readStory: "Guutuu dubbisuuf",
      stayUpdated: "Odeeffannoo Hospitaala Odaa Roobaa hordofaa",
      newsletterText: "Gorsa fayyaa fi odeeffannoo hospitaalaa haaraa argachuuf barruu oduu keenyaa irratti galmaa'aa",
      emailPlaceholder: "Email keessan",
      subscribe: "Galmaa'aa",
      read: "Dubbisuuf",
      successMessage: "Milkaa'inaan galmooftanii jirtu!",
      errorMessage: "Dogoggorri uumamee jira, maaloo irra deebi'aa yaalaa!",
      blogPosts: [
        {
          id: 1,
          title: "Baniinsa Guddaa Hospitaala Odaa Roobaa: Bara Haaraa Eegumsa Fayyaa Keessatti",
          excerpt: "Haala eegumsa fayyaa Baalee Roobee keessatti milkaa'ina seena qabeessa ta'e kan agarsiisu yoo ta'u, banamni keenya dhaabbata yaalaa sadarkaa addunyaatti beekamu kan teeknooloojii ammayyaatiin guutamee fi ogeeyyii sadarkaa olaanaadhaan hojjetame ni beeksisa.",
          category: "Oduu Mana Yaalaa",
          date: "Sadaasa 27, 2024",
          readTime: "Daqiiqaa 7 dubbisuu",
          image: "/images/blogs/opening.png",
          featured: true
        },
        {
          id: 2,
          title: "Duula ENT",
          excerpt: "Inishiyeetiivii addaa qorannoo Gurraa, Funyaanii fi Qoonqoo keenya kan gorsa bilisaa fi tajaajila dafanii adda baasuu dhibee ENT hawaasa keenya keessatti beekamaa ta'eef kennu waliin ta'aa.",
          category: "Duula ENT",
          date: "Guraandhala 14-16, 2025",
          readTime: "Dubbisa Daqiiqaa 5",
          image: "/images/blogs/ent_campaign.png",
        },
        {
          id: 3,
          title: "Arjooma Dhiigaa",
          excerpt: "Baankii dhiigaa keenya kuusuu fi kunuunsa dhukkubsattoota murteessaa ta'eef qophii hatattamaa mirkaneessuuf duula arjooma dhiigaa lubbuu baraaruu keenya irratti hirmaadhaa.",
          category: "Dhiiga Arjoomuu",
          date: "Elba 11, 2025",
          readTime: "Dubbisa Daqiiqaa 4",
          image: "/images/blogs/blood.png",
        },
        {
          id: 4,
          title: "Duula ENT Marsaa Lammaffaa",
          excerpt: "Milkaa'ina jalqabaa keenya irratti hundaa'uun, guyyoota qorannoo dabalataa fi yaala addaa namoota adda baafamaniif tajaajila ENT keenya kenninee jirra.",
          category: "Duula ENT Marsaa Lammaffaa",
          date: "Elba 3-6, 2025",
          readTime: "Dubbisa Daqiiqaa 6",
          image: "/images/blogs/2nd_ent.png",
        }
      ]
    }
  };

  const filteredPosts = activeCategory === content[language].categories[0] 
    ? content[language].blogPosts 
    : content[language].blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscriptionStatus('submitting');
    
    try {
      // Push subscription to Firebase Realtime Database
      const subscriptionsRef = ref(database, 'newsletterSubscriptions');
      await push(subscriptionsRef, {
        email: email,
        language: language,
        timestamp: new Date().toISOString()
      });
      
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(null), 5000);
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionStatus('error');
      setTimeout(() => setSubscriptionStatus(null), 5000);
    }
  };

  return (
    <motion.section 
      id='blogs'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`py-16 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with establishment year */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {content[language].est}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
  {(() => {
    const title = content[language].title;
    const splitText = 
      language === 'en' ? 'Oda Roba Hospital' : 
      language === 'am' ? 'ኦዳ ሮባ ሆስፒታል' : 
      'Hospitaala Odaa Roobaa';
    
    if (title.includes(splitText)) {
      const parts = title.split(splitText);
      return (
        <>
          {parts[0]}
          <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {splitText}
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  })()}
</h2>
          <div className={`w-20 h-1 mx-auto mb-6 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Featured Post - Highlighting the new hospital */}
        {content[language].blogPosts.filter(post => post.featured).map(post => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-16 rounded-xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/80 text-white' : 'bg-white/90 text-blue-600'}`}>
                  {content[language].newHospital}
                </div>
              </div>
              <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  {post.category}
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {post.date} · {post.readTime}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    {content[language].readStory}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {content[language].categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700 hover:shadow-blue-900/20' : 'bg-white border border-gray-200 hover:shadow-xl'} transition-all duration-300`}
            >
              <div className="h-48 relative">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.category === content[language].categories[1] && (
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold ${isDarkMode ? 'bg-blue-900/90 text-white' : 'bg-white/90 text-blue-600'}`}>
                    {content[language].categories[1] === 'የሆስፒታል ዜና' ? 'አዲስ' : 
                     content[language].categories[1] === 'Oduu Mana Yaalaa' ? 'Haaraa' : 'NEW'}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  {post.category}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {post.date} · {post.readTime}
                  </span>
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    {content[language].read}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`mt-16 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {content[language].stayUpdated}
            </h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {content[language].newsletterText}
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                {content[language].successMessage}
              </div>
            ) : subscriptionStatus === 'error' ? (
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700'}`}>
                {content[language].errorMessage}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content[language].emailPlaceholder} 
                  required
                  className={`flex-grow px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white' : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={subscriptionStatus === 'submitting'}
                  className={`px-6 py-3 rounded-lg font-medium ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {subscriptionStatus === 'submitting' ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    content[language].subscribe
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blogs;