import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, needs } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    const recipient = "kishorkumar.baskarann@gmail.com";
    const projectNeeds = Array.isArray(needs) ? needs.join(", ") : needs || "General Inquiry";
    let delivered = false;

    // 1. GMAIL SMTP (If GMAIL_USER & GMAIL_APP_PASSWORD are set in .env.local or Vercel Environment Variables)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Visitor" <${process.env.GMAIL_USER}>`,
          to: recipient,
          replyTo: email,
          subject: `⚡ New Portfolio Message from ${name || email}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
              <h2 style="color: #111; margin-top: 0;">New Message from Portfolio</h2>
              <p><strong>Name:</strong> ${name || "Not provided"}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Scope / Interest:</strong> ${projectNeeds}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 16px; line-height: 1.5; color: #333;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          `,
        });
        delivered = true;
        console.log("[SMTP] Delivered email via Gmail to " + recipient);
      } catch (smtpErr) {
        console.error("[SMTP] Error sending via Gmail:", smtpErr);
      }
    }

    // 2. WEB3FORMS (Zero setup API that forwards directly to the target email)
    if (!delivered) {
      try {
        const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
        if (web3Key) {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: web3Key,
              name: name || "Portfolio Visitor",
              email,
              message,
              project_needs: projectNeeds,
              subject: `Portfolio Message from ${name || email}`,
            }),
          });
          if (res.ok) delivered = true;
        }
      } catch (w3Err) {
        console.warn("[Web3Forms] Error:", w3Err);
      }
    }

    // 3. FORMSPREE / CUSTOM ENDPOINT
    if (!delivered && process.env.FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(process.env.FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
            projectNeeds,
            to: recipient,
          }),
        });
        if (res.ok) delivered = true;
      } catch (fsErr) {
        console.warn("[Formspree] Error:", fsErr);
      }
    }

    return NextResponse.json({
      success: true,
      delivered,
      message: delivered
        ? "Your message has been sent to Kishor."
        : "Message received. (Tip: configure GMAIL_APP_PASSWORD in environment variables for instant inbox transmission)",
    });
  } catch (error) {
    console.error("Contact backend route error:", error);
    return NextResponse.json(
      { error: "Internal server error while transmitting email." },
      { status: 500 }
    );
  }
}