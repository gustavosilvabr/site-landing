import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export const submitLead = createServerFn({ method: "POST" })
  .handler(async ({ data }) => {
    const { name, business, whatsapp, source, utm_campaign, utm_source, utm_medium } = (data as unknown) as {
      name: string;
      business: string;
      whatsapp: string;
      source?: string;
      utm_campaign?: string;
      utm_source?: string;
      utm_medium?: string;
    };

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

