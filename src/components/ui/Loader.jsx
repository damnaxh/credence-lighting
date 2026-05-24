import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-[#c8a96b]/10 blur-[180px]" />

      {/* GRID LIGHT EFFECT */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          className="text-white text-3xl md:text-6xl font-serif tracking-[0.25em] text-center"
        >
          CREDENCE LIGHTING
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-5 text-[#c8a96b] uppercase tracking-[0.45em] text-[10px] md:text-xs text-center"
        >
          Innovative Lighting • Integrated Solutions
        </motion.p>

        {/* LIGHT BAR */}
        <div className="mt-10 w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "250%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-24 bg-[#c8a96b]"
          />

        </div>

        {/* LOADING */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-6 text-white/40 uppercase tracking-[0.35em] text-[10px]"
        >
          Initializing Experience
        </motion.p>

      </div>

    </div>
  );
}