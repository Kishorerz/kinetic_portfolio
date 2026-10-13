import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, needs } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    const payload = {
      name: name || "Anonymous Portfolio Visitor",
      email,
      message,
      projectNeeds: Array.isArray(needs) ? needs.join(", ") : needs,
      _subject: `New Portfolio Inquiry from ${name || email}`,
      to: "kishorkumar.baskarann@gmail.com",
    };

    // If user provided a Resend API key
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: "kishorkumar.baskarann@gmail.com",
          subject: `Portfolio Message from ${name || email}`,
          reply_to: email,
          text: `Name: ${name}\nEmail: ${email}\nFocus: ${payload.projectNeeds}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend delivery failed:", errorData);
      }
    }

    // Direct Formspree / Webhook forwarding fallback if configured
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/mqaeldge";
    const forwardRes = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.warn("Direct forwarder warning:", err);
      return null;
    });

    console.log(`[Contact Form] Delivered inquiry from ${email} to kishorkumar.baskarann@gmail.com`);

    return NextResponse.json({
      success: true,
      message: "Inquiry received and dispatched to kishorkumar.baskarann@gmail.com",
      forwarded: Boolean(forwardRes?.ok),
    });
  } catch (error) {
    console.error("Contact backend route error:", error);
    return NextResponse.json(
      { error: "Internal server error while transmitting email." },
      { status: 500 }
    );
  }
}