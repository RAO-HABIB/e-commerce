export interface Product {
  id: string;
  name: string;
  code: string;
  category: "PERFORMANCE" | "LIFESTYLE" | "LIMITED EDITION" | "CONCEPT";
  price: number;
  originalPrice?: number;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  specs: {
    weight: string;
    drop: string;
    cushioning: string;
    propulsion: string;
    surface: string;
    stackHeight: string;
  };
  details: string[];
  materials: { name: string; percentage: string }[];
  sizes: number[];
  colorways: { name: string; hex: string; preview: string }[];
  inStock: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  productIds: string[];
  releaseYear: string;
  badge: string;
  accentColor: string;
}

export interface CartItem {
  product: Product;
  size: number;
  colorway: string;
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "nx-01",
    name: "NX-PROTOTYPE 01",
    code: "NX-01-AETH",
    category: "PERFORMANCE",
    price: 285.0,
    originalPrice: 320.0,
    tagline: "Advanced carbon-infused propulsion system for supersonic ground contact.",
    description:
      "Engineered from the ground up inside our kinetic dynamics laboratory, the NX-PROTOTYPE 01 combines a 1.2mm multi-directional carbon shank with dual-density nitrogen-injected foam. Built for athletes who demand sub-millimeter precision.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzLE8PUF1_TC0WytS0WYr-LbL4KaCvxh4ccFehj-ON211MAfDPiRymgCKWLX6X-DYMG9m-QIlXIlvPXC6gfoAFWK5jPiSEO0tRIB5OjumYP_wIY3qGv4j88uASwOkV7p7tKxM0Cwx04Uqyh0O_00q-Uy6rP7JVImjNIEQ1j3gMaegsTxCvWWGO6H1yZihVzJFctM-0cZR2kHPayeFXl9aeCboZbNAEBjiNYZb-UagqxtTndqlmEn1zQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsqz2Y_O-HFBNxTG2q2rPqAE2CV9NoRQcSnRvMcPZfalMgpsMMNvecYVA9OTaTv3kaGFHYk2MRWO27UPAdjUsRiPh9pkKUZDDRyVV5x81DQgUmXKIw4BUBBnXp22QfRaxgJPMob03whKDj4b4_-OVImAYp6R4UkTWYuKItewPqPeaZepwlo4Cmzhk1C0A9mT0OW6qBpopOVDEShqmU7tPciBcGv_Xdlk8x_c02uo0ZuH6JKeu2WDGY6g",
    ],
    specs: {
      weight: "214g (Size 9)",
      drop: "8mm",
      cushioning: "Dual Nitro-Gel pods",
      propulsion: "AeroShank 1.2k Carbon",
      surface: "Track & Synthetic Road",
      stackHeight: "34mm Heel / 26mm Forefoot",
    },
    details: [
      "Custom 12-strand Vectran tension matrix upper",
      "Laser-etched micro-lug rubber compound for wet asphalt traction",
      "Zero-shear anatomical heel counter with memory lock",
      "Reflective 3M circuit lines along lateral wing",
    ],
    materials: [
      { name: "Recycled Carbon Fiber", percentage: "35%" },
      { name: "Thermo-Knit Monofilament", percentage: "45%" },
      { name: "Bio-Based Biofoam", percentage: "20%" },
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colorways: [
      { name: "Hyper Orange / Void", hex: "#FF6600", preview: "#FF6600" },
      { name: "Cyber Silver / Noir", hex: "#C6C6C7", preview: "#C6C6C7" },
      { name: "Pure Carbon", hex: "#1C1C1C", preview: "#1C1C1C" },
    ],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewsCount: 128,
  },
  {
    id: "nx-02",
    name: "NX-CORE STEALTH",
    code: "NX-02-STLT",
    category: "PERFORMANCE",
    price: 220.0,
    tagline: "Minimalist design engineered for maximum agility and covert urban exploration.",
    description:
      "All-black tactical silhouette with matte finish and sound-dampening micro-textured outsole. Designed for aggressive acceleration and featherweight comfort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
    ],
    specs: {
      weight: "198g (Size 9)",
      drop: "6mm",
      cushioning: "High-density EVA composite",
      propulsion: "Integrated TPU flex-grid",
      surface: "All-Terrain & Urban Concrete",
      stackHeight: "30mm Heel / 24mm Forefoot",
    },
    details: [
      "Stealth matte black anti-abrasion overlay",
      "Acoustic damping tread geometry",
      "GORE-TEX Invisible Fit waterproof barrier",
    ],
    materials: [
      { name: "Ballistic Nylon", percentage: "50%" },
      { name: "Synthetic Microfiber", percentage: "30%" },
      { name: "Rubber Compound", percentage: "20%" },
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colorways: [
      { name: "Pitch Black", hex: "#0A0A0A", preview: "#0A0A0A" },
      { name: "Smoked Graphite", hex: "#2A2A2A", preview: "#2A2A2A" },
    ],
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviewsCount: 84,
  },
  {
    id: "nx-03",
    name: "NX-AERO GHOST",
    code: "NX-03-GHST",
    category: "LIMITED EDITION",
    price: 310.0,
    originalPrice: 350.0,
    tagline: "Ultra-lightweight mesh upper with translucent icy blue sole formulation.",
    description:
      "Constructed from optical-grade translucent monofilament knit with an ethereal icy blue reactive sole. Only 500 pairs worldwide, individually numbered with laser engraving.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUznV-IC8XfAPQ9AkGjyqekiOIlsRmkXCTTHGwtZDr9JJ6-AVKY7o0td_SwDQPNE6YDwSUmF_xsl4V-j8Qnw3FH6nRUfhcj6hpc94sROJMKgA8axGBhsRmcWPSCKKN9XfuZ7SEYl78PvR4TmxoyWRq6aJy_m3xrdhhH48Sl12YZj6Ta5aMA844F8rmGlhG45Nls1eCbsGzOyOMqY1uaHwzmSAWq4_47Vvo8fpzNyObaeXCVeEv25rn-Q",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUznV-IC8XfAPQ9AkGjyqekiOIlsRmkXCTTHGwtZDr9JJ6-AVKY7o0td_SwDQPNE6YDwSUmF_xsl4V-j8Qnw3FH6nRUfhcj6hpc94sROJMKgA8axGBhsRmcWPSCKKN9XfuZ7SEYl78PvR4TmxoyWRq6aJy_m3xrdhhH48Sl12YZj6Ta5aMA844F8rmGlhG45Nls1eCbsGzOyOMqY1uaHwzmSAWq4_47Vvo8fpzNyObaeXCVeEv25rn-Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
    ],
    specs: {
      weight: "182g (Size 9)",
      drop: "7mm",
      cushioning: "Liquid crystal polymer core",
      propulsion: "Ultralight aerospace composite plate",
      surface: "Dry Track & Speed Trials",
      stackHeight: "32mm Heel / 25mm Forefoot",
    },
    details: [
      "Individually serialized laser etching on lateral heel",
      "Semi-transparent mono-mesh vamp allowing custom sock visibility",
      "Glow-infused photoluminescent midsole pigments",
    ],
    materials: [
      { name: "Monofilament Polymer", percentage: "60%" },
      { name: "Aerospace Carbon", percentage: "25%" },
      { name: "Cryo Rubber", percentage: "15%" },
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    colorways: [
      { name: "Ghost White / Ice Blue", hex: "#FFFFFF", preview: "#FFFFFF" },
      { name: "Aurora Glaze", hex: "#9CCAFF", preview: "#9CCAFF" },
    ],
    inStock: true,
    isLimited: true,
    rating: 5.0,
    reviewsCount: 42,
  },
  {
    id: "nx-04",
    name: "NX-CITY UTILITY",
    code: "NX-04-UTIL",
    category: "LIFESTYLE",
    price: 195.0,
    tagline: "Built for brutal concrete landscapes and all-day hyper-kinetic mobility.",
    description:
      "A fusion of technical architectural geometry and all-day recovery ergonomics. Features magnetic Fidlock speed-lacing and a high-abrasion reinforced toe box.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzLE8PUF1_TC0WytS0WYr-LbL4KaCvxh4ccFehj-ON211MAfDPiRymgCKWLX6X-DYMG9m-QIlXIlvPXC6gfoAFWK5jPiSEO0tRIB5OjumYP_wIY3qGv4j88uASwOkV7p7tKxM0Cwx04Uqyh0O_00q-Uy6rP7JVImjNIEQ1j3gMaegsTxCvWWGO6H1yZihVzJFctM-0cZR2kHPayeFXl9aeCboZbNAEBjiNYZb-UagqxtTndqlmEn1zQ",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzLE8PUF1_TC0WytS0WYr-LbL4KaCvxh4ccFehj-ON211MAfDPiRymgCKWLX6X-DYMG9m-QIlXIlvPXC6gfoAFWK5jPiSEO0tRIB5OjumYP_wIY3qGv4j88uASwOkV7p7tKxM0Cwx04Uqyh0O_00q-Uy6rP7JVImjNIEQ1j3gMaegsTxCvWWGO6H1yZihVzJFctM-0cZR2kHPayeFXl9aeCboZbNAEBjiNYZb-UagqxtTndqlmEn1zQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsqz2Y_O-HFBNxTG2q2rPqAE2CV9NoRQcSnRvMcPZfalMgpsMMNvecYVA9OTaTv3kaGFHYk2MRWO27UPAdjUsRiPh9pkKUZDDRyVV5x81DQgUmXKIw4BUBBnXp22QfRaxgJPMob03whKDj4b4_-OVImAYp6R4UkTWYuKItewPqPeaZepwlo4Cmzhk1C0A9mT0OW6qBpopOVDEShqmU7tPciBcGv_Xdlk8x_c02uo0ZuH6JKeu2WDGY6g",
    ],
    specs: {
      weight: "260g (Size 9)",
      drop: "10mm",
      cushioning: "Tri-density responsive foam",
      propulsion: "Torsional TPU arch cradle",
      surface: "Urban Hardscape",
      stackHeight: "36mm Heel / 26mm Forefoot",
    },
    details: [
      "Fidlock quick-release mechanical closure",
      "Cordura 500D ripstop weatherproofing",
      "Ortholite X55 memory footbed",
    ],
    materials: [
      { name: "Cordura Fabric", percentage: "40%" },
      { name: "Reinforced TPU", percentage: "35%" },
      { name: "Recycled Rubber", percentage: "25%" },
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colorways: [
      { name: "Urban Slate Grey", hex: "#454747", preview: "#454747" },
      { name: "Tarmac Black", hex: "#141414", preview: "#141414" },
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 96,
  },
  {
    id: "nx-05",
    name: "AETHEOS APEX PROTO",
    code: "NX-05-APEX",
    category: "CONCEPT",
    price: 380.0,
    tagline: "Uncompromised kinetic energy return. 3D-printed lattice midsole.",
    description:
      "A zero-compromise concept runner directly derived from our aerodynamic wind-tunnel testing. Employs a custom additive-manufactured resin lattice structure tuned for 89% energy return.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsqz2Y_O-HFBNxTG2q2rPqAE2CV9NoRQcSnRvMcPZfalMgpsMMNvecYVA9OTaTv3kaGFHYk2MRWO27UPAdjUsRiPh9pkKUZDDRyVV5x81DQgUmXKIw4BUBBnXp22QfRaxgJPMob03whKDj4b4_-OVImAYp6R4UkTWYuKItewPqPeaZepwlo4Cmzhk1C0A9mT0OW6qBpopOVDEShqmU7tPciBcGv_Xdlk8x_c02uo0ZuH6JKeu2WDGY6g",
    ],
    specs: {
      weight: "205g (Size 9)",
      drop: "8mm",
      cushioning: "3D Light-Synthesized Resin Lattice",
      propulsion: "Full-length 3D Curvature Carbon Plate",
      surface: "Marathon & Racing circuits",
      stackHeight: "39.5mm (Max allowable by World Athletics)",
    },
    details: [
      "Continuous liquid interface production (CLIP) sole lattice",
      "Ultra-thin 0.4mm bio-synthetic upper with zero stretch",
      "Integrated carbon fiber propulsion winglet",
    ],
    materials: [
      { name: "Photopolymer Resin", percentage: "55%" },
      { name: "Pre-preg Carbon Plate", percentage: "30%" },
      { name: "Monofilament Bio-mesh", percentage: "15%" },
    ],
    sizes: [8, 9, 9.5, 10, 11],
    colorways: [
      { name: "Kinetic Orange / Chrome", hex: "#FF6600", preview: "#FF6600" },
      { name: "Anodized Silver", hex: "#E2E2E2", preview: "#E2E2E2" },
    ],
    inStock: true,
    isLimited: true,
    rating: 4.95,
    reviewsCount: 31,
  },
  {
    id: "nx-06",
    name: "CARBON MATRIX 900",
    code: "NX-06-MTRX",
    category: "PERFORMANCE",
    price: 260.0,
    tagline: "High-cadence distance training with structural stability wings.",
    description:
      "Tuned specifically for repetitive high-speed training blocks. The Carbon Matrix 900 features lateral stabilization stabilizers that prevent pronation fatigue over 30+ kilometers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUznV-IC8XfAPQ9AkGjyqekiOIlsRmkXCTTHGwtZDr9JJ6-AVKY7o0td_SwDQPNE6YDwSUmF_xsl4V-j8Qnw3FH6nRUfhcj6hpc94sROJMKgA8axGBhsRmcWPSCKKN9XfuZ7SEYl78PvR4TmxoyWRq6aJy_m3xrdhhH48Sl12YZj6Ta5aMA844F8rmGlhG45Nls1eCbsGzOyOMqY1uaHwzmSAWq4_47Vvo8fpzNyObaeXCVeEv25rn-Q",
    ],
    specs: {
      weight: "228g (Size 9)",
      drop: "9mm",
      cushioning: "Supercritical Pebax foam",
      propulsion: "Matrix Y-Shank plate",
      surface: "Road / Paved Terrain",
      stackHeight: "35mm Heel / 26mm Forefoot",
    },
    details: [
      "Lateral carbon stabilization wing",
      "Breathable engineered jacquard knit",
      "Abrasion-resistant Continental rubber segments",
    ],
    materials: [
      { name: "Pebax Supercritical Foam", percentage: "50%" },
      { name: "Engineered Jacquard Knit", percentage: "35%" },
      { name: "Carbon Composite", percentage: "15%" },
    ],
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colorways: [
      { name: "Void Black / Electric Coral", hex: "#FF6600", preview: "#FF6600" },
      { name: "Stealth Slate", hex: "#2B1C16", preview: "#2B1C16" },
    ],
    inStock: true,
    rating: 4.85,
    reviewsCount: 78,
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "col-01",
    slug: "aetheos-series",
    title: "AETHEOS SERIES",
    subtitle: "KINETIC PROPULSION LAB",
    description:
      "Born from sub-zero friction tests and aerospace carbon studies. The Aetheos collection represents our most radical leap in mechanical energy recovery.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
    productIds: ["nx-01", "nx-05"],
    releaseYear: "2026.1",
    badge: "FLAGSHIP",
    accentColor: "#FF6600",
  },
  {
    id: "col-02",
    slug: "cyber-utility",
    title: "CYBER UTILITY",
    subtitle: "MODULAR ALL-TERRAIN MOBILITY",
    description:
      "Engineered for the modern megalopolis. Waterproof membranes, tactical magnetic buckles, and anti-slip rubber compounds tuned for cold concrete.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzLE8PUF1_TC0WytS0WYr-LbL4KaCvxh4ccFehj-ON211MAfDPiRymgCKWLX6X-DYMG9m-QIlXIlvPXC6gfoAFWK5jPiSEO0tRIB5OjumYP_wIY3qGv4j88uASwOkV7p7tKxM0Cwx04Uqyh0O_00q-Uy6rP7JVImjNIEQ1j3gMaegsTxCvWWGO6H1yZihVzJFctM-0cZR2kHPayeFXl9aeCboZbNAEBjiNYZb-UagqxtTndqlmEn1zQ",
    productIds: ["nx-02", "nx-04"],
    releaseYear: "2026.2",
    badge: "UTILITY",
    accentColor: "#C6C6C7",
  },
  {
    id: "col-03",
    slug: "hyper-stealth",
    title: "HYPER STEALTH",
    subtitle: "ZERO-REFLECTIVE MATTE ARCHITECTURE",
    description:
      "Monochromatic dark void aesthetics with high-potency internal mechanics. Silent, disciplined, and surgically constructed.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
    productIds: ["nx-02", "nx-06"],
    releaseYear: "2026.3",
    badge: "BLACK SERIES",
    accentColor: "#9E9E9E",
  },
  {
    id: "col-04",
    slug: "apex-protocol",
    title: "APEX PROTOCOL",
    subtitle: "LIMITED RACEDAY CAPSULE",
    description:
      "Strictly limited production runs developed in collaboration with elite endurance champions. Zero excess, pure kinetic output.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUznV-IC8XfAPQ9AkGjyqekiOIlsRmkXCTTHGwtZDr9JJ6-AVKY7o0td_SwDQPNE6YDwSUmF_xsl4V-j8Qnw3FH6nRUfhcj6hpc94sROJMKgA8axGBhsRmcWPSCKKN9XfuZ7SEYl78PvR4TmxoyWRq6aJy_m3xrdhhH48Sl12YZj6Ta5aMA844F8rmGlhG45Nls1eCbsGzOyOMqY1uaHwzmSAWq4_47Vvo8fpzNyObaeXCVeEv25rn-Q",
    productIds: ["nx-03", "nx-05"],
    releaseYear: "2026.LIMITED",
    badge: "PRO SERIES",
    accentColor: "#9CCAFF",
  },
];

