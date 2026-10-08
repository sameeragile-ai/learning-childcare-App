import heroImg from '../assets/images/hero_childcare_nature_1791494416370.jpg';
import philosophyImg from '../assets/images/philosophy_outdoor_discovery_1791494430191.jpg';
import nurseryImg from '../assets/images/nursery_calm_environment_1791494441455.jpg';
import preschoolImg from '../assets/images/preschool_creative_atelier_1791494451323.jpg';

export const siteImages = {
  hero: heroImg,
  philosophy: philosophyImg,
  nursery: nurseryImg,
  preschool: preschoolImg,
};

export interface ProgramItem {
  id: string;
  name: string;
  ageRange: string;
  badge: string;
  ratio: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  dailyHighlights: string[];
}

export const programsData: ProgramItem[] = [
  {
    id: 'nursery',
    name: 'The Nest (Nursery)',
    ageRange: '6 weeks – 18 months',
    badge: 'Infants & Crawlers',
    ratio: '1:4 Educator to Infant Ratio',
    image: nurseryImg,
    shortDescription:
      'A calm, unhurried sanctuary honoring home sleep rhythms, gentle responsive holding, and natural sensorial discovery.',
    fullDescription:
      'Our nursery is an acoustic haven designed to mirror the warmth of home. We follow primary educator attachment care, ensuring your infant builds a secure, trusted relationship with a dedicated key educator who tunes into their subtle cues.',
    keyBenefits: [
      'Primary educator attachment model for deep emotional security',
      'Individual sleep rhythms preserved in light-dampened organic timber cots',
      'Tactile sensory baskets made with natural wood, cotton, and smooth river stones',
      'Dedicated covered outdoor crawling verandas with soft grass textures',
    ],
    dailyHighlights: [
      'Gentle tummy time and core muscle exploration on natural wool rugs',
      'Sensory song and rhythm circles celebrating language development',
      'Unrushed, respectful feeding aligned with each infant’s home schedule',
    ],
  },
  {
    id: 'toddlers',
    name: 'The Meadow (Toddlers)',
    ageRange: '18 months – 3 years',
    badge: 'Early Explorers',
    ratio: '1:5 Educator to Toddler Ratio',
    image: philosophyImg,
    shortDescription:
      'Empowering burgeoning independence, rich language vocabulary, sensory curiosity, and social problem-solving.',
    fullDescription:
      'Toddlerhood is a magnificent burst of curiosity and boundary testing. Our Meadow environment channels this vibrant energy into purposeful autonomy: self-pouring water stations, loose parts construction, and language-rich conversations.',
    keyBenefits: [
      'Focus on emotional literacy, gentle co-regulation, and peer collaboration',
      'Accessible, open-shelf environments designed for self-directed selection',
      'Daily outdoor messy play, mud kitchen concoctions, and herb garden care',
      'Supportive toilet learning partnerships respecting each child’s tempo',
    ],
    dailyHighlights: [
      'Sensory herb gathering and water flume channel building',
      'Story circles exploring empathy, feelings, and community concepts',
      'Gross-motor balance courses using reclaimed ironbark logs and sandstone boulders',
    ],
  },
  {
    id: 'preschool',
    name: 'The Atelier (Preschool & Kindy)',
    ageRange: '3 – 5 years',
    badge: 'School Readiness & Inquiry',
    ratio: '1:10 Educator to Child Ratio',
    image: preschoolImg,
    shortDescription:
      'A Reggio Emilia-inspired inquiry studio preparing children socially, emotionally, and cognitively for school and life.',
    fullDescription:
      'Our comprehensive preschool program fosters deep thinkers, compassionate leaders, and confident questioners. Children engage in long-term collaborative inquiry projects spanning ecology, architectural design, early numeracy, and expressive arts.',
    keyBenefits: [
      'Holistic Sydney Primary School Transition Program developed with local schools',
      'STEM inquiry: rainwater mechanics, plant lifecycles, and physics through loose parts',
      'Dedicated arts atelier led by our studio coordinator exploring clay, watercolor, and textiles',
      'Early phonemic awareness and contextual mathematical problem solving',
    ],
    dailyHighlights: [
      'Project-based inquiry investigations documented in children’s learning journals',
      'Cooking experiences with fresh produce harvested directly from our kitchen garden',
      'Collaborative social debate and group decision-making assemblies',
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  focus: string;
}

export const teamData: TeamMember[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Centre Director & Founder',
    credentials: 'B.Ed (Early Childhood Education), Macquarie University',
    experience: '14+ years in Australian early childhood leadership',
    bio: 'Sarah established Willow & Sage with the vision of creating an architectural early learning home where nature is the third educator. A mother of two, she believes early childhood should be deeply protected as a period of wonder rather than hurried academic pressure.',
    focus: 'Family partnerships, community culture, and holistic centre governance',
  },
  {
    name: 'Liam Campbell',
    role: 'Educational Leader & ECT',
    credentials: 'Master of Teaching (Birth–5), University of Sydney',
    experience: '9 years guiding inquiry-based early learning',
    bio: 'Liam mentors our educator team across curriculum design, loose-parts pedagogy, and nature immersion. His research background in Reggio Emilia environments informs how our studios inspire children to theorise, test, and document their discoveries.',
    focus: 'Curriculum architecture, Reggio Emilia principles, and critical reflection',
  },
  {
    name: 'Elena Rostova',
    role: 'Nursery Lead & Infant Care Specialist',
    credentials: 'Diploma of Early Childhood Education & Care, Certified Infant Sleep Consultant',
    experience: '11 years dedicated to infant and toddler care',
    bio: 'Elena creates calm, unhurried atmospheres where babies feel completely secure. Her practice is rooted in Magda Gerber’s RIE philosophy, treating babies with profound dignity and listening to their non-verbal cues with patience and tenderness.',
    focus: 'Primary attachment, respectful diapering and feeding, sensory peace',
  },
  {
    name: 'Aria Chen',
    role: 'Atelierista & Creative Arts Coordinator',
    credentials: 'Bachelor of Fine Arts (UNSW) & Dip. Early Childhood',
    experience: '7 years fostering multi-modal creative expression',
    bio: 'Aria guides children through "the hundred languages of children." Working in our natural light atelier, she introduces children to botanical pigments, natural stoneware clay, and collaborative large-scale sculpture.',
    focus: 'Visual arts exploration, natural material curation, sensory storytelling',
  },
  {
    name: 'Marcus Brody',
    role: 'Executive Chef & Nutrition Lead',
    credentials: 'Cert IV Commercial Cookery, Paediatric Nutrition Specialist',
    experience: '12 years in farm-to-table culinary and childcare nutrition',
    bio: 'Marcus prepares five nourishing seasonal meals daily using local Australian produce, whole grains, and herbs from our children’s garden. He regularly invites children into culinary workshops to explore textures, aromas, and mindful eating.',
    focus: 'Allergy-aware wholefoods, positive food relationships, and kitchen garden integration',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  parentName: string;
  suburb: string;
  childrenDetails: string;
  attendanceDuration: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Finding Willow & Sage felt like exhaling. The educators treat our daughter with so much tenderness and respect. The outdoor garden is extraordinary—she comes home full of stories about worm farms, clay creations, and sunny morning tea under the trees.',
    parentName: 'Sophie & David Vance',
    suburb: 'Paddington, Sydney',
    childrenDetails: 'Parents of Maya (Toddler Room)',
    attendanceDuration: 'Enrolled for 18 months',
  },
  {
    id: '2',
    quote:
      'As a teacher myself, my standards for preschool transition were exceptionally high. Willow & Sage struck the exact balance between warm, play-led joy and genuine intellectual curiosity. Our son feels confident, capable, and deeply known by every educator.',
    parentName: 'Dr. Julian Thorpe',
    suburb: 'Woollahra, Sydney',
    childrenDetails: 'Father of Leo (Preschool Atelier)',
    attendanceDuration: 'Enrolled for 2 years',
  },
  {
    id: '3',
    quote:
      'Leaving our 7-month-old was daunting, but Elena and the nursery team created a seamless transition. They respected our exact nap and feeding rhythm. The private updates and thoughtful reflections give us complete peace of mind while at work.',
    parentName: 'Chloe Henderson',
    suburb: 'Double Bay, Sydney',
    childrenDetails: 'Mother of Oliver (Nursery)',
    attendanceDuration: 'Enrolled for 9 months',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Enrolment & Fees' | 'Daily Life & Care' | 'Learning Philosophy';
}

export const faqsData: FAQItem[] = [
  {
    question: 'What age groups do you accept?',
    category: 'Enrolment & Fees',
    answer:
      'We welcome children from 6 weeks of age through to 6 years old (prior to primary school entry). Our rooms are grouped into three developmental communities: The Nest (Nursery, 6 weeks to 18 months), The Meadow (Toddlers, 18 months to 3 years), and The Atelier (Preschool & Kindergarten, 3 to 5 years).',
  },
  {
    question: 'What are your operating hours and attendance requirements?',
    category: 'Daily Life & Care',
    answer:
      'Willow & Sage operates from 7:00 am to 6:00 pm, Monday through Friday, 50 weeks per year (closing for two weeks over Christmas and New Year, and on NSW gazetted public holidays). We require a minimum of two days enrolment per week to support healthy social continuity and secure educator relationships.',
  },
  {
    question: 'What meals and nutrition do you provide?',
    category: 'Daily Life & Care',
    answer:
      'Our resident on-site chef Marcus prepares five balanced wholefood meals every day: early morning light breakfast, morning fruit & wholemeal snack, a warm nutrient-dense lunch, afternoon tea, and a late afternoon sunset snack. We cater meticulously for all medically documented allergies, anaphylaxis, coeliac, and cultural dietary needs.',
  },
  {
    question: 'Are families eligible for the Australian Child Care Subsidy (CCS)?',
    category: 'Enrolment & Fees',
    answer:
      'Yes. Willow & Sage is a fully approved early childhood education service with the Australian Government Department of Education. Eligible Australian families can claim the Child Care Subsidy (CCS), which is automatically deducted from your fortnightly statement based on your Services Australia assessment.',
  },
  {
    question: 'How does the enrolment and orientation process work?',
    category: 'Enrolment & Fees',
    answer:
      'We begin with a personal Centre Tour where you meet our leadership team and view our learning studios in action. Following an offer and acceptance, we host three complimentary orientation play sessions where parents attend alongside their child to establish comfort, familiarity, and positive routines before their first official day.',
  },
  {
    question: 'What learning approach and curriculum do you follow?',
    category: 'Learning Philosophy',
    answer:
      'Our pedagogy is grounded in the Australian Early Years Learning Framework (EYLF V2.0) and enriched by the world-renowned Reggio Emilia approach. We view every child as curious, capable, and rich in potential. Children investigate through project inquiries, natural loose parts, creative studios, and daily outdoor environmental education.',
  },
  {
    question: 'How do educators communicate with families during the day?',
    category: 'Daily Life & Care',
    answer:
      'We partner closely with families through our secure, private digital portal. You receive real-time updates regarding meal intake, sleep periods, and sunscreen application, alongside rich weekly Learning Stories with photos that unpack the deeper social and cognitive milestones your child is mastering. Furthermore, our educators are always available for unhurried handovers morning and afternoon.',
  },
  {
    question: 'What items does the centre provide, and what should my child bring?',
    category: 'Daily Life & Care',
    answer:
      'To make mornings as calm and effortless as possible for parents, we provide premium eco-friendly nappies, wipes, SPF50+ sunscreen, sunhats, linen bedding, and all daily meals. Parents only need to bring 2–3 weather-appropriate spare outfits, a labeled water bottle, and any personal comfort item or comforter for sleep time.',
  },
  {
    question: 'Can we arrange a centre tour before applying?',
    category: 'Enrolment & Fees',
    answer:
      'Absolutely! We warmly encourage all prospective families to experience our calm atmosphere firsthand. We host small, private group tours on Tuesday, Wednesday, and Thursday mornings at 9:30 am and 10:30 am. You can easily request your preferred date through our online Tour Booking page.',
  },
];

export const centreContactDetails = {
  name: 'Willow & Sage Early Learning',
  address: '42 Parkland Avenue, Woollahra NSW 2025',
  city: 'Sydney, Australia',
  phone: '(02) 9182 4500',
  email: 'hello@willowandsage.com.au',
  admissionsEmail: 'enrolments@willowandsage.com.au',
  hours: 'Monday – Friday: 7:00 am – 6:00 pm',
  abn: '58 920 183 491',
  serviceApproval: 'NSW Early Childhood Education Directorate (SE-00049281)',
};
