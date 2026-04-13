import { motion } from "framer-motion";

export default function InfiniteGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base grid layer — very subtle structural lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.04) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Secondary finer grid — adds depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--secondary) / 0.02) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--secondary) / 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Dot intersections at major grid points */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Warm ambient glow — top left */}
      <div
        className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsl(var(--primary) / 0.04) 0%, transparent 70%)`,
        }}
      />

      {/* Cool ambient glow — bottom right */}
      <div
        className="absolute -bottom-[20%] -right-[15%] w-[60%] h-[60%] rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsl(var(--secondary) / 0.03) 0%, transparent 70%)`,
        }}
      />

      {/* Accent glow — center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsl(var(--primary) / 0.02) 0%, transparent 60%)`,
        }}
      />

      {/* Edge fades — blend grid into content seamlessly */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 8%, transparent 92%, hsl(var(--background)) 100%),
          linear-gradient(to right, hsl(var(--background)) 0%, transparent 5%, transparent 95%, hsl(var(--background)) 100%)
        `,
      }} />

      {/* Vignette overlay for depth */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.6) 100%)`,
      }} />
    </div>
  );
}
