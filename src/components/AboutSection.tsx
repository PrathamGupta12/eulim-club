import { motion } from "framer-motion";
import { BookOpen, Award, Globe, Users, Atom } from "lucide-react";
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

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* University Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About the University</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">CHRIST (Deemed to be University)</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg">Excellence and Service</p>
        </motion.div>

        {/* Two-column layout with official images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="rounded-xl border border-border overflow-hidden mb-4">
                <img
                  src="https://ncr.christuniversity.in/images/history1.png"
                  alt="Christ University Campus"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-xl font-semibold mb-3 text-primary">The Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  CHRIST (Deemed to be University) was born out of the educational vision of <strong className="text-foreground">St Kuriakose Elias Chavara</strong>, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, <strong className="text-foreground">Carmelites of Mary Immaculate (CMI)</strong>, in 1831 which administers CHRIST (Deemed to be University).
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl border border-border overflow-hidden mb-4">
                <img
                  src="https://ncr.christuniversity.in/images/history2.png"
                  alt="Christ University Building"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-xl font-semibold mb-3 text-primary">The Journey</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Established as 'Christ College' in 1969, it undertook path-breaking initiatives in Indian higher education. The UGC conferred Autonomy in 2004 and in 2008 declared it a Deemed to be University. Currently accredited with NAAC 'A+' Grade and ranked 63 in NIRF India Ranking 2025.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">The University Today</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The multi-disciplinary University focuses on teaching, research and service, offering programmes to about 40,000+ students across campuses in Bangalore, Pune Lavasa, and Delhi NCR. The campus is a living example of harmonious multiculturalism with students from all states and around 60 different countries.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">Mission</h3>
              <p className="text-muted-foreground leading-relaxed italic text-sm">
                "CHRIST (Deemed to be University) is a nurturing ground for an individual's holistic development to make effective contribution to the society in a dynamic environment."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard glowColor="orange" className="p-6 h-full group">
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <f.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Campus Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Our Campuses</h3>
          <BentoGallery
            items={campuses.map((c, i) => ({
              label: c.name,
              img: c.img,
              span: i === 0 ? "md:col-span-2 md:row-span-2" : "",
            }))}
          />
        </motion.div>

        {/* EULIM Science Club Section */}
        <div className="section-divider mb-24" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About the Club</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            <Atom className="inline-block mr-3 text-primary" size={40} />
            EULIM Science Club
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl border border-dashed border-border bg-muted/20 h-80 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors"
          >
            <span className="text-4xl">📸</span>
            <span className="text-sm text-muted-foreground">Club Photo</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              The Eulim Science Club, a vibrant and dynamic hub under the School of Sciences at CHRIST (Deemed to be University), Delhi NCR Campus, is the epicenter of intellectual curiosity and scientific exploration. This prestigious club is more than just an academic society, it is a thriving community where minds converge to explore, innovate, and challenge the boundaries of knowledge.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Throughout the academic year, Eulim orchestrates a diverse array of events that cater to the inquisitive minds of the student body. From captivating corporate talks that bridge the gap between academia and industry, to immersive science exhibitions that showcase cutting-edge research and discoveries, every event is meticulously crafted to ignite the spark of curiosity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The club also hosts thought-provoking panel discussions, bringing together experts from various scientific domains to debate and dissect contemporary issues. These discussions provide a platform for students to engage with thought leaders, gain new perspectives, and refine their understanding of the scientific world.
            </p>
            <p className="text-foreground font-medium leading-relaxed italic border-l-2 border-primary pl-4">
              Eulim Science Club is not just about learning, it's about creating a vibrant culture of scientific inquiry, collaboration, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
