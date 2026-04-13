import { motion } from "framer-motion";
import { Microscope, FileText, Lightbulb, Wrench, MapPin, Calendar, Clock } from "lucide-react";
import BentoGallery from "./BentoGallery";
import { GlowCard } from "./ui/spotlight-card";

import amIndustries from "@/assets/sponsors/am-industries.jpg";
import wellvora from "@/assets/sponsors/wellvora.jpg";
import friendsFm from "@/assets/sponsors/friends-fm.jpg";
import ekIndustries from "@/assets/sponsors/ek-industries.jpg";
import mdkf from "@/assets/sponsors/mdkf.jpg";
import ciic from "@/assets/sponsors/ciic.jpg";
import iic from "@/assets/sponsors/iic.jpg";
import cic from "@/assets/sponsors/cic.jpg";
import eulimLogo from "@/assets/eulim-logo.jpeg";

const exhibitionCategories = [
  {
    icon: Microscope,
    title: "Discovery Constructs",
    desc: "A group event (2–4 participants) where teams build working models based on Science & Technology. Projects must be original, relevant, and interesting — clearly defining the problem, hypothesis, experiment, data analysis, and conclusion.",
  },
  {
    icon: FileText,
    title: "Insight Showcase",
    desc: "A group event (2–3 participants) where teams present research through A3 portrait posters. Posters should include Introduction, Objectives, Methodology, Results, Discussion, Conclusion, and References with high-quality visuals.",
  },
  {
    icon: Lightbulb,
    title: "Visionary Concepts",
    desc: "An individual or group event (2–3 participants) focused on innovative start-up ideas based on Science & Technology. Present through posters, laptops, or custom websites — creativity is key.",
  },
  {
    icon: Wrench,
    title: "Future Ventures",
    desc: "An individual or group event (2–3 participants) where participants create handmade projects based on Science & Technology. Projects must be original and clearly presented — usage of unfair means leads to disqualification.",
  },
];

const exhibitionSponsors = [
  { name: "AM Industries", role: "Corporate Partner", logo: amIndustries },
  { name: "Wellvora Consultancy", role: "Community Partner", logo: wellvora },
  { name: "91.9 Friends FM", role: "Radio Partner", logo: friendsFm },
  { name: "EK Industries", role: "Industry Partner", logo: ekIndustries },
  { name: "MDKF", role: "Cultural & Creative Partners", logo: mdkf },
];

const quantumSponsors = [
  { name: "Eulim Science Club", role: "Organiser", logo: eulimLogo },
  { name: "CIIC", role: "Collaborator", logo: ciic },
  { name: "Institution's Innovation Council", role: "Partner", logo: iic },
  { name: "Christ Incubation Centre", role: "Partner", logo: cic },
];

const exhibitionPhotos = [
  { label: "Opening Ceremony", span: "md:col-span-2 md:row-span-2", img: "https://live.staticflickr.com/65535/54845014351_248207131a_c.jpg" },
  { label: "Student Projects", img: "https://live.staticflickr.com/65535/54844160522_02207994d2_b.jpg" },
  { label: "Exhibition Display", img: "https://live.staticflickr.com/65535/54845338505_000ca74e69_c.jpg" },
  { label: "Judging Panel", img: "https://live.staticflickr.com/65535/54844160122_dfd8448245_h.jpg" },
  { label: "Innovation Booth", img: "https://live.staticflickr.com/65535/54845271003_d029739670_b.jpg" },
  { label: "Award Ceremony", span: "md:col-span-2", img: "https://live.staticflickr.com/65535/54845260504_8cd7de79b0_b.jpg" },
  { label: "Team Photo", img: "https://live.staticflickr.com/65535/54845015236_55fd11234f_b.jpg" },
  { label: "Audience", img: "https://live.staticflickr.com/65535/54845339155_36bbdf3cfd_b.jpg" },
];

const quantumPhotos = [
  { label: "The Quest Begins", span: "md:col-span-2 md:row-span-2", img: "https://live.staticflickr.com/65535/55145781247_06376c09bd_c.jpg" },
  { label: "Clue Decoding", img: "https://live.staticflickr.com/65535/55147056710_a993cfcbb4_c.jpg" },
  { label: "Team Strategy", img: "https://live.staticflickr.com/65535/55147056725_2190a938bf_c.jpg" },
  { label: "Campus Hunt", img: "https://live.staticflickr.com/65535/55146679186_13aa653df9_b.jpg" },
  { label: "Challenge Station", img: "https://live.staticflickr.com/65535/55145781307_da2e331f9a_c.jpg" },
  { label: "Final Showdown", span: "md:col-span-2", img: "https://live.staticflickr.com/65535/55146839093_fb82993af7_c.jpg" },
  { label: "Victory Moment", img: "https://live.staticflickr.com/65535/55146839068_de2414eeed_b.jpg" },
  { label: "Group Photo", img: "https://live.staticflickr.com/65535/55147056770_f5e35dd8d8_b.jpg" },
];

