import { motion } from "framer-motion";
import { Atom, Award, BookOpen, Crown, Globe, Shield, Sparkles, Star, Users, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import BentoGallery from "./BentoGallery";
import { GlowCard } from "./ui/spotlight-card";
import campusYeshwanthpur from "@/assets/campus-yeshwanthpur.png";
import campusBannerghatta from "@/assets/campus-bannerghatta.png";
import campusKengeri from "@/assets/campus-kengeri.png";
import campusCentral from "@/assets/campus-central.png";
import campusLavasa from "@/assets/campus-lavasa.png";

const highlights = [
  { icon: BookOpen, title: "Founded in 1969", desc: "Established as Christ College, pioneering innovative curricula and academic discipline in Indian higher education." },
  { icon: Award, title: "NAAC A+ Accredited", desc: "One of the first institutions in India accredited by NAAC in 1998, currently holding the prestigious A+ grade." },
  { icon: Globe, title: "Multi-Campus University", desc: "Spanning campuses across Bangalore, Pune Lavasa, and Delhi NCR with 40,000+ students from 60+ countries." },
  { icon: Users, title: "Deemed to be University", desc: "Conferred Deemed to be University status in 2008 by the Ministry of Human Resource Development, Government of India." },
];

const campuses = [
  { name: "Bangalore Yeshwanthpur Campus", img: campusYeshwanthpur },
  { name: "Bangalore Bannerghatta Campus", img: campusBannerghatta },
  { name: "Bangalore Kengeri Campus", img: campusKengeri },
  { name: "Bangalore Central Campus", img: campusCentral },
  { name: "Pune Lavasa Campus", img: campusLavasa },
  { name: "Delhi NCR Campus", img: "https://ncr.christuniversity.in/images/history1.png" },
];

const milestones = [
  { year: "2019", title: "Club Founded", desc: "EULIM Science Club was established under the School of Sciences at CHRIST (Deemed to be University), Delhi NCR Campus." },
  { year: "2020", title: "First Virtual Events", desc: "Adapted to virtual mode during the pandemic, hosting online seminars and panel discussions on emerging science topics." },
  { year: "2021", title: "Growing Community", desc: "Expanded membership and introduced the Journal Club and Mentorship Programme for peer learning." },
  { year: "2022", title: "First Science Exhibition", desc: "Hosted the inaugural Science Exhibition with categories like Discovery Constructs and Insight Showcase." },
  { year: "2023", title: "Corporate Partnerships", desc: "Launched corporate talks and industry partnerships, bridging the gap between academia and industry." },
  { year: "2024", title: "National Recognition", desc: "Club members participated in national science olympiads and inter-university research showcases." },
  { year: "2025", title: "Science Exhibition 2025", desc: "The flagship Science Exhibition returns with four categories — Discovery Constructs, Insight Showcase, Visionary Concepts, and Future Ventures — at Synergy Square." },
];

const team = [
  { name: "Shayan Azmi", role: "Architect of Inquiry", tag: "Leader", icon: Crown },
  { name: "Aryan S. Nair", role: "Catalyst Prime", tag: "Co-Leader", icon: Shield },
  { name: "Aryan Manna", role: "The Founding Nucleus", tag: "Ex-Leader | Mentor", icon: Star },
  { name: "Prashant Parwani", role: "The Guiding Proton", tag: "Ex Co-Leader | Mentor", icon: Star },
  { name: "Aryan Garg", role: "Signal Amplifier", tag: "PR & Sponsorship Head", icon: Sparkles },
  { name: "MD. Saif", role: "Field Orchestrator", tag: "Hospitality Head", icon: Sparkles },
];

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface InfoCardProps {
  title: string;
  content: ReactNode;
  img?: string;
  isItalic?: boolean;
}

const SectionHeader = ({ subtitle, title, description, icon: Icon }: SectionHeaderProps) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
    <span className="text-sm font-semibold text-primary tracking-widest uppercase">{subtitle}</span>
    <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
      {Icon && <Icon className="inline-block mr-3 text-primary" size={40} />}
      {title}
    </h2>
    {description && <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg">{description}</p>}
  </motion.div>
);

const InfoCard = ({ title, content, img, isItalic = false }: InfoCardProps) => (
  <div className="flex flex-col h-full">
    {img && (
      <div className="rounded-xl border border-border overflow-hidden mb-4">
        <img src={img} alt={title} className="w-full h-56 object-cover" loading="lazy" />
      </div>
    )}
    <div className="rounded-xl border border-border bg-card p-6 flex-grow">
      <h3 className="font-display text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className={`text-muted-foreground leading-relaxed text-sm ${isItalic ? "italic" : ""}`}>{content}</p>
    </div>
  </div>
);

export default function AboutHistoryTeamSection() {
  return (
    <>
      <section id="about" className="relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader subtitle="About the University" title="CHRIST (Deemed to be University)" description="Excellence and Service" />
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <InfoCard title="The Vision" content={<>CHRIST (Deemed to be University) was born out of the educational vision of <strong className="text-foreground">St Kuriakose Elias Chavara</strong>, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, <strong className="text-foreground">Carmelites of Mary Immaculate (CMI)</strong>, in 1831 which administers CHRIST (Deemed to be University).</>} img="https://ncr.christuniversity.in/images/history1.png" />
              <InfoCard title="The Journey" content="Established as 'Christ College' in 1969, it undertook path-breaking initiatives in Indian higher education. The UGC conferred Autonomy in 2004 and in 2008 declared it a Deemed to be University. Currently accredited with NAAC 'A+' Grade and ranked 63 in NIRF India Ranking 2025." img="https://ncr.christuniversity.in/images/history2.png" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard title="The University Today" content="The multi-disciplinary University focuses on teaching, research and service, offering programmes to about 40,000+ students across campuses in Bangalore, Pune Lavasa, and Delhi NCR. The campus is a living example of harmonious multiculturalism with students from all states and around 60 different countries." />
              <InfoCard title="Mission" content='"CHRIST (Deemed to be University) is a nurturing ground for an individual&apos;s holistic development to make effective contribution to the society in a dynamic environment."' isItalic />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlowCard glowColor="orange" className="p-6 h-full group">
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
            <h3 className="font-display text-2xl font-semibold text-center mb-8">Our Campuses</h3>
            <BentoGallery items={campuses.map((campus, i) => ({ label: campus.name, img: campus.img, span: i === 0 ? "md:col-span-2 md:row-span-2" : "" }))} />
          </motion.div>

          <div className="section-divider mb-24" />
          <SectionHeader subtitle="About the Club" title="EULIM Science Club" icon={Atom} />

          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 rounded-2xl border border-dashed border-border bg-muted/20 h-80 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors">
              <span className="text-4xl">📸</span>
              <span className="text-sm text-muted-foreground">Club Photo</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-3 space-y-5">
              {[
                "The Eulim Science Club, a vibrant and dynamic hub under the School of Sciences at CHRIST (Deemed to be University), Delhi NCR Campus, is the epicenter of intellectual curiosity and scientific exploration.",
                "Throughout the academic year, Eulim orchestrates a diverse array of events that cater to the inquisitive minds of the student body. From captivating corporate talks that bridge the gap between academia and industry, to immersive science exhibitions that showcase cutting-edge research and discoveries.",
                "The club also hosts thought-provoking panel discussions, bringing together experts from various scientific domains to debate and dissect contemporary issues."
              ].map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>)}
              <p className="text-foreground font-medium leading-relaxed italic border-l-2 border-primary pl-4">Eulim Science Club is not just about learning, it's about creating a vibrant culture of scientific inquiry, collaboration, and innovation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="history" className="relative py-24 md:py-32">
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-4">
          <SectionHeader subtitle="Our Journey" title="Club Milestones" description="From a small student-led initiative to the epicenter of scientific exploration at CHRIST Delhi NCR." />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {milestones.map((item, i) => (
              <motion.div key={item.year + item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={`relative flex items-start mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                <div className="absolute left-4 md:left-1/2 h-3 w-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-lg shadow-primary/30" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="font-display text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
                  <GlowCard glowColor="orange" className="mt-3 h-32">
                    <div className="absolute inset-0 bg-muted/15 flex items-center justify-center rounded-2xl"><span className="text-lg opacity-40">📸</span></div>
                    <span className="absolute bottom-2 left-3 text-xs text-muted-foreground opacity-60 z-10">Add photo</span>
                  </GlowCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative py-24 md:py-32">
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-4">
          <SectionHeader subtitle="The Neural Network" title="Meet the Catalysts" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlowCard glowColor="orange" className="p-6 text-center group">
                  <div className="mx-auto mb-4 h-36 w-36 rounded-full border-2 border-dashed border-border bg-muted/20 flex items-center justify-center group-hover:border-primary/40 transition-colors relative overflow-hidden z-10">
                    <span className="text-muted-foreground text-sm">📸 Add photo</span>
                    <motion.div className="absolute inset-0 rounded-full bg-primary/5" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} />
                  </div>
                  <div className="flex items-center justify-center gap-1.5 mb-1 z-10 relative">
                    <member.icon size={14} className="text-primary" />
                    <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  </div>
                  <p className="text-sm text-primary font-medium z-10 relative">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 z-10 relative">{member.tag}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
