export type SolutionContent = {
  title: string;
  headline: string;
  description: string;
  body: string[];
  painPoints: string[];
  outcomes: string[];
  processTeaser: string[];
  processSteps?: { title: string; body: string }[];
  whatToSend: string[];
  faq: { question: string; answer: string }[];
  relatedProducts: string[];
  relatedServices: string[];
};

export const solutionContent: Record<string, SolutionContent> = {
  "apparel-brands": {
    title: "Apparel Brand Sourcing Solution",
    headline: "Private-label apparel manufacturing with Canada-based oversight",
    description:
      "Avelion helps Canadian apparel brands develop and produce private-label collections through qualified Asian manufacturers—structured sampling, transparent commercial assumptions, production visibility, and coordinated delivery into Canada.",
    body: [
      "Private-label programs rarely fail because a buyer lacked interest. They stall when brand standards stay informal, quotations omit material assumptions, and sampling decisions never become lasting references. A Canada-based partner who coordinates Asian manufacturing keeps those decisions visible across time zones.",
      "This solution is built for brands that need a repeatable path from assortment brief to approved pre-production sample, then through bulk production and shipment readiness. The emphasis is operating clarity—factory match, documented approvals, milestone tracking, and delivery coordination into Canada—not inflated promises or unverifiable claims.",
    ],
    painPoints: [
      "Brand standards get lost between email threads and factory interpretations across time zones.",
      "Sampling rounds expand without clear revision ownership or a locked commercial reference.",
      "Quotations look competitive until fabric, trim, and responsibility assumptions are examined.",
      "Reorders drift in shade, fit, or finishing when approved samples are not retained as the baseline.",
      "Buyers lack a single accountable Canada-based contact while manufacturing proceeds in Asia.",
    ],
    outcomes: [
      "A clearer path from assortment brief to approved pre-production sample.",
      "Factory options matched to category capability and commercial reality.",
      "Documented approvals that guide bulk production instead of informal recollection.",
      "Milestone visibility during manufacturing with early escalation when issues appear.",
      "Reorder continuity built on approved references for multi-season programs.",
      "Shipment document support for coordinated delivery into Canada.",
    ],
    processTeaser: [
      "Review the assortment brief, quality band, quantity ranges, and delivery window into Canada so requirements are complete before outreach.",
      "Match qualified Asian manufacturers to category, construction capability, and realistic volume expectations.",
      "Coordinate quotations with explicit assumptions on materials, trims, decoration, and responsibilities.",
      "Develop prototypes or fit samples, capture revisions, and lock pre-production approvals as the commercial reference.",
      "Release bulk production against approved standards and track materials, sewing, finishing, and packing milestones.",
      "Plan quality checkpoints suited to program risk and review outcomes before shipment release decisions.",
      "Prepare packing and commercial documents for freight handoff and delivery support into Canada.",
      "Retain approved references so seasonal reorders start from the same construction and shade baseline.",
    ],
    processSteps: [
      {
        title: "Brief and requirement alignment",
        body: "Clarify styles, materials, quality expectations, decoration needs, quantity bands, labelling, packaging, and the Canadian delivery window before supplier outreach begins.",
      },
      {
        title: "Manufacturer matching",
        body: "Identify Asian factories with relevant category experience and compare capability, capacity posture, and commercial fit against the brief.",
      },
      {
        title: "Quotation with transparent assumptions",
        body: "Coordinate costing packages that surface fabric, trim, decoration, sampling, and responsibility boundaries so comparisons remain meaningful.",
      },
      {
        title: "Sampling and approval lock",
        body: "Manage fit, size-set, and pre-production samples with documented comments so bulk production proceeds from a shared reference—not informal sign-off.",
      },
      {
        title: "Production and quality oversight",
        body: "Track milestones, escalate material or capacity issues early, and coordinate inspection checkpoints before shipment release.",
      },
      {
        title: "Delivery into Canada and reorder continuity",
        body: "Support packing readiness, document handoff to appointed logistics partners, and preserve approved standards for future replenishment.",
      },
    ],
    whatToSend: [
      "Assortment list with styles, colourways, and target quantity bands",
      "Tech packs, measurement charts, or reference garments",
      "Fabric, GSM, and trim preferences or acceptable alternatives",
      "Decoration artwork and placement notes if branding is required",
      "Target quality level and presentation standards",
      "Preferred delivery window and destination in Canada",
      "Labelling, packaging, and carton marking requirements",
      "Any retailer or buyer documentation expectations",
    ],
    faq: [
      {
        question: "Is Avelion a factory or a Canada-based coordination partner?",
        answer:
          "Avelion is a Canada-based sourcing and production-management partner. We coordinate manufacturing with qualified Asian manufacturers and support delivery into Canada for Canadian buyers.",
      },
      {
        question: "Can you help if our tech packs are incomplete?",
        answer:
          "Yes. Incomplete packs are common at the start. We help identify gaps and structure sampling so critical decisions are made before bulk commitment—though clearer inputs still produce faster, more useful quotations.",
      },
      {
        question: "How do you prevent reorder drift?",
        answer:
          "Approved samples, shade references, and construction notes become the baseline. Reorders should cite those records rather than restarting from memory of a prior shipment.",
      },
      {
        question: "Do you guarantee lead times or unit costs?",
        answer:
          "No. We share indicative timelines and commercial assumptions based on materials, capacity, approvals, and shipping mode, then refine them as decisions lock. Fixed guarantees are not realistic for overseas apparel programs.",
      },
      {
        question: "What happens after I submit a quote request?",
        answer:
          "We review your inputs, ask clarifying questions where needed, outline a practical sourcing path, and coordinate next steps such as manufacturer matching, quotation, or sampling—depending on readiness.",
      },
    ],
    relatedProducts: [
      "private-label-basics",
      "t-shirts",
      "hoodies",
      "sweatshirts",
      "knitwear",
      "woven-shirts",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
    ],
  },

  "uniform-suppliers": {
    title: "Uniform Supplier Sourcing Solution",
    headline: "Uniform production support for multi-site Canadian programs",
    description:
      "Avelion supports Canadian uniform suppliers coordinating corporate, hospitality, healthcare, and institutional apparel through Asian manufacturing—with decoration standards, durability focus, and repeatable reorder systems for delivery into Canada.",
    body: [
      "Uniform programs are operating systems, not one-time purchases. Clients expect consistent logos, reliable size availability, and garments that survive frequent laundering across sites and staffing cycles. That only works when approved samples become a lasting style library.",
      "This solution gives uniform suppliers a Canada-based coordination layer over Asian manufacturing: role mapping, factory qualification, decorated sampling, production visibility for staged rollouts, and replenishment pathways that protect brand standards over time.",
    ],
    painPoints: [
      "Decoration and colour standards vary across sites and reorders when references are informal.",
      "Factories struggle with size curves for high-turnover staffing without clear demand patterns.",
      "Program complexity grows faster than production visibility across multi-site rollouts.",
      "Approved samples are not retained as lasting commercial references for multi-year clients.",
      "Staggered deliveries create fragmented quality outcomes when each shipment is treated as a one-off.",
    ],
    outcomes: [
      "Style libraries anchored to approved fit and decorated samples.",
      "Consistent branding placements across sites and replenishment cycles.",
      "Practical MOQ and replenishment planning discussed against real size curves.",
      "Production tracking for rollout and reorder cycles with Canada-based communication.",
      "Clearer manufacturing coordination for institutional and corporate buyer expectations.",
      "Delivery support into Canada aligned to staged site or warehouse receiving.",
    ],
    processTeaser: [
      "Map client roles, styles, branding requirements, volume bands, and Canadian delivery destinations.",
      "Qualify Asian manufacturers suited to uniform categories, decoration methods, and durability expectations.",
      "Coordinate quotations with fabric, laundry, decoration, and packing assumptions made explicit.",
      "Approve fit samples and decorated references that become the lasting program standard.",
      "Plan production calendars for multi-site rollouts, including staged packing where required.",
      "Track sewing, finishing, and decoration checkpoints with early escalation when issues appear.",
      "Inspect against program standards and confirm packing instructions before freight handoff.",
      "Support delivery into Canada and reorder planning from the approved style library.",
    ],
    processSteps: [
      {
        title: "Program and role mapping",
        body: "Define garments by role, branding rules, size-curve expectations, laundry realities, and delivery destinations before manufacturer matching.",
      },
      {
        title: "Factory qualification",
        body: "Match Asian manufacturers with uniform or work-apparel capability and review commercial posture against volume and decoration needs.",
      },
      {
        title: "Commercial clarity",
        body: "Surface MOQ, lead-time, material, and decoration assumptions so client quotations and internal planning stay aligned.",
      },
      {
        title: "Decorated sample lock",
        body: "Approve fit, fabric, and logo placement as the lasting reference for sites and future reorders.",
      },
      {
        title: "Rollout production management",
        body: "Track milestones for staged deliveries, maintain visibility across purchase orders, and coordinate quality checkpoints.",
      },
      {
        title: "Canadian delivery and replenishment",
        body: "Support document handoff, receiving readiness, and reorder continuity using the approved style library.",
      },
    ],
    whatToSend: [
      "Role-based style list with estimated quantities by size curve",
      "Brand guidelines, logo files, and placement diagrams",
      "Fabric durability and laundry expectations",
      "Colour standards for garments and decoration",
      "Site rollout schedule and Canadian delivery destinations",
      "Packaging preferences for warehouse or site distribution",
      "Institutional or buyer documentation requirements, if any",
      "Prior approved samples or style codes for replenishment programs",
    ],
    faq: [
      {
        question: "Can you support our clients’ multi-site rollouts?",
        answer:
          "Yes. When destinations, quantities, and branding standards are clear, we plan production and packing for staged delivery into Canada while protecting a shared quality reference.",
      },
      {
        question: "How do you keep embroidery consistent across reorders?",
        answer:
          "Decorated sample approvals and placement diagrams become the reference. Later orders should cite those approvals rather than recreating instructions from memory.",
      },
      {
        question: "Do you sell directly to our end clients?",
        answer:
          "We coordinate manufacturing for uniform suppliers and distributors. You remain the commercial owner of the client relationship unless a different arrangement is explicitly agreed.",
      },
      {
        question: "What if each site wants slight branding differences?",
        answer:
          "Property- or client-specific logos and colours can be supported when documented early. Undocumented variation is what usually breaks consistency and timelines.",
      },
      {
        question: "Are MOQs workable for mixed size runs?",
        answer:
          "Often, depending on fabric, colour count, decoration method, and factory capability. We discuss realistic minimums against your size curve before sampling locks the path.",
      },
    ],
    relatedProducts: [
      "corporate-uniforms",
      "hospitality-uniforms",
      "healthcare-apparel",
      "school-institutional-uniforms",
      "polo-shirts",
      "workwear",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
      "compliance-coordination",
    ],
  },

  "promotional-products": {
    title: "Promotional Apparel Sourcing Solution",
    headline: "Campaign apparel manufactured against real delivery windows",
    description:
      "Avelion helps Canadian promotional-product distributors source decorated apparel from Asian manufacturers with artwork coordination, sampling discipline, production tracking, and delivery planning into Canada.",
    body: [
      "Promotional campaigns do not flex for manufacturing ambiguity. Event dates, client presentations, and warehouse kit windows create hard constraints. Success depends on early clarity around garment, decoration method, artwork status, packaging, and freight into Canada.",
      "This solution is designed for distributors who need Canada-based coordination while production happens in Asia: practical style recommendations, decorated approvals when risk warrants them, milestone tracking tied to the campaign date, and packing instructions that match event or warehouse reality.",
    ],
    painPoints: [
      "Event dates leave little room for ambiguous manufacturing updates or late status surprises.",
      "Artwork changes arrive after commercial assumptions are locked, forcing timeline and cost resets.",
      "Decoration quality is discovered too late because visual checkpoints were informal or skipped.",
      "Packaging and kit requirements are under-specified until cargo is nearly ready to ship.",
      "Freight handoff into Canada becomes a scramble near the deadline when documents are incomplete.",
    ],
    outcomes: [
      "Earlier clarity on garment, decoration, and packaging path before production pressure peaks.",
      "Decorated sample or strike-off checkpoints when campaign risk warrants visual confirmation.",
      "Production status tied to campaign-critical milestones rather than vague progress language.",
      "Packaging coordination for events, kits, or warehouse distribution.",
      "Shipment document support before freight handoff for delivery into Canada.",
      "Clearer decision points when late artwork or quantity changes affect the plan.",
    ],
    processTeaser: [
      "Capture the campaign brief, hard delivery date into Canada, audience profile, and current artwork status.",
      "Recommend or confirm garment styles suited to decoration method, budget band, and presentation goals.",
      "Lock commercial assumptions for fabric, decoration, packaging, and responsibilities before bulk commitment.",
      "Approve decorated samples or strike-offs when visual and wash performance matter to the client outcome.",
      "Release production against the approved path and track milestones against the campaign calendar.",
      "Confirm packing, labelling, and kitting instructions early enough to influence finishing—not after sewing ends.",
      "Coordinate inspection checkpoints and shipment documents ahead of freight handoff.",
      "Support delivery into Canada and retain references for repeat campaign styles.",
    ],
    processSteps: [
      {
        title: "Campaign intake",
        body: "Confirm event or warehouse date, quantities, destination in Canada, garment preferences, and artwork readiness before sourcing decisions harden.",
      },
      {
        title: "Garment and decoration path",
        body: "Align style, fabric, and decoration method to campaign goals and commercial constraints, with assumptions written into the quotation.",
      },
      {
        title: "Artwork and sample confirmation",
        body: "Review files for placement and colour clarity, then approve decorated references when the program risk profile requires them.",
      },
      {
        title: "Production against the date",
        body: "Track materials, decoration, sewing, and finishing with status tied to the campaign calendar and escalate blockers early.",
      },
      {
        title: "Pack and document readiness",
        body: "Apply packing or kit instructions, prepare commercial documents, and align handoff with the appointed forwarder or broker.",
      },
      {
        title: "Canadian delivery support",
        body: "Support receiving communication and preserve approved garment and decoration references for future campaigns.",
      },
    ],
    whatToSend: [
      "Campaign or event date and Canadian delivery destination",
      "Garment styles, colours, and size breakdown",
      "Artwork files (vector preferred) and colour specifications",
      "Decoration method preference or openness to recommendations",
      "Packaging or kitting instructions",
      "Quantity bands and any phased delivery needs",
      "Client brand guidelines or presentation standards",
      "Prior campaign references if repeating a successful style",
    ],
    faq: [
      {
        question: "How early should distributors engage for a dated campaign?",
        answer:
          "As soon as the hard delivery date and rough quantities are known—especially if artwork is incomplete. Reverse-planning materials, approvals, production, and shipping into Canada is safer than compressing everything at the end.",
      },
      {
        question: "Can you decorate at source or ship blanks for Canadian decoration?",
        answer:
          "Both paths are possible. We clarify where decoration happens, who owns artwork approvals, and how that affects costing and timeline before quoting.",
      },
      {
        question: "What if the client changes artwork mid-production?",
        answer:
          "We outline the impact on cost, sampling, and timing so you can decide whether to revise, hold, or proceed with the approved version. Late changes rarely come free of schedule risk.",
      },
      {
        question: "Do you support complex event kits?",
        answer:
          "Yes, when kit rules and labels are defined early. Complex packing should be part of the production brief, not requested after garments are finished.",
      },
      {
        question: "Are campaign dates guaranteed?",
        answer:
          "No honest partner can guarantee overseas apparel dates independent of artwork readiness, approvals, materials, and shipping mode. We plan against the date and communicate constraints clearly.",
      },
    ],
    relatedProducts: [
      "promotional-apparel",
      "t-shirts",
      "polo-shirts",
      "hoodies",
      "sweatshirts",
      "jackets",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
      "logistics-delivery",
    ],
  },

  "retail-wholesale": {
    title: "Retail and Wholesale Sourcing Solution",
    headline: "Assortment sourcing built for intake windows and reorder continuity",
    description:
      "Avelion supports Canadian retailers and wholesalers manufacturing apparel in Asia with structured costing, sample approvals, production visibility, and delivery coordination into Canada across core and seasonal assortments.",
    body: [
      "Retail and wholesale programs live on intake calendars and replenishment quality. When assortments span many styles, informal factory communication quickly becomes inconsistent construction, late materials decisions, and shade drift on core styles.",
      "This solution focuses on assortment-aware manufacturer matching, transparent quotation assumptions, approved references for replenishment risk, and milestone tracking that supports broker and warehouse handoff into Canada—practical operating improvements rather than marketing claims.",
    ],
    painPoints: [
      "Assortments expand without shared construction standards across styles and factories.",
      "Intake dates collide with late material or sample decisions that should have been locked earlier.",
      "Replenishment styles drift from original approved quality across purchase orders.",
      "Quotations omit assumptions that later change landed cost into Canada.",
      "Multi-style programs lack consistent status reporting tied to meaningful milestones.",
    ],
    outcomes: [
      "Assortment priorities matched to capable Asian manufacturers.",
      "Clearer commercial assumptions before purchase-order commitment.",
      "Approved references for core replenishment styles.",
      "Milestone tracking across production and shipment readiness.",
      "Stronger continuity between seasonal drops and reorders.",
      "Document readiness for Canadian broker and warehouse receiving.",
    ],
    processTeaser: [
      "Define assortment priorities, quality bands, packaging standards, and intake timing into Canada.",
      "Match factories to category clusters rather than forcing unrelated styles into a single weak fit.",
      "Coordinate quotations with material, trim, decoration, and responsibility assumptions made explicit.",
      "Approve samples for core styles first where replenishment risk is highest, then seasonal styles as needed.",
      "Release bulk production against approved references and track materials, sewing, finishing, and packing.",
      "Plan inspection intensity according to program risk and review outcomes before shipment release.",
      "Prepare packing lists, carton marks, and commercial documents for broker and warehouse handoff.",
      "Retain shade and construction references so replenishment starts from the same commercial baseline.",
    ],
    processSteps: [
      {
        title: "Assortment and intake planning",
        body: "Separate core and seasonal priorities, confirm quality bands, and reverse-plan decisions against the Canadian intake window.",
      },
      {
        title: "Supplier matching by category",
        body: "Identify Asian manufacturers suited to the assortment clusters and commercial volume bands in the brief.",
      },
      {
        title: "Transparent costing",
        body: "Compare options with fabric, trim, decoration, sampling, and logistics responsibility assumptions visible.",
      },
      {
        title: "Sample discipline for core styles",
        body: "Lock fit, construction, and shade references for styles that will carry replenishment risk across seasons.",
      },
      {
        title: "Production visibility",
        body: "Track milestones across multi-style programs and escalate capacity or material issues early enough to protect intake.",
      },
      {
        title: "Canadian receiving readiness",
        body: "Support packing, documentation, and handoff to appointed logistics partners, then preserve references for reorders.",
      },
    ],
    whatToSend: [
      "Assortment priorities (core vs seasonal) with style and colour counts",
      "Target quantity bands by style or program",
      "Quality level and construction expectations",
      "Packaging, labelling, and hangtag requirements",
      "Intake window and Canadian destination or warehouse details",
      "Retailer compliance or documentation checklists, if any",
      "Reference samples or prior PO standards for reorders",
      "Decoration or branding requirements if applicable",
    ],
    faq: [
      {
        question: "Can one factory handle our full assortment?",
        answer:
          "Sometimes, but not always. We match by capability. Splitting categories across suited manufacturers can protect quality better than forcing unrelated constructions into one opportunistic fit.",
      },
      {
        question: "How do you protect replenishment continuity?",
        answer:
          "Core styles get approved samples, shade references, and construction notes treated as lasting standards. Reorders should start from those records.",
      },
      {
        question: "Do you work with wholesalers and retailers differently?",
        answer:
          "The manufacturing process is similar, but packing, labelling, and documentation assumptions often differ. We clarify distribution requirements early so quotations stay aligned.",
      },
      {
        question: "Who manages customs clearance into Canada?",
        answer:
          "Buyers typically appoint their broker or forwarder. Avelion coordinates document readiness and information handoff so appointed partners can clear and deliver efficiently.",
      },
      {
        question: "What if our intake date is already fixed?",
        answer:
          "Share it with current decision status. We will outline what is realistic given materials, sampling, capacity, and shipping mode—without promising dates the inputs cannot support.",
      },
    ],
    relatedProducts: [
      "t-shirts",
      "polo-shirts",
      "hoodies",
      "sweatshirts",
      "woven-shirts",
      "trousers-bottoms",
      "private-label-basics",
      "knitwear",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
      "logistics-delivery",
    ],
  },

  hospitality: {
    title: "Hospitality Apparel Sourcing Solution",
    headline: "Hospitality uniforms that hold presentation through daily service",
    description:
      "Avelion coordinates hospitality apparel programs for Canadian hotels, restaurants, and hospitality groups—balancing brand presentation, staff comfort, and durable construction through Asian manufacturing with delivery into Canada.",
    body: [
      "Hospitality uniforms are judged twice: once on the floor and again after commercial laundry. Programs that ignore either side create presentation problems or early replacement cost. Multi-property groups add another layer—branding consistency across locations.",
      "This solution helps hospitality buyers and their partners structure role-based assortments, validate fabric and fit through sampling, lock decoration standards, and coordinate Asian production with Canada-based communication and delivery into Canada.",
    ],
    painPoints: [
      "Uniforms lose appearance after commercial laundry cycles when fabric choices were under-specified.",
      "Property branding is inconsistent across locations without shared approved references.",
      "Role-based assortments become difficult to replenish as staffing changes through the year.",
      "Fit issues reduce staff adoption and undermine brand presentation on the floor.",
      "Buyers lack visibility once production begins overseas, complicating property rollout timing.",
    ],
    outcomes: [
      "Role-based style plans tied to brand standards and operating environments.",
      "Fabric and construction choices discussed against hospitality laundry realities.",
      "Approved decoration and colour references for property or group branding.",
      "Production coordination for property or group rollouts with milestone visibility.",
      "Practical reorder pathways for seasonal staffing changes.",
      "Delivery support into Canada aligned to receiving or staff distribution models.",
    ],
    processTeaser: [
      "Define roles, brand standards, volume expectations, laundry realities, and Canadian delivery destinations.",
      "Match Asian manufacturers with hospitality or uniform category experience suited to the brief.",
      "Coordinate quotations with fabric, decoration, packaging, and responsibility assumptions explicit.",
      "Approve fit, fabric hand, and decoration samples before property or group rollout.",
      "Plan production for single-property or multi-property delivery waves.",
      "Track quality checkpoints with emphasis on appearance retention and logo consistency.",
      "Confirm packing and labelling for receiving or staff distribution before freight handoff.",
      "Support delivery into Canada and retain style references for replenishment cycles.",
    ],
    processSteps: [
      {
        title: "Role and brand mapping",
        body: "Capture front- and back-of-house needs, brand guidelines, volume bands, and laundry expectations before sourcing begins.",
      },
      {
        title: "Manufacturer and material alignment",
        body: "Match factories and discuss constructions suited to presentation and durability rather than catalogue aesthetics alone.",
      },
      {
        title: "Sample validation",
        body: "Approve fit for long shifts, fabric behaviour, and logo placement as the lasting program reference.",
      },
      {
        title: "Rollout production",
        body: "Manage bulk production against approved standards with status visibility for property or group timing.",
      },
      {
        title: "Quality and packing checks",
        body: "Review appearance, decoration consistency, and packing instructions before shipment release.",
      },
      {
        title: "Canadian delivery and replenishment",
        body: "Support handoff into Canada and preserve approved references for seasonal staffing changes.",
      },
    ],
    whatToSend: [
      "Property or group brand guidelines and logo files",
      "Role-based style list with estimated headcounts or quantities",
      "Laundry method and durability expectations",
      "Colour and decoration placement standards",
      "Size-curve assumptions or historical size data",
      "Rollout timing and Canadian delivery addresses",
      "Packaging preferences for receiving or staff distribution",
      "Photos or samples of current uniforms if replacing an existing program",
    ],
    faq: [
      {
        question: "Can one program cover multiple properties?",
        answer:
          "Yes, when shared brand standards are locked through approved samples. Property-specific logos or colours should be documented clearly before production.",
      },
      {
        question: "How do you address commercial laundry wear?",
        answer:
          "We align fabric and construction to the laundry reality in the brief and validate through sampling. No process eliminates every wash variable, but clearer specs reduce early failure risk.",
      },
      {
        question: "Do you support both guest-facing and back-of-house roles?",
        answer:
          "Yes. We treat fabric, features, and presentation requirements by role rather than forcing one construction across every position.",
      },
      {
        question: "Can mid-season staffing changes be replenished?",
        answer:
          "More reliably once styles are approved and documented. Availability still depends on materials, MOQs, and factory capacity at the time of request.",
      },
      {
        question: "What is the fastest way to start?",
        answer:
          "Send a role map, approximate quantities, logo files, durability expectations, and a delivery window into Canada. Current uniform photos help when improving an existing program.",
      },
    ],
    relatedProducts: [
      "hospitality-uniforms",
      "polo-shirts",
      "woven-shirts",
      "trousers-bottoms",
      "corporate-uniforms",
      "promotional-apparel",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
    ],
  },

  healthcare: {
    title: "Healthcare Apparel Sourcing Solution",
    headline: "Healthcare apparel programs with clearer specs and consistency",
    description:
      "Avelion helps Canadian healthcare organizations and their suppliers coordinate scrub and related staff apparel through qualified Asian partners—with specification clarity, size consistency, documentation support, and delivery into Canada.",
    body: [
      "Healthcare apparel procurement often breaks down between clinical operations and purchasing cycles. Incomplete specs, drifting department colours, and one-off buys create inventory that does not fit staff needs or institutional laundry realities.",
      "This solution emphasizes specification review before sourcing, sampling for fit and practical features, production checkpoints suited to institutional expectations, and document coordination for Canadian receiving—without claiming medical-device capability or unverifiable performance statistics.",
    ],
    painPoints: [
      "Specifications are incomplete for institutional laundry realities and daily clinical movement.",
      "Department colour systems drift across purchase cycles without retained shade references.",
      "Size consistency breaks between reorders, creating fit friction for clinical staff.",
      "Documentation expectations become clear only at receiving, delaying acceptance.",
      "One-off buys create fragmented inventory and uneven quality across departments.",
    ],
    outcomes: [
      "Clearer garment specifications before manufacturer matching begins.",
      "Factories matched to healthcare apparel categories and commercial volume bands.",
      "Sample approvals that test fit, pockets, and practical clinical features.",
      "Production checkpoints suited to institutional receiving expectations.",
      "Documentation coordination for buyer review and records.",
      "Delivery support into Canada with lot and labelling references for replenishment.",
    ],
    processTeaser: [
      "Confirm garment types, department colour rules, feature requirements, and institutional documentation needs.",
      "Review specifications against laundry and fit realities before outreach to Asian manufacturers.",
      "Quote through matched partners with material, construction, and responsibility assumptions explicit.",
      "Approve samples for fit, fabric behaviour, pocket function, and colour standards.",
      "Release production against locked references and track milestones with Canada-based communication.",
      "Coordinate inspection checkpoints and labelling or lot identification requirements.",
      "Prepare document packages requested by institutional buyers for receiving into Canada.",
      "Retain approved style and colour references so departments reorder from one program baseline.",
    ],
    processSteps: [
      {
        title: "Specification and institutional intake",
        body: "Capture scrub or staff apparel requirements, colour coding, features, laundry environment, and documentation expectations.",
      },
      {
        title: "Supplier matching",
        body: "Identify Asian manufacturers with relevant healthcare garment experience and suitable commercial posture.",
      },
      {
        title: "Sampling for clinical practicality",
        body: "Validate fit, mobility, pocket function, and fabric behaviour before bulk commitment.",
      },
      {
        title: "Production management",
        body: "Track materials, sewing, finishing, and packing with early escalation when issues threaten consistency.",
      },
      {
        title: "Quality and documentation",
        body: "Coordinate checkpoints and organize buyer-requested documents without implying Avelion certifies factories.",
      },
      {
        title: "Canadian receiving and reorder continuity",
        body: "Support delivery handoff into Canada and preserve shade, size, and construction references for future cycles.",
      },
    ],
    whatToSend: [
      "Garment types, colours, and department coding rules",
      "Quantity bands and size-curve estimates",
      "Fabric preferences and laundry environment details",
      "Pocket, closure, and feature requirements",
      "Labelling and lot identification expectations",
      "Institutional documentation or compliance checklists",
      "Delivery window and Canadian receiving location",
      "Prior approved styles or samples if replenishing an existing program",
    ],
    faq: [
      {
        question: "Do you supply medical devices?",
        answer:
          "No. This solution covers apparel and related staff garments such as scrubs and complementary uniforms—not medical devices or regulated clinical equipment.",
      },
      {
        question: "Can you maintain department colour systems?",
        answer:
          "We work from colour standards and approved references you provide. Continuity improves when shade approvals are documented for future reorders.",
      },
      {
        question: "What documentation can Avelion help coordinate?",
        answer:
          "Depending on the program: packing lists, commercial documents, origin-related papers, and buyer-requested certificates or test reports. We coordinate collection and organization; we do not certify factories ourselves.",
      },
      {
        question: "Can departments order under one shared program?",
        answer:
          "Yes, and that is usually the better model. Shared approved references reduce drift in colour, fit, and quality across departments.",
      },
      {
        question: "How should we describe laundry requirements?",
        answer:
          "Share method frequency and any known institutional laundry conditions. That detail should shape fabric and construction choices before sampling and bulk production.",
      },
    ],
    relatedProducts: [
      "healthcare-apparel",
      "corporate-uniforms",
      "polo-shirts",
      "trousers-bottoms",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
      "compliance-coordination",
    ],
  },

  education: {
    title: "Education Uniform Sourcing Solution",
    headline: "School uniform programs aligned to academic calendars",
    description:
      "Avelion supports Canadian educational institutions and their uniform partners with crest-standard sampling, durable constructions, production planning against intake windows, and delivery coordination into Canada.",
    body: [
      "School uniform programs are calendar-driven. Crest colour, placement, and core style availability must hold across academic years, while durability has to survive daily student wear. Late approvals compress manufacturing and freight into Canada into an avoidable risk window.",
      "This solution structures dress-code assortments, locks crest standards through sampling, plans production against intake timing, and establishes reorder pathways so mid-year replenishment does not restart from informal memory.",
    ],
    painPoints: [
      "Academic deadlines leave little margin for late crest approvals or size decisions.",
      "Crest colour and placement drift year over year without retained decorated references.",
      "Core styles are hard to replenish mid-year when the original program was never documented.",
      "Durability suffers when fabric choices prioritize unit price alone.",
      "Distribution models are under-planned at the manufacturing and packing stage.",
    ],
    outcomes: [
      "Core style plans suited to dress-code requirements and age-group size runs.",
      "Crest and colour standards locked through approved decorated samples.",
      "Production timing discussed against academic intake windows into Canada.",
      "Durable constructions selected for daily student wear rather than one-season optics.",
      "Reorder pathways using lasting style and crest references.",
      "Packing approaches aligned to school store, warehouse, or parent distribution models.",
    ],
    processTeaser: [
      "Confirm dress-code styles, crest standards, age-group size ranges, and academic intake timing.",
      "Match Asian manufacturers suited to school or institutional uniform categories.",
      "Coordinate quotations with fabric durability, decoration, packaging, and delivery assumptions explicit.",
      "Approve garment and crest samples early enough to protect the production calendar.",
      "Plan bulk production against intake and any phased campus or grade-level delivery needs.",
      "Track quality with emphasis on crest consistency, colour continuity, and construction durability.",
      "Confirm labelling and packing for institutional or parent distribution before freight handoff.",
      "Support delivery into Canada and retain references for mid-year and next-year replenishment.",
    ],
    processSteps: [
      {
        title: "Dress-code and calendar intake",
        body: "Capture styles, crest artwork, size ranges, distribution model, and the academic intake date for Canadian delivery.",
      },
      {
        title: "Manufacturer matching",
        body: "Identify Asian factories with relevant uniform capability and commercial fit for school volume patterns.",
      },
      {
        title: "Crest and garment sample lock",
        body: "Approve colour, placement, and construction references that become the year-over-year baseline.",
      },
      {
        title: "Production against intake",
        body: "Track materials, decoration, sewing, and finishing with status tied to the academic calendar.",
      },
      {
        title: "Packing for distribution",
        body: "Apply labelling and packing rules suited to school stores, warehouses, or parent kits.",
      },
      {
        title: "Canadian delivery and replenishment setup",
        body: "Support handoff into Canada and preserve approved style libraries for mid-year and next-year orders.",
      },
    ],
    whatToSend: [
      "Dress-code style list by garment type and colour",
      "Crest or badge artwork with colour and size specifications",
      "Age-group size ranges and estimated quantities",
      "Academic intake date and Canadian delivery destination",
      "Distribution model (warehouse, school store, parent kit, or mixed)",
      "Durability and fabric preferences",
      "Labelling and packaging requirements",
      "Prior-year approved samples if continuing an existing program",
    ],
    faq: [
      {
        question: "When should schools start sourcing for the next academic year?",
        answer:
          "Early enough to complete crest sampling and approvals before production must begin for intake. Exact timing depends on assortment complexity, decoration method, and shipping mode into Canada.",
      },
      {
        question: "Can you match an existing crest?",
        answer:
          "We work from artwork and colour references you provide. A decorated sample approval creates the baseline for year-over-year consistency.",
      },
      {
        question: "Do you work with schools directly or through uniform suppliers?",
        answer:
          "Both models are possible. Many institutions work through uniform partners; others engage Avelion directly for manufacturing coordination and delivery support into Canada.",
      },
      {
        question: "How do mid-year replenishment orders work?",
        answer:
          "They are more reliable once styles and crests are approved and documented. Availability still depends on materials, MOQs, and factory capacity at the time of the reorder.",
      },
      {
        question: "Can packing support parent pickup kits?",
        answer:
          "Yes, if labelling and kit rules are defined early. Complex packing belongs in the production brief, not as a last-minute request at shipment.",
      },
    ],
    relatedProducts: [
      "school-institutional-uniforms",
      "polo-shirts",
      "woven-shirts",
      "trousers-bottoms",
      "sweatshirts",
      "hoodies",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
      "logistics-delivery",
    ],
  },

  "industrial-construction": {
    title: "Industrial and Construction Workwear Solution",
    headline: "Durable workwear programs for Canadian field operations",
    description:
      "Avelion coordinates workwear and industrial apparel manufacturing in Asia for Canadian construction, industrial, and field teams that need toughness, practical features, consistent fleet replenishment, and delivery into Canada.",
    body: [
      "Field apparel fails when feature lists look complete on paper but ignore abrasion, climate, laundry, and real crew movement. Distributed teams also suffer when sizing drifts across batches and branding wears off faster than the garment itself.",
      "This solution matches Asian manufacturers with workwear construction capability, plans reinforcements against described environments, validates functional samples, and coordinates production with Canada-based visibility for delivery to yards, warehouses, or sites.",
    ],
    painPoints: [
      "Garments fail early under abrasive site conditions when construction was selected mainly on price.",
      "Feature sets look complete on paper but fail in daily crew use.",
      "Branding and identifiers wear off too quickly for field abrasion and washing.",
      "Distributed crews receive inconsistent sizing across replenishment batches.",
      "Buyers have limited visibility once orders enter overseas production, complicating fleet rollouts.",
    ],
    outcomes: [
      "Factories matched to workwear construction capability rather than fashion-only profiles.",
      "Feature and reinforcement planning against real operating environments.",
      "Functional sample approval before bulk commitment.",
      "Quality checkpoints suited to durability risk.",
      "Reorder support for ongoing crew needs using locked measurement references.",
      "Delivery coordination to Canadian yards, warehouses, or multi-site destinations.",
    ],
    processTeaser: [
      "Define roles, climates, abrasion and laundry conditions, branding needs, and Canadian delivery points.",
      "Match Asian manufacturers with workwear construction and hardware capability suited to the brief.",
      "Quote with reinforcement, pocket, closure, and decoration assumptions made explicit.",
      "Approve functional samples for fit, features, and identifier durability before bulk release.",
      "Plan production for fleet rollouts, including multi-site packing where destinations differ.",
      "Track milestones and quality checks with emphasis on seams, reinforcements, and decoration survival.",
      "Confirm carton marks and packing for yard or warehouse receiving before freight handoff.",
      "Support delivery into Canada and retain construction references for crew replenishment.",
    ],
    processSteps: [
      {
        title: "Environment and role brief",
        body: "Capture site conditions, climate, abrasion, laundry, branding, quantities, and delivery destinations across Canada.",
      },
      {
        title: "Workwear factory matching",
        body: "Identify Asian manufacturers with relevant construction capability and commercial fit for fleet volumes.",
      },
      {
        title: "Feature and costing clarity",
        body: "Align reinforcements, pockets, closures, and decoration methods to use cases with transparent quotation assumptions.",
      },
      {
        title: "Functional sample approval",
        body: "Validate fit and field-relevant detailing before committing bulk production.",
      },
      {
        title: "Durable production oversight",
        body: "Track sewing, finishing, and decoration checkpoints suited to abrasion and wash risk.",
      },
      {
        title: "Canadian fleet delivery and replenishment",
        body: "Support handoff to yards or warehouses and preserve sizing and construction references for ongoing crew needs.",
      },
    ],
    whatToSend: [
      "Role and environment description (site, climate, abrasion, laundry)",
      "Garment types, colours, and company branding requirements",
      "Feature priorities such as pockets, reinforcements, closures, or visibility elements",
      "Quantity bands and size-curve estimates for crews",
      "Decoration durability expectations or method preferences",
      "Delivery destinations in Canada (yard, warehouse, or multi-site)",
      "Rollout timing and any phased crew onboarding needs",
      "Photos of current garments if replacing or improving an existing program",
    ],
    faq: [
      {
        question: "Do you supply certified PPE?",
        answer:
          "Avelion coordinates apparel and workwear manufacturing. If certified PPE or specific safety standards are required, state them clearly in the brief so capability and documentation expectations can be assessed honestly.",
      },
      {
        question: "How do you balance durability and cost?",
        answer:
          "We align construction to the environments and roles you describe, then validate through functional sampling. Over-specifying everything raises cost; under-specifying creates early failure—clarity in the brief is the difference.",
      },
      {
        question: "Can branding survive field abrasion?",
        answer:
          "Decoration method and placement should match use conditions. We discuss realistic options and approve decorated samples when identifier durability is critical.",
      },
      {
        question: "Can you ship to multiple Canadian sites?",
        answer:
          "Yes, when destinations, quantities, and labelling instructions are provided early. Multi-site packing is a planning item, not a last-minute request.",
      },
      {
        question: "What information helps most in an RFQ?",
        answer:
          "Real working conditions, feature priorities, quantity bands, branding needs, and a delivery window into Canada. Photos of current garments are often more useful than vague ‘heavy duty’ language.",
      },
    ],
    relatedProducts: [
      "workwear",
      "jackets",
      "polo-shirts",
      "t-shirts",
      "trousers-bottoms",
      "hoodies",
    ],
    relatedServices: [
      "supplier-factory-sourcing",
      "product-development-sampling",
      "production-management",
      "quality-assurance",
      "logistics-delivery",
    ],
  },
};
