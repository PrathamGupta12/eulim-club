import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Building2, Mail, Phone, Globe, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const sponsorTiers = [
  { name: "Platinum Catalyst", perks: "Logo on all materials, stage mention, exclusive booth, social media shoutouts", icon: "⚗️" },
  { name: "Gold Reactor", perks: "Logo on banners & website, social media feature, booth space", icon: "🔬" },
  { name: "Silver Element", perks: "Logo on website & certificates, social media mention", icon: "🧪" },
];

export default function SponsorUsSection() {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    sponsorshipTier: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName.trim() || !form.contactPerson.trim() || !form.email.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!form.email.includes("@")) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Proposal Received! 🤝", description: "Our team will reach out within 48 hours." });
      setForm({ companyName: "", contactPerson: "", email: "", phone: "", website: "", sponsorshipTier: "", message: "" });
      setSubmitting(false);
    }, 1200);
  };

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Partner With Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            The Fusion Chamber <Handshake className="inline-block ml-2 text-primary" size={36} />
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Fuel the next generation of scientific minds. Sponsor Eulim Science Club events and gain visibility among 500+ students, faculty, and industry professionals.
          </p>
        </motion.div>

        {/* Sponsorship Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {sponsorTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-6 text-center transition-all cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                form.sponsorshipTier === tier.name
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
              onClick={() => update("sponsorshipTier", tier.name)}
            >
              <span className="text-3xl mb-3 block">{tier.icon}</span>
              <h3 className="font-display font-bold text-lg mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground">{tier.perks}</p>
            </motion.div>
          ))}
        </div>

        {/* Sponsor Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">Submit a Sponsorship Proposal</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                    <Building2 size={14} className="text-primary" /> Company / Brand Name *
                  </label>
                  <Input
                    placeholder="e.g. Acme Corp"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                    <Handshake size={14} className="text-primary" /> Contact Person *
                  </label>
                  <Input
                    placeholder="e.g. Jane Smith"
                    value={form.contactPerson}
                    onChange={(e) => update("contactPerson", e.target.value)}
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                    <Mail size={14} className="text-primary" /> Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="e.g. sponsor@company.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                    <Phone size={14} className="text-primary" /> Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={20}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                  <Globe size={14} className="text-primary" /> Website
                </label>
                <Input
                  placeholder="e.g. https://company.com"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                  maxLength={255}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Preferred Tier
                </label>
                <div className="flex flex-wrap gap-2">
                  {sponsorTiers.map((tier) => (
                    <button
                      key={tier.name}
                      type="button"
                      onClick={() => update("sponsorshipTier", tier.name)}
                      className={`rounded-lg px-4 py-2 text-sm font-medium border transition-colors ${
                        form.sponsorshipTier === tier.name
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {tier.icon} {tier.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Message</label>
                <Textarea
                  placeholder="Tell us about your brand, goals, or any specific requirements…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  maxLength={1000}
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                {submitting ? "Sending…" : (
                  <>
                    <Send size={16} /> Submit Proposal
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
