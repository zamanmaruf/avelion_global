export type IndustryContent = {
  title: string;
  description: string;
  overview: string[];
  challenges: string[];
  support: string[];
  products: string[];
  qualityConsiderations: string[];
  workflow: string[];
  rfqChecklist: string[];
  faq: { question: string; answer: string }[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

export const industryContent: Record<string, IndustryContent> = {
  "apparel-brands": {
    title: "Apparel Brands and Private Label",
    description:
      "Canada-based sourcing and production management for apparel brands developing private-label collections with qualified Asian manufacturers—structured sampling, clearer commercial assumptions, and coordinated delivery into Canada.",
    overview: [
      "Canadian apparel brands often need more than a factory introduction. Private-label programs succeed when brand standards are translated into factory-ready specifications, sampling decisions are recorded, and production remains visible across time zones. Avelion provides a Canada-based point of contact while coordinating manufacturing with qualified Asian partners.",
      "Whether you are launching a core basics line or expanding a seasonal assortment, we help structure supplier matching, quotations, sample approvals, quality checkpoints, and shipment coordination so delivery into Canada is planned rather than improvised. The goal is a repeatable pathway from brief to approved production—not a one-off transaction.",
    ],
    challenges: [
      "Brand standards are often lost when fit, fabric, and finishing expectations are communicated informally across email threads and time zones.",
      "Finding manufacturers that genuinely match category capability, quality band, and commercial volume can take longer than the buying calendar allows.",
      "Sampling rounds expand without clear revision ownership, so decisions are remade instead of locked as references.",
      "Seasonal reorders drift in shade, measurement, or construction when approved samples are not treated as the lasting commercial standard.",
      "Cost targets collide with under-specified materials and trims, creating quotations that look competitive until assumptions are examined.",
    ],
    support: [
      "We match Asian manufacturers to your product category, quality expectations, and realistic volume bands before sampling commitments begin.",
      "We review tech packs and coordinate sampling so fit, fabric, and decoration decisions are documented before bulk production.",
      "We surface quotation assumptions around materials, trims, decoration, and responsibilities so commercial comparisons stay meaningful.",
      "We track production milestones and quality checkpoints with Canada-based communication while manufacturing proceeds in Asia.",
      "We support shipment documentation and delivery coordination into Canada once cargo is ready for freight handoff.",
    ],
    products: [
      "private-label-basics",
      "t-shirts",
      "hoodies",
      "sweatshirts",
      "knitwear",
      "woven-shirts",
      "trousers-bottoms",
    ],
    qualityConsiderations: [
      "Approved fit and pre-production samples should serve as the commercial and quality reference for bulk.",
      "Measurement and construction consistency must hold across size runs and colourways.",
      "Shade and fabric hand continuity protect reorder programs and multi-season collections.",
      "Label, packaging, and presentation standards should be defined early for retail or direct-to-consumer readiness.",
      "Decoration placement and wash durability need explicit approval when branding is part of the assortment.",
    ],
    workflow: [
      "Clarify assortment scope, quality level, quantity bands, and delivery windows into Canada.",
      "Match factories and review commercial quotations with transparent assumptions.",
      "Develop samples, capture revisions, and lock pre-production approvals.",
      "Manage production milestones, material readiness, and quality checkpoints.",
      "Coordinate packing, shipment documents, and delivery support to the agreed Canadian destination.",
    ],
    rfqChecklist: [
      "Assortment list with styles, colourways, and target quantity bands",
      "Tech packs, measurement charts, or reference garments where available",
      "Fabric, GSM, and trim preferences or approved alternatives",
      "Decoration artwork and placement notes if branding is required",
      "Target quality level and retail or wholesale presentation standards",
      "Preferred delivery window and destination in Canada",
      "Labelling, packaging, and carton marking requirements",
      "Any buyer, retailer, or compliance document expectations",
    ],
    faq: [
      {
        question: "Do you manufacture in Canada or overseas?",
        answer:
          "Avelion is Canada-based and coordinates apparel manufacturing with qualified Asian manufacturers. We manage communication, sampling, production visibility, and delivery coordination into Canada for Canadian buyers.",
      },
      {
        question: "Can you support a first private-label collection?",
        answer:
          "Yes. We help structure the brief, match suitable factories, and guide sampling so early programs start with clearer specifications rather than informal assumptions. Complexity and timeline still depend on how complete your inputs are.",
      },
      {
        question: "How do you handle reorders?",
        answer:
          "Approved samples, shade references, and construction notes become the baseline for replenishment. We aim to keep reorders tied to those records so fit and finishing do not drift season to season.",
      },
      {
        question: "What information do you need before quoting?",
        answer:
          "At minimum: styles, approximate quantities, materials or references, quality expectations, decoration needs, and a delivery window into Canada. Incomplete briefs can still start a conversation, but clearer inputs produce more useful quotations.",
      },
      {
        question: "Are lead times guaranteed?",
        answer:
          "No. We share indicative timelines based on materials, capacity, approvals, and shipping mode, then refine them as decisions lock. Fixed guarantees are not realistic for overseas apparel programs with variable inputs.",
      },
    ],
    cta: {
      title: "Build your private-label program with clearer oversight",
      description:
        "Share your assortment brief and we will outline a practical sourcing path from sampling through production coordination and delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  "retail-wholesale": {
    title: "Retailers and Wholesalers",
    description:
      "Structured Asian apparel sourcing for Canadian retailers and wholesalers who need assortment consistency, reorder reliability, and coordinated delivery into Canada across core and seasonal programs.",
    overview: [
      "Retail and wholesale apparel programs depend on intake windows, shared construction standards, and replenishment that looks like the original approved quality. When manufacturing sits in Asia, Canadian buyers need clearer costing assumptions, sample discipline, and production visibility—not vague progress updates.",
      "Avelion supports multi-style assortments with Canada-based communication and Asian manufacturing coordination. We help align factories to category and volume, lock approvals for core styles, track production against meaningful milestones, and prepare shipment documentation for broker and warehouse handoff into Canada.",
    ],
    challenges: [
      "Multi-style assortments expand without shared construction or quality standards, so factories interpret each style differently.",
      "Margin pressure encourages under-specified materials and trims that later raise landed-cost surprises.",
      "Replenishment styles lose shade or fit continuity when approved references are not maintained across purchase orders.",
      "Factory calendars and retail intake windows collide when sampling or material decisions arrive late.",
      "Documentation and status reporting become fragmented when programs span many styles and repeated orders.",
    ],
    support: [
      "We match manufacturers with attention to assortment breadth, category capability, and practical volume bands.",
      "We coordinate costing with explicit assumptions so commercial comparisons reflect materials, decoration, and responsibilities.",
      "We structure sampling and approvals for core styles that will carry replenishment risk.",
      "We track production milestones for intake-critical programs and escalate issues early enough to act.",
      "We support packing readiness and shipment documentation for delivery into Canada.",
    ],
    products: [
      "t-shirts",
      "polo-shirts",
      "hoodies",
      "sweatshirts",
      "woven-shirts",
      "trousers-bottoms",
      "private-label-basics",
      "knitwear",
    ],
    qualityConsiderations: [
      "Construction consistency across colourways and size runs protects sell-through and returns performance.",
      "Packaging and labelling should match retail floor or wholesale distribution requirements from the first bulk order.",
      "Shade continuity is essential for replenishment styles that sit beside prior inventory.",
      "Inspection planning should reflect program risk, not a one-size checklist applied after the fact.",
      "Carton marks and packing lists need to support efficient receiving at Canadian warehouses.",
    ],
    workflow: [
      "Define assortment priorities, quality bands, and intake timing into Canada.",
      "Source and quote through matched Asian manufacturers with transparent assumptions.",
      "Approve samples for core and seasonal styles before bulk release.",
      "Produce against agreed checkpoints with status tied to milestones.",
      "Ship with documentation ready for broker and warehouse handoff.",
    ],
    rfqChecklist: [
      "Assortment priorities (core vs seasonal) with style and colour counts",
      "Target quantity bands by style or program",
      "Quality level and construction expectations",
      "Packaging, labelling, and hangtag requirements",
      "Intake window and Canadian destination or warehouse details",
      "Any retailer compliance or documentation checklists",
      "Reference samples or prior purchase-order standards for reorders",
      "Decoration or branding requirements if applicable",
    ],
    faq: [
      {
        question: "Can you support both core replenishment and seasonal drops?",
        answer:
          "Yes. We typically prioritize approved references for core styles while managing seasonal styles on a clearer sampling and production calendar. The exact path depends on assortment complexity and timing.",
      },
      {
        question: "How do you keep replenishment consistent?",
        answer:
          "We treat approved samples, shade standards, and construction notes as lasting references. Reorders should start from those records rather than informal recollection of a prior shipment.",
      },
      {
        question: "Do you work with wholesalers as well as retailers?",
        answer:
          "Yes. Programs for wholesale distribution often need different packing and labelling assumptions, which we clarify early so quotations and production instructions stay aligned.",
      },
      {
        question: "What if our intake date is already fixed?",
        answer:
          "Share the date and current decision status as early as possible. We will outline what is realistic given materials, sampling, capacity, and shipping mode—without promising timelines that the inputs cannot support.",
      },
      {
        question: "Who handles customs brokerage?",
        answer:
          "Buyers typically appoint their own broker or forwarder. Avelion coordinates document readiness and information handoff so your appointed partners can clear and deliver into Canada efficiently.",
      },
    ],
    cta: {
      title: "Plan your next retail or wholesale intake",
      description:
        "Tell us about your assortment and timing windows and we will help structure a workable Asian manufacturing path with delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  "uniform-suppliers": {
    title: "Uniform Suppliers",
    description:
      "Production support for Canadian uniform suppliers managing corporate, hospitality, healthcare, and institutional programs through Asian manufacturing—with decoration standards, durability focus, and reorder continuity.",
    overview: [
      "Uniform suppliers serve clients who expect brand presentation, size availability, and consistent decoration across sites and staffing cycles. Manufacturing those programs in Asia works when role maps, branding standards, and approved samples become lasting references—not one-time events.",
      "Avelion helps Canadian uniform businesses coordinate factory matching, decorated sampling, production management, and delivery into Canada. We focus on practical program structure: multi-site consistency, wash durability, staged deliveries, and reorder pathways that protect approved standards over time.",
    ],
    challenges: [
      "Decoration placement and colour standards vary across sites when programs lack a single approved reference library.",
      "High-turnover staffing creates size-curve pressure that factories struggle to plan without clear demand patterns.",
      "Durability requirements for frequent laundering compete with presentation expectations if fabric choices are under-specified.",
      "Staggered multi-site deliveries fragment quality when each shipment is treated as a separate one-off order.",
      "Multi-year programs lose continuity when approved samples are not retained as the commercial baseline for reorders.",
    ],
    support: [
      "We match Asian factories with relevant experience in uniform and work apparel categories.",
      "We coordinate decoration placement, branding standards, and artwork approvals before bulk production.",
      "We structure sampling for fit, fabric performance, and logo presentation across core roles.",
      "We manage production visibility for multi-site rollouts and staged delivery plans into Canada.",
      "We support reorder pathways using approved style libraries rather than restarting specifications each cycle.",
    ],
    products: [
      "corporate-uniforms",
      "hospitality-uniforms",
      "healthcare-apparel",
      "school-institutional-uniforms",
      "polo-shirts",
      "woven-shirts",
      "workwear",
      "trousers-bottoms",
    ],
    qualityConsiderations: [
      "Wash durability and colour retention matter more for uniforms than for many fashion categories.",
      "Embroidery or print placement must remain consistent across sizes, sites, and replenishment batches.",
      "Fit consistency protects staff adoption and reduces costly exchanges after delivery.",
      "Institutional or buyer-specific documentation may be required and should be planned into the program early.",
      "Pocket function, fabric recovery, and seam strength should match the role environment, not only the visual brief.",
    ],
    workflow: [
      "Map client roles, styles, branding requirements, and volume expectations.",
      "Qualify manufacturers and confirm commercial terms with clear assumptions.",
      "Approve fit and decorated samples as lasting program references.",
      "Produce and inspect against agreed uniform standards.",
      "Support staged delivery into Canada and reorder planning from the approved library.",
    ],
    rfqChecklist: [
      "Role-based style list with estimated quantities by size curve",
      "Brand guidelines, logo files, and placement diagrams",
      "Fabric durability and laundry expectations",
      "Colour standards for garments and decoration",
      "Site or client rollout schedule and Canadian delivery destinations",
      "Packaging preferences for warehouse or site distribution",
      "Any institutional compliance or labelling requirements",
      "Prior approved samples or style codes if replenishing an existing program",
    ],
    faq: [
      {
        question: "Can you support multi-site uniform rollouts?",
        answer:
          "Yes. We plan production and packing with staged delivery in mind, provided destinations, quantities, and timing are clear. Consistency depends on locking decoration and construction standards first.",
      },
      {
        question: "How do you keep logos consistent across reorders?",
        answer:
          "Decorated sample approvals and placement diagrams become the reference. Subsequent orders should cite those approvals rather than recreating artwork instructions from memory.",
      },
      {
        question: "Do you only work with end clients, or with uniform distributors as well?",
        answer:
          "We work with uniform suppliers and distributors who manage client programs. You remain the commercial relationship owner with your clients; we coordinate manufacturing and delivery support into Canada.",
      },
      {
        question: "What about healthcare or hospitality-specific fabrics?",
        answer:
          "We align material and construction choices to the brief—including frequent laundry and presentation needs—then validate through sampling before bulk commitment.",
      },
      {
        question: "Can MOQs work for mixed size runs?",
        answer:
          "Often yes, but MOQs depend on fabric, colour count, decoration method, and factory capability. We discuss realistic minimums against your size curve before sampling locks the commercial path.",
      },
    ],
    cta: {
      title: "Strengthen your uniform production pipeline",
      description:
        "Share your program scope and we will outline supplier options, sampling steps, and production coordination for delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  "promotional-products": {
    title: "Promotional-Product Distributors",
    description:
      "Apparel sourcing for Canadian promotional-product distributors running decorated campaigns through Asian manufacturing—with artwork coordination, packaging clarity, and delivery planning into Canada.",
    overview: [
      "Promotional apparel lives or dies by the campaign date. Distributors need garment and decoration decisions made early enough that sampling, production, packing, and freight into Canada remain workable—not compressed into a last-minute scramble.",
      "Avelion supports promotional-product partners with Canada-based oversight of Asian manufacturing: style recommendations matched to campaign goals, decoration method coordination, decorated sample or strike-off checkpoints when needed, production tracking against real windows, and packaging preparation for events or warehouse kits.",
    ],
    challenges: [
      "Campaign and event dates leave little room for ambiguous manufacturing updates or late artwork changes.",
      "Artwork approvals often arrive after commercial assumptions are already locked, forcing costly path changes.",
      "Decoration methods are chosen for price alone, then fail to match garment type, wash expectations, or visual standards.",
      "Kit packaging and distribution requirements are under-specified until cargo is nearly ready to ship.",
      "Quality issues on decorated goods surface too late because checkpoints were informal or skipped.",
    ],
    support: [
      "We help select garment styles suited to campaign goals, decoration methods, and commercial constraints.",
      "We coordinate decoration methods, artwork review, and placement standards with manufacturing partners.",
      "We arrange decorated samples or strike-offs when the program risk warrants visual and wash confirmation.",
      "We track production against campaign-critical milestones with Canada-based communication.",
      "We support packaging instructions and shipment coordination for delivery into Canada.",
    ],
    products: [
      "promotional-apparel",
      "t-shirts",
      "polo-shirts",
      "hoodies",
      "sweatshirts",
      "jackets",
    ],
    qualityConsiderations: [
      "Decoration quality, registration, and wash durability should be approved before bulk release.",
      "Garment consistency across campaign colourways protects brand presentation at the event.",
      "Pack presentation for events, kitting, or warehouse distribution needs explicit instructions.",
      "Final checks before campaign-critical shipments reduce last-minute receiving surprises in Canada.",
      "Size-run balance should reflect the audience profile, not a generic factory default curve.",
    ],
    workflow: [
      "Capture campaign brief, artwork status, quantity bands, and delivery date into Canada.",
      "Confirm garment and decoration path with costing assumptions made explicit.",
      "Approve decorated samples or strike-offs where required.",
      "Produce and inspect to campaign standards with milestone visibility.",
      "Coordinate packing and freight handoff for Canadian delivery.",
    ],
    rfqChecklist: [
      "Campaign or event date and Canadian delivery destination",
      "Garment styles, colours, and size breakdown",
      "Artwork files (vector preferred) and colour specifications",
      "Decoration method preference or openness to recommendations",
      "Packaging or kitting instructions",
      "Quantity bands and any phased delivery needs",
      "Brand presentation standards or client brand guidelines",
      "Prior campaign references if repeating a successful style",
    ],
    faq: [
      {
        question: "How early should we start a promotional apparel program?",
        answer:
          "Earlier is safer—especially when artwork is incomplete or decoration methods need sampling. Share the hard delivery date first so we can reverse-plan materials, approvals, production, and shipping into Canada.",
      },
      {
        question: "Can you recommend decoration methods?",
        answer:
          "Yes. We help align method to garment, visual goal, wash expectations, and commercial constraints. Final suitability still depends on artwork and approved samples.",
      },
      {
        question: "What if artwork changes mid-process?",
        answer:
          "Late artwork changes can affect costing, sampling, and timelines. We will outline the impact clearly so you can decide whether to revise, hold, or proceed with the approved version.",
      },
      {
        question: "Do you support blank goods for local decoration in Canada?",
        answer:
          "Yes, when that path fits the brief. Some programs manufacture blanks in Asia and decorate domestically; others decorate at source. We clarify responsibilities before quoting.",
      },
      {
        question: "Can you pack by kit or by event site?",
        answer:
          "Often, if instructions and labels are provided early. Complex kitting should be defined before production packing begins, not after garments are finished.",
      },
    ],
    cta: {
      title: "Support your next promotional apparel campaign",
      description:
        "Send the brief, artwork status, and delivery window and we will help structure a manufacturing plan that protects the date for delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  hospitality: {
    title: "Hospitality Organizations",
    description:
      "Uniform and branded apparel programs for Canadian hotels, restaurants, and hospitality groups—durable presentation, staff-ready fits, and Asian manufacturing coordinated for delivery into Canada.",
    overview: [
      "Hospitality apparel must look intentional on the floor and survive commercial laundry behind the scenes. Property groups also need branding consistency across locations without turning every reorder into a new design project.",
      "Avelion coordinates hospitality uniform programs from Canada while manufacturing with qualified Asian partners. We help plan role-based assortments, validate fabric and fit through sampling, lock decoration standards, and support production and replenishment for delivery into Canada.",
    ],
    challenges: [
      "Brand presentation drifts across properties when colour and logo standards are not locked to approved samples.",
      "Fabrics that look right on day one may fail after frequent commercial laundry cycles.",
      "Diverse staff teams need practical size runs and fits that support long shifts, not only catalog aesthetics.",
      "Property-specific branding multiplies complexity when placement and colour rules are informal.",
      "Seasonal staffing changes create reorder pressure without a reliable style library or replenishment plan.",
    ],
    support: [
      "We help map role-based assortments to brand standards and operating environments.",
      "We guide fabric and construction choices suited to hospitality laundry and presentation needs.",
      "We coordinate decoration standards for property or group branding before bulk production.",
      "We manage sampling and approvals so rollout begins from locked references.",
      "We support production tracking, staged delivery into Canada, and practical reorder cycles.",
    ],
    products: [
      "hospitality-uniforms",
      "polo-shirts",
      "woven-shirts",
      "trousers-bottoms",
      "corporate-uniforms",
      "promotional-apparel",
    ],
    qualityConsiderations: [
      "Appearance retention after repeated washing is a core hospitality requirement.",
      "Comfort and mobility for long shifts should be validated in fit sampling, not assumed from photos.",
      "Logo presentation must stay consistent across properties and replenishment batches.",
      "Practical pocket and service features should match front- or back-of-house roles.",
      "Colour standards for garments and decoration need durable references for multi-property programs.",
    ],
    workflow: [
      "Define roles, brand standards, volume bands, and Canadian delivery destinations.",
      "Match factories and review quotations with laundry and presentation assumptions explicit.",
      "Approve fit, fabric, and decoration samples before property rollout.",
      "Produce against property or group standards with quality checkpoints.",
      "Support delivery into Canada and replenishment planning for staffing cycles.",
    ],
    rfqChecklist: [
      "Property or group brand guidelines and logo files",
      "Role-based style list with estimated headcounts or quantities",
      "Laundry method and durability expectations",
      "Colour and decoration placement standards by property or brand",
      "Size-curve assumptions or historical size data",
      "Rollout timing and Canadian delivery addresses",
      "Packaging preferences for receiving or staff distribution",
      "Any prior uniform standards to match or improve upon",
    ],
    faq: [
      {
        question: "Can one program cover multiple properties?",
        answer:
          "Yes, when brand standards are shared and approved samples are treated as the group reference. Property-specific logos or colours should be documented clearly before production.",
      },
      {
        question: "How do you address commercial laundry wear?",
        answer:
          "We align fabric and construction to the laundry reality described in the brief, then validate through sampling. Guarantees against every wash condition are not realistic, but clearer specs reduce early failure risk.",
      },
      {
        question: "Do you support both front-of-house and kitchen or stewarding roles?",
        answer:
          "Yes. Role environments differ, so we treat fabric, features, and presentation requirements separately rather than forcing one construction across all positions.",
      },
      {
        question: "What is needed to start a hospitality RFQ?",
        answer:
          "A role map, approximate quantities, brand or logo files, durability expectations, and a delivery window into Canada. Photos of current uniforms help when replacing an existing program.",
      },
      {
        question: "Can you replenish mid-season when staffing changes?",
        answer:
          "Replenishment is more reliable once styles are approved and documented. Mid-cycle orders still depend on fabric availability, MOQs, and factory capacity at the time of request.",
      },
    ],
    cta: {
      title: "Outfit your hospitality teams with clearer standards",
      description:
        "Share your property or group requirements and we will help coordinate a practical uniform manufacturing path with delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  healthcare: {
    title: "Healthcare Organizations",
    description:
      "Healthcare apparel sourcing for Canadian clinics, hospitals, and care networks—specification clarity, size consistency, and Asian manufacturing coordinated with documentation support and delivery into Canada.",
    overview: [
      "Healthcare apparel programs succeed when specifications survive institutional laundry, size runs remain consistent across reorders, and documentation expectations are clear before receiving. Informal one-off buys often create fragmented inventory and uneven quality.",
      "Avelion helps Canadian healthcare buyers and their suppliers coordinate scrub and related staff apparel through qualified Asian manufacturers. We focus on specification review, sampling for fit and practical features, production checkpoints, and document packages suited to institutional receiving in Canada.",
    ],
    challenges: [
      "Specifications are incomplete for institutional laundry realities, so garments fail earlier than procurement expected.",
      "Department colour systems drift across purchase cycles when shade references are not retained.",
      "Size consistency breaks between reorders, creating fit issues for clinical staff who need reliable mobility.",
      "Documentation expectations surface at receiving rather than during sourcing and production planning.",
      "One-off purchases without an approved program baseline produce fragmented inventory and uneven quality.",
    ],
    support: [
      "We review scrub and staff apparel specifications before manufacturer outreach begins.",
      "We match Asian suppliers with relevant healthcare garment category experience.",
      "We coordinate sampling focused on fit, fabric behaviour, pocket function, and practical clinical features.",
      "We manage production milestones and quality checkpoints suited to institutional expectations.",
      "We help organize documentation for buyer review and receiving into Canada.",
    ],
    products: [
      "healthcare-apparel",
      "corporate-uniforms",
      "polo-shirts",
      "trousers-bottoms",
    ],
    qualityConsiderations: [
      "Fabric behaviour under frequent laundering should be discussed and sampled, not assumed from marketing descriptions.",
      "Colour stability matters when departments rely on visual coding for identification.",
      "Pocket function and fit for clinical movement need validation during sample approval.",
      "Clear labelling and lot references support procurement records and future replenishment.",
      "Construction integrity at stress points should match daily clinical use rather than light retail wear.",
    ],
    workflow: [
      "Confirm garment specifications and institutional requirements for Canadian receiving.",
      "Quote through matched Asian manufacturing partners with assumptions made explicit.",
      "Approve samples against laundry, fit, and feature expectations.",
      "Produce with inspection checkpoints aligned to program risk.",
      "Deliver with documentation ready for receiving and procurement records.",
    ],
    rfqChecklist: [
      "Garment types, colours, and department coding rules",
      "Quantity bands and size-curve estimates",
      "Fabric preferences and laundry environment details",
      "Pocket, closure, and feature requirements",
      "Labelling and lot identification expectations",
      "Any institutional documentation or compliance checklists",
      "Delivery window and Canadian receiving location",
      "Prior approved styles or samples if replenishing an existing program",
    ],
    faq: [
      {
        question: "Do you supply medical devices or clinical products?",
        answer:
          "No. Avelion coordinates apparel and related staff garment programs—such as scrubs and complementary uniforms—not medical devices or regulated clinical equipment.",
      },
      {
        question: "Can you match existing scrub colour systems?",
        answer:
          "We can work from colour standards and approved references you provide. Continuity improves when shade approvals are documented for future reorders.",
      },
      {
        question: "How do institutional laundry requirements affect sourcing?",
        answer:
          "They should shape fabric and construction choices early. We capture laundry expectations in the brief and validate through sampling before bulk commitment.",
      },
      {
        question: "What documentation can you help coordinate?",
        answer:
          "Depending on the program, this may include packing lists, commercial documents, origin-related papers, and buyer-requested certificates or test reports. Avelion coordinates collection and organization; we do not certify factories ourselves.",
      },
      {
        question: "Can departments order independently under one program?",
        answer:
          "Yes, if the style library and approvals are shared. Independent ordering without shared references is what usually creates drift in colour, fit, and quality.",
      },
    ],
    cta: {
      title: "Plan a clearer healthcare apparel program",
      description:
        "Outline your scrub or staff apparel needs and we will help structure sourcing, sampling, and production coordination for delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  education: {
    title: "Educational Institutions",
    description:
      "School and institutional uniform programs for Canadian educational buyers—crest standards, durable constructions, academic-calendar timing, and Asian manufacturing with delivery into Canada.",
    overview: [
      "School uniform programs run on academic calendars. Crest colour, placement, and core style availability must hold year over year, while durability has to survive daily student wear and frequent washing. Late approvals compress the entire manufacturing and delivery path into Canada.",
      "Avelion supports educational institutions and their uniform partners with Canada-based coordination of Asian manufacturing. We help lock crest and colour standards through sampling, plan production against intake windows, and establish reorder pathways so mid-year replenishment does not restart from scratch.",
    ],
    challenges: [
      "Academic intake dates leave little margin when crest approvals or size decisions arrive late.",
      "Crest colour and placement drift year over year when prior approvals are not retained as lasting references.",
      "Durability suffers when fabric choices prioritize unit price without regard to daily student wear.",
      "Parent or institutional distribution models are under-planned at the manufacturing and packing stage.",
      "Excess inventory risk competes with the need to protect core style availability mid-year.",
    ],
    support: [
      "We help plan core uniform assortments aligned to dress-code requirements.",
      "We coordinate crest artwork, colour standards, and decoration placement before bulk production.",
      "We structure sampling so approvals happen early enough for the academic cycle.",
      "We schedule production discussions against intake and replenishment windows into Canada.",
      "We support reorder pathways using approved style and crest references.",
    ],
    products: [
      "school-institutional-uniforms",
      "polo-shirts",
      "woven-shirts",
      "trousers-bottoms",
      "sweatshirts",
      "hoodies",
    ],
    qualityConsiderations: [
      "Durability for daily student wear and home or institutional washing should guide fabric selection.",
      "Crest placement and colour matching must stay consistent across sizes and reorder years.",
      "Size-run coverage should reflect age groups rather than a generic adult curve.",
      "Labelling and packaging should suit institutional distribution or parent pickup models.",
      "Colour continuity for core garments protects dress-code presentation across campuses and years.",
    ],
    workflow: [
      "Confirm dress-code styles, crest standards, and academic intake timing.",
      "Match factories and establish commercial terms with clear assumptions.",
      "Approve samples—including crest decoration—ahead of the academic cycle.",
      "Produce and inspect against school standards with milestone visibility.",
      "Coordinate delivery into Canada for intake and plan mid-year replenishment references.",
    ],
    rfqChecklist: [
      "Dress-code style list by garment type and colour",
      "Crest or badge artwork with colour and size specifications",
      "Age-group size ranges and estimated quantities",
      "Academic intake date and Canadian delivery destination",
      "Distribution model (warehouse, school store, parent kit, or mixed)",
      "Durability and fabric preferences",
      "Labelling and packaging requirements",
      "Prior year approved samples if continuing an existing program",
    ],
    faq: [
      {
        question: "When should schools start the uniform sourcing cycle?",
        answer:
          "Start early enough to complete crest sampling and approvals before production must begin for intake. Exact timing depends on assortment complexity, decoration method, and shipping mode into Canada.",
      },
      {
        question: "Can you match an existing crest colour?",
        answer:
          "We work from artwork and approved colour references you provide. Locking a decorated sample creates the baseline for year-over-year consistency.",
      },
      {
        question: "Do you work directly with schools or through uniform suppliers?",
        answer:
          "Both models are possible. Many institutions work through uniform partners; others engage Avelion directly. In either case, we coordinate manufacturing and delivery support into Canada.",
      },
      {
        question: "How do mid-year replenishment orders work?",
        answer:
          "They are more reliable once styles and crests are approved and documented. Availability still depends on materials, MOQs, and factory capacity at the time of the reorder.",
      },
      {
        question: "Can packaging support parent distribution?",
        answer:
          "Yes, if labelling and packing instructions are defined early. Complex kit packing should be part of the production brief, not an afterthought at shipment.",
      },
    ],
    cta: {
      title: "Prepare your next school uniform cycle",
      description:
        "Share your style list, crest requirements, and intake timing and we will outline a practical manufacturing plan with delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },

  "industrial-construction": {
    title: "Industrial and Construction",
    description:
      "Workwear and industrial apparel programs for Canadian construction and field operations—durable constructions, practical features, and Asian manufacturing coordinated for delivery into Canada.",
    overview: [
      "Industrial and construction apparel must survive abrasive site conditions, support practical movement, and present company identification that does not fail after a few washes. Distributed crews also need consistent sizing across replenishment batches.",
      "Avelion coordinates workwear manufacturing in Asia for Canadian buyers who need toughness and continuity—not catalogue styling alone. We match capable factories, plan reinforcements and features against real use cases, approve functional samples, and support production and delivery into yards, warehouses, or sites across Canada.",
    ],
    challenges: [
      "Garments selected primarily on price may fail early under abrasive field use and frequent washing.",
      "Feature sets look complete on paper but prove impractical once crews work in real site conditions.",
      "Company branding and safety identifiers wear off too quickly when decoration methods are mismatched to use.",
      "Distributed teams receive inconsistent sizing across batches when measurement references are not locked.",
      "Buyers have limited visibility once orders enter overseas production, making rollout planning difficult.",
    ],
    support: [
      "We match Asian manufacturers with workwear construction capability suited to the brief.",
      "We plan reinforcements, pockets, and functional detailing against described operating environments.",
      "We coordinate functional sampling for fit and field-relevant features before bulk commitment.",
      "We track production milestones and quality checkpoints suited to durability risk.",
      "We support reorder continuity and delivery coordination into Canadian yards, warehouses, or sites.",
    ],
    products: [
      "workwear",
      "jackets",
      "polo-shirts",
      "t-shirts",
      "trousers-bottoms",
      "hoodies",
    ],
    qualityConsiderations: [
      "Seam strength and reinforcement integrity matter more than surface finish for many field roles.",
      "Hardware durability should match outdoor and site handling conditions.",
      "Decoration must survive abrasion and washing appropriate to the work environment.",
      "Sizing consistency across replenishment batches reduces crew friction and exchanges.",
      "Fabric weight and construction should reflect climate and task demands described in the brief.",
    ],
    workflow: [
      "Define roles, environments, apparel requirements, and Canadian delivery points.",
      "Quote through capable workwear manufacturers with feature assumptions made explicit.",
      "Approve functional samples before bulk production.",
      "Produce with quality checkpoints suited to durability risk.",
      "Coordinate delivery to yards, warehouses, or sites in Canada and plan replenishment references.",
    ],
    rfqChecklist: [
      "Role and environment description (site, climate, abrasion, laundry)",
      "Garment types, colours, and company branding requirements",
      "Feature priorities (pockets, reinforcements, closures, visibility elements)",
      "Quantity bands and size-curve estimates for crews",
      "Decoration method preferences or durability expectations",
      "Delivery destinations in Canada (yard, warehouse, or multi-site)",
      "Rollout timing and any phased crew onboarding needs",
      "Prior garments to match or improve upon, if replacing an existing program",
    ],
    faq: [
      {
        question: "Do you supply certified personal protective equipment?",
        answer:
          "Avelion coordinates apparel and workwear manufacturing. If a program requires certified PPE or specific safety standards, those requirements must be stated clearly in the brief so capability and documentation expectations can be assessed honestly.",
      },
      {
        question: "How do you approach durability without overbuilding every garment?",
        answer:
          "We align construction and features to the environments and roles you describe, then validate through functional sampling. Over-specifying everything raises cost; under-specifying creates early failure—clarity in the brief is the difference.",
      },
      {
        question: "Can branding survive field abrasion?",
        answer:
          "Decoration method and placement should match use conditions. We discuss realistic options and approve decorated samples when durability of identifiers is critical.",
      },
      {
        question: "Can you ship to multiple Canadian sites?",
        answer:
          "Yes, when destinations, quantities, and labelling instructions are provided early. Multi-site packing is a production and logistics planning item, not a last-minute request.",
      },
      {
        question: "What helps most when requesting a quote?",
        answer:
          "Describe real working conditions, share photos of current garments if available, and provide quantity bands with a delivery window into Canada. Feature priorities matter more than vague ‘heavy duty’ language.",
      },
    ],
    cta: {
      title: "Equip field teams with durable apparel programs",
      description:
        "Tell us about your workwear needs and operating environments and we will help structure sourcing and production coordination for delivery into Canada.",
      primaryLabel: "Request a Quote",
      primaryHref: "/request-a-quote",
    },
  },
};