export const EXPLODED_VIEW_DATA = {
  title: "ANATOMY OF SPEED",
  badge: "AETHEOS SYSTEM",
  headline: "ENGINEERED DOWN TO THE MICRON",
  description:
    "Every millimeter of the NX-01 is mathematically calculated. The modular construction isolates impact vectors, channeling kinetic energy directly into forward momentum.",
  specs: [
    { label: "WEIGHT", value: "214g", detail: "Size 9 US Men" },
    { label: "OFFSET / DROP", value: "8mm", detail: "Optimized toe-off" },
    { label: "ENERGY RETURN", value: "89.4%", detail: "Dynamometer tested" },
    { label: "SHANK FLEX", value: "1.2mm", detail: "3K Aerospace Twill" },
  ],
  layers: [
    { name: "Vectran 12-Strand Upper", desc: "Adaptive lockdown with zero stretch" },
    { name: "Laser-Engineered Carbon Shank", desc: "Torsional rigidity and explosive recoil" },
    { name: "Dual Nitrogen-Injected Pods", desc: "Independent heel and forefoot dampening" },
    { name: "Micro-Lug Traction Matrix", desc: "3D textured omni-directional grip" },
  ],
};

export const MOCK_USER = {
  name: "Alexander Vance",
  callsign: "VANCE-09",
  email: "alexander.vance@kinetic.design",
  membershipTier: "TITANIUM PROTOCOL",
  totalMiles: "1,428 KM",
  savedSize: 9.5,
  joinedDate: "JAN 2024",
  addresses: [
    {
      id: "addr-1",
      isDefault: true,
      title: "Primary Lab / Residence",
      street: "742 Evergreen Terrace, Sector 4",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      country: "United States",
    },
    {
      id: "addr-2",
      isDefault: false,
      title: "Design Studio",
      street: "1200 Innovation Way, Suite 800",
      city: "Austin",
      state: "TX",
      postalCode: "78701",
      country: "United States",
    },
  ],
  orders: [
    {
      id: "ORD-94281",
      date: "August 10, 2026",
      status: "IN TRANSIT",
      statusDetail: "Departed Oakland Logistics Hub — Scheduled delivery tomorrow 10:00 AM",
      total: 285.0,
      trackingNumber: "NX-TRK-8921849102",
      items: [
        {
          productName: "NX-PROTOTYPE 01",
          colorway: "Hyper Orange / Void",
          size: 9.5,
          price: 285.0,
          quantity: 1,
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q",
        },
      ],
    },
    {
      id: "ORD-87102",
      date: "May 22, 2026",
      status: "DELIVERED",
      statusDetail: "Signed for by Alexander Vance",
      total: 220.0,
      trackingNumber: "NX-TRK-7719230194",
      items: [
        {
          productName: "NX-CORE STEALTH",
          colorway: "Pitch Black",
          size: 9.5,
          price: 220.0,
          quantity: 1,
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
        },
      ],
    },
  ],
};
