import Image from 'next/image';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const Doctors = ({ isDarkMode }) => {
  const { language } = useLanguage();
  
  // All content in English, Amharic, and Afaan Oromoo
  const content = {
    en: {
      title: "Our Medical Specialists",
      subtitle: "Meet our dedicated healthcare professionals",
      doctors: [
        {
          name: "Dr. Tsegaye Dabi",
          specialty: "Paediatrics and Child health specialist",
          bio: "Dedicated to children's health with focus on developmental pediatrics and preventive care."
        },
        {
          name: "Dr. Werkineh Alemu",
          specialty: "Internal medicine specialist",
          bio: "Dedicated to comprehensive adult health management, from routine prevention to complex medical conditions, with focus on long-term wellbeing."
        },
        {
          name: "Dr. Alebachew Girum",
          specialty: "Cardiologist & Internal Medicine specialist",
          bio: "Heart specialist focused on preventive care and complex cardiovascular conditions."
        },
        {
          name: "Dr. Habtamu Beyene",
          specialty: "Obstetrics and Women's Health Specialist",
          bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
        },
        {
          name: "Dr. Mudasir Aman",
          specialty: "General Surgery Specialist",
          bio: "Skilled general surgeon with expertise in minimally invasive and emergency procedures."
        },
        {
          name: "Dr. Tegenu Negese",
          specialty: "Obstetrics and Women's Health Specialist",
          bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
        },
        {
          name: "Dr. Tezera Tadesse",
          specialty: "Orthopedic Trauma & Emergency Medicine Specialist",
          bio: "Expert in emergency fracture care, trauma management, and acute musculoskeletal injuries."
        },
        {
          name: "Dr. Tufa Bobbe",
          specialty: "Obstetrics and Women's Health Specialist",
          bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
        },
        {
          name: "Dr. Mohammed Hamid",
          specialty: "Radiologist",
          bio: "Specializes in diagnostic imaging, including MRI, CT, and ultrasound, with expertise in interventional radiology procedures."
        },
        {
          name: "Dr. Tesfaye Ilala",
          specialty: "Paediatrics and Child health specialist",
          bio: "Dedicated to children's health with focus on developmental pediatrics and preventive care."
        },
        {
          name: "Dr. Gosaye Dabale",
          specialty: "General Surgeon",
          bio: "Specializes in minimally invasive and laparoscopic surgeries for abdominal and digestive conditions, including hernia repair, gallbladder surgery, and advanced endoscopy."
        },
        {
          name: "Dr. Habtamu Shewakena",
          specialty: "Oral and Maxillofacial Surgeon",
          bio: "Specializes in complex tooth extractions, jaw surgeries, and facial reconstruction with advanced surgical techniques."
        },
        {
          name: "Dr. Eliyas Ibrahim",
          specialty: "General Surgery Resident",
          bio: "General surgery resident training in laparoscopic and emergency procedures."
        },
        {
          name: "Dr. Sisay Bekele",
          specialty: "Radiologist",
          bio: "Specializes in diagnostic imaging, including MRI, CT, and ultrasound, with expertise in interventional radiology procedures."
        },
        {
          name: "Dr. Wayesa Dirribsa",
          specialty: "Obstetrics and Women's Health Specialist",
          bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
        }
      ]
    },
    am: {
      title: "ልዩ ሙያተኞቻችን",
      subtitle: "በልዩ ሙያ የተሰለፉ የጤና ባለሞያዎቻችንን ያግኙ",
      doctors: [
        {
          name: "ዶ/ር ፀጋዬ ዳቢ",
          specialty: "የሕጻናት ጤና ባለሙያ",
          bio: "ለሕጻናት ጤና ተሰማርቶ በሕጻናት እድገት እና ጤና ጥበቃ ላይ ያተኮረ።"
        },
        {
          name: "ዶ/ር ወርቅነህ ዓለሙ",
          specialty: "የውስጥ በሽታ ባለሙያ",
          bio: "ለአዋቂዎች ጤና አጠባበቅ ተሰማርቶ፣ ከመደበኛ ጤና ጥበቃ እስከ ውስብስብ የጤና ችግሮች ማካካስ የሚያተኩር።"
        },
        {
          name: "ዶ/ር አለባቸው ግሩም",
          specialty: "የልብ በሽታ ባለሙያ",
          bio: "በልብ ጤና እና የልብ ሕክምና ላይ ተሰማርቷል።"
        },
        {
          name: "ዶ/ር ሀብታሙ በየነ",
          specialty: "የሴቶች ጤና እና የወሊድ ባለሙያ",
          bio: "በእርግዝና እንክብካቤ፣ ከፍተኛ አደጋ ያለው ወሊድ እና ዝቅተኛ ኢንቫሲቭ የሴቶች ጤና ቀዶ ጥገናዎች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ሙዳሲር አማን",
          specialty: "የአጠቃላይ ቀዶ ጥገና ባለሙያ",
          bio: "በዝቅተኛ ኢንቫሲቭ እና ድንገተኛ ቀዶ ጥገናዎች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ተገኙ ነገሰ",
          specialty: "የሴቶች ጤና እና የወሊድ ባለሙያ",
          bio: "በእርግዝና እንክብካቤ፣ ከፍተኛ አደጋ ያለው ወሊድ እና ዝቅተኛ ኢንቫሲቭ የሴቶች ጤና ቀዶ ጥገናዎች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ተዘራ ታደሰ",
          specialty: "የአጥንት ጉዳት እና ድንገተኛ ድንገተኛ ህክምና ባለሙያ",
          bio: "በድንገተኛ የአጥንት ስበት ህክምና፣ የጉዳት አያያዝ እና አጣብቂኝ የጡንቻ-አጥንት ጉዳቶች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ቱፋ ቦቤ",
          specialty: "የሴቶች ጤና እና የወሊድ ባለሙያ",
          bio: "በእርግዝና እንክብካቤ፣ ከፍተኛ አደጋ ያለው ወሊድ እና ዝቅተኛ ኢንቫሲቭ የሴቶች ጤና ቀዶ ጥገናዎች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር መሀመድ ሀሚድ",
          specialty: "ራዲዮሎጂ ባለሙያ",
          bio: "በ MRI፣ CT እና አልትራሳውንድ ጨምሮ የምስል ምርመራ እና የራዲዮሎጂ ቀዶ ጥገናዎች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ተስፋዬ ኢላላ",
          specialty: "የሕጻናት ጤና ባለሙያ",
          bio: "ለሕጻናት ጤና ተሰማርቶ በሕጻናት እድገት እና ጤና ጥበቃ ላይ ያተኮረ።"
        },
        {
          name: "ዶ/ር ጎሳዬ ዳባሌ",
          specialty: "የአጠቃላይ ቀዶ ጥገና ባለሙያ",
          bio: "በዝቅተኛ ኢንቫሲቭ እና ላፓሮስኮፒክ ቀዶ ጥገናዎች ላይ ባለሙያ፣ ከሆድ እና የመፀዳጃ ችግሮች ጋር በተያያዘ።"
        },
        {
          name: "ዶ/ር ሀብታሙ ሸዋቀና",
          specialty: "የጡረታ እና የፊት አጥንት ቀዶ ጥገና ባለሙያ",
          bio: "በውስብስብ ጥርስ ማውጣት፣ የጡረታ ቀዶ ጥገና እና የፊት አጥንት እንደገና ግንባታ ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ኢልያስ ኢብራሂም",
          specialty: "የአጠቃላይ ቀዶ ጥገና ሰልጣኝ",
          bio: "የአጠቃላይ ቀዶ ጥገና ሰልጣኝ በላፓሮስኮፒክ እና ድንገተኛ ቀዶ ጥገናዎች ላይ በስልጠና ላይ።"
        },
        {
          name: "ዶ/ር ስሳይ በቀለ",
          specialty: "ራዲዮሎጂ ባለሙያ",
          bio: "በ MRI፣ CT እና አልትራሳውንድ ጨምሮ የምስል ምርመራ እና የራዲዮሎጂ ቀዶ ጥገናዎች ላይ ባለሙያ።"
        },
        {
          name: "ዶ/ር ወየሳ ድሪብሳ",
          specialty: "የሴቶች ጤና እና የወሊድ ባለሙያ",
          bio: "በእርግዝና እንክብካቤ፣ ከፍተኛ አደጋ ያለው ወሊድ እና ዝቅተኛ ኢንቫሲቭ የሴቶች ጤና ቀዶ ጥገናዎች ላይ ባለሙያ።"
        }
      ]
    },
    om: {
      title: "Ogeessota Fayyaa Keenya",
      subtitle: "Ogeessota fayyaa keenya of kennanii hojjetan waliin wal baraa",
      doctors: [
        {
          name: "Dr. Tsaggaayee Dhaabii",
          specialty: "Ispeeshaalistii fayyaa daa’immanii",
          bio: "Fayyaa daa'immaniif kan of kenne yoo ta'u, xiyyeeffannoo guddina daa'immanii fi kunuunsa ittisaa irratti kan xiyyeeffate."
        },
        {
          name: "Dr. Warqinaa Alamuu",
          specialty: "Ispeeshaalistii dhukkuboota keesssoo",
          bio: "Bulchiinsa fayyaa ga’eessotaa bal’aa ta’eef kan of kenne, ittisa idilee irraa kaasee hanga haalawwan yaalaa walxaxaa ta’anitti, fayyaa yeroo dheeraa irratti xiyyeeffachuun."
        },
        {
          name: "Dr. Aallebbaachew Giruum",
          specialty: "Kaardiyooloojistii fi Ispeeshaalistii dhukkuboota keesssoo",
          bio: "KOgeessa onnee kunuunsa ittisaa fi haalawwan walxaxaa onnee fi ujummoolee dhiigaa irratti xiyyeeffate."
        },
        {
          name: "Dr. Haabtaamuu Bayyanaa",
          specialty: "Ispeeshaalistii Fayyaa Dubartootaa fi Da'umsaa",
          bio: "Ogeessa kunuunsa ulfaa, dahumsaa fi baqaqsanii hodhuu dubartootaa"
        },
        {
          name: "Dr. Mudassir Amaan",
          specialty: "Ispeeshaalistii baqaqsanii yaaluu waliigalaa",
          bio: "Ogeessa baqaqsanii yaaluu waliigalaa kan ogummaa adeemsaa fi yeroo gabaabaa irratti hojjatu."
        },
        {
          name: "Dr. Taganuu Naggasaa",
          specialty: "Ispeeshaalistii Fayyaa Dubartootaa fi Da'umsaa",
          bio: "Ogeessa kunuunsa ulfaa, dahumsaa fi baqaqsanii hodhuu dubartootaa"
        },
        {
          name: "Dr. Tazarraa Taaddasaa",
          specialty: "Ispeeshaalistii lafee fi yaala dhibee tasaa",
          bio: "Ogeessa kunuunsa caba lafee, bulchiinsa qaamaa, miidhama maashaalee fi lafee cimaa."
        },
        {
          name: "Dr. Tufaa Bobbee",
          specialty: "Ispeeshaalistii Fayyaa Dubartootaa fi Da'umsaa",
          bio: "Ogeessa kunuunsa ulfaa, dahumsaa fi baqaqsanii hodhuu dubartootaa"
        },
        {
          name: "Dr. Muhaammed Haamid",
          specialty: "Raadiyooloojistii",
          bio: "Altiraasaawundii, MRI fi CT dabalatee suuraa adda baasuu irratti ogummaa adda ta'e kan qaban yoo ta'u, adeemsa raadiyooloojii giddu-galeessa godhachuun."
        },
        {
          name: "Dr. Tasfaayee Ilaalaa",
          specialty: "Fayyaa daa'immaniif kan of kenne yoo ta'u, xiyyeeffannoo guddina daa'immanii fi kunuunsa ittisaa irratti kan xiyyeeffate."
        },
        {
          name: "Dr. Gosaayee Dabalee",
          specialty: "Ogeessa baqaqsanii yaaluu waliigalaa",
          bio: "Baqaqsanii hodhuu sadarkaa olaanaa dabalatee haalawwan garaachaa fi bullaa'insa nyaataaf baqaqsanii hodhuu irratti ogummaa qabu."
        },
        {
          name: "Dr. Haabtaamuu Shawakeenaa",
          specialty: "Ogeessa Baqaqsanii yaaluu Afaanii fi Fuulaa",
          bio: "Ilkaan dhukkubee hin fayyine baasuu, baqaqsanii yaaluu mangaagaa afaanii, fi tooftaalee baqaqsanii hodhuu sadarkaa olaanaadhaan fuula irra deebi'anii ijaaruu."
        },
        {
          name: "Dr. Eliyaas Ibraahim",
          specialty: "Reesidantii baqaqsanii yaaluu Waliigalaa",
          bio: "Reesidantii baqaqsanii yaaluu waliigalaa adeemsa laparoscopic fi hatattamaa."
        },
        {
          name: "Dr. Sisaay Baqqalaa",
          specialty: "Raadiyooloojistii",
          bio: "Altiraasaawundii, MRI fi CT dabalatee suuraa adda baasuu irratti ogummaa adda ta'e kan qaban yoo ta'u, adeemsa raadiyooloojii giddu-galeessa godhachuun."
        },
        {
          name: "Dr. Wayyeesaa Dirribsaa",
          specialty: "Ispeeshaalistii Fayyaa Dubartootaa fi Da'umsaa",
          bio: "Ogeessa kunuunsa ulfaa, dahumsaa fi baqaqsanii hodhuu dubartootaa."
        }
      ]
    }
  };

  // Image paths remain the same across languages
  const imagePaths = [
    "/images/doctors/dr_tsagaye.png",
    "/images/doctors/dr_werkineh.png",
    "/images/doctors/dr_alebachew.png",
    "/images/doctors/dr_habtamu.png",
    "/images/doctors/dr_mudasir.png",
    "/images/doctors/dr_taganu.png",
    "/images/doctors/dr_tezera.png",
    "/images/doctors/dr_tufa.png",
    "/images/doctors/dr_mohammed_hamid.png",
    "/images/doctors/dr_tesfaye.png",
    "/images/doctors/dr_gosaye.png",
    "/images/doctors/dr_habtamu_shewakena.png",
    "/images/doctors/dr_eliyas.png",
    "/images/doctors/dr_sisay.png",
    "/images/doctors/dr_wayesa.png"
  ];

  // Combine translated content with image paths
  const doctors = content[language].doctors.map((doctor, index) => ({
    ...doctor,
    image: imagePaths[index]
  }));

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      <section id="doctors" className={`py-16 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300
                          ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="relative h-64 w-full bg-gray-200">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {doctor.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {doctor.specialty}
                    </p>
                  </div>

                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {doctor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;