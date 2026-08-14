import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      email,
      phone,
      trek,
      travelDate,
      travelers,
      message
    } = req.body;

    // Basic validation
    if (
      !fullName ||
      !email ||
      !phone ||
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
          message: message || null
        }
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: "Unable to save booking."
      });
    }

    return res.status(200).json({
      success: true,
      booking: data
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: "Something went wrong."
    });
  }
}