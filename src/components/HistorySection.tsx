import { motion } from "framer-motion";
import { GlowCard } from "./ui/spotlight-card";

const milestones = [
  { year: "2019", title: "Club Founded", desc: "EULIM Science Club was established under the School of Sciences at CHRIST (Deemed to be University), Delhi NCR Campus." },
  { year: "2020", title: "First Virtual Events", desc: "Adapted to virtual mode during the pandemic, hosting online seminars and panel discussions on emerging science topics." },
  { year: "2021", title: "Growing Community", desc: "Expanded membership and introduced the Journal Club and Mentorship Programme for peer learning." },
  { year: "2022", title: "First Science Exhibition", desc: "Hosted the inaugural Science Exhibition with categories like Discovery Constructs and Insight Showcase." },
  { year: "2023", title: "Corporate Partnerships", desc: "Launched corporate talks and industry partnerships, bridging the gap between academia and industry." },
  { year: "2024", title: "National Recognition", desc: "Club members participated in national science olympiads and inter-university research showcases." },
  { year: "2025", title: "Science Exhibition 2025", desc: "The flagship Science Exhibition returns with four categories — Discovery Constructs, Insight Showcase, Visionary Concepts, and Future Ventures — at Synergy Square." },
];

export default function HistorySection() {
  return (
    <section id="history" className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Club Milestones</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From a small student-led initiative to the epicenter of scientific exploration at CHRIST Delhi NCR.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative flex items-start mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
            >
              <div className="absolute left-4 md:left-1/2 h-3 w-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-lg shadow-primary/30" />
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-sm font-bold text-primary">{item.year}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
                {/* Image placeholder with GlowCard */}
                <GlowCard glowColor="orange" className="mt-3 h-32">
                  <div className="absolute inset-0 bg-muted/15 flex items-center justify-center rounded-2xl">
                    <span className="text-lg opacity-40">📸</span>
                  </div>
                  <span className="absolute bottom-2 left-3 text-xs text-muted-foreground opacity-60 z-10">Add photo</span>
                </GlowCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
