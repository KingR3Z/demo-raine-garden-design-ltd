export const client = {
  // Business Details
  name: "Raine Garden Design Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Farnham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07702 042559",
  email: "",
  website: "",

  // Location
  address: "Farnham",
  city: "Farnham",
  county: "",
  postcode: "",
  basedIn: "Farnham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Elfmanscoop", rating: 5, text: "We moved into our dream house five years ago but whilst the house was perfect, the garden was a real disappointment for me - an awkward L shape with various slopes. On Raine’s first visit, she was keen to understand our vision for the …  ", date: "2 years ago" },
    { name: "Luke & Catherine Hutchinson", rating: 5, text: "We can’t recommend Raine enough, we are absolutely thrilled with her garden design and can’t wait to begin work. …  ", date: "10 months ago" },
    { name: "Harry Osborne", rating: 5, text: "Time to politely tell all of the other garden designers you may have approached to stand down. …  ", date: "9 months ago" },
    { name: "Stephanie Wagnert", rating: 5, text: "We have had the pleasure of working with Raine during the last 18 months or so, during the design and construction phases of our fabulous garden project, which has just been completed. …  ", date: "3 years ago" },
    { name: "John Woodcock", rating: 5, text: "We sought a garden designer who would be able to meet quite specific needs in our brief, and who could create a unique garden for us. From the first meeting, Raine proved to be that individual, listening carefully to our requirements and …    Respo", date: "2 years ago" },
    { name: "Stan Mayne", rating: 5, text: "So happy we chose Raine to guide us through the perils of designing a new garden from scratch. Raine took the time to get to know us and our style before discussing the practicalities, pitfalls and pleasures of designing a beautiful garden …  ", date: "4 years ago" },
    { name: "Tracy McNeill", rating: 5, text: "Raine is very customer focused, creative and also willing to challenge your thinking! She designed a beautiful garden for us on a plot that was uncleared with multiple levels - so quite a challenge.  She took on board our needs as a growing …  ", date: "6 years ago" },
    { name: "Debra Mitchell", rating: 5, text: "We are absolutely delighted with our beautifully designed garden. Raine has created a truly stunning area for us to relax and enjoy. The cedar structures,  plants and colours all add to the Mediterranean feel. …  ", date: "5 years ago" },
    { name: "Will Bain", rating: 5, text: "Raine helped us with our garden project after completing the design work in 2023. The project involved the extensive redesign of our garden, with the incorporation of a swimming pool, outdoor kitchen / dining etc and full replanting. …  ", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Raine Garden Design Ltd | Landscaper in Farnham",
    description: "Professional landscaper in Farnham. 5.0-star rated on Google. Call for a free quote.",
  },
};
