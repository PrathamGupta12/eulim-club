import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { CSSProperties } from "react";
import PageLayout from "@/components/PageLayout";
import ActivitiesSection from "@/components/ActivitiesSection";
import SpecialEvents from "@/components/SpecialEvents";

type EventKey = "exhibition" | "quantum";

type ActivitiesThemeStyle = CSSProperties & {
  "--background": string;
  "--card": string;
  "--popover": string;
  "--primary": string;
  "--secondary": string;
  "--accent": string;
  "--ring": string;
  "--border": string;
  "--input": string;
  "--muted": string;
  "--muted-foreground": string;
  "--activities-glow": string;
  "--activities-grid": string;
  "--activities-surface": string;
};

const eventThemes: Record<EventKey, ActivitiesThemeStyle> = {
  exhibition: {
    "--background": "205 42% 8%",
    "--card": "218 29% 11%",
    "--popover": "218 29% 11%",
    "--primary": "191 100% 52%",
    "--secondary": "199 85% 42%",
    "--accent": "182 86% 55%",
    "--ring": "191 100% 52%",
    "--border": "196 48% 23%",
    "--input": "196 48% 23%",
    "--muted": "215 24% 15%",
    "--muted-foreground": "205 18% 66%",
    "--activities-glow": "hsla(191, 100%, 50%, 0.18)",
    "--activities-grid": "hsla(191, 100%, 50%, 0.18)",
    "--activities-surface": "linear-gradient(180deg, hsla(208, 48%, 8%, 0.92) 0%, hsla(221, 29%, 10%, 0.88) 100%)",
  },
  quantum: {
    "--background": "264 28% 8%",
    "--card": "268 22% 11%",
    "--popover": "268 22% 11%",
    "--primary": "0 95% 56%",
    "--secondary": "194 100% 56%",
    "--accent": "338 100% 60%",
    "--ring": "0 95% 56%",
    "--border": "336 47% 22%",
    "--input": "336 47% 22%",
    "--muted": "260 18% 15%",
    "--muted-foreground": "235 15% 64%",
    "--activities-glow": "hsla(0, 95%, 56%, 0.18)",
    "--activities-grid": "hsla(338, 90%, 60%, 0.12)",
    "--activities-surface": "linear-gradient(180deg, hsla(261, 30%, 8%, 0.92) 0%, hsla(278, 23%, 10%, 0.88) 100%)",
  },
};

const Activities = () => {
  const [activeEvent, setActiveEvent] = useState<EventKey>("exhibition");
  const [themePulse, setThemePulse] = useState(0);
  const activeTheme = eventThemes[activeEvent];

  const handleThemeChange = (event: EventKey) => {
    setActiveEvent(event);
    setThemePulse((value) => value + 1);

    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        const panel = document.querySelector<HTMLElement>(`[data-event="${event}"]`);
        panel?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <PageLayout>
      <motion.div
        className="pt-16 md:pt-20 activities-theme-shell"
        animate={activeTheme}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeEvent}-${themePulse}`}
            className={`activities-theme-sweep activities-theme-sweep-${activeEvent}`}
            initial={{ opacity: 0, scaleY: 0.2, y: -120 }}
            animate={{ opacity: [0, 0.95, 0], scaleY: [0.2, 1, 1.08], y: [-120, 0, 80] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="activities-theme-sweep-core" />
            <div className="activities-theme-sweep-lines" />
            <div className="activities-theme-sweep-accent" />
          </motion.div>
        </AnimatePresence>
        <div className="activities-theme-grid" />
        <div className="activities-theme-content">
          <div className="container mx-auto px-4 md:px-6">
            <SpecialEvents activeEvent={activeEvent} onThemeChange={handleThemeChange} />
          </div>
          <ActivitiesSection activeEvent={activeEvent} themePulse={themePulse} />
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Activities;
