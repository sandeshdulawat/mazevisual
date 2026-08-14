export interface ServiceData {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  imageSrc: string;
  longDescription: string;
  capabilities: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "branding",
    id: "01",
    title: "Branding",
    subtitle: "Identity & Strategy",
    description:
      "We build enduring brands through strategic positioning, compelling visual identities, and cohesive design systems that resonate with your target audience.",
    items: ["Visual Identity", "Typography", "Packaging", "Art Direction"],
    imageSrc: "/images/branding.png",
    longDescription:
      "A brand is more than a logo — it's the sum of every touchpoint a customer experiences. We work at the intersection of strategy and design to build brands that people remember, trust, and advocate for. From early-stage startups seeking their first identity to established enterprises navigating a rebrand, we bring the same level of strategic rigor and creative ambition to every engagement.",
    capabilities: [
      {
        title: "Visual Identity Systems",
        description:
          "Logo design, color palettes, typography systems, and brand guidelines that ensure consistency across every medium.",
      },
      {
        title: "Brand Strategy",
        description:
          "Market research, competitive analysis, positioning, and brand architecture that give your visual identity a strategic foundation.",
      },
      {
        title: "Packaging Design",
        description:
          "Shelf-ready packaging that communicates your brand story at a glance and creates a memorable unboxing experience.",
      },
      {
        title: "Art Direction",
        description:
          "Creative direction for campaigns, photoshoots, and content that maintains brand consistency while pushing creative boundaries.",
      },
      {
        title: "Brand Collateral",
        description:
          "Business cards, stationery, pitch decks, and marketing materials designed to leave a lasting impression.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Comprehensive documentation that ensures every team member and partner applies your brand correctly.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Research",
        description:
          "We immerse ourselves in your business, audience, and competitive landscape to uncover the strategic insights that will drive the brand.",
      },
      {
        step: "02",
        title: "Strategy & Positioning",
        description:
          "We define your brand's core narrative, values, personality, and market positioning to create a clear strategic blueprint.",
      },
      {
        step: "03",
        title: "Design & Exploration",
        description:
          "We explore multiple creative directions, refining typography, color, imagery, and tone until the identity feels unmistakably yours.",
      },
      {
        step: "04",
        title: "Delivery & Guidelines",
        description:
          "We package everything into a comprehensive brand system with detailed guidelines, asset libraries, and templates for your team.",
      },
    ],
  },
  {
    slug: "architecture",
    id: "02",
    title: "Architecture",
    subtitle: "Spatial Design",
    description:
      "We create immersive spatial experiences by blending functional architecture with breathtaking aesthetics, ensuring every structure tells a compelling story.",
    items: ["Conceptual Architecture", "Facade Design", "Urban Planning"],
    imageSrc: "/images/architecture.png",
    longDescription:
      "Architecture is the art of shaping the spaces where life happens. We approach every project with a deep respect for context — the land, the light, the people who will inhabit the space. Our designs balance bold vision with practical intelligence, creating structures that are as functional as they are beautiful. Whether it's a private residence, a commercial complex, or an urban masterplan, we design spaces that elevate everyday experience.",
    capabilities: [
      {
        title: "Conceptual Architecture",
        description:
          "Visionary design concepts that push boundaries while respecting site context, climate, and cultural nuance.",
      },
      {
        title: "Facade Design",
        description:
          "Striking exterior compositions that balance aesthetics, environmental performance, and structural integrity.",
      },
      {
        title: "Urban Planning",
        description:
          "Master planning for neighborhoods, campuses, and mixed-use developments that foster community and connectivity.",
      },
      {
        title: "Sustainable Design",
        description:
          "Energy-efficient, climate-responsive architecture that minimizes environmental impact without compromising design quality.",
      },
      {
        title: "Renovation & Adaptive Reuse",
        description:
          "Transforming existing structures with sensitivity to their history while reimagining them for contemporary use.",
      },
      {
        title: "Regulatory Navigation",
        description:
          "Expert handling of zoning requirements, building codes, and approval processes to keep your project on track.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Analysis & Brief",
        description:
          "We study the site, its surroundings, and your vision to establish a clear design brief and set of project goals.",
      },
      {
        step: "02",
        title: "Concept Development",
        description:
          "We develop initial design concepts through sketches, massing studies, and 3D explorations that test multiple spatial ideas.",
      },
      {
        step: "03",
        title: "Design Development",
        description:
          "We refine the chosen direction into detailed floor plans, sections, elevations, and material specifications.",
      },
      {
        step: "04",
        title: "Documentation & Execution",
        description:
          "We produce construction-ready documentation and provide design oversight during the build to ensure fidelity to the vision.",
      },
    ],
  },
  {
    slug: "digital",
    id: "03",
    title: "Digital",
    subtitle: "Interactive Experiences",
    description:
      "We craft cutting-edge digital experiences, seamless user interfaces, and interactive 3D web environments that captivate and convert users.",
    items: ["Web Architecture", "Interactive 3D", "UI/UX Systems"],
    imageSrc: "/images/digital.png",
    longDescription:
      "Digital is where brand meets behavior. We design and build digital products that don't just look beautiful — they work beautifully. From high-conversion landing pages to complex SaaS dashboards, our approach fuses strategic UX thinking with pixel-perfect visual design and performant front-end engineering. We believe every interaction is an opportunity to delight, and every pixel should earn its place.",
    capabilities: [
      {
        title: "Web Design & Development",
        description:
          "Custom websites built with modern frameworks, optimized for performance, accessibility, and search engines.",
      },
      {
        title: "UI/UX Design Systems",
        description:
          "Scalable component libraries and design tokens that ensure consistency across products and teams.",
      },
      {
        title: "Interactive 3D & WebGL",
        description:
          "Immersive 3D web experiences, product configurators, and spatial interfaces powered by Three.js and WebGL.",
      },
      {
        title: "Mobile App Design",
        description:
          "Native and cross-platform app interfaces designed for intuitive navigation and engaging user journeys.",
      },
      {
        title: "Motion & Micro-interactions",
        description:
          "Purposeful animations that guide users, communicate state changes, and add personality to digital products.",
      },
      {
        title: "Performance Optimization",
        description:
          "Core Web Vitals tuning, code splitting, image optimization, and caching strategies for blazing-fast load times.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research & UX Strategy",
        description:
          "We map user journeys, audit existing experiences, and define the information architecture that will guide the design.",
      },
      {
        step: "02",
        title: "Wireframing & Prototyping",
        description:
          "We build interactive prototypes that test key flows and interactions before a single line of production code is written.",
      },
      {
        step: "03",
        title: "Visual Design",
        description:
          "We craft high-fidelity designs with obsessive attention to typography, spacing, color, and motion.",
      },
      {
        step: "04",
        title: "Development & Launch",
        description:
          "We build with clean, performant code, conduct rigorous QA, and handle deployment and post-launch optimization.",
      },
    ],
  },
  {
    slug: "interior",
    id: "04",
    title: "Interior",
    subtitle: "Interior Styling",
    description:
      "Our interior design services focus on curating spaces that balance luxury, comfort, and purpose, with meticulous attention to furniture and lighting.",
    items: ["Interior Architecture", "Furniture Curation", "Lighting Design"],
    imageSrc: "/images/interior.png",
    longDescription:
      "An interior is the dialogue between a space and its inhabitants. We design interiors that feel inevitable — as though the space could not have existed any other way. Our approach integrates architectural sensibility with a refined material palette and bespoke furniture selections, creating environments that are as livable as they are photogenic. From intimate residential spaces to expansive commercial projects, we obsess over every detail so you don't have to.",
    capabilities: [
      {
        title: "Interior Architecture",
        description:
          "Spatial planning, partition layouts, and structural modifications that transform raw spaces into refined environments.",
      },
      {
        title: "Furniture Curation",
        description:
          "Hand-selected furniture from leading manufacturers and artisans, tailored to your aesthetic and functional needs.",
      },
      {
        title: "Lighting Design",
        description:
          "Layered lighting schemes that shape mood, highlight architecture, and create visual depth throughout the space.",
      },
      {
        title: "Material & Finish Selection",
        description:
          "Curated palettes of stone, wood, metal, fabric, and paint that give each project its distinctive tactile identity.",
      },
      {
        title: "Custom Millwork & Joinery",
        description:
          "Bespoke built-in furniture, cabinetry, and architectural details designed specifically for your space.",
      },
      {
        title: "Styling & Accessories",
        description:
          "Art curation, soft furnishings, and decorative objects that add the final layer of personality and warmth.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Space Assessment & Vision",
        description:
          "We survey the existing space, understand your lifestyle or business needs, and establish the design vision and budget.",
      },
      {
        step: "02",
        title: "Concept & Mood Boards",
        description:
          "We develop a cohesive design direction with mood boards, material samples, and preliminary spatial layouts.",
      },
      {
        step: "03",
        title: "Detailed Design & Procurement",
        description:
          "We finalize every specification — from floor finishes to door handles — and manage sourcing and procurement.",
      },
      {
        step: "04",
        title: "Installation & Styling",
        description:
          "We oversee the installation of every element and style the space with curated accessories, art, and soft furnishings.",
      },
    ],
  },
  {
    slug: "visualization",
    id: "05",
    title: "Visualization",
    subtitle: "3D Art & Rendering",
    description:
      "We bring concepts to life with hyper-realistic 3D rendering and environmental art, giving you a crystal-clear vision of the final product before it's built.",
    items: ["3D Rendering", "Blueprint Art", "Environment Art"],
    imageSrc: "/images/visualization.png",
    longDescription:
      "Seeing is believing. Our visualization studio bridges the gap between imagination and reality, producing photorealistic renders and immersive walkthroughs that communicate design intent with absolute clarity. Whether you need to sell a vision to investors, win a competition, or simply see your project before construction begins, our renders don't just show a space — they make you feel like you're standing in it.",
    capabilities: [
      {
        title: "Photorealistic 3D Rendering",
        description:
          "Ultra-high-resolution still images with accurate lighting, materials, and atmospheric effects that rival photography.",
      },
      {
        title: "Architectural Walkthroughs",
        description:
          "Cinematic animated tours that guide viewers through unbuilt spaces with dynamic camera work and ambient sound.",
      },
      {
        title: "Environment Art",
        description:
          "Complete scene design including landscaping, vegetation, sky systems, and contextual surroundings for maximum realism.",
      },
      {
        title: "Blueprint & Technical Art",
        description:
          "Stylized technical illustrations, axonometric views, and exploded diagrams that communicate complex designs clearly.",
      },
      {
        title: "VR & Interactive Experiences",
        description:
          "Virtual reality walkthroughs and interactive 3D configurators that let clients explore spaces in real time.",
      },
      {
        title: "Post-Production & Compositing",
        description:
          "Expert retouching, color grading, and compositing that elevate renders from good to extraordinary.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief & Reference Gathering",
        description:
          "We collect design files, reference imagery, and material specifications to ensure the visualization matches your intent.",
      },
      {
        step: "02",
        title: "3D Modeling & Scene Setup",
        description:
          "We build detailed 3D models, set up materials and lighting, and compose camera angles that tell the strongest story.",
      },
      {
        step: "03",
        title: "Rendering & Refinement",
        description:
          "We produce test renders for your review, iterating on lighting, materials, and atmosphere until every frame is perfect.",
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "We deliver high-resolution renders, animations, or interactive files in your required formats, ready for presentation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
