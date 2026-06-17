import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const leadSchema = z.object({
  name: z.string().min(1),
  business: z.string().min(1),
  whatsapp: z.string().min(1),
  source: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { name, business, whatsapp, source, utm_campaign, utm_source, utm_medium } = data;

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      throw new Error("Supabase not configured");
    }

    const supabase = createClient(url, key, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { error } = await supabase.from("leads").insert({
      name: name.trim(),
      business: business.trim(),
      whatsapp: whatsapp.trim(),
      source: source || "landing_page",
      utm_campaign: utm_campaign || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
    });

    if (error) {
      console.error("Lead insert error:", error);
      throw new Error("Failed to save lead");
    }

    return { success: true };
  });

