import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const heroButtonRef = useRef(null);
  const topButtonRef = useRef(null);

  // prevents reopening instantly
  const [allowHoverOpen, setAllowHoverOpen] =
    useState(true);

  // NAVBAR ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // HOVER OPEN
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!allowHoverOpen || open) return;

      const checkProximity = (ref) => {
        if (!ref.current) return false;

        const rect =
          ref.current.getBoundingClientRect();

        const centerX =
          rect.left + rect.width / 2;

        const centerY =
          rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) +
            Math.pow(e.clientY - centerY, 2)
        );

        return distance < 70;
      };

      if (
        checkProximity(heroButtonRef) ||
        checkProximity(topButtonRef)
      ) {
        setOpen(true);
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [allowHoverOpen, open]);

  // CLOSE MENU
  const closeMenu = () => {
    setOpen(false);

    // stop instant reopen
    setAllowHoverOpen(false);

    setTimeout(() => {
      setAllowHoverOpen(true);
    }, 1200);
  };

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Brands", link: "#brands" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: scrolled ? 0 : -100,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-full z-40"
      >
        <div className="mx-auto mt-4 w-[92%] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-6 py-4 flex items-center justify-between">

          <a
            href="#hero"
            className="text-white tracking-[0.35em] uppercase text-sm"
          >
            Credence Lighting
          </a>

          <button
            ref={topButtonRef}
            onClick={() => setOpen(true)}
            className="text-white"
          >
            <Menu
              size={28}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </motion.nav>

      {/* HERO MENU BUTTON */}
      {!scrolled && (
        <motion.button
          ref={heroButtonRef}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => setOpen(true)}
          className="fixed top-7 right-7 z-50 text-white"
        >
          <Menu
            size={34}
            strokeWidth={1.5}
          />
        </motion.button>
      )}

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 180,
              }}
              className="fixed top-0 right-0 h-screen w-full md:w-1/2 bg-black/80 backdrop-blur-2xl border-l border-white/10 z-50 flex flex-col px-10 md:px-16 py-7 overflow-y-auto"
            >
              {/* GLOW */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c8a96b]/10 blur-[160px]" />

              {/* CLOSE */}
              <button
                onClick={closeMenu}
                className="absolute top-8 right-8 text-white z-20"
              >
                <X
                  size={34}
                  strokeWidth={1.5}
                />
              </button>

              {/* LINKS */}
              <div className="relative z-10 space-y-4 pt-10 flex-1">

                {navItems.map(
                  (item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.link}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: 80,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                      className="group flex items-center gap-4 text-5xl md:text-6xl text-white/90 hover:text-[#c8a96b] transition duration-300 font-serif"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={28}
                        className="opacity-0 group-hover:opacity-100 transition duration-300"
                      />
                    </motion.a>
                  )
                )}

                {/* DOWNLOADS */}
               <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="pt-6"
>
                  <Link
                    to="/downloads"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-3 border border-[#c8a96b] px-6 py-3 uppercase tracking-[0.25em] text-[10px] text-[#c8a96b] hover:bg-[#c8a96b] hover:text-black transition duration-500"
                  >
                    Downloads

                    <ArrowUpRight
                      size={16}
                    />
                  </Link>
                </motion.div>

              </div>

              {/* FOOTER */}
              {/* FOOTER */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
  text-4xl md:text-5xl
>
  <div className="border-t border-white/10 pt-8">
    
    <p className="text-white/40 tracking-[0.3em] uppercase text-xs">
      Luxury Interior Experience
    </p>

  </div>
</motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}