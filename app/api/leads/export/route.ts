import { NextResponse } from "next/server";
import { listLeads, toApolloExportRows, updateLeadStatus } from "@/lib/forms/leads";
import type { LeadStatus } from "@/types";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function authorize(request: Request) {
  const secret = process.env.LEAD_EXPORT_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!authorize(request)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") || "json";
  const leads = await listLeads(1000);
  const rows = toApolloExportRows(leads);

  if (format === "csv") {
    const headers = Object.keys(rows[0] || {
      first_name: "",
      last_name: "",
      work_email: "",
      phone: "",
      job_title: "",
      company: "",
      company_website: "",
      industry: "",
      country: "",
      province: "",
      lead_source: "",
      product_interest: "",
      estimated_quantity: "",
      timeline: "",
      notes: "",
      utm_campaign: "",
      lead_status: "",
    });
    const escape = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
    const csv = [
      headers.join(","),
      ...rows.map((row) => headers.map((h) => escape(String(row[h as keyof typeof row] ?? ""))).join(",")),
    ].join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="avelion-leads-apollo.csv"',
      },
    });
  }

  return NextResponse.json({ count: rows.length, leads: rows });
}

export async function PATCH(request: Request) {
  if (!authorize(request)) return unauthorized();
  const body = (await request.json()) as { id?: string; status?: LeadStatus };
  if (!body.id || !body.status) {
    return NextResponse.json({ error: "id and status are required" }, { status: 400 });
  }
  const updated = await updateLeadStatus(body.id, body.status);
  return NextResponse.json({ ok: true, lead: updated });
}
