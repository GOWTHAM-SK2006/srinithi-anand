export interface Legend {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  category?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  category: 'Awards & Trophies' | 'Certificates' | 'Competition Achievements' | 'Special Recognitions';
  year?: string;
  image: string;
  description?: string;
}

export interface TelevisionAppearance {
  id: string;
  channel: string;
  program: string;
  description: string;
  badge: string;
}

export interface RealityShow {
  id: string;
  channel: string;
  show: string;
  achievement: string;
  image: string;
}

export interface TourDiary {
  id: string;
  title: string;
  country: string;
  coverImage: string;
  tagline: string;
  images: string[];
}

export interface VideoPerformance {
  id: string;
  title: string;
  type: 'video' | 'youtube';
  src: string;
  thumbnail?: string;
  description?: string;
}

export const ARTIST_DATA = {
  name: 'Srinithi Anand',
  titles: 'Singer | Performer | Artist',
  tagline: 'A Voice That Creates Unforgettable Moments.',
  introBadge: 'AWARD WINNING SINGER',
  phone: '+91 95000 40780',
  phoneRaw: '+919500040780',
  email: 'anandsindu@gmail.com',
  whatsappUrl: 'https://api.whatsapp.com/send?phone=919500040780',
  socialLinks: {
    facebook: 'https://www.facebook.com/SrinithiAnandSinger/',
    youtube: 'https://www.youtube.com/@anandsindu',
    instagram: 'https://www.instagram.com/srinithi_anand/',
    whatsapp: 'https://api.whatsapp.com/send?phone=919500040780',
  },
  hero: {
    image: '/images/hero/hero1.png',
    bg: '/images/hero/hero-bg.jpg',
    ornament: '/images/hero/hand.png',
  },
  about: {
    heading: 'ABOUT SRINITHI ANAND',
    subheading: 'AWARD WINNING SINGER',
    bioParagraph1:
      'Srinithi Anand is a multi-talented young performer with a remarkable voice and passion for singing. She began her musical journey at the age of 7 and has since blossomed into a powerful, mature vocalist.',
    bioParagraph2:
      'Alongside her musical achievements, she nurtures interests in makeup artistry and cooking, making her a dynamic creative personality who brings poise, passion, and elegance to every stage she graces.',
    image: '/images/about/about.jpg',
    shapes: ['/images/about/about-shape-1.png', '/images/about/about-shape-2.png'],
  },
  stats: [
    { value: 150, suffix: '+', label: 'Grand Stage Shows', sublabel: 'Across renowned venues globally' },
    { value: 60, suffix: '+', label: 'Lakshman Sruthi Shows', sublabel: 'With the world-renowned orchestra' },
    { value: 60, suffix: '+', label: 'UK Murali Performances', sublabel: 'Grand orchestral concert tours' },
    { value: 30, suffix: '+', label: 'Geetharanjani Shows', sublabel: 'Celebrated live musical evenings' },
  ],
  versatility: [
    {
      genre: 'Carnatic Music',
      desc: 'Rigorous classical grounding characterized by melodic purity, complex ragas, and technical finesse.',
    },
    {
      genre: 'Devotional Songs',
      desc: 'Soul-stirring, spiritually resonant renditions that bring profound peace and meditative depth.',
    },
    {
      genre: 'Film & Playback',
      desc: 'Vibrant, emotive playback renditions spanning romantic classics, fast-paced rhythms, and contemporary hits.',
    },
    {
      genre: 'Fusion Music',
      desc: 'Innovative crossover harmonies bridging traditional South Asian ragas with modern world acoustic instrumentation.',
    },
  ],
  legends: [
    {
      id: 'spb',
      name: 'SP Balasubrahmanyam',
      role: 'Legendary Playback Icon',
      image: '/images/legends/spb.png',
      description: 'Shared prestigious musical stages with the immortal maestro of Indian cinema.',
    },
    {
      id: 'unni-menon',
      name: 'Unni Menon',
      role: 'Renowned Playback Singer',
      image: '/images/legends/unni-menon.png',
      description: 'Performed alongside the melodious voice behind evergreen cinematic masterpieces.',
    },
    {
      id: 'mano',
      name: 'Mano',
      role: 'Celebrated Playback Singer',
      image: '/images/legends/mano.png',
      description: 'Collaborated on vibrant stage productions with the powerhouse versatile vocalist.',
    },
    {
      id: 'spb-charan',
      name: 'SPB Charan',
      role: 'Distinguished Singer & Producer',
      image: '/images/legends/spb-charan.png',
      description: 'Featured in celebrated televised musical concerts and orchestral live tributes.',
    },
  ] as Legend[],

  // CELEBRITY PHOTOGRAPHS (16 Original Photographs)
  celebrities: [
    { id: 'c1', title: 'Musical Moment with Maestro', image: '/images/celebrities/celeb-1.jpg', subtitle: 'Celebrity Felicitation' },
    { id: 'c2', title: 'Celebrity Backstage Gathering', image: '/images/celebrities/celeb-2.jpg', subtitle: 'Concert Backstage' },
    { id: 'c3', title: 'Distinguished Stage Felicitation', image: '/images/celebrities/celeb-3.jpg', subtitle: 'State Cultural Gala' },
    { id: 'c4', title: 'Celebrity Honor Ceremony', image: '/images/celebrities/celeb-4.jpg', subtitle: 'Honors Showcase' },
    { id: 'c5', title: 'Industry Luminaries Gathering', image: '/images/celebrities/celeb-5.jpg', subtitle: 'Playback Industry Meet' },
    { id: 'c6', title: 'Playback Artistry Meet', image: '/images/celebrities/celeb-6.jpg', subtitle: 'Musical Collaboration' },
    { id: 'c7', title: 'Artistic Excellence Moment', image: '/images/celebrities/celeb-7.png', subtitle: 'Special Dignitary Meeting' },
    { id: 'c8', title: 'Celebrity Musical Showcase', image: '/images/celebrities/celeb-8.jpg', subtitle: 'Cultural Festival' },
    { id: 'c9', title: 'Esteemed Dignitaries Gathering', image: '/images/celebrities/celeb-9.png', subtitle: 'Honors Presentation' },
    { id: 'c10', title: 'Star-Studded Concert Night', image: '/images/celebrities/celeb-10.jpg', subtitle: 'Grand Stage Evening' },
    { id: 'c11', title: 'Creative Synergy Moment', image: '/images/celebrities/celeb-11.jpg', subtitle: 'Musical Legends' },
    { id: 'c12', title: 'Cultural Legends Meet', image: '/images/celebrities/celeb-12.jpg', subtitle: 'Cinema & Stage Icons' },
    { id: 'c13', title: 'Industry Congratulatory Moment', image: '/images/celebrities/celeb-13.jpg', subtitle: 'Awards Commemoration' },
    { id: 'c15', title: 'Celebrated Musical Evening', image: '/images/celebrities/celeb-15.jpg', subtitle: 'Orchestral Showcase' },
    { id: 'c16', title: 'Star Stage Commemoration', image: '/images/celebrities/celeb-16.jpg', subtitle: 'Stage Collaboration' },
    { id: 'c17', title: 'Prestige Artistry Recognition', image: '/images/celebrities/celeb-17.jpg', subtitle: 'Distinguished Honor' },
  ] as GalleryPhoto[],

  // LIVE PERFORMANCES (Original Stage & Concert Photographs)
  livePerformances: [
    { id: 'lp1', title: 'Grand Orchestra Concert Spotlight', image: '/images/portfolio/1.jpg', subtitle: 'Lakshman Sruthi Grand Tour' },
    { id: 'lp2', title: 'Electrifying Stage Symphony', image: '/images/portfolio/2.jpg', subtitle: 'Live in Concert' },
    { id: 'lp5', title: 'Symphony in Gold', image: '/images/portfolio/5.jpg', subtitle: 'Orchestral Harmony' },
    { id: 'lp6', title: 'Stage Radiance', image: '/images/portfolio/6.jpg', subtitle: 'Acoustic Brilliance' },
    { id: 'lp10', title: 'Center Stage Spotlight', image: '/images/portfolio/10.jpg', subtitle: 'Grand Live Showcase' },
    { id: 'lp11', title: 'Audience Connection', image: '/images/portfolio/11.jpg', subtitle: 'Live Audience Interaction' },
    { id: 'lp14', title: 'Live Ensemble Collaboration', image: '/images/portfolio/14.jpg', subtitle: 'Mega Orchestra Night' },
    { id: 'lp15', title: 'Orchestral Climax', image: '/images/portfolio/15.jpg', subtitle: 'Live Vocal Powerhouse' },
    { id: 'lp16', title: 'Harmonic Brilliance', image: '/images/portfolio/16.jpg', subtitle: 'Symphonic Climax' },
    { id: 'lp18', title: 'Aesthetic Stage Presence', image: '/images/portfolio/18.jpg', subtitle: 'Concert Spotlight' },
    { id: 'lp21', title: 'Orchestral Powerhouse', image: '/images/portfolio/21.jpg', subtitle: 'UK Murali Grand Concert' },
    { id: 'lp22', title: 'Rhythmic Elegance', image: '/images/portfolio/22.jpg', subtitle: 'Grand Stage Movement' },
    { id: 'lp25', title: 'Encore Performance', image: '/images/portfolio/25.jpg', subtitle: 'Standing Ovation Concert' },
    { id: 'lp27', title: 'Grand Hall Symphony', image: '/images/portfolio/27.jpg', subtitle: 'Symphonic Masterpiece' },
    { id: 'lp32', title: 'Concert Pinnacle', image: '/images/portfolio/32.jpg', subtitle: 'Live Classical Rhythms' },
    { id: 'lp35', title: 'Grand Orchestral Finale', image: '/images/portfolio/35.jpg', subtitle: 'Orchestra Encore' },
    { id: 'lp38', title: 'Evening of Ragas', image: '/images/portfolio/38.jpg', subtitle: 'Carnatic Fusion Stage' },
    { id: 'lp42', title: 'Concert Spotlight Beam', image: '/images/portfolio/42.png', subtitle: 'Solo Centerpiece' },
    { id: 'lp44', title: 'Live Stage Energy', image: '/images/portfolio/44.png', subtitle: 'Dynamic Playback Vocals' },
    { id: 'lp48', title: 'Symphonic Fusion Night', image: '/images/portfolio/48.png', subtitle: 'World Music Ensemble' },
    { id: 'lp49', title: 'Grand Audience Delight', image: '/images/portfolio/49.jpg', subtitle: 'Audience Serenade' },
  ] as GalleryPhoto[],

  // LIVE EVENTS & SPECIAL MOMENTS
  eventsAndMoments: [
    { id: 'ev4', title: 'Special Gala Celebration', image: '/images/portfolio/4.jpg', subtitle: 'Grand Annual Gala' },
    { id: 'ev8', title: 'Festive Mega Concert Event', image: '/images/portfolio/8.jpg', subtitle: 'Cultural Festival' },
    { id: 'ev12', title: 'Celebrity Evening Rendition', image: '/images/portfolio/12.jpg', subtitle: 'Prestige Cultural Night' },
    { id: 'ev20', title: 'Festival Celebration Stage', image: '/images/portfolio/20.jpg', subtitle: 'State Music Carnival' },
    { id: 'ev24', title: 'Cultural Grandeur', image: '/images/portfolio/24.jpg', subtitle: 'Traditional Melodic Fest' },
    { id: 'ev28', title: 'Celebrated Musical Gala', image: '/images/portfolio/28.jpg', subtitle: 'Invitational Gala' },
    { id: 'ev36', title: 'Audience Ovation Gathering', image: '/images/portfolio/36.jpg', subtitle: 'Honors Felicitation' },
    { id: 'ev46', title: 'Signature Stage Pose', image: '/images/portfolio/46.png', subtitle: 'Ceremony Highlight' },
    { id: 'ev47', title: 'Radiant Artist Portrait', image: '/images/portfolio/47.png', subtitle: 'Festive Rehearsal Gala' },
    { id: 'ev3', title: 'Vocal Emotive Moment', image: '/images/portfolio/3.jpg', subtitle: 'Intimate Melodic Session' },
    { id: 'ev7', title: 'Acoustic Soul Session', image: '/images/portfolio/7.jpg', subtitle: 'Unplugged Musical Evening' },
    { id: 'ev9', title: 'Divine Devotional Resonance', image: '/images/portfolio/9.jpg', subtitle: 'Spiritual Celebration' },
    { id: 'ev13', title: 'Classical Vocal Precision', image: '/images/portfolio/13.jpg', subtitle: 'Raga Showcase' },
    { id: 'ev19', title: 'Soulful Melody Delivery', image: '/images/portfolio/19.jpg', subtitle: 'Musical Solitude' },
    { id: 'ev23', title: 'Dynamic Micro-expressions', image: '/images/portfolio/23.jpg', subtitle: 'Performance Nuances' },
    { id: 'ev26', title: 'Golden Hour Rehearsal', image: '/images/portfolio/26.jpg', subtitle: 'Orchestral Rehearsal' },
    { id: 'ev30', title: 'Artistic Reverie', image: '/images/portfolio/30.jpg', subtitle: 'Behind the Curtain' },
    { id: 'ev34', title: 'Backstage Focus', image: '/images/portfolio/34.jpg', subtitle: 'Vocal Warmups' },
    { id: 'ev37', title: 'Pure Passionate Tone', image: '/images/portfolio/37.jpg', subtitle: 'Expressive Melodies' },
    { id: 'ev40', title: 'Visual Poetry in Music', image: '/images/portfolio/40.png', subtitle: 'Studio Photography' },
    { id: 'ev41', title: 'Studio Session Spark', image: '/images/portfolio/41.png', subtitle: 'Recording Track Session' },
    { id: 'ev43', title: 'Vocal Crescendo', image: '/images/portfolio/43.png', subtitle: 'Stage Climax' },
    { id: 'ev45', title: 'Theatrical Elegance', image: '/images/portfolio/45.png', subtitle: 'Dramatic Staging' },
    { id: 'ev50', title: 'Timeless Voice', image: '/images/portfolio/50.png', subtitle: 'Legacy of Melody' },
  ] as GalleryPhoto[],

  // AWARDS & RECOGNITION (Separated into 4 Distinct Categories)
  awardsCategories: {
    trophies: [
      { id: 'aw-t1', title: 'Kalai Chudar Award 2025', category: 'Awards & Trophies', image: '/images/awards/4.jpg', year: '2025', description: 'Conferred for exceptional musical artistry and stage excellence.' },
      { id: 'aw-t2', title: 'Dr. Ambedkar Award', category: 'Awards & Trophies', image: '/images/awards/10.jpg', description: 'Honored with the prestigious memorial award for cultural contributions.' },
      { id: 'aw-t3', title: 'G Tec Winner 2025', category: 'Awards & Trophies', image: '/images/awards/1.jpg', year: '2025', description: 'Top honors awarded at the G-Tec annual cultural gala.' },
      { id: 'aw-t4', title: 'Kamban Kazhagam 2025', category: 'Awards & Trophies', image: '/images/awards/2.jpg', year: '2025', description: 'Awarded by the prestigious Kamban Kazhagam literary and cultural body.' },
      { id: 'aw-t5', title: 'Students Day Award', category: 'Awards & Trophies', image: '/images/awards/8.jpg', description: 'Special musical honor awarded on National Students Day.' },
      { id: 'aw-t6', title: 'Kingspire Award', category: 'Awards & Trophies', image: '/images/awards/20.png', description: 'Prestigious trophy award winner at the Kingspire competition.' },
    ] as AwardItem[],

    certificates: [
      { id: 'aw-c1', title: 'WCC (Women’s Christian College)', category: 'Certificates', image: '/images/awards/13.png', description: 'First place honors at Women’s Christian College cultural events.' },
      { id: 'aw-c2', title: 'XIME (Xavier Institute of Management)', category: 'Certificates', image: '/images/awards/14.png', description: 'Championship certificate awarded at Xavier Institute.' },
      { id: 'aw-c3', title: 'DG VAISHNAV College', category: 'Certificates', image: '/images/awards/15.png', description: 'Top vocal winner certificate at DG Vaishnav College.' },
      { id: 'aw-c4', title: 'Stanley Medical College', category: 'Certificates', image: '/images/awards/16.png', description: 'Winning certificate in the renowned Stanley inter-collegiate competition.' },
      { id: 'aw-c5', title: 'SRM University', category: 'Certificates', image: '/images/awards/17.png', description: 'Celebrated winner certificate across collegiate vocal categories at SRM.' },
      { id: 'aw-c6', title: 'Vel Tech University', category: 'Certificates', image: '/images/awards/18.png', description: 'First prize certificate winner at Vel Tech University.' },
      { id: 'aw-c7', title: 'Ethiraj Aarambh', category: 'Certificates', image: '/images/awards/19.png', description: 'Star performer certificate winner at Ethiraj College.' },
      { id: 'aw-c8', title: 'DG Vaishnav Solo', category: 'Certificates', image: '/images/awards/21.png', description: 'Distinguished Solo vocal competition certificate winner.' },
      { id: 'aw-c9', title: 'Loyola College', category: 'Certificates', image: '/images/awards/22.png', description: 'Winner certificate in the highly competitive Loyola College musical fest.' },
      { id: 'aw-c10', title: 'MCC (Madras Christian College)', category: 'Certificates', image: '/images/awards/23.png', description: 'Prestigious collegiate singing laureate honors at MCC.' },
      { id: 'aw-c11', title: 'SA College Arts & Science Winner', category: 'Certificates', image: '/images/awards/award-13.jpeg', description: 'Inter-Collegiate Singing Competition Championship Certificate.' },
    ] as AwardItem[],

    competitions: [
      { id: 'aw-cmp1', title: 'Radio City Super Singer Season 16 Runner-up', category: 'Competition Achievements', image: '/images/awards/7.jpg', description: 'Coveted runner-up title in the prestigious radio broadcast competition.' },
      { id: 'aw-cmp2', title: 'Tamil Nadu Music Fest Winner', category: 'Competition Achievements', image: '/images/awards/9.jpg', description: 'Crowned winner in the premier statewide music festival.' },
      { id: 'aw-cmp3', title: 'Winner – Vagai 25', category: 'Competition Achievements', image: '/images/awards/11.png', year: '2025', description: 'Grand Champion at the prestigious Vagai 25 cultural edition.' },
      { id: 'aw-cmp4', title: 'Winner – Formula 25', category: 'Competition Achievements', image: '/images/awards/12.jpg', year: '2025', description: 'Top podium winner in the high-stakes Formula 25 musical league.' },
      { id: 'aw-cmp5', title: 'Runner-up Lemart Contest', category: 'Competition Achievements', image: '/images/awards/3.jpg', description: 'Celebrated runner-up achievement in the Lemart state music competition.' },
    ] as AwardItem[],

    specialRecognitions: [
      { id: 'aw-sr1', title: 'Bharathi Kalvi Kazhagam', category: 'Special Recognitions', image: '/images/awards/5.jpg', description: 'Prestigious cultural recognition presented by Bharathi Kalvi Kazhagam.' },
      { id: 'aw-sr2', title: 'Bandham Event Special Distinction', category: 'Special Recognitions', image: '/images/awards/6.jpg', description: 'Special honored performance distinction at the grand Bandham celebration.' },
      { id: 'aw-sr3', title: 'SA College Arts & Science Inter-Collegiate Winner', category: 'Special Recognitions', image: '/images/awards/award-13.jpeg', description: 'First place champion in the Inter-Collegiate Singing Competition.' },
    ] as AwardItem[],
  },

  television: [
    {
      id: 'mega-tv',
      channel: 'Mega TV',
      program: 'Grand Orchestra Specials',
      badge: 'Multiple Broadcasts',
      description: 'Multiple broadcast shows alongside the legendary ‘UK Murali’ orchestra and ‘Geetharanjani’ musical ensemble.',
    },
    {
      id: 'sankara-tv',
      channel: 'Sankara TV',
      program: 'Devotional & Melodic Specials',
      badge: 'Celebrity Concerts',
      description: 'Various televised shows collaborating with SPB Charan and the UK Murali live orchestra.',
    },
    {
      id: 'colors-tamil',
      channel: 'Colors Tamil',
      program: 'Ninaithale Inikkum',
      badge: 'Musical Tribute',
      description: 'A deeply moving tribute show dedicated to the immortal cinematic genius, the late M.S. Viswanathan (MSV).',
    },
    {
      id: 'kalaignar-tv',
      channel: 'Kalaignar TV',
      program: 'Kalaignar Ninaivanjali',
      badge: 'Memorial Tribute',
      description: 'A distinguished musical tribute commemoration dedicated to Dr. Kalaignar M. Karunanidhi.',
    },
  ] as TelevisionAppearance[],

  realityShows: [
    {
      id: 'deepam-tv',
      channel: 'Deepam TV',
      show: 'Star Singer',
      achievement: 'Title Winner (2016)',
      image: '/images/reality-shows/deepam-tv.jpg',
    },
    {
      id: 'sun-tv',
      channel: 'Sun TV',
      show: 'Sun Singer',
      achievement: 'Top 20 Contestant (Season 6) & Top 12 Contestant (Season 7)',
      image: '/images/reality-shows/sun-tv.jpg',
    },
    {
      id: 'dd-podhigai',
      channel: 'DD Podhigai',
      show: 'DD Kuyil Thoppu',
      achievement: 'Finalist – Season 3 Live Singing Competition',
      image: '/images/reality-shows/dd-podhigai.jpg',
    },
    {
      id: 'zee-tamil',
      channel: 'Zee Tamil',
      show: 'Sa Re Ga Ma Pa',
      achievement: 'Top 25 Contestant in Premier State Singing Competition',
      image: '/images/reality-shows/zee-tamil.jpg',
    },
    {
      id: 'jaya-tv',
      channel: 'Jaya TV',
      show: 'Jaya Star Singer',
      achievement: 'Top 8 Finalist in Star Singer Season 2',
      image: '/images/reality-shows/jaya-tv.jpeg',
    },
  ] as RealityShow[],

  actingAndAlbums: {
    heading: 'BEYOND MUSIC',
    shortFilms: [
      {
        title: 'Arinee',
        role: 'Lead Role',
        desc: 'Critically acclaimed short film featuring Srinithi Anand in the central protagonist lead.',
      },
      {
        title: 'Oru Pozhuthu',
        role: 'Lead Role',
        desc: 'Poignant emotional drama portraying a character with deep expressive nuance.',
      },
      {
        title: 'Breakfast',
        role: 'Lead Role',
        desc: 'Modern realistic short narrative showcasing versatile screen presence.',
      },
    ],
    albums: {
      count: '7 Studio Albums',
      highlight:
        'Featured as lead vocalist in 7 commercial studio albums, including a soulful devotional track composed by renowned music composer John Peter (of Sowcarpettai and Saaya fame).',
      coverImage: '/images/acting/acting.jpg',
    },
  },

  tourDiaries: [
    {
      id: 'kashmir',
      title: 'Kashmir Diaries',
      country: 'India',
      tagline: 'Snow-capped peaks, serene valleys, and enchanting rhythms',
      coverImage: '/images/tours/kashmir/6.jpg',
      images: [
        '/images/tours/kashmir/1.jpg',
        '/images/tours/kashmir/2.jpg',
        '/images/tours/kashmir/3.jpg',
        '/images/tours/kashmir/4.jpg',
        '/images/tours/kashmir/5.jpg',
        '/images/tours/kashmir/6.jpg',
        '/images/tours/kashmir/7.jpg',
      ],
    },
    {
      id: 'malaysia',
      title: 'Malaysia Diaries',
      country: 'Malaysia',
      tagline: 'Vibrant cultural tapestry, international stages, and lush skylines',
      coverImage: '/images/tours/malaysia/6.jpg',
      images: [
        '/images/tours/malaysia/1.jpg',
        '/images/tours/malaysia/2.jpg',
        '/images/tours/malaysia/3.jpg',
        '/images/tours/malaysia/4.jpg',
        '/images/tours/malaysia/5.jpg',
        '/images/tours/malaysia/6.jpg',
        '/images/tours/malaysia/7.jpg',
      ],
    },
    {
      id: 'sri-lanka',
      title: 'Sri Lanka Diaries',
      country: 'Sri Lanka',
      tagline: 'Emerald landscapes, warm coastal winds, and rich heritage melodies',
      coverImage: '/images/tours/sri-lanka/6.jpg',
      images: [
        '/images/tours/sri-lanka/1.jpg',
        '/images/tours/sri-lanka/2.jpg',
        '/images/tours/sri-lanka/6.jpg',
        '/images/tours/sri-lanka/7.jpg',
      ],
    },
    {
      id: 'vietnam',
      title: 'Vietnam Diaries',
      country: 'Vietnam',
      tagline: 'Limestone bays, lantern-lit streets, and global musical inspiration',
      coverImage: '/images/tours/vietnam/6.jpg',
      images: [
        '/images/tours/vietnam/1.jpg',
        '/images/tours/vietnam/2.jpg',
        '/images/tours/vietnam/3.jpg',
        '/images/tours/vietnam/4.jpg',
        '/images/tours/vietnam/5.jpg',
        '/images/tours/vietnam/6.jpg',
        '/images/tours/vietnam/7.jpg',
      ],
    },
  ] as TourDiary[],

  instagramReels: [
    { id: 'reel-1', url: 'https://www.instagram.com/reel/DNdLYxcyca-/', title: 'Soulful Live Melody Rendition' },
    { id: 'reel-2', url: 'https://www.instagram.com/reel/DM5LTB3y9Ku/', title: 'Classical Vocal Nuances' },
    { id: 'reel-3', url: 'https://www.instagram.com/reel/DLM_TnkP6e6/', title: 'Orchestra Stage Highlight' },
    { id: 'reel-4', url: 'https://www.instagram.com/reel/DKeq6AyyYSt/', title: 'Studio Vocal Session' },
    { id: 'reel-5', url: 'https://www.instagram.com/reel/DI8xvEXyQlX/', title: 'Behind the Scenes & Stage Prep' },
    { id: 'reel-6', url: 'https://www.instagram.com/reel/DBWPyWDBej9/', title: 'Signature Melodic Improvisation' },
  ],

  videos: [
    {
      id: 'vid-yt',
      title: 'Grand Live Stage Performance',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/C6o4ZvbRgag?si=F2_LbkFrPulLFQdL',
      description: 'Captivating live concert performance showcasing virtuoso vocal prowess.',
    },
    {
      id: 'vid-1',
      title: 'Orchestral Showcase – Live in Concert',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video1.mp4',
      description: 'High-energy live orchestral performance featuring timeless classic melodies.',
    },
    {
      id: 'vid-2',
      title: 'Devotional & Melodic Symphony',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video2.mp4',
      description: 'Soul-stirring vocal rendition with full acoustic orchestration.',
    },
    {
      id: 'vid-3',
      title: 'Stage Presence & Audience Engagement',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video3.mp4',
      description: 'Electrifying stage presence captivating thousands of audience members.',
    },
    {
      id: 'vid-4',
      title: 'Vocal Nuance & Acoustic Melody',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video4.mp4',
      description: 'Intimate musical rendition emphasizing intricate gamakas and tonal control.',
    },
    {
      id: 'vid-5',
      title: 'Grand Stage Finale Performance',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video5.mp4',
      description: 'A resounding grand finale celebration with the live ensemble.',
    },
    {
      id: 'vid-6',
      title: 'Feature Live Concert Concert Film (Part I)',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video6.mp4',
      description: 'Full-length concert footage capturing the magic of Srinithi Anand on stage.',
    },
    {
      id: 'vid-7',
      title: 'Feature Live Concert Concert Film (Part II)',
      type: 'video',
      src: 'https://srinithianand.com/assets/images/video/video7.mp4',
      description: 'Grand symphonic live presentation with celebrated musicians.',
    },
  ] as VideoPerformance[],
};
