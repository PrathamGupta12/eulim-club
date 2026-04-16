import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type EventKey = "exhibition" | "quantum";

interface EventCardProps {
  isActive: boolean;
  onActivate: () => void;
}

const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, onActivate: () => void) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onActivate();
  }
};

export const GlitchCard = ({ isActive, onActivate }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const showEffects = isHovered || isActive;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onActivate}
      onKeyDown={(event) => handleCardKeyDown(event, onActivate)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", damping: 20 }}
      className={`relative rounded-xl border p-5 md:p-8 overflow-hidden cursor-pointer group transition-[border-color,box-shadow,transform] duration-300 ${
        isActive ? "border-primary/60" : "border-border/50"
      }`}
      role="button"
      aria-pressed={isActive}
      aria-label="Show Quantum Quest details"
      tabIndex={0}
      style={{
        background: "hsla(270, 40%, 8%, 0.6)",
        backdropFilter: "blur(16px)",
        boxShadow: showEffects
          ? "0 0 40px hsla(0, 95%, 47%, 0.3), 0 0 80px hsla(0, 95%, 47%, 0.1)"
          : "0 0 20px hsla(0, 95%, 47%, 0.1)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(0 95% 47%), transparent)" }}
      />

      <div className="relative z-10">
        <div className="relative">
          <h3
            className={`text-xl md:text-2xl font-bold mb-3 text-foreground transition-all duration-100 ${
              showEffects ? "opacity-0" : ""
            }`}
          >
            Quantum Quest 2026
          </h3>

          {showEffects && (
            <>
              <h3
                className="text-xl md:text-2xl font-bold mb-3 absolute top-0 left-0"
                style={{
                  color: "hsl(0, 95%, 47%)",
                  animation: "glitch-1 0.15s infinite linear alternate-reverse",
                  opacity: 0.8,
                }}
              >
                Quantum Quest 2026
              </h3>
              <h3
                className="text-xl md:text-2xl font-bold mb-3 absolute top-0 left-0"
                style={{
                  color: "hsl(190, 100%, 50%)",
                  animation: "glitch-2 0.15s infinite linear alternate-reverse",
                  opacity: 0.8,
                }}
              >
                Quantum Quest 2026
              </h3>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                Quantum Quest 2026
              </h3>
            </>
          )}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          A thrilling campus-wide treasure hunt. Are you ready to enter the void?
        </p>

        <div className="flex items-center gap-2 text-sm">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "hsl(0, 95%, 47%)", boxShadow: "0 0 8px hsl(0, 95%, 47%)" }}
          />
          <span className="text-muted-foreground">Stranger Things Themed</span>
        </div>
      </div>

      {showEffects && (
        <motion.div
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: "hsla(0, 95%, 47%, 0.4)" }}
        />
      )}
    </motion.div>
  );
};

export const BlueprintCard = ({ isActive, onActivate }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const showEffects = isHovered || isActive;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onActivate}
      onKeyDown={(event) => handleCardKeyDown(event, onActivate)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", damping: 20 }}
      className={`relative rounded-xl border p-5 md:p-8 overflow-hidden cursor-pointer transition-[border-color,box-shadow,transform] duration-300 ${
        isActive ? "border-primary/60" : "border-border/50"
      }`}
      role="button"
      aria-pressed={isActive}
      aria-label="Show Science Exhibition details"
      tabIndex={0}
      style={{
        background: "hsla(270, 40%, 8%, 0.6)",
        backdropFilter: "blur(16px)",
        boxShadow: showEffects
          ? "0 0 40px hsla(190, 100%, 50%, 0.2), 0 0 80px hsla(190, 100%, 50%, 0.08)"
          : "0 0 20px hsla(270, 60%, 20%, 0.15)",
      }}
    >
      <AnimatePresence>
        {showEffects && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              backgroundPosition: ["0px 0px", "30px 30px"]
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              backgroundPosition: {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
              },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0 blueprint-grid"
          />
        )}
      </AnimatePresence>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)" }}
      />

      <motion.div
        animate={{
          z: showEffects ? 20 : 0,
          y: showEffects ? -4 : 0,
        }}
        transition={{ type: "spring", damping: 20 }}
        className="relative z-10"
        style={{ perspective: "600px", transformStyle: "preserve-3d" }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
          Science Exhibition
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A showcase of innovation, creativity, and scientific brilliance. Prepare to be amazed.
        </p>
      </motion.div>

      <motion.div
        animate={showEffects ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase pulse-badge"
        style={{
          background: "hsla(190, 100%, 50%, 0.15)",
          border: "1px solid hsla(190, 100%, 50%, 0.4)",
          color: "hsl(190, 100%, 50%)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Coming Soon
      </motion.div>
    </motion.div>
  );
};

export default function SpecialEvents({
  activeEvent,
  onThemeChange,
}: {
  activeEvent: EventKey;
  onThemeChange: (event: EventKey) => void;
}) {
  return (
    <div className="py-10 md:py-20 overflow-visible">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 overflow-visible">
        <BlueprintCard
          isActive={activeEvent === "exhibition"}
          onActivate={() => onThemeChange("exhibition")}
        />
        <GlitchCard
          isActive={activeEvent === "quantum"}
          onActivate={() => onThemeChange("quantum")}
        />
      </div>
    </div>
  );
}