function SponsorStrip({ sponsors, title }: { sponsors: typeof exhibitionSponsors; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <h4 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase text-center mb-6">{title}</h4>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {sponsors.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl bg-card border border-border overflow-hidden flex items-center justify-center group-hover:border-primary/40 transition-colors p-2">
              <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <span className="text-xs text-muted-foreground text-center leading-tight max-w-[80px]">{s.name}</span>
            <span className="text-[10px] text-primary/70">{s.role}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ActivitiesSection() {
  return (
    <section id="activities" className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">

        {/* ═══════ SECTION 1: SCIENCE EXHIBITION — "The Catalyst Arena" ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Flagship Event</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">The Catalyst Arena</h2>
          <p className="text-muted-foreground mt-2 text-lg">Science Exhibition 2025</p>
        </motion.div>

        {/* Event Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: Calendar, text: "09 October, 2025" },
            { icon: Clock, text: "11:15 AM" },
            { icon: MapPin, text: "Synergy Square" },
          ].map((m) => (
            <div key={m.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <m.icon size={16} className="text-primary" />
              <span>{m.text}</span>
            </div>
          ))}
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Join us for an extraordinary celebration of innovation and discovery at the Science Exhibition, set against the dynamic backdrop of Synergy Square. This highly anticipated event promises to captivate and inspire with its dynamic lineup of four distinct categories: <strong className="text-foreground">Discovery Constructs</strong>, <strong className="text-foreground">Insight Showcase</strong>, <strong className="text-foreground">Visionary Concepts</strong>, and <strong className="text-foreground">Future Ventures</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are a student eager to learn, a professional seeking the latest trends, or a curious individual passionate about science, this exhibition is an unmissable opportunity to immerse yourself in the latest advancements and visionary ideas.
            </p>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {exhibitionCategories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlowCard glowColor="orange" className="p-8 h-full group">
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Exhibition Gallery */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Catalyst Chronicles</h3>
          <BentoGallery items={exhibitionPhotos} />
        </motion.div>

        {/* Exhibition Sponsors */}
        <SponsorStrip sponsors={exhibitionSponsors} title="Collaborative Partners" />

        {/* ═══════ DIVIDER ═══════ */}
        <div className="section-divider my-24" />

        {/* ═══════ SECTION 2: QUANTUM QUEST — "The Enigma Expedition" ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Interactive Event</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">The Enigma Expedition</h2>
          <p className="text-muted-foreground mt-2 text-lg">Quantum Quest 2026</p>
        </motion.div>

        {/* Event Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: Calendar, text: "9th March, 2026" },
            { icon: Clock, text: "01:45 PM" },
            { icon: MapPin, text: "Synergy Square" },
          ].map((m) => (
            <div key={m.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <m.icon size={16} className="text-primary" />
              <span>{m.text}</span>
            </div>
          ))}
        </motion.div>

        {/* About Quantum Quest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quantum Quest 2026 is an event organised by the Eulim Science Club in collaboration with the <strong className="text-foreground">Christ Innovation and Incubation Centre (CIIC)</strong>. This event invites students from the School of Sciences to participate in a thrilling <strong className="text-foreground">"Stranger Things"</strong>-themed Treasure Hunt across the university campus.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Participants will unravel science fiction-inspired clues as they race to discover the hidden treasure — fostering scientific curiosity, critical thinking, teamwork, and creative problem-solving.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                <span className="font-semibold text-foreground">🏆 1st Place</span>
                <p className="text-muted-foreground mt-1">Gift Hamper + E-Certificate of Appreciation</p>
              </div>
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                <span className="font-semibold text-foreground">🎓 All Participants</span>
                <p className="text-muted-foreground mt-1">E-Certificate of Participation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quantum Quest Gallery */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Expedition Archives</h3>
          <BentoGallery items={quantumPhotos} />
        </motion.div>

        {/* Quantum Quest Sponsors */}
        <SponsorStrip sponsors={quantumSponsors} title="In Collaboration With" />
      </div>
    </section>
  );
}
