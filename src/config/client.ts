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
    { name: "Harry Osborne", rating: 5, text: "Time to politely tell all of the other garden designers you may have approached to stand down.  We commissioned Raine to reimagine a large and extremely dilapidated Surrey garden into a modern zoned space with large entertaining area. What she delivered was this and then some, taking our initial thoughts to a whole new level.  What was once a vast and unusable patch of scrub at the back of the house, has become our favourite part of the house attracting endless praise from guests who visit.  Fantastic ideas, beautiful planting, unmatched eye for detail and craft, we can’t recommend her enough.", date: "9 months ago" },
    { name: "Luke & Catherine Hutchinson", rating: 5, text: "We can’t recommend Raine enough, we are absolutely thrilled with her garden design and can’t wait to begin work.  We first approached her because we had a planning condition requirement for a landscape design and planting scheme. But whilst that’s what we needed for the council, the design and value that she brought far outweighed our expectations.  The design process was fantastic and gave us the space to work out what we needed from our family garden now and in the future, these ideas were continually developed and resulted in a design that we couldn’t be happier with.  We’d really encourage anyone to see the benefits of getting a professional landscape design from Raine.", date: "10 months ago" },
    { name: "Zain Malik", rating: 5, text: "Raine's knowledge of garden design and her way with people are really quite extraordinary.  Our garden was unloved, lacking soul and not a space we could enjoy as a family. We love entertaining, but had always felt confined to being inside when we had guests or parties.  Raine opened our eyes to the world of garden design and worked with us to design an incredible outdoor space that we are not only immensely proud of, but has changed the way we live.  Raine continually challenged us to see the bigger picture and also to trust the process. She was so reassuring and drew on her experience and expertise to solve problems along the way, producing solutions that were creative and practical in equal measure.  Despite this being a daunting project for us, having Raine on board made the process a pleasure. She was always there when we needed her, and we always looked forward to her visits. Watching the garden being built was truly magical and brought Raine's design to life. Her attention to detail and that of Winslade Landscapes were exemplary and really surpassed our expectations.  The end result is a beautiful garden that is a seamless extension of our home. We feel very fortunate that Raine took us on this journey and would really recommend her for your landscaping project.", date: "a year ago" },
    { name: "Will Bain", rating: 5, text: "Raine helped us with our garden project after completing the design work in 2023. The project involved the extensive redesign of our garden, with the incorporation of a swimming pool, outdoor kitchen / dining etc and full replanting.  Her input was invaluable and timely throughout the project, we are thrilled with the result. Her expertise and experience were clear to see. The relationship was very collaborative which resulted in the development of the perfect garden for us", date: "2 years ago" },
    { name: "Elfmanscoop88", rating: 5, text: "We moved into our dream house five years ago but whilst the house was perfect, the garden was a real disappointment for me - an awkward L shape with various slopes. On Raine’s first visit, she was keen to understand our vision for the garden before suggesting any ideas of her own. She was also cognisant of my desire to do as much of the work as possible. Raine identified the need to open up the rear of our kitchen in order to integrate the new garden with our home and was keen that we do this first, even if it meant delaying  the start of the garden project. Raine is direct in her communications and will challenge you but that is exactly what we needed in order to achieve our perfect garden.  Raine delivered on her brief in spades - we now have a modern garden which looks and feels twice the size that it did before, and with great entertaining space. The connection of the garden with the kitchen has made all the difference, and we now have the dream garden to go with our dream home! I would not hesitate to recommend Raine, who is a joy to work with and is at the very top of her game.  Thank you Raine!", date: "2 years ago" },
    { name: "John Woodcock", rating: 5, text: "We sought a garden designer who would be able to meet quite specific needs in our brief, and who could create a unique garden for us. From the first meeting, Raine proved to be that individual, listening carefully to our requirements and producing a design that met every specification. She was both amiable and approachable, and brought subtle ideas and suggestions into the design, which met the brief exactly.  The different zones in the garden work very well and offer places to sit, dine, enjoy company, or simply be indolent in the Summer sunshine. Strong vertical and horizontal lines produce interesting shadows, while the planting is subtle, softening the harder structures. Raine has given us everything we asked for, and we’re extremely pleased with the result. It’s a garden that’s very different from any in the locality, and draws constant admiration from visitors.  We are delighted clients.", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Raine Garden Design Ltd | Landscaper in Farnham",
    description: "Professional landscaper in Farnham. 5.0-star rated on Google. Call for a free quote.",
  },
};
