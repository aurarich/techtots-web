import {
  AcademicCapIcon,
  BeakerIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export const whyTechTotData = [
  {
    icon: AcademicCapIcon,
    title: "Cambridge + Reggio Emilia",
    image: "/images/kids-in-it-lab.png",
    description:
      "World-class curriculum combining academic excellence with creative exploration.",
  },
  {
    icon: CpuChipIcon,
    title: "AI-Powered Learning",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    description:
      "First preschool in Ghana to integrate artificial intelligence in early learning.",
  },
  {
    icon: PaintBrushIcon,
    title: "Child-Centered Approach",
    image: "/images/lego-great-mind.png",
    description:
      "Play-based learning that nurtures creativity and individual growth.",
  },
  {
    icon: GlobeAltIcon,
    title: "Digital Communication",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    description:
      "Advanced parent communication tools for seamless updates and engagement.",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Purpose-Built Campus",
    image: "/images/campus.png",
    description:
      "State-of-the-art facilities in suburban Accra designed for optimal learning.",
  },
  {
    icon: BeakerIcon,
    title: "STEM Focus",
    image: "https://images.pexels.com/photos/7869077/pexels-photo-7869077.jpeg", // kids science experiment
    description:
      "Early exposure to science, technology, engineering, and mathematics.",
  },
];

export const ourProgrammes = [
  {
    slug: "creche",
    icon: BookOpenIcon,
    title: "Crèche",
    short_description: "Sensory play, safe care, and emotional bonding in a nurturing environment.",
    caption: "Infants & Toddlers", 
    ageGroup: "6 months - 2 years",
    description:
      "Sensory play, safe care, and emotional bonding in a nurturing environment.",
    color: "primary",
    btnColor: "primary",
    classes: [
      {
        name: 'Little Seeds',
        ageGroup: '6-12 months'
      },
      {
        name: 'Sprouts',
        ageGroup: '1-2 years'
      },
    ],
    milestones: [
      "Forming secure emotional attachments with caregivers",
      "Developing early communication through gestures and simple words",
      "Exploring movement: crawling, standing, first steps",
      "Building sensory awareness and curiosity",
      "Beginning to engage in parallel play"
    ],
    colors: {
        iconColor: "text-beige",
        iconBackground: 'bg-beige/20',
        buttonColor: 'btn-beige',
        pseudoColors: 'after:bg-beige/20 before:bg-beige/20'
    },
    future: false,
  },
  {
    icon: BuildingOfficeIcon,
    slug: "early-year-preparatory",
    title: "Early Year Preparatory",
    short_description: "Language development, social skills, and motor development through play-based learning.",
    caption: "Play, learn, grow",
    ageGroup: "2 - 3 years",
    description:
      "Language development, social skills, and motor development through play-based learning.",
    color: "secondary",
    btnColor: "secondary",
    classes: [
      {
        name: 'Explorers',
        ageGroup: "2 - 3 years"
      }
    ],
    milestones: [
      "Expanding vocabulary and simple sentence use",
      "Learning to express emotions and preferences",
      "Practising fine motor skills through art and manipulative play",
      "Developing early self-help skills (feeding, tidying up)",
      "Building confidence in group routines and transitions"
    ],
    colors: {
        iconColor: "text-primary",
        iconBackground: 'bg-primary/20',
        buttonColor: 'btn-primary',
        pseudoColors: 'after:bg-primary/20 before:bg-primary/20'
    },
    future: false,
  },
  {
    icon: ComputerDesktopIcon,
    slug: "cambridge-early-year",
    title: "Cambridge Early Year",
    short_description: "Literacy, numeracy, coding, and digital literacy in an engaging environment.",
    caption: "Curious minds in motion", // newly added
    ageGroup: "3 - 6 years",
    description:
      "Literacy, numeracy, coding, and digital literacy in an engaging environment.",
    color: "beige",
    btnColor: "primary",
    classes: [
      { name: "Discoverers - EY1", ageGroup: "3 - 4years" },
      { name: "Innovators - EY2", ageGroup: "4 - 5years" },
      { name: "Trailblazers - EY3", ageGroup: "5 - 6years" },
    ],
    milestones: [
      "Recognising letters, sounds, and numbers",
      "Beginning to write letters and draw shapes",
      "Exploring early scientific thinking through observation and inquiry",
      "Expressing ideas confidently in conversations and stories",
      "Developing social skills such as sharing, turn-taking, and empathy",
      "Building independence in self-care and classroom responsibilities"
    ],
    colors: {
        iconColor: "text-secondary",
        iconBackground: 'bg-secondary/20',
        buttonColor: 'btn-secondary',
        pseudoColors: 'after:bg-primary/20 before:bg-primary/20'
    },
    future: false,
  },
  {
    icon: ComputerDesktopIcon,
    slug: "cambridge-primary",
    title: "Cambridge Primary",
    short_description: "A broad, creative Cambridge curriculum for ages 5–11, building strong foundations in core subjects and life skills.",
    caption: "Confident, curious learners",
    ageGroup: "6+ years",
    description:
      "Cambridge Primary covers core learning areas including English, Mathematics, Science, ICT, Global Perspectives, Art & Design, Music, and Physical Education, fostering foundational knowledge, creativity, and critical thinking in learners aged 5 to 11.",
    color: "beige",
    btnColor: "primary",
    classes: [
      { name: "Primary One (1)", ageGroup: '6+ years' }
    ],
    milestones: [
      "Mastering foundational literacy and numeracy skills",
      "Deepening critical thinking and problem-solving abilities",
      "Engaging in project-based learning and collaborative exploration",
      "Developing personal interests through broader subject areas",
      "Cultivating leadership, resilience, and a lifelong love of learning"
    ],
    colors: {
        iconColor: "text-beige",
        iconBackground: 'bg-beige/20',
        buttonColor: 'btn-beige',
        pseudoColors: 'after:bg-beige/20 before:bg-beige'
    },
    future: true,
  },
];

