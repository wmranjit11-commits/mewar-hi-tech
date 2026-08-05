export interface CaseStudyStat {
  value: string;
  label: string;
  icon: "chart" | "clock" | "shield" | "zap" | "cog" | "check";
}

export interface CaseStudy {
  id: string;
  type: "national" | "international";
  category: string;
  title: string;
  location: string;
  image: string;
  stats: CaseStudyStat[];
  description: string;
  capacity?: string;
  client?: string;
  year?: string;
  highlights?: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "limestone-crushing-plant-mp",
    type: "national",
    category: "LIMESTONE PLANT",
    title: "250 TPH Limestone Crushing Plant",
    location: "Madhya Pradesh, India",
    image: "/images/latest-projects-1.jpg",
    capacity: "250 TPH",
    client: "Central India Mining Ltd.",
    year: "2024",
    description:
      "A complete turnkey limestone crushing and screening plant delivered for major cement manufacturing supply. Integrated Double Toggle Jaw Crusher and Cone Crusher to achieve uniform cubic aggregate output.",
    highlights: [
      "Custom engineered 250 TPH Jaw & Cone combination",
      "35% increase in total aggregate productivity",
      "Dust suppression systems integrated for environmental safety",
    ],
    stats: [
      { value: "35%", label: "Higher Productivity", icon: "chart" },
      { value: "20%", label: "Lower Downtime", icon: "clock" },
      { value: "98%", label: "Material Consistency", icon: "shield" },
    ],
  },
  {
    id: "sand-manufacturing-plant-rajasthan",
    type: "national",
    category: "SAND PLANT",
    title: "200 TPH Sand Manufacturing Plant",
    location: "Rajasthan, India",
    image: "/images/latest-projects-2.jpg",
    capacity: "200 TPH",
    client: "Marwar Aggregates & Infrastructure",
    year: "2023",
    description:
      "State-of-the-art VSI Sand Making Machine and washing system engineered to produce high-grade manufactured sand (M-Sand) meeting Zone II IS 383 specifications.",
    highlights: [
      "High efficiency Vertical Shaft Impactor (VSI)",
      "Zero silt contamination with hydrocyclone sand washer",
      "15% reduction in overall energy consumption",
    ],
    stats: [
      { value: "30%", label: "Higher Output", icon: "chart" },
      { value: "15%", label: "Energy Savings", icon: "zap" },
      { value: "99%", label: "Gradation Accuracy", icon: "check" },
    ],
  },
  {
    id: "infrastructure-crushing-project-mh",
    type: "national",
    category: "INFRASTRUCTURE PROJECT",
    title: "300 TPH Infrastructure Crushing Project",
    location: "Maharashtra, India",
    image: "/images/latest-projects-3.jpg",
    capacity: "300 TPH",
    client: "Deccan Expressways Pvt. Ltd.",
    year: "2024",
    description:
      "Heavy duty crushing plant deployed for national highway expansion. Features robust primary jaw crusher and secondary cone crusher with high-frequency vibrating screens.",
    highlights: [
      "24/7 continuous operation during expressway construction",
      "Heavy duty skid-mounted design for rapid relocation",
      "25% reduction in operational cost per ton",
    ],
    stats: [
      { value: "40%", label: "Higher Capacity", icon: "chart" },
      { value: "25%", label: "Lower Operating Cost", icon: "cog" },
      { value: "100%", label: "Safe & Reliable Operation", icon: "shield" },
    ],
  },
  {
    id: "cement-plant-solution-gujarat",
    type: "national",
    category: "CEMENT PLANT SOLUTION",
    title: "Complete Crushing Solution for Cement Plant",
    location: "Gujarat, India",
    image: "/images/latest-projects-4.jpg",
    capacity: "350 TPH",
    client: "Western Cement Corporation",
    year: "2023",
    description:
      "Fully automated primary and secondary crushing plant supplying raw limestone directly to cement kilns with zero downtime recorded over 18 months.",
    highlights: [
      "Automated PLC control panel with remote telemetry",
      "Heavy manganese liner plates for maximum wear life",
      "Zero unplanned shutdowns recorded",
    ],
    stats: [
      { value: "20%", label: "Process Efficiency", icon: "cog" },
      { value: "24/7", label: "Continuous Operation", icon: "clock" },
      { value: "Zero", label: "Unplanned Shutdown", icon: "shield" },
    ],
  },
  {
    id: "mobile-track-crusher-tanzania",
    type: "international",
    category: "EXPORT MINING PROJECT",
    title: "350 TPH Mobile Track Crushing & Screening Plant",
    location: "Dodoma, Tanzania",
    image: "/images/export-projects-1.jpg",
    capacity: "350 TPH",
    client: "East Africa Mining & Minerals Corp",
    year: "2024",
    description:
      "Heavy duty track-mounted mobile crushing plant exported to East Africa for remote gold mining site aggregate preparation and road base processing.",
    highlights: [
      "Full track mobile mobility across rugged terrain",
      "Fuel-efficient diesel-electric hybrid drive engine",
      "Exported, erected and commissioned in 14 days",
    ],
    stats: [
      { value: "45%", label: "Higher Throughput", icon: "chart" },
      { value: "30%", label: "Fuel Savings", icon: "zap" },
      { value: "99.5%", label: "Operational Uptime", icon: "clock" },
    ],
  },
  {
    id: "heavy-duty-cone-crushing-oman",
    type: "international",
    category: "QUARRY INSTALLATION",
    title: "250 TPH Heavy Duty Cone Crushing Line",
    location: "Muscat, Oman",
    image: "/images/export-projects-2.jpg",
    capacity: "250 TPH",
    client: "Gulf Quarry & Aggregate LLC",
    year: "2023",
    description:
      "Custom engineered cone crushing and sizing facility deployed in harsh desert environment producing high grade basalt aggregate for seaport construction.",
    highlights: [
      "High temperature resistant cooling lubrication system",
      "Flakiness index controlled below 10%",
      "Remote monitoring system connected to headquarters",
    ],
    stats: [
      { value: "35%", label: "Lower Wear Rate", icon: "shield" },
      { value: "25%", label: "Flakiness Control", icon: "cog" },
      { value: "100%", label: "Automated Control", icon: "zap" },
    ],
  },
  {
    id: "jaw-cone-crushing-complex-nepal",
    type: "international",
    category: "AGGREGATE PLANT",
    title: "400 TPH High Capacity Jaw & Cone Crushing Complex",
    location: "Kathmandu, Nepal",
    image: "/images/export-projects-3.jpg",
    capacity: "400 TPH",
    client: "Himalayan Infra Solutions",
    year: "2024",
    description:
      "High capacity crushing plant processing tough river boulder feed into high specification aggregates for hydropower dam construction.",
    highlights: [
      "Heavy duty jaw crusher accepting boulders up to 900mm",
      "Triple deck vibrating screen for 4 accurate product sizes",
      "50% production capacity increase over previous plant",
    ],
    stats: [
      { value: "50%", label: "Production Boost", icon: "chart" },
      { value: "20%", label: "Cost Reduction", icon: "cog" },
      { value: "98.8%", label: "Productivity Rating", icon: "check" },
    ],
  },
  {
    id: "mobile-screening-unit-kenya",
    type: "international",
    category: "PORTABLE SCREENING",
    title: "200 TPH Mobile Screening & Washing Unit",
    location: "Nairobi, Kenya",
    image: "/images/export-projects-4.jpg",
    capacity: "200 TPH",
    client: "Rift Valley Construction",
    year: "2023",
    description:
      "Wheel mounted mobile screening and sand washing plant providing rapid deployment across multiple road construction sites.",
    highlights: [
      "Quick towable chassis with hydraulic legs setup in 2 hours",
      "Integrated water recycling sand washer system",
      "Delivered turnkey with on-site operator training",
    ],
    stats: [
      { value: "40%", label: "Faster Deployment", icon: "zap" },
      { value: "15%", label: "Water Recycling", icon: "cog" },
      { value: "100%", label: "Clean Aggregate", icon: "shield" },
    ],
  },
];
