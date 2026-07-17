export const siteConfig = {
  name: "Avelion Global",
  legalName: "Avelion Global Inc.",
  tagline: "Reliable Apparel Sourcing. Managed for Canadian Buyers.",
  description:
    "A Canada-based sourcing and production-management partner that helps Canadian buyers manufacture apparel across Asia—led by Bangladesh as our primary manufacturing market—with greater transparency, quality control, communication, and coordinated delivery into Canada.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://avelionglobal.com",
  locale: "en-CA",

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@avelionglobal.ca",
    rfqEmail: process.env.NEXT_PUBLIC_RFQ_EMAIL || "sales@avelionglobal.ca",
    phone: process.env.NEXT_PUBLIC_PHONE || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
    bookingUrl:
      process.env.NEXT_PUBLIC_BOOKING_URL ||
      "https://calendly.com/avelionglobal-sales/30min",
    responseTime: "We typically respond within one to two business days.",
    hours: "Monday–Friday, 9:00 a.m.–5:00 p.m. Eastern Time",
  },

  address: {
    line1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "1800 Argyle St",
    line2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 || "",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Halifax",
    province: process.env.NEXT_PUBLIC_ADDRESS_PROVINCE || "NS",
    postalCode: process.env.NEXT_PUBLIC_ADDRESS_POSTAL || "B3J 3N8",
    country: "Canada",
    display:
      process.env.NEXT_PUBLIC_ADDRESS_DISPLAY ||
      "1800 Argyle St, Halifax, NS B3J 3N8",
  },

  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    x: process.env.NEXT_PUBLIC_X_URL || "",
  },

  /** Primary desktop + mobile header links (logo covers Home). */
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] as const,

  /** Secondary links for mobile drawer + footer Explore. */
  navigationMore: [
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
    { label: "Solutions", href: "/solutions" },
    { label: "Quality & Compliance", href: "/quality-compliance" },
    { label: "Sourcing in Asia", href: "/sourcing-in-asia" },
    { label: "Logistics", href: "/logistics" },
  ] as const,

  primaryCta: {
    label: "Book a Consultation",
    href:
      process.env.NEXT_PUBLIC_BOOKING_URL ||
      "https://calendly.com/avelionglobal-sales/30min",
  },
  secondaryCta: { label: "Request a Quote", href: "/request-a-quote" },

  services: [
    {
      slug: "supplier-factory-sourcing",
      title: "Supplier and Factory Sourcing",
      shortTitle: "Supplier Sourcing",
      description:
        "Identify and evaluate Bangladesh apparel manufacturers matched to your product, volume, and quality requirements.",
      href: "/services/supplier-factory-sourcing",
    },
    {
      slug: "product-development-sampling",
      title: "Product Development and Sampling",
      shortTitle: "Product Development",
      description:
        "Coordinate tech-pack review, materials, prototypes, fit samples, and pre-production approvals.",
      href: "/services/product-development-sampling",
    },
    {
      slug: "production-management",
      title: "Production Management",
      shortTitle: "Production Management",
      description:
        "Plan production, track milestones, escalate issues, and maintain clear Canada-to-Bangladesh communication.",
      href: "/services/production-management",
    },
    {
      slug: "quality-assurance",
      title: "Quality Assurance",
      shortTitle: "Quality Assurance",
      description:
        "Structure sample approvals, inline checks, measurement reviews, and final inspection coordination.",
      href: "/services/quality-assurance",
    },
    {
      slug: "compliance-coordination",
      title: "Compliance Coordination",
      shortTitle: "Compliance",
      description:
        "Collect and organize factory, testing, origin, and buyer-specific documentation for Bangladesh manufacturing programs.",
      href: "/services/compliance-coordination",
    },
    {
      slug: "logistics-delivery",
      title: "Logistics and Delivery Coordination",
      shortTitle: "Logistics",
      description:
        "Coordinate freight-forwarder handoff, shipment documents, customs-broker liaison, and delivery support.",
      href: "/services/logistics-delivery",
    },
  ] as const,

  products: [
    {
      slug: "t-shirts",
      title: "T-Shirts",
      category: "basics",
      description: "Private-label and promotional tees in cotton and blended constructions.",
    },
    {
      slug: "polo-shirts",
      title: "Polo Shirts",
      category: "basics",
      description: "Corporate and promotional polos suited to brand and uniform programs.",
    },
    {
      slug: "hoodies",
      title: "Hoodies",
      category: "fleece",
      description: "Fleece hoodies for retail, promotional, and private-label collections.",
    },
    {
      slug: "sweatshirts",
      title: "Sweatshirts",
      category: "fleece",
      description: "Crew and specialty sweatshirts for branded apparel programs.",
    },
    {
      slug: "jackets",
      title: "Jackets",
      category: "outerwear",
      description: "Light outerwear and softshell styles for work and brand programs.",
    },
    {
      slug: "corporate-uniforms",
      title: "Corporate Uniforms",
      category: "uniforms",
      description: "Structured uniform programs for office, retail, and service environments.",
    },
    {
      slug: "hospitality-uniforms",
      title: "Hospitality Uniforms",
      category: "uniforms",
      description: "Hotel, restaurant, and service apparel with durability and presentation in mind.",
    },
    {
      slug: "healthcare-apparel",
      title: "Healthcare Apparel",
      category: "uniforms",
      description: "Scrubs and related healthcare garments coordinated to institutional requirements.",
    },
    {
      slug: "school-institutional-uniforms",
      title: "School and Institutional Uniforms",
      category: "uniforms",
      description: "Uniform programs for schools and institutions with repeatable reorder support.",
    },
    {
      slug: "workwear",
      title: "Workwear",
      category: "industrial",
      description: "Durable workwear for industrial, construction, and field teams.",
    },
    {
      slug: "promotional-apparel",
      title: "Promotional Apparel",
      category: "promotional",
      description: "Decorated apparel for campaigns, events, and branded merchandise programs.",
    },
    {
      slug: "knitwear",
      title: "Knitwear",
      category: "knit",
      description: "Knit garments coordinated through qualified Asian knit manufacturing partners.",
    },
    {
      slug: "woven-shirts",
      title: "Woven Shirts",
      category: "woven",
      description: "Woven shirts for corporate, retail, and private-label assortments.",
    },
    {
      slug: "trousers-bottoms",
      title: "Trousers and Bottoms",
      category: "woven",
      description: "Trousers, chinos, and related bottoms for uniform and retail programs.",
    },
    {
      slug: "private-label-basics",
      title: "Private-Label Basics",
      category: "private-label",
      description: "Core basics developed under your brand with structured sampling and production.",
    },
    {
      slug: "custom-fabric-textile",
      title: "Custom Fabric and Textile Programs",
      category: "textiles",
      description: "Fabric and textile sourcing support for apparel and related product programs.",
    },
  ] as const,

  industries: [
    {
      slug: "apparel-brands",
      title: "Apparel Brands and Private Label",
      shortTitle: "Apparel Brands",
      description:
        "Support for brands building private-label collections with qualified Asian manufacturers.",
      href: "/industries/apparel-brands",
      solutionHref: "/solutions/apparel-brands",
    },
    {
      slug: "retail-wholesale",
      title: "Retailers and Wholesalers",
      shortTitle: "Retail & Wholesale",
      description:
        "Structured sourcing for retail and wholesale programs that need consistency and reorder reliability.",
      href: "/industries/retail-wholesale",
      solutionHref: "/solutions/retail-wholesale",
    },
    {
      slug: "uniform-suppliers",
      title: "Uniform Suppliers",
      shortTitle: "Uniform Suppliers",
      description:
        "Production support for corporate, hospitality, healthcare, and institutional uniform programs.",
      href: "/industries/uniform-suppliers",
      solutionHref: "/solutions/uniform-suppliers",
    },
    {
      slug: "promotional-products",
      title: "Promotional-Product Distributors",
      shortTitle: "Promotional Products",
      description:
        "Apparel sourcing for promotional campaigns with decoration, packaging, and delivery coordination.",
      href: "/industries/promotional-products",
      solutionHref: "/solutions/promotional-products",
    },
    {
      slug: "hospitality",
      title: "Hospitality Organizations",
      shortTitle: "Hospitality",
      description:
        "Uniform and branded apparel programs for hotels, restaurants, and hospitality groups.",
      href: "/industries/hospitality",
      solutionHref: "/solutions/hospitality",
    },
    {
      slug: "healthcare",
      title: "Healthcare Organizations",
      shortTitle: "Healthcare",
      description:
        "Healthcare apparel sourcing with attention to specification, consistency, and documentation.",
      href: "/industries/healthcare",
      solutionHref: "/solutions/healthcare",
    },
    {
      slug: "education",
      title: "Educational Institutions",
      shortTitle: "Education",
      description:
        "School and institutional uniform programs with clear sampling and reorder pathways.",
      href: "/industries/education",
      solutionHref: "/solutions/education",
    },
    {
      slug: "industrial-construction",
      title: "Industrial and Construction",
      shortTitle: "Industrial",
      description:
        "Workwear and industrial apparel programs for construction and field operations.",
      href: "/industries/industrial-construction",
      solutionHref: "/solutions/industrial-construction",
    },
  ] as const,

  processSteps: [
    { step: 1, title: "Requirements", description: "Clarify product, quantity, quality, and delivery expectations." },
    { step: 2, title: "Supplier Matching", description: "Identify factories aligned to capability, MOQ, and capacity." },
    { step: 3, title: "Costing", description: "Coordinate quotations with transparent commercial assumptions." },
    { step: 4, title: "Sampling", description: "Manage prototypes, fit, size-set, and pre-production samples." },
    { step: 5, title: "Production", description: "Plan critical path and track production milestones." },
    { step: 6, title: "Quality Control", description: "Coordinate inline and final inspection checkpoints." },
    { step: 7, title: "Shipment Coordination", description: "Prepare documents and align freight handoff." },
    { step: 8, title: "Delivery Support", description: "Support customs-broker liaison and final delivery coordination." },
  ] as const,

  seo: {
    titleTemplate: "%s | Avelion Global",
    defaultTitle: "Apparel Sourcing Company Canada | Avelion Global",
    defaultDescription:
      "Canada-based apparel sourcing and production management for Asian manufacturing, led by Bangladesh. Private-label, uniforms, promotional apparel, and coordinated delivery into Canada.",
    keywords: [
      "apparel sourcing company Canada",
      "Asian apparel manufacturing Canada",
      "Bangladesh apparel manufacturing",
      "private-label apparel manufacturing",
      "corporate uniform sourcing Asia",
      "promotional apparel sourcing",
      "apparel production management Canada",
      "clothing manufacturer sourcing partner",
      "Bangladesh garment sourcing Canada",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
