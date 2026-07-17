/**
 * Hidden until real content is approved.
 * Do not publish fabricated testimonials or case studies.
 */
export function TestimonialPlaceholder() {
  if (process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS !== "true") return null;
  return (
    <aside className="surface-panel rounded-sm p-6" aria-label="Testimonials coming soon">
      <p className="text-sm text-text-secondary">
        Client testimonials will appear here once approved references are available.
      </p>
    </aside>
  );
}

export function CaseStudyPlaceholder() {
  if (process.env.NEXT_PUBLIC_SHOW_CASE_STUDIES !== "true") return null;
  return (
    <aside className="surface-panel rounded-sm p-6" aria-label="Case studies coming soon">
      <p className="text-sm text-text-secondary">
        Case studies will appear here once anonymized, approved project summaries are ready.
      </p>
    </aside>
  );
}
