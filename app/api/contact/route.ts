import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { saveSubmission } from "@/lib/saveSubmission";

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Send email notification
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"FlowForge" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New inquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
        <h2 style="margin:0 0 24px;font-size:20px;color:#111;">New FlowForge Inquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;color:#555;font-size:13px;width:90px;">Name</td>
            <td style="padding:10px 0;color:#111;font-size:13px;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#555;font-size:13px;">Email</td>
            <td style="padding:10px 0;color:#111;font-size:13px;">
              <a href="mailto:${email}" style="color:#ff6b2b;">${email}</a>
            </td>
          </tr>
          ${
            company
              ? `<tr>
            <td style="padding:10px 0;color:#555;font-size:13px;">Company</td>
            <td style="padding:10px 0;color:#111;font-size:13px;">${company}</td>
          </tr>`
              : ""
          }
          <tr>
            <td colspan="2" style="padding:20px 0 6px;color:#555;font-size:13px;">Message</td>
          </tr>
          <tr>
            <td colspan="2" style="padding:12px;background:#fff;border:1px solid #e5e5e5;border-radius:6px;color:#111;font-size:14px;line-height:1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;font-size:12px;color:#999;">
          Submitted via flowforge.co contact form
        </p>
      </div>
    `,
  });

  // Save to submissions.json (works locally; skipped silently on Vercel where
  // the serverless filesystem is read-only outside /tmp)
  try {
    await saveSubmission({
      name,
      email,
      company: company ?? "",
      message,
      submittedAt: new Date().toISOString(),
    });
  } catch {
    // Non-fatal — email already sent
  }

  return NextResponse.json({ success: true });
}
