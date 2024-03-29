const data = [
    {
        id: 1,
        category: 'CCTV',
        subCategory: 'DVR',
        productName: '4/8/16/32 Channel Penta-brid 1080P Compact 1U Digital Video Recorder',
        productCode: 'DH-XVR5108/16HS-X',
        description: 'HDCVI H.265+/H.265 addresses HD/UHD surveillance challenges by significantly reducing bitrate, ensuring quality in 4MP/4K. The Lite Series, designed for budget constraints, adopts Smart H.265+ for improved encoding efficiency, reducing bandwidth/storage costs and Total Cost of Ownership (TCO).',
        img: '../../DVR.png',
        features: ['Surveillance system with HDCVI H.265+/H.265 for high-resolution, cost-effective surveillance.', 
        'Auto-detects HDCVI/AHD/TVI/CVBS camera signals for user-friendly operation.', 
        'Supports up to 5MP HDCVI and 6MP IP cameras for high-definition input.',
        'Intelligent Video System (IVS) with motion detection, abandoned object detection, face detection, and Tripwire analytics.',
        'Smart Search feature enables quick retrieval of motion detection videos during playback.'
    ]
    },
    {
        id: 2,
        category: 'CCTV',
        subCategory: 'Camera',
        productName: '5MP Starlight HDCVI Quick-to-install IR Eyeball Camera',
        productCode: 'DH-HAC-HDW1500TRQ(-A)',
        description: 'Experience 5MP full HD video seamlessly using existing cabling with HDCVI technology. The Lite series 5MP HDCVI camera combines a compact design with high-quality imagery at an affordable price. With motorized/fixed lens options, multi-language OSD, and HD/SD switchable output, it offers structural flexibility. Ideal for SMB solutions, this camera delivers a cost-effective and high-performance choice.',
        img: '../../indoor.png',
        features: ['Max 25 fps@5MP (16:9 video output).',
        'Quick-to-install eyeball saves installation time.', 
        'Built-in mic (-A).',
        'CVI/CVBS/AHD/TVI switchable.',
        '3.6 mm fixed lens (2.8 mm optional) · Max. IR length 25 m, Smart IR',
        'IP50, DC12V.',
        'Suitable for indoors.'
    ]
    },
    {
        id: 3,
        category: 'CCTV',
        subCategory: 'Camera',
        productName: '4MP HDCVI IR Bullet Camera',
        productCode: 'DH-HAC-HFW1400THP-I4',
        description: 'Experience superior 4MP video effortlessly using existing coaxial infrastructure with HDCVI. The compact Lite series camera offers high-quality imagery at a friendly price, featuring vari-focal/fixed lens options, multi-language OSD, and HD/SD switchable output. Ideal for SMB solutions, it provides a cost-effective and high-performance choice.',
        img: '../../outdoor.png',
        features: ['Max. 30fps@4MP',
        'HD and SD output switchable.', 
        '3.6mm fixed lens (2.8mm, 6mm optional).',
        'Max. IR length 40m, Smart IR.',
        'IP67, DC12V.',
        'Suitable for outdoors.'
    ]
    },
    {
        id: 4,
        category: 'Door Access',
        subCategory: '',
        productName: 'WiFi Tuya IP68 Waterproof Door Access Control System Standalone Keypad RFID Card Fingerprint Access Control',
        productCode: 'TY-TF2',
        description: 'The device is a standalone access control and proximity card reader which supports EM card types. It builds-in STC microprocessor, with strong anti-interference ability, high security and reliability, powerful function and convenient operation. It’s widely used in high-end buildings, residential communities and other public places.',
        img: '../../tytf2-PhotoRoom.png',
        features: ['High-Quality and High-Safety Access Control.',
        'Quick response time.', 
        'Acoomodates 10000 standard users, 300 fingerprint users, 10000 password users.',
        'Support card, password, password PLUS card, Tuya mobile app opens the door.',
        'LED touch screen.',
        'Can be used as Stand Alone Keypad.',
        'Connection to computer not required, able to work alone.'
    ]
    },
    {
        id: 5,
        category: 'Door Access',
        subCategory: '',
        productName: 'Fingerprint Access Control Terminal',
        productCode: 'DS-K1T804AMF',
        description: 'The DS-K1T804AMF is a reliable access control terminal designed for diverse applications. It offers multi-factor authentication through face recognition, card authentication, and card with face authentication. Deep learning algorithms enhance face recognition accuracy, ensuring a seamless experience. The terminal supports dual authentication with Mifare cards, integrates easily with existing systems, and features a modern design for seamless blending in any environment.  It delivers a durable and long-lasting performance.',
        img: '../../fingerprint.png',
        features: ['Access control fingerprint terminal.',
        '3,000 fingerprints, 3,000 cards and 100,000 events storage.', 
        'Built-in card reader for Mifare1 card.',
        'Communication via TCP/TP and Wi-Fi.',
        'RS-485, wiegand interface.',
        'Alarm input and output interface.',
        'ISUP5.0,ISAPI.'
    ]
    },
    {
        id: 6,
        category: 'Door Access',
        subCategory: '',
        productName: 'Face Recognition Terminal',
        productCode: 'DS-K1T342MFWX',
        description: 'Face recognition terminal adopts deep learning algorithm, which helps to recognize the face faster with higher accuracy. It also supports multiple authentication modes: face/card/fingerprint authentication, etc. It can be applied in multiple scenarios, such as buildings, enterprises, financial industries, and other important areas.',
        img: '../../facerecog.png',
        features: ['Max.1500 faces capacity, Max.3000 fingerprints capacity, and Max.3000 cards.',
        'Face Recognition Terminal, 4.3-inch LCD touch screen, 2 Mega pixel wide-angle lens, Built-in Mifare card reading module.', 
        'Two-way audio with client software, indoor station, and main station; Supports TCP/IP, Wi-Fi.',
        'Supports ISAPI, ISUP5.0.',
        'Configuration via the web client.',
        'Face Recognition Distance: 0.3 m to 1.5 m.',
        'Duration < 0.2 s/User.',
        'Accuracy rate ≥ 99%.',
        'Supports mask recognition.'
    ]
    },
    {
        id: 7,
        category: 'Door Access',
        subCategory: '',
        productName: 'Dahua IP Video Audio Intercom System & Card Access Control',
        productCode: '',
        description: 'Dahua 1MP Wi-Fi Villa Outdoor Station ensures advanced security with an HD CMOS camera, wide field of view, night vision, and voice indication. It supports remote intercom via a mobile app, featuring a 7" TFT Capacitive touch screen with 1024x600 resolution and standard POE. The IP Video Intercom system includes similar features, adding card-based door opening, EM Lock control, and 6ch wired/wireless alarm integration.',
        img: '../../dahua.png',
        features: ['Hd Cmos Camera.',
        'Large Field Of View Angle. Night Vision. Voice Indication.', 
        'Remote Intercom With Mobile App.',
        '7 Inches Tft Capacitive Touch Screen, 1024x600.',
        '6ch Wired Alarm Integration.',
        '6ch Wireless Alarm Integration (433mhz).',
        'Dahua 4-port Poe Included.',
        'Surface Mounted.',
        'Ipc Surveillance.'
    ]
    },
    {
        id: 8,
        category: 'Door Access',
        subCategory: '',
        productName: 'Video Intercom Villa Door Station Bundle',
        productCode: ' DS-KIS603-P',
        description: 'This bundle contains the outdoor video intercom station and the indoor station needed to make an IP intercom device completely operating. In order to allow live communication through the Indoor Station or remotely via HikConnect, the small, single button interface features two-way audio. App for smartphones. For multi-room entry, it is possible to connect up to 5 secondary indoor stations.',
        img: '../../villa.png',
        features: ['IP video intercom bundle for villa or house.',
        'One call button for easier calls.', 
        'Including: DS-KV6113-WPE1(C) × 1, DS-KH6320-WTE1 × 1, PSU × 2.',
        'Power adapter included in the package.',
        ]
    },
    {
        id: 9,
        category: 'PABX',
        subCategory: 'Fanvil X300 Series',
        productName: 'Basic IP Phone (Dot Matrix)',
        productCode: 'X301G',
        description: 'X301G is an entry level Gigabit SIP phone with multi-function. It features a 2.3- inch 128x48 pixel dot-matrix display, supporting 2 SIP lines and 6-way audio conference to render a user-friendly experience. X301G has rich functions such as HD audio, dual 10/100/1000 Mbps network ports and integrated PoE, providing an efficient and high-quality business communication experience for enterprises.',
        img: '../../x301G.png',
        features: ['2.3-inch 128x48 pixel dot-matrix display.',
        'Support audio codec G.722 and Opus, HD audio on speakerphone and handset.', 
        'Support 6-way audio conference.',
        'Support EHS wireless headset.',
        'Dual10/100/1000 Mbps network ports, integrated PoE.',
        'Two installation methods of desktop stand and wall mountable.'
        ]
    },
    {
        id: 10,
        category: 'IP-PABX',
        subCategory: 'Fanvil X300 Series',
        productName: 'Enterprise IP Phone (Colour)',
        productCode: 'X303G',
        description: 'X303G is an entry level Gigabit color screen SIP phone with high performance specially for enterprise. It features a 2.4-inch 320x240 pixel color screen, supporting 4 SIP lines and local 6-way audio conference to render a user-friendly experience. X303G has rich functions such as HD audio, dual 10/100/1000 Mbps network ports and integrated PoE, providing an efficient and high-quality business communication experience for enterprises.',
        img: '../../x303G.png',
        features: ['2.4-inch 320x240 pixel color screen.',
        'Support audio codec G.722 and Opus, HD audio on speakerphone and handset.', 
        'Support 6-way audio conference.',
        'Support EHS wireless headset.',
        'Dual10/100/1000 Mbps network ports, integrated PoE.',
        'Two installation methods of desktop stand and wall mountable.'
        ]
    },
    {
        id: 11,
        category: 'IP-PABX',
        subCategory: 'Fanvil X300 Series',
        productName: 'Enterprise IP Phone (Wi-Fi)',
        productCode: 'X303W',
        description: 'X303W is the cost-effective color screen Wi-Fi IP phone with high performance specially for enterprise. It features a 2.4-inch 320x240 pixel color screen, supporting 4 SIP lines and 6-way audio conference to render a user-friendly experience. X303W has rich functions such as HD audio and built-in 2.4GHz & 5GHz Wi-Fi, providing an efficient and high-quality business communication experience for enterprises.',
        img: '../../x303W.png',
        features: ['2.4-inch 320x240 pixel color screen.',
        'Support audio codec G.722 and Opus, HD audio on speakerphone and handset.', 
        'Support 6-way audio conference.',
        'Support EHS wireless headset.',
        'Built-in 2.4GHz& 5GHz Wi-Fi, realizing more flexible connectivity.',
        'Two installation methods of desktop stand and wall mountable.'
        ]
    },
    {
        id: 12,
        category: 'IP-PABX',
        subCategory: 'Fanvil XU Series',
        productName: 'Enterprise IP Phone',
        productCode: 'X4U',
        description: 'X4U is an enterprise IP Phone featuring 2.8-inch main color screen and 2.4-inch extended screen, HD voice, gigabit Ethernet, 12 SIP lines, PoE, 6-way audio conference and other extended features like EHS headset, BT dongle and Wi-Fi dongle. It provides the high-quality and convenient experience for users.',
        img: '../../x4u.png',
        features: ['2.8-inch main colour screen and 2.4-inch extended screen for DSS keys.',
        'HD audio on speakerphone and handset.', 
        'Support 6-way audio conference.',
        '3 Line keys on the main display.',
        '6 DSS keys on the extended screen, up to 30 DSS keys via 5 pages.',
        'Support EHS wireless headset, Wi-Fi dongle or BT dongle.',
        'Dual Gigabit ports, integrated PoE.',
        'Stand with 2 adjustable angles of 45 and 50 degrees.'
        ]
    },
    {
        id: 13,
        category: 'IP-PABX',
        subCategory: 'Fanvil XU Series',
        productName: 'High-End IP Phone',
        productCode: 'X6U',
        description: 'X6U is an enterprise IP Phone featuring 4.3-inch main color screen and two 2.4-inch extended screens, HD voice, gigabit Ethernet, 20 SIP lines, PoE, Built-in Bluetooth, 6-way audio conference and other extended features like EHS headset. It provides the high-quality and convenient experience for users.',
        img: '../../x6u.png',
        features: ['4.3-inch main colour screen and 2.4-inch extended screen for DSS keys.',
        'HD audio on speakerphone and handset.', 
        'Support 6-way audio conference.',
        '5 Line keys on the main display.',
        '12 DSS keys on the extended screen, up to 60 DSS keys via 5 pages.',
        'Built-in Bluetooth 4.2, support Bluetooth headset; support Wi-Fi dongle.',
        'Support EHS wireless headset.',
        'Dual Gigabit ports, integrated PoE.',
        'Stand with 2 adjustable angles of 45 and 50 degrees.'
        ]
    },
    {
        id: 14,
        category: 'IP-PABX',
        subCategory: 'Fanvil XU Series',
        productName: 'High-End IP Phone (Operator)',
        productCode: 'X210',
        description: 'X210 enterprise IP Phone is designed for business managers and busy office professionals to streamline communication and enhance collaboration with its HD voice, 20 SIP lines, up to 106 DSS keys, built-in Bluetooth, Wi-Fi connectivity (via Wi-Fi dongle, IP camera / SIP video door phone integration, codec H.264 support for receiving video calls and more!',
        img: '../../x210.png',
        features: ['4.3-inch main colour display, 2x3.5-inch side colour displays for DSS keys.',
        '20 SIP lines, hotspot.',
        'HD audio on speakerphone and handset.', 
        'Built-in Bluetooth 4.2',
        'Support 6-way audio conference.',
        'Up to 106 DSS keys (42 tri-coloured physical keys)',
        'Support Wi-Fi dongle.',
        'Video codec H.264 support for receiving video calls',
        'Dual Gigabit ports, integrated PoE.',
        'Stand with 2 adjustable angles of 45 and 50 degrees.'
        ]
    },
    {
        id: 15,
        category: 'IP-PABX',
        subCategory: 'Fanvil XU Series',
        productName: 'Android Touch Screen IP Phone',
        productCode: 'X7A',
        description: 'As a high-end enterprise IP phone with Android 9.0 OS, Fanvil X7A provides a more intelligent and smoother touch operation experience for the users. 112 DSS keys on the 7-inch color touch screen, supported 3rd party apps, built-in WiFi, built-in Bluetooth allows daily communication smarter and simpler. Matching an adjustable camera, Fanvil X7A can deliver a superb audio and video for the group conference.',
        img: '../../x7a.png',
        features: ['Support an external Fanvil USB camera (optional)',
        '20 SIP lines, hotspot.',
        'HD audio with Harman speaker.', 
        'Built-in Bluetooth 4.2 and 2.4G/5G Wi-Fi.',
        '112 one-touch DSS keys on 7-inch capacity colour touch screen.',
        'Video codec H.264 support for receiving video calls',
        'Dual Gigabit ports, integrated PoE.',
        'Stand with 2 adjustable angles of 45 and 50 degrees.'
        ]
    },
    {
        id: 16,
        category: 'IP-PABX',
        subCategory: 'Fanvil XU Series',
        productName: 'Android IP Phone with Camera',
        productCode: 'X7A/CM60',
        description: 'As a high-end enterprise IP phone with Android 9.0 OS, Fanvil X7A with camera provides a more intelligent and smoother touch operation experience for the users. 112 DSS keys on the 7-inch color touch screen, supported 3rd party apps, built-in WiFi, built-in Bluetooth allows daily communication smarter and simpler. Matching an adjustable camera, Fanvil X7A with camera can deliver a superb audio and video for the group conference.',
        img: '../../cm60.png',
        features: ['Support an external Fanvil USB camera (optional)',
        '20 SIP lines, hotspot.',
        'HD audio with Harman speaker.', 
        'Built-in Bluetooth 4.2 and 2.4G/5G Wi-Fi.',
        '112 one-touch DSS keys on 7-inch capacity colour touch screen.',
        'Video codec H.264 support for receiving video calls.',
        'Dual Gigabit ports, integrated PoE.',
        'Stand with 2 adjustable angles of 45 and 50 degrees.'
        ]
    },
    {
        id: 17,
        category: 'IP-PABX',
        subCategory: 'Fanvil XU Series',
        productName: 'Portable WiFi Phone (IP67)',
        productCode: 'W611W',
        description: 'LINKVIL W611W is a portable, elegant Wi-Fi phone designed for mobile communication applications. Certified to IP67 standard, W611W is highly waterproof, dustproof, and drop-safe from 1.8-meter height. It has an excellent performance in different environments with humidity and dust. W611W integrates Wi-Fi 6, bringing a superb wireless communication experience. Moreover, it integrates Bluetooth 5.0 for pairing with headsets and mobile devices. Installed with a rechargeable 1900mAh battery, W611W is ready for 9 hours’ talk time or 200 hours standby time. W611W is widely used in various wireless scenarios such as enterprises, shopping malls, residential areas, hotels and warehouses, providing users with a high-quality mobile communication experience.',
        img: '../../w611w.png',
        features: ['2.4" 240 x 320 color screen with intuitive user interface',
        'High protection level of IP67, which is waterproof, dustproof, and drop-safe from 1.8-meter height.',
        'Support dual-band Wi-Fi 802.11 a/b/g/n/ac/ax (Wi-Fi 6, 2.4GHz & 5GHz).', 
        'Support IEEE802.11k/v/r roaming.',
        'Support WPA / WPA2-PSK and 802.1X EAP encryption to ensure communications security.',
        'Built-in Bluetooth 5.0 can be used to connect wireless earphone.',
        'Support distance sensor and self-adaptive light-sensing screen will be off during a call on the handset.',
        'One configurable push-to-talk (PTT) button for quick dial.',
        'Up to 9 hours’ talk time and up to 200 hours standby time.'
        ]
    },
    {
        id: 18,
        category: 'IP-PABX',
        subCategory: 'P-Series',
        productName: 'P-Series PBX System',
        productCode: 'P550/P560/P570',
        description: 'Yeastar P-Series Appliance Edition is an IP PBX system that unifies voice, video, applications, and more. Full-featured, flexible, and secure, it offers three appliance model options with user capacity ranging from 50 to 500. In addition to SIP trunks, P-Series IP PBX also supports PSTN, EI/TI/PRI, ISDN BRI, and GSM/3G/4G, empowering you and your employees to communicate from desktops, IP phones, mobile phones, and on the web effortlessly. As a full-featured IP PBX & UC solution, P-Series Appliance Edition will meet the daily communication needs for every SME organization.',
        img: '../../pseries.png',
        features: ['50-300 Base Users.',
        '50-500 Max Users.',
        '25-120 Max Concurrent Calls.', 
        '8-16 Max FXS Ports.',
        '8-16 Max FXO/BRI Ports.',
        '4-6 Max GSM/3G/4G Ports.',
        '0-2 Max E1/T1/J1 Ports.'

        ]
    },
    {
        id: 19,
        category: 'IP-PABX',
        subCategory: 'S-Series',
        productName: 'S-Series PBX System',
        productCode: 'S412/S20/S50/S100/S300',
        description: 'The S-Series is easy to use, flexible and feature-rich S-Series VoIP PBX is designed to help small and medium sized business make a giant leap in efficiency and cost-savings. As a robust feature set for all of your calling needs, the Yeastar S-Series is designed to help you grow your business by providing plenty of business-enhancing features and functions.',
        img: '../../sseries.png',
        features: ['20-500 Users.',
        '10-120 Max Concurrent Calls.', 
        'Up to 12 FXS Ports.',
        'Up to 4 CO/BRI Lines.',
        ]
    }
    
]

export default data