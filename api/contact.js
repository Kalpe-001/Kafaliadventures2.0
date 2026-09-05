import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const {
      name,
      email,
      trek,
      message
    } = req.body || {};

    // Basic validation
    if (!name || !email || !trek) {
      return res.status(400).json({
        error: "Please fill in all required fields."
      });
    }

    // Save contact enquiry to Supabase
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          trek,
          message: message?.trim() || null
        }
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: error.message,
        details: error.details || null,
        hint: error.hint || null,
        code: error.code || null
      });
    }

    // Escape user-provided values before putting them into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeTrek = escapeHtml(trek);
    const safeMessage = escapeHtml(
      message || "No additional message provided."
    ).replace(/\n/g, "<br>");

    // Send contact notification
    const { error: emailError } = await resend.emails.send({
      from: "Kafali Adventures <onboarding@resend.dev>",
      to: ["kafaliadventure44@gmail.com"],
      subject: `New Contact Enquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #172033;">

          <h2 style="margin-bottom: 8px;">
            New Contact Enquiry
          </h2>

          <p style="color: #667085; margin-top: 0;">
            A new enquiry has been submitted through the
            Kafali Adventures website.
          </p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <h3>Customer</h3>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>

          <h3>Trip Details</h3>

          <p><strong>Trek / Package</strong> ${safeTrek}</p>

          <h3>Message / Question</h3>
          <p>${safeMessage}</p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p style="font-size: 13px; color: #667085;">
            Enquiry ID: ${escapeHtml(data.id)}
          </p>

        </div>
      `
    });

    // The enquiry is already safely stored in Supabase.
    // An email failure should NOT make the enquiry fail.
    if (emailError) {
      console.error("Resend email error:", emailError);
    }

    return res.status(200).json({
      success: true,
      enquiry: data
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: error.message || "Something went wrong."
    });
  }
}