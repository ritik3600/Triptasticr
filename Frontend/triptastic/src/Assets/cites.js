 const data= {
    "cities": [
      {
        "name": "Delhi",
        "description": "Delhi, the capital of India, is a bustling metropolis with a rich history and diverse culture.",
        "attractions": [
          "Red Fort",
          "Qutub Minar",
          "Humayun's Tomb",
          "India Gate",
          "Lotus Temple"
        ]
      },
      {
        "name": "Mumbai",
        "description": "Mumbai, the financial capital of India, is a vibrant city known for its Bollywood film industry and colonial architecture.",
        "attractions": [
          "Gateway of India",
          "Marine Drive",
          "Siddhivinayak Temple",
          "Haji Ali Dargah",
          "Elephanta Caves"
        ]
      },
      {
        "name": "Chennai",
        "description": "Chennai, the capital of Tamil Nadu, is a major cultural and economic hub, known for its temples, beaches, and South Indian cuisine.",
        "attractions": [
          "Marina Beach",
          "Kapaleeshwarar Temple",
          "Fort St. George",
          "San Thome Basilica",
          "Government Museum"
        ]
      },
      {
        "name": "Bangalore",
        "description": "Bangalore, the Silicon Valley of India, is a cosmopolitan city with a pleasant climate, tech parks, and numerous parks and gardens.",
        "attractions": [
          "Lalbagh Botanical Garden",
          "Bangalore Palace",
          "Cubbon Park",
          "Tipu Sultan's Summer Palace",
          "ISKCON Temple"
        ]
      },
      {
        "name": "Hyderabad",
        "description": "Hyderabad, the City of Pearls, is a blend of rich history and modernity, featuring impressive monuments and mouthwatering biryani.",
        "attractions": [
          "Charminar",
          "Golconda Fort",
          "Qutb Shahi Tombs",
          "Hussain Sagar Lake",
          "Ramoji Film City"
        ]
      },
      {
        "name": "Kolkata",
        "description": "Kolkata, the cultural capital of India, offers a blend of colonial-era architecture, literary heritage, and artistic traditions.",
        "attractions": [
          "Victoria Memorial",
          "Howrah Bridge",
          "Belur Math",
          "Dakshineswar Kali Temple",
          "Indian Museum"
        ]
      },
      {
        "name": "Ahmedabad",
        "description": "Ahmedabad, the largest city in Gujarat, is known for its rich heritage, colorful festivals, and impressive monuments.",
        "attractions": [
          "Sabarmati Ashram",
          "Sidi Saiyyed Mosque",
          "Adalaj Stepwell",
          "Kankaria Lake",
          "Calico Museum of Textiles"
        ]
      },
      {
        "name": "Chandigarh",
        "description": "Chandigarh, the first planned city of India, is known for its modern architecture, beautiful gardens, and Rock Garden.",
        "attractions": [
          "Rock Garden",
          "Sukhna Lake",
          "Rose Garden",
          "Capitol Complex",
          "Pinjore Gardens"
        ]
      },
      {
        "name": "Lucknow",
        "description": "Lucknow, the City of Nawabs, is known for its rich cultural heritage, polite 'Tehzeeb,' and exquisite Mughlai cuisine.",
        "attractions": [
          "Bara Imambara",
          "Chota Imambara",
          "Rumi Darwaza",
          "Hazratganj",
          "British Residency"
        ]
      },
      {
        "name": "Kanpur",
        "description": "Kanpur, a major industrial city in Uttar Pradesh, is known for its leather and textile industries.",
        "attractions": [
          "Allen Forest Zoo",
          "Kanpur Memorial Church",
          "JK Temple",
          "Phool Bagh",
          "ISKCON Temple"
        ]
      },
      {
        "name": "Vadodara",
        "description": "Vadodara, formerly known as Baroda, is a city with a rich history and is famous for its palaces and museums.",
        "attractions": [
          "Laxmi Vilas Palace",
          "Sayaji Gardens",
          "Vadodara Museum",
          "Kirti Mandir",
          "Sardar Patel Planetarium"
        ]
      },
      {
        "name": "Nagpur",
        "description": "Nagpur, the winter capital of Maharashtra, is known for its oranges and is a major political and commercial center.",
        "attractions": [
          "Deekshabhoomi",
          "Nagpur Central Museum",
          "Futala Lake",
          "Raman Science Centre",
          "Ambazari Lake"
        ]
      },
      {
        "name": "Ludhiana",
        "description": "Ludhiana, the industrial hub of Punjab, is known for its textile and manufacturing industries.",
        "attractions": [
          "Nehru Rose Garden",
          "Punjab Agricultural University Museum",
          "Gurudwara Nanaksar Jagraon",
          "Phillaur Fort",
          "Hardy's World"
        ]
      },
      {
        "name": "Amritsar",
        "description": "Amritsar is the spiritual and cultural center of the Sikh religion and is home to the magnificent Golden Temple.",
        "attractions": [
          "Golden Temple",
          "Jallianwala Bagh",
          "Wagah Border",
          "Durgiana Temple",
          "Maharaja Ranjit Singh Museum"
        ]
      },
      {
        "name": "Nashik",
        "description": "Nashik, known for its religious significance and vineyards, is one of the four cities that host the Kumbh Mela.",
        "attractions": [
          "Trimbakeshwar Temple",
          "Sula Vineyards",
          "Pandavleni Caves",
          "Saptashrungi Devi Temple",
          "Ramkund"
        ]
      },
      {
        "name": "Meerut",
        "description": "Meerut, an ancient city, is known for its historical monuments, educational institutions, and sports goods industry.",
        "attractions": [
          "St. John's Church",
          "Augarnath Temple",
          "Appu Ghar",
          "Suraj Kund Park",
          "Shahpeer Saheb"
        ]
      },
      {
        "name": "Rajkot",
        "description": "Rajkot, the fourth-largest city in Gujarat, is known for its traditional handicrafts, jewelry, and silk embroidery.",
        "attractions": [
          "Watson Museum",
          "Kaba Gandhi No Delo",
          "Aji Dam",
          "Lal Pari Lake",
          "Race Course Ground"
        ]
      },
      {
        "name": "Ghaziabad",
        "description": "Ghaziabad, a part of the National Capital Region, is known for its commercial centers and residential areas.",
        "attractions": [
          "Swarna Jayanti Park",
          "Hindon River",
          "City Forest",
          "Mohan Nagar Temple",
          "Shipra Mall"
        ]
      },
      {
        "name": "Dhanbad",
        "description": "Dhanbad is known for its coal mines and is often referred to as the 'Coal Capital of India.'",
        "attractions": [
          "Jharia Coal Mines",
          "Topchanchi Lake",
          "Birsa Munda Park",
          "Shakti Mandir",
          "Maithon Dam"
        ]
      },
      {
        "name": "Faridabad",
        "description": "Faridabad, another city in the National Capital Region, is known for its industrial clusters and green spaces.",
        "attractions": [
          "Surajkund",
          "Badkhal Lake",
          "Raja Nahar Singh Palace",
          "Sai Ka Angan",
          "Sarna Lake"
        ]
      },
      {
        "name": "Jamshedpur",
        "description": "Jamshedpur, also known as Tatanagar, is a planned industrial city and is home to Tata Steel, one of India's largest steel plants.",
        "attractions": [
          "Jubilee Park",
          "Dimna Lake",
          "Tata Steel Zoological Park",
          "Hudco Lake",
          "Bhuvaneshwari Temple"
        ]
      },
      {
        "name": "Asansol",
        "description": "Asansol is an industrial city known for its coal and steel industries.",
        "attractions": [
          "Kalyaneshwari Temple",
          "Nehru Park",
          "Burnpur Riverside Promenade",
          "Maithon Dam",
          "Joychandi Pahar"
        ]
      },
      {
        "name": "Allahabad",
        "description": "Allahabad, officially known as Prayagraj, is a city of historical and religious significance.",
        "attractions": [
          "Triveni Sangam",
          "Allahabad Fort",
          "Khusro Bagh",
          "Anand Bhavan",
          "Allahabad Museum"
        ]
      },
      {
        "name": "Amravati",
        "description": "Amravati is a city known for its cultural heritage, temples, and educational institutions.",
        "attractions": [
          "Ambadevi Temple",
          "Chikhaldara Wildlife Sanctuary",
          "Melghat Tiger Reserve",
          "Satidham Temple",
          "Wadali Talao"
        ]
      },
      {
        "name": "Solapur",
        "description": "Solapur is known for its historical monuments, textile industries, and the famous Siddheshwar Temple.",
        "attractions": [
          "Siddheshwar Temple",
          "Bhuikot Fort",
          "Hutatma Garden",
          "Great Indian Bustard Sanctuary",
          "Siddheshwar Lake"
        ]
      },
      {
        "name": "Hubli",
        "description": "Hubli, also known as Hubballi, is a major commercial and industrial center in Karnataka.",
        "attractions": [
          "Nrupatunga Hill",
          "Unkal Lake",
          "Indira Glass House Garden",
          "Chandramouleshwara Temple",
          "Bhavanishankar Temple"
        ]
      },
      {
        "name": "Jodhpur",
        "description": "Jodhpur, the Blue City, is famous for its majestic forts, palaces, and vibrant culture.",
        "attractions": [
          "Mehrangarh Fort",
          "Jaswant Thada",
          "Umaid Bhawan Palace",
          "Clock Tower",
          "Mandore Gardens"
        ]
      },
      {
        "name": "Raipur",
        "description": "Raipur, the capital of Chhattisgarh, is known for its steel markets, cultural heritage, and tribal art forms.",
        "attractions": [
          "Vivekananda Sarovar",
          "Mahant Ghasidas Memorial Museum",
          "Nandan Van Zoo and Safari",
          "Gandhi Udyan Park",
          "Shadani Darbar"
        ]
      },
      {
        "name": "Gwalior",
        "description": "Gwalior is known for its historical significance and is home to the magnificent Gwalior Fort.",
        "attractions": [
          "Gwalior Fort",
          "Jai Vilas Palace",
          "Saas Bahu Temple",
          "Tomb of Tansen",
          "Suraj Kund"
        ]
      },
      {
        "name": "Jalandhar",
        "description": "Jalandhar is known for its sports industry and is a major commercial and cultural center in Punjab.",
        "attractions": [
          "Devi Talab Mandir",
          "Pushpa Gujral Science City",
          "Shaheed-E-Azam Sardar Bhagat Singh Museum",
          "Nehru Park",
          "Wonderland Theme Park"
        ]
      },
      {
        "name": "Bareilly",
        "description": "Bareilly is known for its vibrant culture, historical monuments, and being the birthplace of the legendary poet Kabir Das.",
        "attractions": [
          "Fun City",
          "Trivati Nath Temple",
          "Dargah-e-Ala Hazrat",
          "Bareilly Fort",
          "Alakhnath Temple"
        ]
      },
      {
        "name": "Rishikesh",
        "description": "Rishikesh, situated in the foothills of the Himalayas, is a spiritual town known for its yoga and adventure sports.",
        "attractions": [
          "Lakshman Jhula",
          "Ram Jhula",
          "Triveni Ghat",
          "Neelkanth Mahadev Temple",
          "Beatles Ashram"
        ]
      },
      {
        "name": "Gurgaon",
        "description": "Gurgaon, officially known as Gurugram, is a leading financial and technology hub near Delhi with a rapidly growing infrastructure.",
        "attractions": [
          "Sultanpur National Park",
          "Kingdom of Dreams",
          "Ambience Mall",
          "Sheetala Devi Temple",
          "Damdama Lake"
        ]
      },
      {
        "name": "Rewari",
        "description": "Rewari is a historic city in Haryana known for its brass industry, historical sites, and cultural heritage.",
        "attractions": [
          "Rewari Heritage Steam Loco Shed",
          "Bada Talab",
          "Rao Tula Ram Park",
          "Rewari Zoo",
          "Jitender Park"
        ]
      },
      {
        "name": "Puri",
        "description": "Puri, a coastal city in Odisha, is famous for its ancient Jagannath Temple and beautiful beaches.",
        "attractions": [
          "Jagannath Temple",
          "Puri Beach",
          "Konark Sun Temple",
          "Chilika Lake",
          "Gundicha Temple"
        ]
      },
      {
        "name": "Rameswaram",
        "description": "Rameswaram, located on an island in Tamil Nadu, is a significant pilgrimage site for Hindus.",
        "attractions": [
          "Ramanathaswamy Temple",
          "Dhanushkodi",
          "Agneepath",
          "Pamban Bridge",
          "Kothandaramaswamy Temple"
        ]
      },
      {
        "name": "Darjeeling",
        "description": "Darjeeling, known as the 'Queen of the Hills,' is a hill station with breathtaking views of the Himalayas.",
        "attractions": [
          "Tiger Hill",
          "Darjeeling Himalayan Railway",
          "Batasia Loop",
          "Ghoom Monastery",
          "Mall Road"
        ]
      },
      {
        "name": "Gangtok",
        "description": "Gangtok, the capital of Sikkim, is a picturesque town surrounded by mountains and known for its monasteries.",
        "attractions": [
          "Rumtek Monastery",
          "Tsomgo Lake",
          "Ganesh Tok",
          "Hanuman Tok",
          "Namgyal Institute of Tibetology"
        ]
      },
      {
        "name": "Shillong",
        "description": "Shillong, the capital of Meghalaya, is known for its scenic beauty, waterfalls, and pleasant climate.",
        "attractions": [
          "Elephant Falls",
          "Shillong Peak",
          "Ward's Lake",
          "Don Bosco Centre for Indigenous Cultures",
          "Police Bazar"
        ]
      },
      {
        "name": "Leh",
        "description": "Leh, located in Ladakh, is a high-altitude desert city with a distinct Tibetan culture.",
        "attractions": [
          "Leh Palace",
          "Pangong Lake",
          "Nubra Valley",
          "Hemis Monastery",
          "Shanti Stupa"
        ]
      },
      {
        "name": "Dharamshala",
        "description": "Dharamshala, known for its Tibetan influence, is the residence of the Dalai Lama and offers stunning views of the Dhauladhar range.",
        "attractions": [
          "Tsuglagkhang Complex",
          "Bhagsunath Temple and Waterfall",
          "Triund Trek",
          "Namgyal Monastery",
          "Kangra Fort"
        ]
      },
      {
        "name": "Varanasi",
        "description": "Varanasi, one of the oldest inhabited cities in the world, is considered the spiritual heart of India and attracts pilgrims and travelers alike.",
        "attractions": [
          "Kashi Vishwanath Temple",
          "Ghats of Varanasi",
          "Sarnath",
          "Ramnagar Fort",
          "Bharat Mata Temple"
        ]
      },
      {
        "name": "Kochi",
        "description": "Kochi, also known as Cochin, is a coastal city in Kerala with a unique blend of Dutch, Portuguese, and British influences.",
        "attractions": [
          "Fort Kochi",
          "Mattancherry Palace",
          "Chinese Fishing Nets",
          "Marine Drive",
          "Jew Town"
        ]
      },
      {
        "name": "Surat",
        "description": "Surat, the Diamond City of India, is a major commercial center known for its diamond and textile industries.",
        "attractions": [
          "Dutch Garden",
          "Sardar Patel Museum",
          "Gopi Talav",
          "ISKCON Temple",
          "Dumas Beach"
        ]
      },
      {
        "name": "Visakhapatnam",
        "description": "Visakhapatnam, also known as Vizag, is a coastal city surrounded by hills and known for its picturesque beaches.",
        "attractions": [
          "RK Beach",
          "Araku Valley",
          "Simhachalam Temple",
          "Kailasagiri Hill Park",
          "Borra Caves"
        ]
      }
    ]
  }
  
  export default data;