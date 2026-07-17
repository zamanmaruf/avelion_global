export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductContent = {
  title: string;
  description: string;
  buyerNotes: string;
  useCases: string[];
  customization: string[];
  decoration: string[];
  materials: string[];
  moqNote: string;
  samplingNote: string;
  leadTimeNote: string;
  faq: ProductFaq[];
};

export const productContent: Record<string, ProductContent> = {
  "t-shirts": {
    title: "T-Shirts",
    description:
      "Private-label and promotional t-shirts developed for Canadian brands, retailers, and distributors who need consistent construction, clear sampling, and reliable reorder pathways. We coordinate Asian manufacturing with delivery into Canada, so fit, fabric hand, and presentation standards stay aligned from first sample through replenishment.",
    buyerNotes:
      "Canadian buyers typically need more than a competitive unit cost—they need labelling that supports retail or wholesale channels, packing that survives cross-border transit, and a reorder system that preserves shade and fit season after season. We coordinate carton marking, care labels, and brand identity components against your Canadian market requirements, and we plan delivery into Canada with shipping mode and inspection timing discussed before bulk release. Reorder programs benefit from retained approved references so subsequent drops start from documented standards rather than informal recollection.",
    useCases: [
      "Private-label basics collections for retail floors and e-commerce assortments",
      "Promotional campaign tees with brand decoration for events and launches",
      "Staff, corporate, and giveaway programs requiring consistent colour and fit",
      "Wholesale blanks for Canadian decoration partners and print shops",
      "Seasonal capsule drops where fabric hand and silhouette must stay on-brand",
    ],
    customization: [
      "Silhouette options such as crew, V-neck, oversized, and relaxed fits",
      "GSM and hand-feel targets aligned to the commercial brief",
      "Neck labels, heat transfers, hangtags, and packing presentation",
      "Size runs and colourways planned around Canadian reorder curves",
      "Gendered, unisex, and youth grading when the assortment requires it",
    ],
    decoration: [
      "Screen print and discharge print coordination with artwork review",
      "Embroidery placement for left-chest and multi-location logos",
      "Heat transfer and specialty print methods when fabric and design allow",
      "Colour matching and placement guides documented for reorders",
      "Decoration approvals tied to pre-production samples before bulk",
    ],
    materials: [
      "100% cotton jersey in GSM ranges suited to retail or promotional use",
      "Cotton–polyester blends for durability and colour retention",
      "Ringspun and combed constructions when a finer hand is required",
      "Organic or specialty yarns when the brief and mill access support them",
      "Enzyme, softener, or wash finishes specified against approved hand standards",
    ],
    moqNote:
      "Minimum order quantities depend on fabric, colour count, decoration method, and factory capability. We discuss realistic MOQs against your assortment before sampling commitments—never as a single fixed number for every program.",
    samplingNote:
      "Typical sampling includes proto or fit samples followed by a pre-production sample once fabric, trim, and decoration details are locked. Size-set reviews can be arranged when graded measurements are critical to Canadian retail or uniform fit expectations.",
    leadTimeNote:
      "Lead times vary with fabric availability, decoration complexity, order volume, and shipping mode into Canada. We share indicative timelines during quotation and refine them once materials and approvals are confirmed—not as fixed calendar guarantees.",
    faq: [
      {
        question: "Can you support both blank and decorated tees?",
        answer:
          "Yes. We coordinate blank private-label programs and decorated promotional styles. Decoration methods and artwork approvals should be defined early so costing, sampling, and Canada delivery planning stay aligned.",
      },
      {
        question: "How do you handle colour consistency across reorders?",
        answer:
          "We work from approved lab dips or bulk colour standards where available, and document shade references so reorders start from the same commercial agreement rather than informal memory.",
      },
      {
        question: "Do you help with Canadian labelling and packing?",
        answer:
          "We coordinate care labels, brand labels, and packing presentation against the requirements you define for the Canadian market. Exact label copy and regulatory positioning remain your responsibility; we align factory execution to your approved specifications.",
      },
      {
        question: "What shipping options are available into Canada?",
        answer:
          "Sea, air, and multimodal options can be discussed based on urgency, volume, and cost sensitivity. Mode selection is confirmed during commercial planning and may change if fabric or production timing shifts.",
      },
      {
        question: "Can we start with a small colour assortment and expand later?",
        answer:
          "Many programs begin with core colourways and expand once fit and fabric are approved. Expansion still depends on factory dyeing minimums and fabric availability, which we clarify before committing to additional shades.",
      },
    ],
  },

  "polo-shirts": {
    title: "Polo Shirts",
    description:
      "Corporate and promotional polo shirts suited to brand programs, uniform fleets, and wholesale assortments—built with attention to collar stability, piqué quality, and presentation standards. Asian manufacturing is coordinated for Canadian buyers who need repeatable construction and delivery into Canada that supports multi-site rollouts and seasonal replenishment.",
    buyerNotes:
      "Polo programs for Canadian corporate and retail channels often live or die on collar presentation after wash and transit. We emphasise documented construction details, labelling suited to your channel, and packing that protects collars during shipment into Canada. Reorders are planned against approved samples so tip colours, placket finishes, and embroidery placements remain consistent across sites and seasons—especially important for multi-location brand standards.",
    useCases: [
      "Corporate and retail staff uniform programs across Canadian locations",
      "Promotional merchandise and dealer apparel for brand partners",
      "Hospitality front-of-house presentation with logo standards",
      "Private-label casual assortments for retail and e-commerce",
      "Event and conference apparel requiring polished, logo-ready blanks",
    ],
    customization: [
      "Short- and long-sleeve constructions for seasonal Canadian climate needs",
      "Collar, placket, and cuff detailing matched to brand presentation",
      "Side vents, contrast tipping, and branding placement options",
      "Fit profiles for men’s, women’s, and unisex programs",
      "Button, tape, and trim selections documented for reorder continuity",
    ],
    decoration: [
      "Left-chest embroidery as a common corporate standard",
      "Multi-location embroidery for larger brand marks",
      "Woven or printed labels for private-label identity",
      "Print decoration when the fabric and design allow clean results",
      "Artwork size and stitch-density reviews before bulk embroidery",
    ],
    materials: [
      "Cotton piqué and cotton–polyester piqué for corporate durability",
      "Performance blends for moisture management when specified",
      "Yarn-dyed or piece-dyed options depending on colour strategy",
      "Interlinings and collar constructions selected for shape retention",
      "Soft-touch or brushed finishes when a premium hand is required",
    ],
    moqNote:
      "MOQs for polos often reflect fabric dyeing, collar components, and colourway count. We clarify factory minimums against your style and colour plan before locking a commercial path—without quoting a universal minimum that ignores program reality.",
    samplingNote:
      "Fit and collar presentation are usually validated early. Pre-production samples should confirm fabric hand, decoration, and finishing before bulk release, with wash behaviour reviewed when Canadian care expectations are part of the brief.",
    leadTimeNote:
      "Lead times depend on fabric booking, trim lead times, decoration complexity, and the chosen shipping mode into Canada. Indicative schedules are shared at quotation and updated after approvals—they are planning guides, not fixed promises.",
    faq: [
      {
        question: "How do you keep collars looking sharp after production and shipping?",
        answer:
          "Collar construction, interlining choice, and packing method are specified and checked at sampling. We also discuss carton packing for Canada-bound shipments so collars are not crushed in transit.",
      },
      {
        question: "Can polos be produced for both uniform and retail channels?",
        answer:
          "Yes. Uniform programs often prioritise durability and embroidery standards, while retail may emphasise hand-feel and hang presentation. We align factory selection and finishing to the channel you define.",
      },
      {
        question: "Do you support women’s and men’s fits in the same program?",
        answer:
          "We can coordinate gendered or unisex grading within the same style family when the factory and pattern development support it. Size curves should be agreed early for Canadian staffing or retail demand.",
      },
      {
        question: "What about tip colours and contrast details on reorders?",
        answer:
          "Contrast tipping and trim colours are recorded against approved samples. Reorders reference those standards so visual identity does not drift across deliveries into Canada.",
      },
      {
        question: "Are performance fabrics available for outdoor or active staff roles?",
        answer:
          "Performance blends can be sourced when the brief calls for moisture management or easier care. Availability, MOQ, and hand-feel still need factory confirmation before sampling.",
      },
    ],
  },

  hoodies: {
    title: "Hoodies",
    description:
      "Fleece hoodies for retail, promotional, and private-label collections—developed with attention to weight, hand-feel, and construction details that hold up through Canadian seasons and campaign cycles. We work through Asian manufacturing partners and coordinate delivery into Canada with sampling discipline that protects silhouette and fleece quality from first approval to reorder.",
    buyerNotes:
      "Canadian hoodie programs often balance promotional volume with retail-quality expectations: consistent fleece weight, clean rib recovery, and labelling that matches channel rules. We coordinate packing density, polybag presentation, and carton marking for Canada delivery, and we retain approved bulk references so reorders preserve shade, brush finish, and pocket construction. Buyers planning multi-drop campaigns benefit from early discussion of colourways and decoration methods that survive wash and winter wear.",
    useCases: [
      "Retail and e-commerce fleece collections under private label",
      "Promotional campaign hoodies for launches, tours, and merch drops",
      "Campus, team, and club apparel with durable decoration",
      "Corporate wellness or staff apparel programs",
      "Seasonal Canadian outer-layer basics for wholesale assortments",
    ],
    customization: [
      "Pullover and zip-through constructions with pocket variations",
      "Hood shape, drawcord, and eyelets matched to brand preference",
      "Rib, cuff, and hem specifications for recovery and fit",
      "GSM targets and brushed or unbrushed interior finishes",
      "Size grading for youth, unisex, and adult Canadian curves",
    ],
    decoration: [
      "Large-format screen print for back and chest graphics",
      "Embroidery for left-chest and hood branding",
      "Appliqué and specialty decoration when construction allows",
      "Heat transfer options for complex multi-colour artwork",
      "Placement boards and size-graded artwork for consistent results",
    ],
    materials: [
      "Cotton-rich and cotton–polyester fleece in agreed GSM ranges",
      "French terry constructions for lighter seasonal programs",
      "Brushed interiors for warmth-focused Canadian assortments",
      "Rib fabrics selected for recovery and colour match",
      "Specialty blends when stretch or performance is specified",
    ],
    moqNote:
      "Fleece MOQs commonly reflect dyeing lots, colour count, and whether fabrics are booked from mill stock or developed to order. We outline realistic minimums against your style plan without presenting a one-size-fits-all figure.",
    samplingNote:
      "Proto samples confirm silhouette and pocket construction; pre-production samples lock fabric weight, brush quality, decoration, and finishing. Wash testing can be arranged when care performance matters to Canadian end users.",
    leadTimeNote:
      "Lead times move with fleece booking, colour development, decoration complexity, and Canada shipping mode. We provide indicative windows at quote stage and refine them after material and sample approvals—not guaranteed ship dates.",
    faq: [
      {
        question: "Can you match a target GSM and hand-feel?",
        answer:
          "Yes—within mill and factory capabilities. We use approved fabric references or lab dips and bulk hand standards so production does not drift from the sampled feel.",
      },
      {
        question: "Do you offer both pullover and zip styles in one program?",
        answer:
          "Many buyers run both constructions. Each style may have its own pattern, zipper, and MOQ implications, which we clarify before sampling so commercial expectations stay realistic.",
      },
      {
        question: "How are reorders handled for campaign merch?",
        answer:
          "Approved samples, artwork files, and shade references are retained as the reorder baseline. Timing still depends on fabric availability and factory capacity when you return for a second drop.",
      },
      {
        question: "What packing works best for Canada-bound fleece?",
        answer:
          "We discuss fold methods, polybagging, and carton density to protect fleece loft and decoration during transit. Final packing standards are confirmed against your warehouse or retail receiving preferences.",
      },
      {
        question: "Can drawcords and metal tips be customised?",
        answer:
          "Drawcord colour, tip style, and safety considerations can be specified. Component lead times and compliance needs should be raised early, especially for youth assortments.",
      },
    ],
  },

  sweatshirts: {
    title: "Sweatshirts",
    description:
      "Crew and specialty sweatshirts for branded apparel programs that need clean silhouettes, reliable fleece quality, and decoration readiness. Asian manufacturing is managed with Canadian buyers in mind—sampling that locks construction details, and delivery into Canada planned around campaign calendars and wholesale receiving windows.",
    buyerNotes:
      "Sweatshirt buyers in Canada often need a quiet premium presentation: even fleece, neat shoulder seams, and labelling suited to retail or promotional channels. We coordinate care and brand labels, packing presentation, and carton identification for inbound Canada shipments. Reorder planning uses retained approved references so subsequent colourways and drops keep the same body measurements, rib match, and decoration placements that defined the first successful delivery.",
    useCases: [
      "Private-label crew collections for retail and DTC brands",
      "Promotional and event sweatshirts with front or sleeve graphics",
      "Uniform-adjacent staff apparel for cooler Canadian seasons",
      "Wholesale basics for decoration and print partners",
      "Capsule drops where silhouette consistency is brand-critical",
    ],
    customization: [
      "Classic crew, raglan, and oversized silhouette options",
      "Rib specifications at neck, cuff, and hem",
      "GSM and interior brush targets aligned to season",
      "Neck label, heat seal, and hangtag presentation",
      "Colourway planning for core and seasonal assortments",
    ],
    decoration: [
      "Chest and back screen print for brand graphics",
      "Left-chest embroidery for corporate identity",
      "Sleeve and yoke placements when the design requires them",
      "Discharge or specialty print methods for premium cotton programs",
      "Artwork review for coverage, registration, and wash durability",
    ],
    materials: [
      "Cotton and cotton–polyester fleece in program-specific GSM",
      "French terry for lighter transitional styles",
      "Matching rib for colour continuity across components",
      "Softener and enzyme finishes when a refined hand is required",
      "Stretch blends when mobility or fit recovery is specified",
    ],
    moqNote:
      "Minimums vary with fabric dyeing, colour count, and whether you are booking mill stock or developing exclusive shades. We discuss MOQs in context of your assortment—not as a published fixed threshold for every sweatshirt program.",
    samplingNote:
      "Fit samples establish body and sleeve proportions; pre-production samples confirm fabric, rib match, decoration, and finishing. Size sets are recommended when graded Canadian retail or wholesale curves matter.",
    leadTimeNote:
      "Schedules depend on fabric availability, colour development, decoration, order volume, and shipping into Canada. Indicative lead times are shared during quotation and refined after approvals—they remain estimates, not contractual calendar locks.",
    faq: [
      {
        question: "How do sweatshirts differ from hoodies in your programs?",
        answer:
          "Sweatshirts typically focus on crew or specialty necks without hood construction, which can simplify some trim paths while still requiring the same fleece quality discipline. We treat them as distinct styles for pattern, sampling, and costing.",
      },
      {
        question: "Can we run the same fleece body across multiple decorations?",
        answer:
          "Yes. Many programs approve a blank body first, then layer decoration methods for different campaigns. Decoration approvals still need to be locked before each bulk run.",
      },
      {
        question: "Do you support oversized and fashion-forward fits?",
        answer:
          "Oversized and relaxed fits can be developed when patterns and grading support them. Clear measurement charts and sample approvals are essential so Canadian retail expectations stay consistent.",
      },
      {
        question: "What happens if rib colour does not match the body?",
        answer:
          "Rib and body shade relationships are checked at sampling. If a mismatch appears, we resolve it through dyeing or component changes before bulk—not after goods ship to Canada.",
      },
      {
        question: "Can you coordinate hangtags and polybags for retail ready packing?",
        answer:
          "Retail-ready packing can be specified, including hangtags and folded presentation. Standards should be defined early so factory packing lines and Canada receiving expectations align.",
      },
    ],
  },

  jackets: {
    title: "Jackets",
    description:
      "Light outerwear and softshell styles for work, brand, and promotional programs that need weather-appropriate construction without overcomplicating the assortment. We coordinate Asian manufacturing for Canadian buyers, with attention to zipper quality, lining choices, and delivery into Canada that supports seasonal launches and multi-site uniform rollouts.",
    buyerNotes:
      "Jacket programs bound for Canada must account for climate range, corporate branding standards, and packing that protects coated or insulated constructions in transit. We help align labelling, care instructions, and carton marking to your channel, and we plan reorders from approved construction references—zipper type, seam finishes, and logo placements—so fleet replacements look like the original rollout rather than a near match.",
    useCases: [
      "Corporate and field-team light outerwear with logo standards",
      "Promotional event jackets for campaigns and sponsorships",
      "Softshell and soft outer layers for outdoor staff roles",
      "Retail private-label transitional jackets for Canadian seasons",
      "Dealer and partner apparel programs requiring durable finishes",
    ],
    customization: [
      "Softshell, soft outer, and light insulated constructions when specified",
      "Zipper, snap, and closure systems matched to use environment",
      "Hooded and collar variations with adjustable features",
      "Lining, pocket, and storm-flap detailing",
      "Fit profiles for uniform fleets and retail silhouettes",
    ],
    decoration: [
      "Left-chest and sleeve embroidery for corporate identity",
      "Heat transfer and print methods suited to shell fabrics",
      "Woven badges and patches when brand standards require them",
      "Reflective or contrast detail coordination when specified",
      "Placement guides for multi-location branding across sizes",
    ],
    materials: [
      "Woven shells with water-resistant finishes when required",
      "Softshell laminates and stretch woven constructions",
      "Mesh or taffeta linings selected for climate and mobility",
      "Insulation options discussed only when the brief requires them",
      "Trims and zippers chosen for durability and colour continuity",
    ],
    moqNote:
      "Outerwear MOQs often reflect shell fabric bookings, colourways, and trim complexity. We review factory minimums against your style and colour plan before sampling—without implying a single fixed MOQ applies to every jacket.",
    samplingNote:
      "Construction samples validate zipper function, seam quality, and fit; pre-production samples lock fabric, trim, decoration, and finishing. Weather-related claims are only made when testing and specifications support them.",
    leadTimeNote:
      "Lead times depend on shell and trim availability, construction complexity, decoration, and Canada shipping mode. We share planning estimates at quotation and update them after approvals—not fixed delivery guarantees.",
    faq: [
      {
        question: "Do you produce heavy winter parkas?",
        answer:
          "Our focus is light outerwear and softshell-oriented programs. Heavier insulated categories can be discussed when factory capability and the brief align, but expectations should be scoped carefully before sampling.",
      },
      {
        question: "Can jackets meet specific water-resistance targets?",
        answer:
          "Finishes and fabric constructions can be specified, and testing can be arranged when required. We do not claim performance ratings unless the approved materials and tests support them.",
      },
      {
        question: "How do you manage zipper quality and colour match?",
        answer:
          "Zipper brands or grade expectations, tape colour, and puller style are documented at sampling. Reorders reference the same trim standards to reduce variation across Canada deliveries.",
      },
      {
        question: "Are women’s and men’s jacket fits available?",
        answer:
          "Gendered or unisex patterns can be developed depending on factory pattern capability. Size curves for Canadian uniform or retail demand should be agreed before bulk grading.",
      },
      {
        question: "What packing protects coated shells in transit?",
        answer:
          "We discuss fold methods, protective packaging, and carton stacking to reduce crease and coating stress. Final packing is confirmed against your receiving and quality preferences.",
      },
    ],
  },

  "corporate-uniforms": {
    title: "Corporate Uniforms",
    description:
      "Structured uniform programs for office, retail, and service environments that need consistent branding, practical durability, and repeatable replenishment. Asian manufacturing is coordinated for Canadian buyers managing multi-site fleets, with delivery into Canada planned around rollout calendars and ongoing replacement cycles.",
    buyerNotes:
      "Corporate uniform buyers in Canada usually need a system, not a one-off order: approved style libraries, embroidery standards, labelling for institutional care, and carton marking that supports warehouse distribution to multiple sites. We coordinate those operational details alongside production, and we treat reorders as continuity work—same fits, same shade references, same logo placements—so new hires and seasonal top-ups match the garments already in service across your Canadian locations.",
    useCases: [
      "Multi-site retail and office staff apparel programs",
      "Brand-standard uniforms for customer-facing Canadian teams",
      "Dealer and franchise apparel with controlled logo placement",
      "Hybrid workwear-uniform assortments for field and desk roles",
      "Staged rollouts with replenishment planned by size curve",
    ],
    customization: [
      "Style libraries spanning shirts, polos, bottoms, and layering pieces",
      "Fit profiles and size curves for high-turnover staffing",
      "Fabric performance targets for wash frequency and presentation",
      "Role-based colour blocking and trim differentiation",
      "Label and packing standards suited to institutional distribution",
    ],
    decoration: [
      "Standardised left-chest and sleeve embroidery placements",
      "Multi-brand or location-specific logo variants when required",
      "Name badges and identification details coordinated to policy",
      "Print methods for soft shells or performance fabrics when suitable",
      "Artwork libraries retained for consistent reorders",
    ],
    materials: [
      "Easy-care woven and knit fabrics suited to frequent laundering",
      "Cotton–polyester blends for durability and colour retention",
      "Performance knits for mobility-focused roles",
      "Stretch wovens for trousers and layered uniform sets",
      "Trims selected for longevity under commercial wash cycles",
    ],
    moqNote:
      "Program MOQs depend on style count, colourways, decoration, and whether garments share fabrics across the library. We map minimums to your rollout plan rather than forcing a single blanket quantity across every style.",
    samplingNote:
      "Uniform sampling typically includes fit approval per style, decorated standards for branding, and pre-production confirmation before bulk. Size-set reviews are recommended when Canadian size curves drive staffing comfort and return rates.",
    leadTimeNote:
      "Lead times vary with assortment complexity, fabric booking, decoration, and staged delivery into Canada. Indicative timelines are shared during planning and refined after approvals—they are not fixed guarantees for every drop.",
    faq: [
      {
        question: "Can you support multi-site branding variations?",
        answer:
          "Yes. Location or division logo variants can be managed when artwork and decoration standards are documented. Clear approval ownership helps keep Canadian site rollouts consistent.",
      },
      {
        question: "How do replenishment orders stay consistent?",
        answer:
          "Approved samples, measurement charts, shade references, and embroidery files become the reorder baseline. We recommend retaining those references as the commercial source of truth.",
      },
      {
        question: "Do you help plan size curves for high turnover?",
        answer:
          "We can work from your historical size data or recommended curves during quotation and production planning. Accurate curves reduce excess inventory and shortage risk on Canada deliveries.",
      },
      {
        question: "Can uniforms mix woven shirts and knit polos in one program?",
        answer:
          "Many corporate programs combine categories. Each style still needs its own sampling and MOQ discussion, even when branding standards are shared across the library.",
      },
      {
        question: "What labelling is typical for corporate programs?",
        answer:
          "Care labels, size labels, and brand identity components are coordinated to your specifications. Canadian channel or institutional requirements should be provided early so factories execute against approved copy and placement.",
      },
    ],
  },

  "hospitality-uniforms": {
    title: "Hospitality Uniforms",
    description:
      "Hotel, restaurant, and service apparel developed with durability, presentation, and guest-facing polish in mind. We coordinate Asian manufacturing for Canadian hospitality operators and suppliers, with sampling that locks colour and fit standards and delivery into Canada that supports property openings, seasonal staffing, and ongoing replenishment.",
    buyerNotes:
      "Hospitality buyers in Canada need garments that survive frequent commercial laundry while still looking intentional on the floor. We coordinate labelling, packing, and carton identification for property or central warehouse receiving, and we plan reorders against approved style and decoration standards so new staff kits match existing teams. Colour continuity matters especially when multiple properties share a brand standard across provinces.",
    useCases: [
      "Front-of-house shirts, polos, and layered presentation pieces",
      "Back-of-house durable apparel for kitchen and service teams",
      "Hotel property uniform rollouts across Canadian locations",
      "Restaurant group branding with consistent embroidery standards",
      "Seasonal staffing top-ups timed to tourism and event calendars",
    ],
    customization: [
      "Role-differentiated styles for FOH and BOH teams",
      "Colour stories aligned to brand interiors and guest experience",
      "Fabric choices balanced for presentation and wash durability",
      "Fit options for mixed staffing profiles and shift comfort",
      "Trim and fastening details suited to quick change and service pace",
    ],
    decoration: [
      "Property and brand embroidery with controlled placements",
      "Contrast piping or tip details when brand identity requires them",
      "Name identification options coordinated to operational policy",
      "Print decoration on suitable knits for casual concepts",
      "Artwork libraries for multi-property consistency",
    ],
    materials: [
      "Easy-care wovens and piqués for front-of-house presentation",
      "Durable blends for high-wash back-of-house environments",
      "Stain-release or easy-care finishes when specified and available",
      "Stretch fabrics for mobility during long service shifts",
      "Trims selected to withstand commercial laundry cycles",
    ],
    moqNote:
      "Hospitality MOQs depend on style library breadth, colourways, and decoration variants by property. We clarify factory minimums against your opening or replenishment plan without stating a universal fixed quantity.",
    samplingNote:
      "Samples should confirm fit, colour under lighting expectations, decoration, and wash behaviour where laundry standards are known. Pre-production approval is recommended before multi-property bulk release.",
    leadTimeNote:
      "Timelines move with assortment complexity, fabric availability, decoration, and shipping into Canada for openings or seasonal peaks. We provide indicative schedules and refine them after approvals—not fixed opening-day guarantees unless commercially agreed later.",
    faq: [
      {
        question: "Can one program cover multiple hotel properties?",
        answer:
          "Yes. Shared style libraries with property-specific logo variants are common. Decoration standards and shade references should be centralised so Canadian properties stay visually aligned.",
      },
      {
        question: "How do you address commercial laundry durability?",
        answer:
          "Fabric and trim choices are discussed against known wash conditions. Where testing is required, we coordinate it before bulk rather than discovering failures after delivery.",
      },
      {
        question: "Do you support kitchen and service back-of-house styles?",
        answer:
          "Durable BOH apparel can be included when the brief and factory capability align. Expectations around heat, stain, and abrasion should be stated clearly at the outset.",
      },
      {
        question: "What if we need a rush top-up before peak season?",
        answer:
          "Expedited paths depend on fabric stock, factory capacity, and air freight into Canada. We discuss realistic options without promising timelines that materials cannot support.",
      },
      {
        question: "Can guest-facing colours be matched to interior design standards?",
        answer:
          "Lab dips and approved shade standards can be used to align uniforms with brand colour direction. Lighting conditions and fabric type still influence how colour reads on the floor.",
      },
    ],
  },

  "healthcare-apparel": {
    title: "Healthcare Apparel",
    description:
      "Scrubs and related healthcare garments coordinated to institutional requirements for comfort, mobility, and practical care routines. Asian manufacturing support is organised for Canadian healthcare buyers and suppliers, with clear sampling, documented specifications, and delivery into Canada planned around departmental rollouts and replenishment cycles.",
    buyerNotes:
      "Healthcare apparel into Canada often involves institutional purchasing expectations: clear size labelling, durable construction for frequent washes, and packing that supports distribution to clinics, hospitals, or central stores. We coordinate factory execution to your approved specifications and help retain sample references for reorders so shade, pocket layout, and fit remain consistent. Regulatory and clinical policy decisions remain with the buyer; our role is manufacturing coordination against the brief you define.",
    useCases: [
      "Scrub sets for clinics, hospitals, and care facilities",
      "Departmental colour programs for role identification",
      "Private-label healthcare apparel for Canadian distributors",
      "Staff layering pieces coordinated to scrub programs",
      "Replenishment cycles for high-turnover clinical teams",
    ],
    customization: [
      "Top and pant silhouettes with pocket configurations by role",
      "Colourways for departmental or brand identification",
      "Fabric hand and stretch targets for long-shift comfort",
      "Drawcord, elastic, and waistband options for pant programs",
      "Labelling and packing suited to institutional receiving",
    ],
    decoration: [
      "Facility or brand embroidery with placement discipline",
      "Tone-on-tone or contrast stitching where specified",
      "Heat seals and labels for private-label distributor programs",
      "Minimal decoration approaches when clinical environments prefer them",
      "Artwork control for multi-site healthcare networks",
    ],
    materials: [
      "Soft stretch blends designed for mobility and recovery",
      "Durable knits suited to frequent institutional laundering",
      "Colour-retentive constructions for departmental shade programs",
      "Lightweight options for warm clinical environments",
      "Trims selected for comfort against skin and wash longevity",
    ],
    moqNote:
      "MOQs depend on fabric, colour count, and whether tops and bottoms are produced as sets or separates. We outline realistic minimums for your institutional or distributor plan without publishing a fixed universal quantity.",
    samplingNote:
      "Fit and pocket utility are validated early; pre-production samples confirm fabric, colour, decoration, and finishing. Wash and care expectations should be stated so sampling reflects real institutional use where possible.",
    leadTimeNote:
      "Lead times vary with fabric booking, colourways, assortment breadth, and Canada shipping mode. Indicative timelines are provided at quotation and refined after approvals—they are planning estimates, not clinical rollout guarantees.",
    faq: [
      {
        question: "Are your scrubs medically certified?",
        answer:
          "We coordinate apparel manufacturing to your specifications. Any clinical, barrier, or regulatory claims must be defined and validated by the buyer against applicable Canadian requirements—we do not imply certification by default.",
      },
      {
        question: "Can departmental colours be kept consistent across reorders?",
        answer:
          "Yes, when shade standards are approved and retained. Reorders reference those standards so departmental identification does not drift across deliveries.",
      },
      {
        question: "Do you offer women’s and men’s scrub fits?",
        answer:
          "Gendered and unisex fits can be developed when patterns support them. Clear measurement charts help Canadian institutions reduce fit-related exchanges.",
      },
      {
        question: "How are sets versus separates handled commercially?",
        answer:
          "Tops and bottoms can be costed and produced as sets or separates. MOQs, size curves, and packing should be planned accordingly before bulk.",
      },
      {
        question: "Can private-label distributors run exclusive colour stories?",
        answer:
          "Exclusive shades are possible when dyeing minimums and mill access allow. We clarify commercial implications before sampling exclusive colour programs.",
      },
    ],
  },

  "school-institutional-uniforms": {
    title: "School and Institutional Uniforms",
    description:
      "Uniform programs for schools and institutions that need dependable construction, clear branding standards, and reorder systems families and administrators can rely on year after year. We coordinate Asian manufacturing for Canadian institutional buyers, with delivery into Canada planned around academic calendars and inventory cycles.",
    buyerNotes:
      "Canadian school and institutional programs benefit from durable fabrics, size depth for growing students or rotating staff, and labelling that supports retail school shops or central distribution. We coordinate packing and carton marking for Canada inbound logistics, and we treat annual reorders as continuity projects—preserving tartan or colour standards, embroidery placements, and graded measurements so each academic cycle matches the previous approved reference rather than reinventing the assortment.",
    useCases: [
      "Primary and secondary school uniform assortments",
      "Private school and academy brand-standard apparel",
      "Institutional staff uniforms for campuses and facilities",
      "School shop and distributor private-label programs",
      "Annual replenishment timed to Canadian academic calendars",
    ],
    customization: [
      "Style libraries spanning shirts, knits, bottoms, and outer layers",
      "Colour and trim standards aligned to school identity",
      "Youth-to-adult grading for student and staff cohorts",
      "Durable construction details for daily wear and frequent washing",
      "Packing formats for school shops, distributors, or central stores",
    ],
    decoration: [
      "Crest and logo embroidery with placement discipline",
      "Woven badges and appliqué where tradition requires them",
      "Contrast tipping and placket details for identity cues",
      "Print methods on knits for casual day or house programs",
      "Artwork archives retained for multi-year reorder consistency",
    ],
    materials: [
      "Hard-wearing cotton and cotton–polyester school fabrics",
      "Easy-care wovens for shirts and blouses",
      "Knit piqués and jerseys for daywear layers",
      "Bottom-weight fabrics for trousers, skirts, and related styles",
      "Trims selected for longevity through academic-year wear",
    ],
    moqNote:
      "Institutional MOQs reflect style count, colourways, and whether youth and adult ranges share fabrics. We discuss minimums against enrolment and stocking plans—not as a single fixed number for every school program.",
    samplingNote:
      "Sampling should lock fit across key sizes, colour standards, and crest decoration before bulk. Pre-production approval is especially important when multiple grades or campuses share the same visual identity.",
    leadTimeNote:
      "Lead times depend on assortment breadth, fabric booking, decoration, and shipping into Canada ahead of term start. We share indicative schedules during planning and refine them after approvals—academic deadlines should be discussed early, without treating estimates as guarantees.",
    faq: [
      {
        question: "Can you support both student and staff ranges?",
        answer:
          "Yes. Shared branding with different fits and fabrics is common. Each range still needs clear specifications so costing and sampling stay accurate.",
      },
      {
        question: "How do crest standards stay consistent year to year?",
        answer:
          "Approved embroidery files, size references, and placement guides are retained as the reorder baseline. We recommend formal approval ownership so standards do not drift between academic cycles.",
      },
      {
        question: "Do you help with youth size grading?",
        answer:
          "Youth grading can be developed with size-set sampling when required. Providing existing measurement charts or fit references accelerates alignment for Canadian school populations.",
      },
      {
        question: "What if a school needs a mid-year top-up?",
        answer:
          "Mid-year replenishment depends on fabric availability and factory capacity. Air freight into Canada can be discussed when timing is tight, with cost and feasibility reviewed case by case.",
      },
      {
        question: "Can distributors run exclusive school programs?",
        answer:
          "Exclusive colourways and badge programs can be coordinated when commercial minimums allow. We clarify exclusivity implications before development begins.",
      },
    ],
  },

  workwear: {
    title: "Workwear",
    description:
      "Durable workwear for industrial, construction, and field teams that need practical function, reinforcement where it matters, and branding that survives hard use. Asian manufacturing is coordinated for Canadian industrial and distributor buyers, with delivery into Canada planned around project mobilisations and fleet replenishment.",
    buyerNotes:
      "Canadian workwear programs often prioritise abrasion resistance, pocket utility, and consistent sizing for mixed crews. We coordinate labelling, care information, and packing for warehouse or site receiving, and we retain construction references for reorders so reinforcements, reflective placements, and logo standards remain aligned. Performance or high-visibility claims are only pursued when materials, testing, and your compliance requirements support them—never as marketing shorthand.",
    useCases: [
      "Construction and industrial crew apparel for Canadian sites",
      "Field-service uniforms with durable pocketing and branding",
      "Distributor private-label workwear assortments",
      "Layering pieces for variable outdoor Canadian conditions",
      "Project-based mobilisations with staged delivery needs",
    ],
    customization: [
      "Reinforced stress points and practical pocket configurations",
      "Fit profiles for mobility across kneeling, climbing, and driving tasks",
      "Fabric weight and finish targets matched to job environment",
      "Colourways for crew identification or brand standards",
      "Trim and hardware selections for durability under site use",
    ],
    decoration: [
      "Industrial embroidery for company and crew identification",
      "Heat-applied branding on suitable shell fabrics",
      "Reflective detail coordination when the brief requires it",
      "Multi-location logo standards for fleet visibility",
      "Artwork durability reviews against abrasion and wash expectations",
    ],
    materials: [
      "Hard-wearing cotton and cotton–polyester work fabrics",
      "Ripstop and reinforced woven constructions when specified",
      "Stretch work blends for mobility-focused roles",
      "Softshell and light outer layers for field conditions",
      "Hardware and trims selected for longevity on site",
    ],
    moqNote:
      "Workwear MOQs depend on fabric, reinforcement complexity, colourways, and decoration. We clarify factory minimums against your fleet or distributor plan without quoting a fixed MOQ that ignores category realities.",
    samplingNote:
      "Function samples should validate pocketing, mobility, and construction strength; pre-production samples lock fabric, trims, decoration, and finishing. Any safety-related attributes require explicit specification and appropriate validation.",
    leadTimeNote:
      "Lead times vary with fabric booking, construction complexity, decoration, and Canada shipping mode. Indicative schedules are shared at quotation and updated after approvals—project mobilisation dates should be flagged early as planning inputs, not assumed guarantees.",
    faq: [
      {
        question: "Can you supply CSA-compliant high-visibility garments?",
        answer:
          "High-visibility and safety-related programs require clear specifications and appropriate materials. We coordinate manufacturing to defined requirements; compliance determination remains with the buyer against applicable Canadian standards.",
      },
      {
        question: "How do you approach reinforced construction?",
        answer:
          "Reinforcement zones, bartacks, and fabric choices are specified at development and checked at sampling. Reorders reference the same construction details to protect durability expectations.",
      },
      {
        question: "Do you support both retail workwear and industrial fleets?",
        answer:
          "Yes. Presentation and packaging may differ by channel, but durability and fit discipline remain central. We align factory finishing to the channel you define.",
      },
      {
        question: "Can reflective placements be standardised across a fleet?",
        answer:
          "Placement maps can be documented and reused for reorders. Material grade and configuration must match the performance expectations in your brief.",
      },
      {
        question: "What shipping planning helps project mobilisations?",
        answer:
          "We discuss staging, carton marking, and mode selection for Canada delivery against your mobilisation calendar. Feasibility depends on production status and logistics capacity at the time of shipment.",
      },
    ],
  },

  "promotional-apparel": {
    title: "Promotional Apparel",
    description:
      "Decorated apparel for campaigns, events, and branded merchandise programs that need artwork discipline, reliable blanks, and delivery timing aligned to launch dates. We coordinate Asian manufacturing for Canadian promotional buyers and agencies, with sampling that locks decoration standards and delivery into Canada planned around campaign calendars.",
    buyerNotes:
      "Promotional programs into Canada succeed when decoration quality, colourways, and packing presentation are treated as part of the brand experience—not afterthoughts. We coordinate labelling where required, carton identification for event or warehouse receiving, and reorder pathways for evergreen merch SKUs. Campaign drops benefit from early artwork freezes and clear size curves so Canada-bound shipments arrive ready for distribution rather than last-minute correction.",
    useCases: [
      "Product launch and brand campaign merchandise",
      "Conference, festival, and event apparel drops",
      "Dealer and partner promotional kits",
      "Evergreen branded basics for ongoing giveaways",
      "Agency-managed multi-SKU promotional assortments",
    ],
    customization: [
      "Blank body selection across tees, fleece, and related categories",
      "Colourways matched to campaign creative direction",
      "Size curves planned for event or giveaway demographics",
      "Packing formats for individual kits or bulk distribution",
      "Hangtags and presentation details when merch is retail-adjacent",
    ],
    decoration: [
      "Screen print for bold campaign graphics",
      "Embroidery for premium corporate promotional pieces",
      "Heat transfer and specialty methods for complex artwork",
      "Multi-location decoration maps for high-impact merch",
      "Pre-production decorated samples before bulk release",
    ],
    materials: [
      "Campaign-appropriate cotton and blended jersey blanks",
      "Fleece bodies for seasonal Canadian promotional drops",
      "Performance knits when active or outdoor events require them",
      "Colour-retentive constructions for vibrant print programs",
      "Trims and labels aligned to brand presentation standards",
    ],
    moqNote:
      "Promotional MOQs depend on garment type, colour count, and decoration method. We discuss realistic minimums per style and print setup without implying a single fixed promotional MOQ for every campaign.",
    samplingNote:
      "Blank fit approval and decorated pre-production samples are both important. Artwork colour, placement, and technique should be locked before bulk so campaign deliveries into Canada match creative intent.",
    leadTimeNote:
      "Lead times hinge on blank production or stock, decoration complexity, and shipping mode into Canada. Indicative timelines are shared during quoting and refined after artwork and sample approvals—they are planning guides, not guaranteed launch dates.",
    faq: [
      {
        question: "Can you manage tight campaign deadlines?",
        answer:
          "We plan backward from your launch date and flag risks early. Expedited production or air freight into Canada may be options, but only when materials and factory capacity support them.",
      },
      {
        question: "Do you need final artwork before quoting?",
        answer:
          "Directional artwork helps, but decoration method, colour count, and placement drive costing. Final print-ready files are required before bulk decoration approval.",
      },
      {
        question: "Can one campaign include multiple garment types?",
        answer:
          "Yes. Multi-SKU campaigns are common. Each body style may carry different MOQs, lead times, and decoration constraints, which we map clearly during planning.",
      },
      {
        question: "How are evergreen merch reorders handled?",
        answer:
          "Approved blanks, artwork, and shade references become the reorder package. Timing still depends on fabric and factory availability when you return for the next drop.",
      },
      {
        question: "What packing works for event kit distribution?",
        answer:
          "Individual polybags, size stickers, and kit-ready cartons can be specified. Standards should be defined early so Canada receiving and on-site distribution run smoothly.",
      },
    ],
  },

  knitwear: {
    title: "Knitwear",
    description:
      "Knit garments coordinated through qualified Asian knit manufacturing partners for brands and programs that need gauge control, clean finishing, and seasonal reliability. Canadian buyers benefit from structured sampling, clear yarn and stitch specifications, and delivery into Canada aligned to collection calendars and wholesale windows.",
    buyerNotes:
      "Knitwear into Canada requires careful attention to gauge, yarn quality, and finishing so garments arrive with the intended drape and recovery. We coordinate labelling, folding, and packing that protect knit structure during transit, and we retain approved references for reorders—yarn lot discipline, stitch density, and measurement standards—so subsequent deliveries continue the same commercial story. Buyers should expect development time for gauge and yarn decisions before bulk commitments.",
    useCases: [
      "Private-label sweaters and knit layers for retail collections",
      "Corporate and promotional knit pieces with refined branding",
      "Seasonal Canadian assortment drops requiring gauge consistency",
      "Uniform-adjacent knit layers for polished staff presentation",
      "Capsule knit programs where finishing quality is brand-critical",
    ],
    customization: [
      "Gauge, stitch, and silhouette development against the brief",
      "Neckline, cuff, and hem finishing options",
      "Yarn selection for hand-feel, recovery, and seasonality",
      "Fit and grading for retail or uniform channels",
      "Label and packing presentation for Canadian market delivery",
    ],
    decoration: [
      "Tone-on-tone or contrast embroidery suited to knit grounds",
      "Intarsia and patterned knit identity when technically appropriate",
      "Woven labels and heat seals for private-label branding",
      "Subtle print methods only when fabric stability allows",
      "Decoration trials at sampling to confirm stitch behaviour",
    ],
    materials: [
      "Cotton and cotton-blend yarns for everyday knit programs",
      "Wool and wool-blend options when season and brief require them",
      "Acrylic and mixed yarns for specific hand or care targets",
      "Specialty yarns discussed when mill access supports the brief",
      "Rib and trim yarns selected for colour and recovery match",
    ],
    moqNote:
      "Knitwear MOQs often reflect yarn dyeing lots, gauge setup, and colourways. We clarify realistic minimums with manufacturing partners before sampling—without presenting a fixed knit MOQ that ignores yarn and machine constraints.",
    samplingNote:
      "Yarn and gauge development usually precede full garment approval. Proto and pre-production samples should confirm measurements, finishing, and any decoration before bulk knitting proceeds.",
    leadTimeNote:
      "Lead times depend on yarn booking, colour development, knitting capacity, finishing, and Canada shipping mode. Indicative schedules are shared at quotation and refined after approvals—they remain estimates, not fixed in-store dates.",
    faq: [
      {
        question: "Can you match a specific gauge from an existing sweater?",
        answer:
          "We can work from physical references and measurements to approach a target gauge and hand. Exact matches depend on yarn and machine availability, which we validate during development.",
      },
      {
        question: "How do you control shrinkage and recovery?",
        answer:
          "Finishing methods and yarn choices are specified and checked at sampling. Care instructions should reflect the approved construction so Canadian end users maintain intended fit.",
      },
      {
        question: "Are wool programs available for colder seasons?",
        answer:
          "Wool and wool-blend programs can be discussed when yarn supply and factory capability align. Composition, care, and hand-feel expectations should be defined early.",
      },
      {
        question: "What packing protects knits during Canada transit?",
        answer:
          "Fold methods, tissue, and carton density can be specified to reduce crushing and distortion. Final packing standards are confirmed against your quality preferences.",
      },
      {
        question: "Can knitwear be reordered in the same yarn shade next season?",
        answer:
          "Reorder continuity improves when yarn shade standards and approved references are retained. Yarn lot availability still needs confirmation for each new production run.",
      },
    ],
  },

  "woven-shirts": {
    title: "Woven Shirts",
    description:
      "Woven shirts for corporate, retail, and private-label assortments that need precise collar and placket execution, dependable fabric hand, and clean finishing. Asian manufacturing is coordinated for Canadian buyers, with sampling that locks construction details and delivery into Canada planned for wholesale windows and uniform rollouts.",
    buyerNotes:
      "Woven shirt programs for Canada often live on collar presentation, button quality, and pressing standards after long transit. We coordinate labelling for retail or corporate channels, packing that protects collars and plackets, and reorder references so fabric shade, interlining behaviour, and fit remain consistent. Buyers managing both retail and uniform channels benefit from early clarity on presentation versus durability priorities.",
    useCases: [
      "Corporate dress and smart-casual shirt programs",
      "Private-label retail woven assortments for Canadian brands",
      "Uniform shirts for office, retail, and service environments",
      "Promotional executive gifts and partner apparel",
      "Seasonal woven capsules with controlled colour stories",
    ],
    customization: [
      "Collar, cuff, and placket constructions matched to brand standards",
      "Fit profiles from tailored to relaxed casual",
      "Pocket, yoke, and back detail options",
      "Interlining and fusing choices for collar stability",
      "Packing and presentation standards for retail or institutional use",
    ],
    decoration: [
      "Left-chest embroidery for corporate identity",
      "Tone-on-tone monogramming where appropriate",
      "Woven labels and heat seals for private-label branding",
      "Print decoration on suitable lighter constructions when specified",
      "Placement discipline across size runs for uniform fleets",
    ],
    materials: [
      "Cotton poplins and oxfords for corporate and retail programs",
      "Cotton–polyester easy-care blends for high-wash environments",
      "Stretch wovens for mobility-focused fits",
      "Yarn-dyed checks and patterns when the assortment requires them",
      "Interlinings selected for climate and wash expectations",
    ],
    moqNote:
      "Woven shirt MOQs depend on fabric dyeing or yarn-dye minimums, colour or pattern count, and construction complexity. We discuss factory realities against your assortment without stating a universal fixed minimum.",
    samplingNote:
      "Fit and collar samples are critical early; pre-production samples confirm fabric, interlining, buttons, decoration, and pressing quality. Size sets help when Canadian graded fits drive return rates.",
    leadTimeNote:
      "Lead times move with fabric booking, yarn-dye cycles when used, trim lead times, and shipping into Canada. Indicative timelines are provided at quote stage and refined after approvals—not fixed delivery promises.",
    faq: [
      {
        question: "Can you support both dress and casual woven styles?",
        answer:
          "Yes. Construction details, fabrics, and finishing differ by style intent. Clear briefs help us match factories and sampling paths to each assortment tier.",
      },
      {
        question: "How do you keep collars consistent after washing?",
        answer:
          "Interlining selection, fusing process, and wash expectations are validated at sampling. Care label guidance should reflect the approved construction for Canadian end use.",
      },
      {
        question: "Are yarn-dyed patterns available?",
        answer:
          "Yarn-dyed checks and stripes can be developed when mill minimums allow. Pattern matching and MOQ implications are discussed before sampling commitments.",
      },
      {
        question: "Do you offer women’s woven shirt fits?",
        answer:
          "Women’s and men’s patterns can be developed when grading support exists. Measurement charts and fit samples should be approved before bulk for Canadian retail or uniform programs.",
      },
      {
        question: "What packing protects shirts in transit to Canada?",
        answer:
          "Collar supports, fold methods, and carton standards can be specified to reduce pressing damage. Final packing is aligned to your warehouse or retail receiving preferences.",
      },
    ],
  },

  "trousers-bottoms": {
    title: "Trousers and Bottoms",
    description:
      "Trousers, chinos, and related bottoms for uniform and retail programs that need dependable fit, durable fabrics, and clean finishing at waistbands and pockets. We coordinate Asian manufacturing for Canadian buyers, with graded sampling discipline and delivery into Canada planned around assortment launches and replenishment cycles.",
    buyerNotes:
      "Bottoms programs into Canada succeed when size grading, waistband comfort, and fabric recovery are locked before bulk. We coordinate labelling, care instructions, and packing that protect pressed creases and hardware during transit. Reorders use retained measurement charts and shade standards so subsequent deliveries match the fit Canadian customers or staff already trust—especially important for uniform fleets and wholesale reorder programs.",
    useCases: [
      "Corporate and uniform trouser programs across Canadian sites",
      "Retail chino and casual bottom assortments",
      "Hospitality and service bottoms with durable construction",
      "Work-adjacent bottoms requiring reinforced practicality",
      "Private-label seasonal bottom stories for brand collections",
    ],
    customization: [
      "Fit blocks for slim, regular, and relaxed Canadian preferences",
      "Waistband, pocket, and closure systems matched to use case",
      "Rise, leg shape, and hem finishing options",
      "Fabric weight and stretch targets for mobility and recovery",
      "Size curve planning for retail sell-through or uniform fleets",
    ],
    decoration: [
      "Subtle embroidery or heat seals for brand identity",
      "Woven labels and care components for private-label programs",
      "Contrast pocketing or bartack details when design requires them",
      "Hardware colour coordination for button and zip continuity",
      "Minimal branding approaches for clean uniform aesthetics",
    ],
    materials: [
      "Cotton and cotton–polyester chino and trouser fabrics",
      "Stretch wovens for comfort-focused fits",
      "Harder-wearing blends for uniform and service environments",
      "Performance finishes when easy-care behaviour is specified",
      "Pocketing and waistband components selected for durability",
    ],
    moqNote:
      "Bottoms MOQs depend on fabric dyeing, colourways, and whether multiple fits share the same cloth. We clarify minimums against your fit and colour plan rather than publishing a single fixed quantity for every trouser program.",
    samplingNote:
      "Fit samples across key sizes are essential; pre-production samples confirm fabric, stretch recovery, hardware, and finishing. Graded size sets are strongly recommended before bulk for Canadian retail or uniform curves.",
    leadTimeNote:
      "Lead times vary with fabric booking, wash or finish development, hardware lead times, and Canada shipping mode. Indicative schedules are shared during quotation and refined after approvals—they are estimates, not fixed in-store dates.",
    faq: [
      {
        question: "How important is size-set sampling for bottoms?",
        answer:
          "Very. Waist, hip, and rise behaviour change across the curve. Size-set approval reduces fit risk before goods ship into Canada.",
      },
      {
        question: "Can one fabric support multiple fits?",
        answer:
          "Often yes, which can improve MOQ efficiency. Each fit still needs pattern and sample approval so commercial and quality expectations stay clear.",
      },
      {
        question: "Do you offer stretch chinos for retail programs?",
        answer:
          "Stretch woven programs can be developed when fabric supply supports the brief. Recovery and wash behaviour should be validated at sampling.",
      },
      {
        question: "How are shade and hand kept consistent on reorders?",
        answer:
          "Approved fabric standards and bulk references guide reorders. Dye lot discipline and finishing recipes are part of continuity planning.",
      },
      {
        question: "What packing helps maintain pressed presentation?",
        answer:
          "Fold methods, clips, and carton density can be specified to protect creases and waistbands. Final packing aligns to your retail or warehouse standards.",
      },
    ],
  },

  "private-label-basics": {
    title: "Private-Label Basics",
    description:
      "Core basics developed under your brand with structured sampling, production oversight, and reorder continuity—covering tees, fleece, and foundational styles that carry a collection. Asian manufacturing is coordinated for Canadian brands and retailers, with delivery into Canada planned around seasonal drops and evergreen replenishment.",
    buyerNotes:
      "Private-label basics for Canadian channels need more than competitive costing: consistent fits, documented shade standards, labelling that matches brand identity, and packing ready for retail or DTC fulfilment. We help retain approved references across seasons so reorders preserve the commercial DNA of your core SKUs. Delivery into Canada is planned with carton marking and shipping mode discussed against your warehouse calendar, so evergreen programs remain operationally predictable.",
    useCases: [
      "Evergreen core SKUs for retail and e-commerce brands",
      "Seasonal basic drops that anchor wider collections",
      "Wholesale private-label programs for Canadian distributors",
      "Brand fundamentals spanning tees, fleece, and related categories",
      "Replenishment systems built on approved fit and shade libraries",
    ],
    customization: [
      "Silhouette and fit libraries owned under your brand standards",
      "Fabric hand and GSM targets for each core body",
      "Neck labels, hangtags, and packaging identity systems",
      "Colour architecture for core and seasonal extensions",
      "Size curves tuned to Canadian sell-through data where available",
    ],
    decoration: [
      "Brand-mark embroidery or print on core bodies when required",
      "Clean blank programs for later local decoration partners",
      "Heat seals and woven labels as primary identity carriers",
      "Campaign overlays coordinated without redesigning core fits",
      "Artwork and placement archives for multi-season consistency",
    ],
    materials: [
      "Foundational cotton and blended jerseys for tee programs",
      "Fleece constructions for seasonal Canadian core layers",
      "Easy-care blends when wash performance is a brand promise",
      "Organic or preferred-fibre options when mill access supports them",
      "Trim systems standardised across the basics library",
    ],
    moqNote:
      "Private-label MOQs depend on how many bodies, colours, and factories sit in the library. We map minimums style by style and look for fabric-sharing opportunities—never a single fixed MOQ for an entire basics program.",
    samplingNote:
      "Basics programs usually approve fit blocks first, then colour and trim systems, then pre-production samples per style. Retaining sealed references is essential for multi-season Canadian reorder quality.",
    leadTimeNote:
      "Lead times vary by category within the library, fabric booking, colour count, and Canada shipping mode. Indicative timelines are shared per style group during planning and refined after approvals—not blanket guarantees across every SKU.",
    faq: [
      {
        question: "Can you build a multi-category basics library?",
        answer:
          "Yes. Tees, fleece, and related foundations can sit in one program with shared branding standards. Each category still needs its own technical and commercial path.",
      },
      {
        question: "How do you protect fit continuity across seasons?",
        answer:
          "Approved measurement charts and sealed samples become the reorder baseline. Pattern ownership and change control should be explicit before bulk revisions.",
      },
      {
        question: "Do you support DTC packaging standards?",
        answer:
          "Polybag presentation, tissue, stickers, and carton marking can be specified for Canadian fulfilment centres. Standards should be documented early for factory packing lines.",
      },
      {
        question: "What if we want to add colours without changing fits?",
        answer:
          "Colour extensions on approved bodies are common. Dyeing minimums and lab dip approvals still apply before bulk colour additions.",
      },
      {
        question: "Can basics be produced blank for later decoration in Canada?",
        answer:
          "Yes. Many brands import blanks and decorate domestically. Construction and fabric choices should still anticipate decoration methods planned for the Canadian market.",
      },
    ],
  },

  "custom-fabric-textile": {
    title: "Custom Fabric and Textile Programs",
    description:
      "Fabric and textile sourcing support for apparel and related product programs that need yarn, construction, and finish decisions made before garment bulk. We coordinate Asian mill and finishing partners for Canadian buyers, with sampling that validates hand and performance targets and delivery into Canada planned for fabric-only or cut-and-sew pathways.",
    buyerNotes:
      "Canadian buyers using custom textiles need clarity on lab dips, hand standards, testing expectations, and how fabric will move into garment production or warehouse inventory. We coordinate documentation, packing, and shipment planning for fabric deliveries into Canada, and we retain approved fabric references so garment reorders and later textile top-ups start from the same commercial standard. Composition claims and preferred-fibre stories are only pursued when mill documentation supports them.",
    useCases: [
      "Exclusive fabric development for private-label apparel collections",
      "Mill bookings that feed multi-style Canadian cut-and-sew programs",
      "Textile replenishment for brands managing their own cutting",
      "Finish development for hand-feel, easy-care, or performance targets",
      "Colour and quality standards that anchor multi-factory garment programs",
    ],
    customization: [
      "Yarn, construction, and GSM development against the brief",
      "Piece-dye, yarn-dye, and print approaches when appropriate",
      "Finish recipes for hand, performance, or aesthetic targets",
      "Width, yield, and packing specifications for Canada delivery",
      "Documentation packages for garment factory handoff",
    ],
    decoration: [
      "Print development on greige or prepared fabrics when specified",
      "Colour standard creation for downstream garment decoration alignment",
      "Yarn-dye pattern development for woven identity programs",
      "Finish aesthetics that influence how logos sit on final garments",
      "Strike-offs and approvals before bulk print or pattern commitments",
    ],
    materials: [
      "Knit jersey, fleece, and piqué developments for apparel basics",
      "Woven shirtings and bottom-weight constructions",
      "Performance and stretch fabrics when the brief requires them",
      "Preferred-fibre options when mill access and documentation allow",
      "Interlinings and related textile components coordinated to garment needs",
    ],
    moqNote:
      "Textile MOQs are driven by mill dyeing, weaving or knitting setups, and finish routes. We clarify realistic minimums per construction and colour before development spend—without stating a fixed fabric MOQ that ignores mill constraints.",
    samplingNote:
      "Fabric programs typically progress through handloom or knit-down references, lab dips, and bulk-quality fabric samples or strike-offs. Garment proto work should wait until fabric standards are commercially agreed wherever possible.",
    leadTimeNote:
      "Lead times depend on yarn booking, loom or knit capacity, dyeing and finishing queues, and shipping mode into Canada. Indicative schedules are shared during quotation and refined after approvals—they are planning estimates, not guaranteed mill ex-factory dates.",
    faq: [
      {
        question: "Can you develop fabric without also producing garments?",
        answer:
          "Yes. Fabric-only programs are supported when mill partnerships and logistics into Canada make sense. Handoff documentation for your garment factories can be included in the plan.",
      },
      {
        question: "How do lab dips work in your process?",
        answer:
          "Lab dips are submitted against your colour standards and approved before bulk dyeing. Approved dips become the shade reference for production and later reorders.",
      },
      {
        question: "Do you arrange fabric testing?",
        answer:
          "Testing can be coordinated against the parameters you define—such as colourfastness or dimensional stability. Required tests should be specified early so sampling and costing reflect them.",
      },
      {
        question: "Can one fabric feed multiple garment styles?",
        answer:
          "That is often the most efficient path. Shared fabrics can improve MOQ economics across a Canadian assortment when constructions and finishes suit each style.",
      },
      {
        question: "What packing is used for fabric rolls shipped to Canada?",
        answer:
          "Roll packing, palletisation, and moisture protection can be specified with the mill. Standards should match your warehouse or garment factory receiving capabilities.",
      },
    ],
  },
};
