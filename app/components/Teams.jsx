import Image from 'next/image';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const Teams = ({ isDarkMode }) => {
  const { language } = useLanguage();

  // All content in English, Amharic, and Afaan Oromoo
  const content = {
    en: {
      title: "Our Medical Teams",
      subtitle: "Meet our team of dedicated healthcare professionals",
      teams: [
        {
          name: "Internists Team",
          doctors: "Dr. Werkineh Alemu, Dr. Alebachew Mekonnen, Dr. Girma Degefe"
        },
        {
          name: "General Surgeons Team",
          doctors: "Dr. Eliyas Ibrahim, Dr. Mudassir Aman, Dr. Gosaye Dabale, Dr. Ashennafi Nigussie, Dr. Mohammed Hussein, Dr. Hamza Sultan"
        },
        {
          name: "OB-GYN Team",
          doctors: "Dr. Tegenu Negese, Dr. Tufa Bobbe, Dr. Habtamu Beyene, Dr. Wayesa Dirribsa"
        },
        {
          name: "Orthopedics Team",
          doctors: "Dr. Tezera Tadesse, Dr. Bekele Chimdessa"
        },
        {
          name: "Maxillofacial Team",
          doctors: "Dr. Habtamu Shewakena"
        },
        {
          name: "Pediatrics Team",
          doctors: "Dr. Tsegaye Dabi, Dr. Abashu Chemeda, Dr. Tesfaye Ilala"
        }
      ]
    },
    am: {
      title: "የጤና ቡድኖቻችን",
      subtitle: "በልዩ ሙያ የተሰለፉ የጤና ባለሞያዎቻችንን ያግኙ",
      teams: [
        {
          name: "የውስጥ በሽታ ባለሙያዎች ቡድን",
          doctors: "ዶ/ር ወርቅነህ ዓለሙ, ዶ/ር አለባቸው መኮንን, ዶ/ር ግርማ ደገፈ"
        },
        {
          name: "የአጠቃላይ ቀዶ ጥገና ባለሙያዎች ቡድን",
          doctors: "ዶ/ር ኢልያስ ኢብራሂም, ዶ/ር ሙዳሲር አማን, ዶ/ር ጎሳዬ ዳባሌ, ዶ/ር አሸናፊ ንጉሴ, ዶ/ር መሀመድ ሁሴን, ዶ/ር ሀምዛ ሱልጣን"
        },
        {
          name: "የሴቶች ጤና ባለሙያዎች ቡድን",
          doctors: "ዶ/ር ተገኙ ነገሰ, ዶ/ር ቱፋ ቦቤ, ዶ/ር ሀብታሙ በየነ, ዶ/ር ወየሳ ድሪብሳ"
        },
        {
          name: "የአጥንት ባለሙያዎች ቡድን",
          doctors: "ዶ/ር ተዘራ ታደሰ, ዶ/ር በቀለ ጪምደሳ"
        },
        {
          name: "Maxillofacial ቡድን",
          doctors: "ዶ/ር ሀብታሙ ሸዋቀና"
        },
        {
          name: "የሕጻናት ጤና ባለሙያዎች ቡድን",
          doctors: "ዶ/ር ፀጋዬ ዳቢ, ዶ/ር አባሹ ቸመዳ, ዶ/ር ተስፋዬ ኢላላ"
        }
      ]
    },
    om: {
      title: "Gareewwan Ogeessota Fayyaa Keenya",
      subtitle: "Gareewwan ogeessota fayyaa keenya wajjiin wal baraa",
      teams: [
        {
          name: "Garee Ogeessota Dhukkuboota keessoo",
          doctors: "Dr. Warqinaa Alamuu, Dr. Aallebbaachew Mekkonnin, Dr. Girmaa Daggafaa"
        },
        {
          name: "Garee Ogeessota baqaqsanii yaaluu",
          doctors: "Dr. Eliyaas Ibraahim, Dr. Mudassir Amaan, Dr. Gosaayee Dabalee, Dr. Ashannaafii Nigusee, Dr. Mohaammed Huseen, Dr. Hamzaa Sulxaan"
        },
        {
          name: "Garee OB-GYN",
          doctors: "Dr. Taganuu Naggasaa, Dr. Tufaa Bobbee, Dr. Haabtaamuu Bayyanaa, Dr. Wayyeessaa Dirribsaa"
        },
        {
          name: "Garee Ogeessota Lafee",
          doctors: "Dr. Tazarraa Taaddasaa, Dr. Baqqalaa Cimdeessaa"
        },
        {
          name: "Garee Ogeessota Ilkaanii fi Fuulaa",
          doctors: "Dr. Haabtaamuu Shawaakeenaa"
        },
        {
          name: "Garee Ogeessota Fayyaa Daa'imamanii",
          doctors: "Dr. Tsaggaayee Dhaabii, Dr. Abbashuu Camadaa, Dr. Tasfaayee Ilaalaa"
        }
      ]
    }
  };

  // Image paths remain the same across languages
  const imagePaths = [
    "/images/teams/internists.png",
    "/images/teams/surgeons.png",
    "/images/teams/obgyn.png",
    "/images/teams/orthopedic.png",
    "/images/teams/maxillofacial.png",
    "/images/teams/pediatric.png"
  ];

  // Combine translated content with image paths
  const teams = content[language].teams.map((team, index) => ({
    ...team,
    image: imagePaths[index]
  }));

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      <section 
        id="teams" 
        className={`py-12 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {content[language].title} <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}></span>
            </h2>
            <div className={`w-20 h-1 mx-auto mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {content[language].subtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  boxShadow: isDarkMode 
                    ? '0 10px 25px -5px rgba(0, 0, 0, 0.25)' 
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                className={`rounded-md overflow-hidden shadow-md p-4 transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="relative h-56 w-full mb-3 rounded-sm overflow-hidden">
                  <Image
                    src={team.image}
                    alt={team.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3">{team.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{team.doctors}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;