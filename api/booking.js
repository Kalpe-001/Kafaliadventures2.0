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
      fullName,
      email,
      phone,
      trek,
      travelDate,
      travelers,
      country,
      healthIssues,
      message,
      optionalSafari,
    } = req.body || {};

    // Basic validation
    if (

      !fullName ||
      !email ||
      !phone ||
      !country ||
      !trek ||
      !travelDate ||
      !travelers
    ) {
      return res.status(400).json({
        error: "Please fill in all required fields."
      });
    }

    // Save booking to Supabase
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          full_name: fullName,
          email: email,
          phone: phone,
          trek: trek,
          travel_date: travelDate,
          travelers: Number(travelers),
          message: message || null,
          country:country,
          health_issues: healthIssues || null,
          optional_safari: optionalSafari,

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
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCountry= escapeHtml(country);
    const safeHealthIssues= escapeHtml(healthIssues || "No health issues provided").replace(/\n/g, "<br>");
    const safeTrek = escapeHtml(trek);
    const safeTravelDate = escapeHtml(travelDate);
    const safeTravelers = escapeHtml(travelers);
    const safeOptionalSafari = escapeHtml(optionalSafari || "No").replace(/\n/g, "<br>");
    const safeMessage = escapeHtml(
      message || "No additional message provided."
    ).replace(/\n/g, "<br>");

    // Send booking notification
    const { error: emailError } = await resend.emails.send({
      from: "Kafali Adventures <onboarding@resend.dev>",
      to: ["khatriabhikalp2@gmail.com"],
      subject: `New Booking Request — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #172033;">
          
          <h2 style="margin-bottom: 8px;">
            New Booking Request
          </h2>

          <p style="color: #667085; margin-top: 0;">
            A new booking request has been submitted through the
            Kafali Adventures website.
          </p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <h3>Customer</h3>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Country:</strong> ${safeCountry}</p>
          
          <h3>Trip Details</h3>

          <p><strong>Trek / Package:</strong> ${safeTrek}</p>
          <p><strong>Travel Date:</strong> ${safeTravelDate}</p>
          <p><strong>Travelers:</strong> ${safeTravelers}</p>

          <h3>Message / Special Requests</h3>
          <p>${safeMessage}</p>
          <h3>Health Issues / Medical Information</h3>
          <p>${safeHealthIssues}</p>

          <h3>Optional Safari</h3>
          <p>${safeOptionalSafari}</p>
          
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p style="font-size: 13px; color: #667085;">
            Booking ID: ${escapeHtml(data.id)}
          </p>

        </div>
      `
    });

    // The booking is already safely stored in Supabase.
    // An email failure should NOT make the booking fail.
    if (emailError) {
      console.error("Resend email error:", emailError);
    }

    return res.status(200).json({
      success: true,
      booking: data
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: error.message || "Something went wrong."
    });
  }
}