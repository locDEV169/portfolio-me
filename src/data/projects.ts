export type ProjectType = "photo" | "video";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  location: string;
  year: string;
  summary: string;
  cover: {
    src: string;
    alt: string;
  };
  gallery: { src: string; alt: string }[];
  videoUrl?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "girl-night-out",
    title: "Girl Night Out",
    type: "photo",
    category: "Night Out",
    location: "Da Nang, Viet Nam",
    year: "2025",
    summary:
      "Warm rooms, quick turns, and night energy — a fashion-forward night-out set shot on the move.",
    cover: {
      src: "/images/projects/girl-night-out/cover.jpg",
      alt: "Night-out portrait in an orange top and black skirt",
    },
    gallery: [
      {
        src: "/images/projects/girl-night-out/01.jpg",
        alt: "Smiling over-the-shoulder portrait with yellow bag",
      },
      {
        src: "/images/projects/girl-night-out/02.jpg",
        alt: "Night-out frame from the girl night out set",
      },
      {
        src: "/images/projects/girl-night-out/03.jpg",
        alt: "Lifestyle portrait in warm indoor light",
      },
      {
        src: "/images/projects/girl-night-out/04.jpg",
        alt: "Dynamic hair-in-motion portrait by a floor fan",
      },
      {
        src: "/images/projects/girl-night-out/05.jpg",
        alt: "Night-out fashion frame",
      },
      {
        src: "/images/projects/girl-night-out/06.jpg",
        alt: "Evening portrait with shallow depth of field",
      },
      {
        src: "/images/projects/girl-night-out/07.jpg",
        alt: "Candid night-out moment",
      },
      {
        src: "/images/projects/girl-night-out/08.jpg",
        alt: "Portrait detail from the night-out series",
      },
      {
        src: "/images/projects/girl-night-out/09.jpg",
        alt: "Profile portrait in white off-shoulder top",
      },
      {
        src: "/images/projects/girl-night-out/10.jpg",
        alt: "Closing frame from girl night out",
      },
    ],
    tags: ["night-out", "portrait", "fashion"],
  },
  {
    slug: "cosplay-day",
    title: "Cosplay Party",
    type: "photo",
    category: "Cosplay",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "Harry Potter–inspired cosplay frames — cloak, wand energy, and soft portrait light from a themed day set.",
    cover: {
      src: "/images/projects/cosplay-day/cover.jpg",
      alt: "Cosplay Day cover portrait in Harry Potter–inspired look",
    },
    gallery: [
      {
        src: "/images/projects/cosplay-day/01.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/02.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/03.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/04.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/05.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/06.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/07.jpg",
        alt: "Cosplay Day portrait frame",
      },
      {
        src: "/images/projects/cosplay-day/08.jpg",
        alt: "Cosplay Day cover frame in gallery",
      },
      {
        src: "/images/projects/cosplay-day/09.jpg",
        alt: "Cosplay Day closing portrait frame",
      },
    ],
    tags: ["cosplay", "portrait", "harry-potter"],
  },
  {
    slug: "ao-dai",
    title: "Áo dài",
    type: "photo",
    category: "Traditional",
    location: "Da Nang, Viet Nam",
    year: "2024",
    summary:
      'The "áo dài" is the traditional dress of Vietnamese women',
    cover: {
      src: "/images/projects/ao-dai/17.jpg",
      alt: "Portrait in traditional Vietnamese áo dài",
    },
    gallery: [
      { src: "/images/projects/ao-dai/01.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/02.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/03.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/04.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/05.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/06.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/07.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/08.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/09.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/10.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/11.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/12.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/13.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/14.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/15.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/16.jpg", alt: "Áo dài portrait frame" },
      { src: "/images/projects/ao-dai/17.jpg", alt: "Áo dài portrait frame" },
    ],
    tags: ["ao-dai", "portrait", "traditional"],
  },
  {
    slug: "summer-vibes-sea",
    title: "Summer Vibes by the Sea",
    type: "photo",
    category: "Summer",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "A sunlit summer portrait session by the sea, framed by tropical palms and soft shoreline light.",
    cover: {
      src: "/images/projects/summer-vibes-sea/01.jpg",
      alt: "Summer portrait in a white dress beneath tropical palm trees",
    },
    gallery: [
      {
        src: "/images/projects/summer-vibes-sea/01.jpg",
        alt: "Smiling portrait by the sea in a white summer dress",
      },
      {
        src: "/images/projects/summer-vibes-sea/02.jpg",
        alt: "Beachside profile portrait with a flower in her hair",
      },
      {
        src: "/images/projects/summer-vibes-sea/03.jpg",
        alt: "Relaxed portrait on the beach with the sea behind",
      },
      {
        src: "/images/projects/summer-vibes-sea/04.jpg",
        alt: "Sunlit beach portrait in a white summer dress",
      },
      {
        src: "/images/projects/summer-vibes-sea/05.jpg",
        alt: "Close beach portrait with a flower in her hair",
      },
      {
        src: "/images/projects/summer-vibes-sea/06.jpg",
        alt: "Playful seaside portrait in warm afternoon light",
      },
      {
        src: "/images/projects/summer-vibes-sea/07.jpg",
        alt: "Wide summer portrait with the shoreline in the background",
      },
      {
        src: "/images/projects/summer-vibes-sea/08.jpg",
        alt: "Wide summer portrait with the shoreline in the background",
      },
    ],
    tags: ["summer", "beach", "portrait"],
  },
  {
    slug: "high-light-dj",
    title: "Highlight DJ",
    type: "photo",
    category: "Nightlife",
    location: "Da Nang, Viet Nam",
    year: "2025",
    summary:
      "DJ booth highlights — stage light, crowd energy, and tight performance frames across Amor, Cece, Cine, and more.",
    cover: {
      src: "/images/projects/high-light-dj/cover.jpg",
      alt: "DJ booth highlight cover frame",
    },
    gallery: [
      {
        src: "/images/projects/high-light-dj/dj-amor/DSC09736.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/DSC09737.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/DSC09738.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05097.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05100.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05295.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05301.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05303.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05305.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05306.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05323.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC05330.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC09425.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-amor/LOC09440.jpg",
        alt: "DJ Amor highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/DSC02948.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/DSC02949.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/DSC02954.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/DSC02982.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/LOC00600.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/LOC00601.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/LOC00609.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/LOC00615.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cece/LOC00671.jpg",
        alt: "DJ Cece highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cine/DSC09865.jpg",
        alt: "DJ Cine highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cine/DSC09903.jpg",
        alt: "DJ Cine highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-cine/LOC04993.jpg",
        alt: "DJ Cine highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-dark/LOC04415.jpg",
        alt: "DJ Dark highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-dark/LOC04425.jpg",
        alt: "DJ Dark highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-kazho/LOC00109.jpg",
        alt: "DJ Kazho highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-kazho/LOC00111.jpg",
        alt: "DJ Kazho highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-mia/LOC00460.jpg",
        alt: "DJ Mia highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-mia/LOC05055.jpg",
        alt: "DJ Mia highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-mia/LOC07668.jpg",
        alt: "DJ Mia highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-mia/LOC07671.jpg",
        alt: "DJ Mia highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-mia/LOC07727.jpg",
        alt: "DJ Mia highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-mia/LOC07740.jpg",
        alt: "DJ Mia highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-rhyn/LOC00720.jpg",
        alt: "DJ Rhyn highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-rhyn/LOC01370.jpg",
        alt: "DJ Rhyn highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-rhyn/LOC01379.jpg",
        alt: "DJ Rhyn highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-rhyn/LOC01386.jpg",
        alt: "DJ Rhyn highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-rhyn/LOC01389.jpg",
        alt: "DJ Rhyn highlight frame",
      },
      {
        src: "/images/projects/high-light-dj/dj-rhyn/LOC01400.jpg",
        alt: "DJ Rhyn highlight frame",
      },
    ],
    tags: ["dj", "nightlife", "event"],
  },
  {
    slug: "fumirai-anniversary",
    title: "Fumirai Anniversary",
    type: "photo",
    category: "Event",
    location: "Da Nang, Viet Nam",
    year: "2025",
    summary:
      "Camera coverage for Fumirai’s first anniversary — team energy, warm rooms, and one shared frame.",
    cover: {
      src: "/images/projects/fumirai-anniversary/cover.jpg",
      alt: "Team group photo at Fumirai first anniversary celebration",
    },
    gallery: [
      {
        src: "/images/projects/fumirai-anniversary/cover.jpg",
        alt: "Team group photo at Fumirai first anniversary celebration",
      },
      {
        src: "/images/projects/fumirai-anniversary/01.jpg",
        alt: "Fumirai anniversary event frame",
      },
    ],
    tags: ["event", "corporate", "group"],
  },
  {
    slug: "visual-side-effect",
    title: "Visual Side Effect - Edit by DJ Amor",
    type: "video",
    category: "Visual",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "Side Effect visual — soft motion, mood lighting, and a looping Amor cut. - Visutal by Me",
    cover: {
      src: "/images/projects/visual-side-effect/cover.jpg",
      alt: "Visual Side Effect video cover frame",
    },
    gallery: [],
    // Full master on Drive; local intro stays in /videos/*-intro.mp4 for VideoEmbed.
    videoUrl: "https://drive.google.com/file/d/18PGCZqRvLUHe3o6AwZCbnDfGeOMqiFdd/preview",
    tags: ["visual", "side-effect", "video"],
  },
  {
    slug: "recap-hlw-2",
    title: "Halloween Recap",
    type: "video",
    category: "Recap",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "A Halloween night recap — quick cuts, party energy, and street-adjacent motion from Recap HLW 2.",
    cover: {
      src: "/images/projects/recap-hlw-2/cover.jpg",
      alt: "Halloween Recap video cover frame",
    },
    gallery: [],
    videoUrl: "https://drive.google.com/file/d/1Aqzbt8EqaVBuXpp01PYY4o-ZkBTqxIOr/preview",
    tags: ["halloween", "recap", "video"],
  },
  {
    slug: "cau-long-fien",
    title: "Cầu lông Fien",
    type: "video",
    category: "Sports",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "Badminton day with Fien — rally rhythm, court energy, and quick motion cuts.",
    cover: {
      src: "/images/projects/cau-long-fien/cover.jpg",
      alt: "Cầu lông Fien video cover frame",
    },
    gallery: [],
    videoUrl: "https://drive.google.com/file/d/1Rfz3hPKTV0uFEG2d_ko8z7MTEUqgWR-U/preview",
    tags: ["badminton", "sports", "video"],
  },
  {
    slug: "east-west-recap",
    title: "East West Recap",
    type: "video",
    category: "Recap",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "East West recap — event pace, crowd moments, and a clean highlight cut.",
    cover: {
      src: "/images/projects/east-west-recap/cover.jpg",
      alt: "East West Recap video cover frame",
    },
    gallery: [],
    videoUrl: "https://drive.google.com/file/d/1J6A-WP1GwIOssNY4RvypYyWzNvLSeaeR/preview",
    tags: ["event", "recap", "video"],
  },
  {
    slug: "fumirai-sn",
    title: "Fumirai Birthday 1st year",
    type: "video",
    category: "Event",
    location: "Da Nang, Viet Nam",
    year: "2026",
    summary:
      "Fumirai’s first birthday highlight — event energy, crowd moments, and a clean motion cut.",
    cover: {
      src: "/images/projects/fumirai-sn/cover.jpg",
      alt: "Fumirai Birthday 1st year video cover frame",
    },
    gallery: [],
    // Full master on Drive; local intro at /videos/fumirai-sn-intro.mp4 for VideoEmbed.
    videoUrl:
      "https://drive.google.com/file/d/1ohn9SfP5ucd7PmAvzFZ1Kvd8ANc-ohxY/preview",
    tags: ["fumirai", "event", "video"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByType(type: ProjectType | "all"): Project[] {
  if (type === "all") return projects;
  return projects.filter((project) => project.type === type);
}
