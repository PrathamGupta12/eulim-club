import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Join EULIM Science Club</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to start your scientific journey? Reach out to us!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Mail, label: "Email Us", value: "eulim@university.edu", href: "mailto:eulim@university.edu" },
            { icon: MapPin, label: "Find Us", value: "School of Sciences Building", href: "#" },
            { icon: Instagram, label: "Follow Us", value: "@eulim_science", href: "#" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-8 hover:border-primary/30 transition-all"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon size={24} />
              </div>
              <h3 className="font-display font-semibold mb-1">{c.label}</h3>
              <p className="text-sm text-muted-foreground">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
