import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from '../context/LanguageContext';

const Machines = ({ isDarkMode }) => {
  const [expandedCards, setExpandedCards] = useState([]);
  const { language } = useLanguage();

  const toggleCardExpand = (index) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Machine data with image paths
  const machineData = {
    en: {
      departments: [
        {
          name: 'Radiology Department Machines',
          machines: [
            { 
              name: 'Holter Monitor Machine', 
              shortDesc: '24-48 hour heart rhythm tracking',
              fullDesc: [
                'Records 24-48 hours of cardiac electrical activity',
                'Compact, wearable device with 3-5 lead system',
                'Detects arrhythmias missed by standard ECGs',
                'Wireless Bluetooth models available'
              ],
              image: '/images/machines/holter_moniter.png'
            },
            { 
              name: '3D Ultrasound Machine', 
              shortDesc: 'Advanced 3D ultrasound diagnostics',
              fullDesc: [
                'Real-time 3D rendering of organs & fetal anatomy',
                'Automated measurements for OB/GYN assessments',
                'Advanced Doppler for blood flow analysis',
                'Multiplanar reconstruction capabilities',
              ],
              image: '/images/machines/ultrasound.png'
            },
            { 
              name: 'Defibrillator Machine', 
              shortDesc: 'Emergency heart rhythm restoration',
              fullDesc: [
                'Automated external (AED) & manual modes',
                'Delivers life-saving electric shocks',
                'ECG monitoring with voice guidance',
                'For cardiac arrest emergencies'
              ],
              image: '/images/machines/defibrillator.png'
            },
            {
              name: "Digital X-ray Machine",
              shortDesc: "High-precision digital imaging",
              fullDesc: [
                "High-resolution digital X-ray technology",
                "Faster results with lower radiation",
                "Enhanced detail for accurate diagnosis",
                "Supports various medical applications"
              ],
              image: "/images/machines/digital-x_ray.png"
            }
          ]
        },
        {
          name: 'Laboratory Department Machines',
          machines: [
            {
              name: 'Fully Automated Chemistry Machine',
              shortDesc: 'Rapid, automated lab testing',
              fullDesc: [
                'Runs metabolic panels and enzyme tests',
                'High-capacity sample processing',
                'Precise results with minimal handling',
                'Streamlines clinical lab workflow'
              ],
              image: '/images/machines/chemistry_machine.png'
            },
            {
              name: 'CBC Machine', 
              shortDesc: 'Comprehensive blood analysis',
              fullDesc: [
                '32-parameter complete blood testing',
                'Advanced 5-part differential',
                'Detects cell abnormalities instantly',
                'Lab-grade accuracy in minutes'
              ],
              image: '/images/machines/cbc_machine.png'
            },
            {
              name: 'Hormonal Analyzer Machine', 
              shortDesc: 'Precision hormone level testing',
              fullDesc: [
                'Measures 50+ hormones (thyroid, reproductive, cortisol)',
                'Ultra-sensitive immunoassay technology',
                'CLIA-certified lab accuracy in 15 minutes',
                'Ideal for fertility, endocrine, and metabolic testing'
              ],
              image: '/images/machines/hormonal_analyzer.png'
            },
            {
              name: 'Electrolyte Analyzer Machine', 
              shortDesc: 'Rapid electrolyte level testing',
              fullDesc: [
                'Measures sodium, potassium, chloride, and calcium',
                'Ion-selective electrode (ISE) technology',
                'Results in <2 minutes for critical care',
                'Compact design for lab or point-of-care use'
              ],
              image: '/images/machines/electrolyte_machine.png'
            }
          ]
        },
        {
          name: 'Gynecology and Obstetric Department Machines',
          machines: [
            {
              name: 'CTG Monitor Machine', 
              shortDesc: 'Continuous fetal heart & contraction monitoring',
              fullDesc: [
                'Tracks fetal heart rate & uterine contractions',
                'Computerized analysis of fetal wellbeing',
                'Print & digital recording for trend analysis',
                'Portable design for labor ward & clinics'
              ],
              image: '/images/machines/ctg.png'
            },
            {
              name: 'Digital Colposcope Machine', 
              shortDesc: 'Precision cervical visualization',
              fullDesc: [
                '4K ultra-HD imaging for detailed tissue analysis',
                'Adjustable LED illumination with green filter',
                'Magnification up to 30x for lesion assessment',
                'Integrated imaging software for documentation',
                'Early detection of precancerous abnormalities'
              ],
              image: '/images/machines/colposcope.png'
            }
          ]
        },
        {
          name: 'Operation Theatre Machines',
          machines: [
            {
              name: 'Anesthesia Machine', 
              shortDesc: 'Precision-controlled patient sedation',
              fullDesc: [
                'Integrated ventilator with multiple breathing modes',
                'Precise gas mixing (O₂, N₂O, volatile anesthetics)',
                'Real-time patient monitoring (ETCO₂, SpO₂, ECG)',
                'Compact design for ORs and outpatient settings',
                'Safety features: hypoxia prevention, pressure alarms'
              ],
              image: '/images/machines/anesthesia_machine.png'
            },
            {
              name: 'LED Surgical Light', 
              shortDesc: 'Shadow-free illumination for procedures',
              fullDesc: [
                '30,000+ lux adjustable brightness',
                'Color-corrected LED for true tissue visualization',
                'Sterilizable handles for aseptic control',
                'Dual-head design with 360° positioning',
                'Backup battery for uninterrupted surgery'
              ],
              image: '/images/machines/surgical_light.png'
            }
          ]
        }
      ]
    },
    am: {
      departments: [
        {
          name: 'የራዲዮሎጂ ክፍል ማሽኖች',
          machines: [
            { 
              name: 'ሆልተር ሞኒተር ማሽን', 
              shortDesc: '24-48 ሰዓት የልብ ምት መከታተያ',
              fullDesc: [
                '24-48 ሰዓት የልብ ኤሌክትሪክ እንቅስቃሴን ይመዘግባል',
                '3-5 ሊድ ስርዓት ያለው ትንሽ፣ ሊሸለም የሚችል መሣሪያ',
                'በመደበኛ ECG የተሳሳቱ የልብ ምት ለውጦችን ይገነዘባል',
                'ያለ ገመድ ብሉቱዝ ሞዴሎች ይገኛሉ'
              ],
              image: '/images/machines/holter_moniter.png'
            },
            { 
              name: '3D አልትራሳውንድ ማሽን', 
              shortDesc: 'የላቀ 3D አልትራሳውንድ ምርመራ',
              fullDesc: [
                'የአካላት እና የጡንቻ አካላት ትክክለኛ 3D ምስል',
                'ለ OB/GYN ግምገማዎች አውቶማቲክ መለኪያዎች',
                'የላቀ ዶፕለር ለደም ፍሰት ትንተና',
                'ባለብዙ አውሮፕላን የገንቢ ችሎታዎች'
              ],
              image: '/images/machines/ultrasound.png'
            },
            { 
              name: 'ዲፊብሪሌተር ማሽን', 
              shortDesc: 'የአደጋ የልብ ምት መመለሻ',
              fullDesc: [
                'አውቶማቲክ የውጭ (AED) እና በእጅ ሞድ',
                'ህይወት የሚያድን የኤሌክትሪክ ግርፋት ይሰጣል',
                'ድምፅ መመሪያ ያለው ECG መከታተያ',
                'ለልብ እጥረት አደጋዎች'
              ],
              image: '/images/machines/defibrillator.png'
            },
            {
              name: "ዲጂታል X-ray ማሽን",
              shortDesc: "ከፍተኛ ትክክለኛነት ያለው ዲጂታል ምስል",
              fullDesc: [
                "ከፍተኛ ጥራት ያለው ዲጂታል X-ሬይ ቴክኖሎጂ",
                "በተቀነሰ ሬዲዮአክቲቭ ፍንዳታ ፈጣን ውጤቶች",
                "ለትክክለኛ ምርመራ የተሻለ ዝርዝር",
                "የተለያዩ የሕክምና መተግበሪያዎችን ይደግፋል"
              ],
              image: "/images/machines/digital-x_ray.png"
            }
          ]
        },
        {
          name: 'የላቦራቶሪ ክፍል ማሽኖች',
          machines: [
            {
              name: 'ሙሉ አውቶማቲክ ኬሚስትሪ ማሽን',
              shortDesc: 'ፈጣን፣ አውቶማቲክ የላብ ፈተና',
              fullDesc: [
                'ሜታቦሊክ ፓነሎችን እና ኤንዛይም ፈተናዎችን ያካሂዳል',
                'ከፍተኛ አቅም ያለው ናሙና ማቀነባበሪያ',
                'በትንሽ አያያዝ ትክክለኛ ውጤቶች',
                'የክሊኒካል ላብ ስራ ፈስልን ያቀላልፋል'
              ],
              image: '/images/machines/chemistry_machine.png'
            },
            {
              name: 'CBC ማሽን', 
              shortDesc: 'ሙሉ የደም ትንተና',
              fullDesc: [
                '32-ፓራሜትር የደም ፈተና',
                'የላቀ 5-ክፍል ዲፈረንሻል',
                'የሴል ያልተለመዱ ሁኔታዎችን ወዲያውኑ ይገነዝባል',
                'በላብ ጥራት ትክክለኛነት በደቂቃዎች ውስጥ'
              ],
              image: '/images/machines/cbc_machine.png'
            },
            {
              name: 'ሆርሞናል አናላይዘር ማሽን', 
              shortDesc: 'ትክክለኛ የሆርሞን ደረጃ ፈተና',
              fullDesc: [
                '50+ ሆርሞኖችን ይለካል (ታይሮይድ፣ የምርት፣ ኮርቲሶል)',
                'ከፍተኛ ሚዛናዊነት ያለው የኢሚዩኖአሳይ ቴክኖሎጂ',
                'በ15 ደቂቃ ውስጥ CLIA-ማረጋገጫ ያለው የላብ ትክክለኛነት',
                'ለወሊድ፣ ኢንዶክሪን እና ሜታቦሊክ ፈተና ተስማሚ'
              ],
              image: '/images/machines/hormonal_analyzer.png'
            },
            {
              name: 'ኤሌክትሮላይት አናላይዘር ማሽን', 
              shortDesc: 'ፈጣን የኤሌክትሮላይት ደረጃ ፈተና',
              fullDesc: [
                'ሶዲየም፣ ፖታሲየም፣ ክሎራይድ እና ካልሲየምን ይለካል',
                'አዮን-መምረጫ ኤሌክትሮድ (ISE) ቴክኖሎጂ',
                'ለአስቸኳይ እንክብካቤ በ<2 ደቂቃ ውስጥ ውጤቶች',
                'ለላብ ወይም የነጥብ-እንክብካቤ አጠቃቀም የተስተካከለ ዲዛይን'
              ],
              image: '/images/machines/electrolyte_machine.png'
            }
          ]
        },
        {
          name: 'የሴቶች ሕክምና እና የወሊድ ክፍል ማሽኖች',
          machines: [
            {
              name: 'CTG ሞኒተር ማሽን', 
              shortDesc: 'ቀጣይነት ያለው ልብ ምት እና የማህጸን መጨመቂያ መከታተያ',
              fullDesc: [
                'የጡንቻ ልብ ምት እና የማህጸን መጨመቂያዎችን ይከታተላል',
                'የጡንቻ ደህንነት ኮምፒውተራይዝድ ትንተና',
                'ለተዘዋዋሪ ትንተና ማተም እና ዲጂታል መዝገብ',
                'ለየልደት ወረዳ እና ክሊኒኮች ተላላፊ ዲዛይን'
              ],
              image: '/images/machines/ctg.png'
            },
            {
              name: 'ዲጂታል ኮልፖስኮፕ ማሽን', 
              shortDesc: 'ትክክለኛ የየርዳታ አካል ምስል',
              fullDesc: [
                'ለዝርዝር እቃ ትንተና 4K ከፍተኛ-ቲዲ ምስል',
                'ከፍተኛ LED መብራት ከአረንጓዴ ማጣሪያ ጋር',
                'ለእቃ ግምገማ እስከ 30x የሚደርስ ትልቅ ምስል',
                'ለሰነድ የተዋሃደ የምስል ሶፍትዌር',
                'የጡንቻ ካንሰር የመጀመሪያ ምልክቶችን መለየት'
              ],
              image: '/images/machines/colposcope.png'
            }
          ]
        },
        {
          name: 'የቀዶ ሕክምና ክፍል ማሽኖች',
          machines: [
            {
              name: 'አነስቲዚያ ማሽን', 
              shortDesc: 'ትክክለኛ የታካሚ መዝናኛ ቁጥጥር',
              fullDesc: [
                'ብዙ የመተንፈሻ ሁነቶች ያሉት የተዋሃደ ቨንቲሌተር',
                'ትክክለኛ የጋዝ ድብልቅ (O₂, N₂O, የፈሳሽ አነስቲዚያ)',
                'በእውነተኛ ጊዜ የታካሚ መከታተያ (ETCO₂, SpO₂, ECG)',
                'ለ OR እና አውደ ሕክምና ቅኝቶች የተስተካከለ ዲዛይን',
                'የደህንነት ባህሪዎች: ሃይፖክስያ መከላከል፣ የግፊት ማንቂያዎች'
              ],
              image: '/images/machines/anesthesia_machine.png'
            },
            {
              name: 'LED የቀዶ ሕክምና መብራት', 
              shortDesc: 'ለሕክምና ሂደቶች ጥላ-ነጻ መብራት',
              fullDesc: [
                '30,000+ lux የሚያስተካክል ብርሃን',
                'ለእውነተኛ እቃ ምስል ቀለም-ተስተካክሎ ያለው LED',
                'ለአሲፕቲክ ቁጥጥር ሊጠራራ የሚችል እጅ',
                '360° አቀማመጥ ያለው ድርብ-ራስ ዲዛይን',
                'ለያለማቋረጥ ቀዶ ሕክምና የተጠባበቀ ባትሪ'
              ],
              image: '/images/machines/surgical_light.png'
            }
          ]
        }
      ]
    },
    om: {
      departments: [
        {
          name: 'Maashinoota Kutaa Raadiyooloojii',
          machines: [
            { 
              name: 'Maashinii Holter Monitor', 
              shortDesc: 'Sa’aatii 24-48f hordoffii dhahannaa onnee',
              fullDesc: [
                'Dhahannaa onnee sa\'aatii 24-48 galmeessuu',
                'Meeshaa kompaaktii, uffatamu kan sirna liidiin 3-5 qabu',
                'Arrhythmias ECG istaandaardiitiin darbe ni adda baasa',
              ],
              image: '/images/machines/holter_moniter.png'
            },
            { 
              name: 'Maashinii Altiraasaawundii 3D', 
              shortDesc: 'Qorannoo Altiraasaawundii 3D sadarkaa olaanaa',
              fullDesc: [
                'Fakkii 3D yeroo dhugaa qaamolee & anatoomii daa\'imaa',
                'Qajeelfamaa OB/GYN keessatti madaaluu otomaatii',
                'Doppler sadarkaa olaanaa xiinxala dhangala\'a dhiigaa',
                'Dandeettii irra deebiin ijaaruu pilaaneerii hedduu'
              ],
              image: '/images/machines/ultrasound.png'
            },
            { 
              name: 'Maashinii Defibrillator', 
              shortDesc: 'Dhahannaa onnee hatattamaan deebisuuf',
              fullDesc: [
                'Haalawwan alaa (AED) & harkaan hojjetaman',
                'Elektirikii lubbuu baraaru dhiyeessuu',
                'Hordoffii ECG qajeelfama sagaleetiin',
                'Balaa tasaa onnee dhaabuuf'
              ],
              image: '/images/machines/defibrillator.png'
            },
            {
              name: "Maashinii raajii X-ray Dijiitaalaa",
              shortDesc: "Suuraa dijiitaalaa sirrii ta’e",
              fullDesc: [
                "Teknooloojii raayii dijiitaalaa qulqullina guddaa qabu",
                "Bu'aan saffisaa raadiyaashinii gadi aanaadhaan",
                "Qorannoo sirrii ta’eef baay’ee fooyya’e",
                "Hojiiwwan yaalaa adda addaa ni deeggara"
              ],
              image: "/images/machines/digital-x_ray.png"
            }
          ]
        },
        {
          name: 'Maashinoota Kutaa Laaboratoorii',
          machines: [
            {
              name: 'Maashinii Keemistirii Guutummaatti Ofumaan Hojjetu',
              shortDesc: 'Qorannoo laaboratoorii ariifataaf',
              fullDesc: [
                'Paaneelii meetaabolikii fi qorannoo enzayimii hojjechuu',
                'Qorannoo saamuda  baay\'ee hojjechuu',
                'Bu’aa sirrii kan qabannaa xiqqaa ta’een',
                'Adeemsa hojii mana yaalaa kilinikaa ni sirreessa'
              ],
              image: '/images/machines/chemistry_machine.png'
            },
            {
              name: 'Maashinii CBC', 
              shortDesc: 'Qorannoo dhiigaa guutuu',
              fullDesc: [
                'Qorannoo dhiigaa guutuu parameetara 32',
                'Garaagarummaa kutaa 5 qabu sadarkaa olaanaa',
                'Wantoota seelii hin baramne battalumatti adda ni baasa',
                'Daqiiqaa keessatti sirrii ta’uu sadarkaa mana yaalaa'
              ],
              image: '/images/machines/cbc_machine.png'
            },
            {
              name: 'Maashinii Xiinxala Hormoonii', 
              shortDesc: 'Qorannoo sadarkaa hormoonii sirrii ta\'e',
              fullDesc: [
                'HHormoonota 50+ (taayifooyidii, walhormaataa fi koritisoolii) ni safara .',
                'Teknooloojii imiunooaasee qulqullina guddaa qabu',
                'Sirrummaa mana yaalaa CLIAn mirkanaa’e daqiiqaa 15 keessatti',
                'Endokiraynii fi meetaabolikii qorachuuf'
              ],
              image: '/images/machines/hormonal_analyzer.png'
            },
            {
              name: 'Maashinii Xiinxala Elektiroolayitii', 
              shortDesc: 'Qorannoo sadarkaa eleektiroolayitii ariifataa',
              fullDesc: [
                'Soodiyamii, potaasiyamii, klorayidii fi kaalsiyamii safaruu',
                'Teknooloojii elektiroodii filatamaa (ISE)',
                'Bu’aan kunuunsa cimaadhaaf daqiiqaa <2 keessatti argama',
                'Dizaayiniin kompaaktii itti fayyadama mana yaalaa ykn bakka kunuunsaa'
              ],
              image: '/images/machines/electrolyte_machine.png'
            }
          ]
        },
        {
          name: 'Maashinoota Kutaa Haadholii fi Da’umsaa',
          machines: [
            {
              name: 'Maashinii Hordoffii CTG', 
              shortDesc: 'Hordoffii onnee daa’imaa fi hordoffii gochuu',
              fullDesc: [
                'Dhahannaa onnee daa\'imaa & dhiita\'uu gadameessaa hordofa',
                'Xiinxala kompiitaraan fayyaa daa’ima gadameessa keessatti',
                'Maxxansaa & waraabbii dijitaalaa xiinxala teessumaatiif',
              'Saayinsii mana da\'umsaa; fi klinikii irratti fayyadamuuf'
              ],
              image: '/images/machines/ctg.png'
            },
            {
              name: 'Maashinii Kolposkooppii Dijiitaalaa', 
              shortDesc: 'Fakkii sirrii qaama da\'umsaa',
              fullDesc: [
                'Fakkii 4K ultra-HD qorannoo qaamaa sirriif',
                'Ifa LED sirreeffamuu danda\'u kan filtara magariisaa qabu',
                'Qorannoodhaaf hanga 30x guddisuu kan danda\'u',
                'Softiweeriin suuraa walitti makame galmeedhaaf',
                'Wantoota kaansarii duraa kanneen hin baramne dafanii adda baasuu'
              ],
              image: '/images/machines/colposcope.png'
            }
          ]
        },
        {
          name: 'Maashinoota Mana Qorannoo Oppireeshinii',
          machines: [
            {
              name: 'Maashinii Anesthesia', 
              shortDesc: 'To\'annaa yaalamaa qajeelfama sirrii ta\'een',
              fullDesc: [
                'Veentileetara walitti makame kan haala hafuura baafannaa dachaa qabu',
                'Walnyaatinsa gaazii sirrii (O2, N2O, jijjiiramaa) .',
                'Hordoffii dhukkubsataa yeroo qabatamaa (ETCO2, SpO2, ECG) .',
                'Dizaayiniin kompaaktii OR fi bakka dhukkubsattoota ala jiraniif',
              ],
              image: '/images/machines/anesthesia_machine.png'
            },
            {
              name: 'Ifaa Baqaqsanii Hodhuu LED', 
              shortDesc: 'Hojimaataaf ibsaa gaaddidduu irraa bilisa ta’e',
              fullDesc: [
                'Ifaa jijjiiramaa lux 30,000+',
                'LED halluu sirreeffame mul\'ata tishuu dhugaatiif',
                'Qabduu sterilizable to\'annoo aseeptikiif',
                'Baatirii ofhaaromsu baqaqsanii hodhuu addaan hin cinneef'
              ],
              image: '/images/machines/surgical_light.png'
            }
          ]
        }
      ]
    }
  };

  // Translations
  const translations = {
    en: {
      title: "Our",
      highlightedTitle: "Advanced Technology Machines",
      description: "Discover our state-of-the-art medical equipment that combines advanced technology with clinical excellence to deliver accurate diagnoses and effective treatments",
      emergencyTitle: "24/7 Emergency Ambulance Service",
      emergencyDesc: "Our hospital is equipped with fully-staffed ambulances available round the clock for emergency response and patient transfers.",
      generatorTitle: "Automated 90KVA Generator",
      generatorDesc: "Ensuring uninterrupted power supply for all critical medical equipment and facilities during outages.",
      seeMore: "See More",
      showLess: "Show Less",
    },
    am: {
      title: "የእኛ",
      highlightedTitle: "የላቀ የቴክኖሎጂ ማሽኖች",
      description: "ትክክለኛ ምርመራዎችን እና ውጤታማ ህክምናዎችን ለማቅረብ የላቀ ቴክኖሎጂን ከክሊኒካዊ ብቃቱ ጋር የሚያጣምረው ዘመናዊ የህክምና መሳሪያችንን ያግኙ።",
      emergencyTitle: "24/7 የአደጋ ጊዜ የአምቡላንስ አገልግሎት",
      emergencyDesc: "ሆስፒታላችን ለአደጋ ምላሽ እና ለታካሚዎች ማጓጓዣ ሙሉ ሰዓት የሚያገለግሉ ሙሉ ሰራተኞች ያሉት አምቡላንስ አለው።",
      generatorTitle: "Automated 90KVA ጀነሬተር",
      generatorDesc: "ኃይል በተቋረጠ ጊዜ ለሁሉም ወሳኝ የህክምና መሳሪያዎች እና መገልገያዎች ያልተቋረጠ የሃይል አቅርቦት ማረጋገጥ።",
      seeMore: "ተጨማሪ ይመልከቱ",
      showLess: "በትንሹ አሳይ",
    },
    om: {
      title: "Maashinoota Keenya",
      highlightedTitle: "Teeknooloojii Ol'aanaa",
      description: "Meeshaalee yaalaa keenya ammayyaa kanneen teeknooloojii sadarkaa olaanaa fi gahumsa kilinikaa walitti makuun qorannoo sirrii fi yaala bu’a qabeessa ta’e argadhaa",
      emergencyTitle: "Tajaajila Ambulaansii Yeroo Hundaa",
      emergencyDesc: "Hospitaalli keenya ambulaansii hojjettoota guutuu qaban kanneen deebii hatattamaa fi jijjiirraa dhukkubsattootaaf sa'aatii guutuu argaman qaba.",
      generatorTitle: "Jenereetara Automated 90KVA",
      generatorDesc: "meeshaalee yaalaa fi dhaabbilee murteessoo ta’an hundaaf yeroo addaan cituu humna ibsaa addaan hin cinne mirkaneessuuf",
      seeMore: "Dabalataan Ilaaluuf",
      showLess: "Xiqqeessuuf",
    }
  };

  const t = translations[language];

  // Function to get translated department and machine names
  const getTranslatedDepartment = (deptIndex) => {
    const deptTranslations = {
      en: [
        'Radiology Department Machines',
        'Laboratory Department Machines',
        'Gynecology and Obstetric Department Machines',
        'Operation Theatre Machines'
      ],
      am: [
        'የራዲዮሎጂ ክፍል ማሽኖች',
        'የላቦራቶሪ ክፍል ማሽኖች',
        'የሴቶች ሕክምና እና የወሊድ ክፍል ማሽኖች',
        'የቀዶ ሕክምና ክፍል ማሽኖች'
      ],
      om: [
        'Maashinoota Kutaa Raadiyooloojii',
        'Maashinoota Kutaa Laaboratoorii',
        'Maashinoota Kutaa Haadholii fi Da’umsaa',
        'Maashinoota Mana Qorannoo Oppireeshinii'
      ]
    };
    return deptTranslations[language][deptIndex];
  };

  const getTranslatedMachine = (deptIndex, machineIndex) => {
    const machineTranslations = {
      en: {
        0: ['Holter Monitor Machine', '3D Ultrasound Machine', 'Defibrillator Machine', 'Digital X-ray Machine'],
        1: ['Fully Automated Chemistry Machine', 'CBC Machine', 'Hormonal Analyzer Machine', 'Electrolyte Analyzer Machine'],
        2: ['CTG Monitor Machine', 'Digital Colposcope Machine'],
        3: ['Anesthesia Machine', 'LED Surgical Light']
      },
      am: {
        0: ['ሆልተር ሞኒተር ማሽን', '3D አልትራሳውንድ ማሽን', 'ዲፊብሪሌተር ማሽን', 'ዲጂታል X-ray ማሽን'],
        1: ['ሙሉ አውቶማቲክ ኬሚስትሪ ማሽን', 'CBC ማሽን', 'ሆርሞናል አናላይዘር ማሽን', 'ኤሌክትሮላይት አናላይዘር ማሽን'],
        2: ['CTG ሞኒተር ማሽን', 'ዲጂታል ኮልፖስኮፕ ማሽን'],
        3: ['አነስቲዚያ ማሽን', 'LED የቀዶ ሕክምና መብራት']
      },
      om: {
        0: ['Maashinii Holter Monitor', 'Maashinii Altiraasaawundii 3D', 'Maashinii Defibrillator', 'Maashinii raajii X-ray Dijiitaalaa'],
        1: ['Maashinii Keemistirii Guutummaatti Ofumaan Hojjetu', 'Maashinii CBC', 'Maashinii Xiinxala Hormoonii', 'Maashinii Xiinxala Elektiroolaayitii'],
        2: ['Maashinii Hordoffii CTG', 'Maashinii Kolposkooppii Dijiitaalaa'],
        3: ['Maashinii Anesthesia', 'Ifaa Baqaqsanii Hodhuu LED']
      }
    };
    return machineTranslations[language][deptIndex][machineIndex];
  };

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      {/* Gradient background container */}
      <div className={`min-h-screen w-full ${isDarkMode ? 
        'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 
        'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'}`}>
        
        {/* Content overlay */}
        <div className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} min-h-screen w-full`}>
          <section id='machines' className="py-16 px-4 sm:px-6 relative min-h-[80vh]">
            {/* Full width container */}
            <div className="max-w-7xl mx-auto w-full flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t.title} <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{t.highlightedTitle}</span>
                </h2>
                <div className={`w-20 h-1 mx-auto mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t.description}
                </p>
              </motion.div>

              {/* Full width grid container */}
              <div className="w-full space-y-16">
                {machineData[language].departments.map((department, deptIndex) => (
                  <div key={deptIndex} className="w-full space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {getTranslatedDepartment(deptIndex)}
                      </h3>
                    </motion.div>
                    
                    {/* Full width grid */}
                    <div className={`w-full grid grid-cols-1 ${department.machines.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'} gap-6`}>
                      {department.machines.map((machine, index) => {
                        const cardId = `${deptIndex}-${index}`;
                        const isExpanded = expandedCards.includes(cardId);
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className={`rounded-xl overflow-hidden flex flex-col transition-all duration-300 shadow-md
                                      ${isDarkMode 
                                        ? 'bg-gray-800 border-gray-700 hover:shadow-blue-900/30' 
                                        : 'bg-white border-gray-200 hover:shadow-lg'}
                                      border ${isExpanded ? 'h-auto' : 'h-[400px]'}`}
                          >
                            <div className="relative h-48 w-full">
                              <Image
                                src={machine.image}
                                alt={machine.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            
                            <div className="p-5 flex flex-col flex-grow">
                              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {getTranslatedMachine(deptIndex, index)}
                              </h3>
                              
                              <p className={`mb-3 text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                {machine.shortDesc}
                              </p>
                              
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <ul className={`space-y-2 mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {machine.fullDesc.map((point, i) => (
                                      <li key={i} className="flex items-start text-sm">
                                        <span className={`mr-2 mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleCardExpand(cardId)}
                                className={`mt-4 text-sm font-medium flex items-center justify-center w-full py-2 rounded-lg
                                          ${isDarkMode 
                                            ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                              >
                                {isExpanded ? t.showLess : t.seeMore}
                                <svg
                                  className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </motion.button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Services Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mt-16 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} flex flex-col md:flex-row items-center gap-8`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/machines/ambulance.png"
                      alt="24/7 Ambulance Service"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {t.emergencyTitle}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.emergencyDesc}
                  </p>
                  <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-start gap-4`}>
                    <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.generatorTitle}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t.generatorDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Machines;