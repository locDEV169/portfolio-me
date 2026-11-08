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
    year: "2016",
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByType(type: ProjectType | "all"): Project[] {
  if (type === "all") return projects;
  return projects.filter((project) => project.type === type);
}
