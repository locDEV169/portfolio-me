export const site = {
  name: "Lockiee",
  handle: "@_w.nn_",
  instagramUrl: "https://www.instagram.com/_w.nn_/",
  location: "Da Nang, Viet Nam",
  footerNote: "Crafted with street passion",
  tagline: "Street Lens & Motion",
  socialsEyebrow: "Connect on Social",
  // ponytail: href optional — tags without href render as non-links until URL is ready.
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      handle: "@_w.nn_",
      href: "https://www.instagram.com/_w.nn_/",
    },
    {
      id: "youtube",
      label: "YouTube",
      handle: "Lockiee Motion",
    },
    {
      id: "behance",
      label: "Behance",
      handle: "Lockiee visual",
    },
    {
      id: "tiktok",
      label: "TikTok",
      handle: "@lockiee_vlog",
    },
  ],


  heroEyebrow: "Chụp dạo & quay vội",
  heroTitle: ["Capturing raw", "moments"] as const,
  heroAccent: "& street beats",
  availableForHire: true,
  heroImage: {
    src: "/images/projects/girl-night-out/cover.jpg",
    alt: "Night street portrait from Lockiee recent work",
  },
  bioShort: "Capturing moments on the go — street frames from Da Nang.",
  bioShort2: "Roaming snaps & casual reels",
  bioShort3: "Street snaps & quick takes",
  description:
    "Lockiee — CameraMan, camera operator, and developer. Street photography and quick videography from Da Nang, Viet Nam.",
  headline: "A freelancer based in Da Nang",
  bio: "Hi, I'm Lockiee — CameraMan, camera operator, and developer. I shoot and film the unscripted city: chụp dạo, quay vội, and frames that feel alive.",
  // ponytail: placeholder stats until Lockiee confirms real numbers.
  stats: [
    {
      value: "5",
      suffix: "+",
      label: "Years behind the camera",
    },
    {
      value: "100",
      suffix: "+",
      label: "Shoots & sets captured",
    },
  ],
  skills: [
    "Street",
    "Videography",
    "Camera Op",
    "Lightroom",
    "Photoshop",
    "+ More",
  ],
  introImage: {
    src: "/images/projects/me/ava.jpg",
    alt: "Lockiee portrait from a night-out shoot",
  },
  introBadges: [
    { id: "gear", label: "Sony Alpha", side: "left" },
    { id: "hello", label: "Hey, I'm Lockiee!", side: "right" },
  ],
} as const;
