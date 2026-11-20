"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Lang } from "@/lib/i18n";

export default function Contact({ headline, description, address, lang }: { headline: string; description: string; address: string; lang: Lang }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const zh = lang === "zh";
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "feedd464-87ed-4106-aadd-3ed00bbc902b";
    setStatus("sending"); setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New contact request from Argillaart");
    formData.append("from_name", "Argillaart website");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send your message.");
      form.reset(); setStatus("success");
    } catch (caught) { setStatus("error"); setError(caught instanceof Error ? caught.message : "Unable to send your message."); }
  }
  return (
    <section id="contact" className="px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl rounded-[2.5rem] bg-paper p-10 md:p-14"
      >
        <h2 className="text-balance text-center font-display text-3xl italic text-clay md:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-center leading-relaxed text-clay-muted">{description}</p>
        <form onSubmit={submitForm} className="mt-8 space-y-5 text-left">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
          <div><label htmlFor="argillaart-name" className="text-sm font-medium text-clay">{zh ? "您的姓名" : "Your name"}</label><input id="argillaart-name" name="name" required autoComplete="name" className="mt-2 w-full rounded-2xl border border-ash/20 bg-paper px-4 py-3 text-clay outline-none placeholder:text-clay-muted focus:border-sienna" placeholder={zh ? "姓名" : "Name"} /></div>
          <div><label htmlFor="argillaart-email" className="text-sm font-medium text-clay">{zh ? "电子邮箱" : "Email address"}</label><input id="argillaart-email" name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-2xl border border-ash/20 bg-paper px-4 py-3 text-clay outline-none placeholder:text-clay-muted focus:border-sienna" placeholder="you@example.com" /></div>
          <div><label htmlFor="argillaart-message" className="text-sm font-medium text-clay">{zh ? "您的留言" : "How can we help?"}</label><textarea id="argillaart-message" name="message" required rows={5} className="mt-2 w-full resize-y rounded-2xl border border-ash/20 bg-paper px-4 py-3 text-clay outline-none placeholder:text-clay-muted focus:border-sienna" placeholder={zh ? "请告诉我们您的需求。" : "Tell us what you need."} /></div>
          <button type="submit" disabled={status === "sending"} className="inline-flex min-h-11 items-center rounded-full bg-sienna px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sienna">{status === "sending" ? (zh ? "发送中…" : "Sending…") : (zh ? "发送留言" : "Send message")}</button>
          <p aria-live="polite" className={status === "error" ? "text-sm text-red-700" : "text-sm text-clay-muted"}>{status === "success" && (zh ? "感谢您的留言。我们已收到您的信息。" : "Thanks — your message has been sent.")}{status === "error" && error}</p>
        </form>
        <div className="mt-8 flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ash-wash text-ash"><MapPin size={16} /></span><span className="max-w-[28ch] text-sm leading-snug text-clay">{address}</span></div>
      </motion.div>
    </section>
  );
}
