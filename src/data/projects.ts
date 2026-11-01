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
    slug: "night-crossing",
    title: "Night Crossing",
    type: "photo",
    category: "Street Night",
    location: "Ho Chi Minh City",
    year: "2025",
    summary:
      "Pedestrians cut through rain and neon after midnight — short distances that feel longer in the wet.",
    cover: {
      src: "https://images.unsplash.com/photo-1519502330808-a3dab5ce9ad9?auto=format&fit=crop&w=1600&q=80",
      alt: "City street at night with neon reflections",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519502330808-a3dab5ce9ad9?auto=format&fit=crop&w=1600&q=80",
        alt: "Neon street reflections on wet asphalt",
      },
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
        alt: "City skyline at dusk",
      },
      {
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
        alt: "Busy urban intersection",
      },
    ],
    tags: ["night", "street", "rain"],
  },
  {
    slug: "market-pulse",
    title: "Market Pulse",
    type: "photo",
    category: "Market",
    location: "District 1",
    year: "2025",
    summary:
      "Hands, crates, steam, and quick glances — a morning market as choreography.",
    cover: {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
      alt: "Busy street market scene",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
        alt: "Street food market stalls",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
        alt: "Prepared dishes on a market counter",
      },
    ],
    tags: ["market", "daylight", "people"],
  },
  {
    slug: "alley-rehearsal",
    title: "Alley Rehearsal",
    type: "video",
    category: "Video Essay",
    location: "Old Quarter",
    year: "2024",
    summary:
      "A short observational piece following scooter traffic compressing into a narrow alley.",
    cover: {
      src: "https://images.unsplash.com/photo-1526481280695-3c469481bd3f?auto=format&fit=crop&w=1600&q=80",
      alt: "Narrow alley with scooters and wires",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1526481280695-3c469481bd3f?auto=format&fit=crop&w=1600&q=80",
        alt: "Alley with hanging wires",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    tags: ["video", "alley", "motion"],
  },
  {
    slug: "concrete-pause",
    title: "Concrete Pause",
    type: "photo",
    category: "Quiet City",
    location: "Saigon River",
    year: "2024",
    summary:
      "Quiet frames between rush hours — concrete, water, and people waiting for nothing in particular.",
    cover: {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80",
      alt: "Urban waterfront architecture",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80",
        alt: "City buildings along the water",
      },
      {
        src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
        alt: "Quiet street with soft daylight",
      },
    ],
    tags: ["quiet", "architecture", "river"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByType(type: ProjectType | "all"): Project[] {
  if (type === "all") return projects;
  return projects.filter((project) => project.type === type);
}
