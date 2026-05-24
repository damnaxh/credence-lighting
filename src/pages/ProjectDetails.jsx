import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import BackButton from "../components/ui/BackButton";

const projects = [
  {
    id: 1,
    name: "Xtreme Zone",
    location: "Al Shifa, Dammam, Saudi Arabia",
    year: "2024",
    category: "Linear Lighting",
    description:
      "A premium entertainment and immersive lighting project designed to elevate customer experience through intelligent architectural illumination and dynamic linear systems.",

    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=70&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=70&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 2,
    name: "My Town",
    location: "Jeddah Village Mall, Saudi Arabia",
    year: "2024",
    category: "Architectural Lighting",

    description:
      "An elegant commercial lighting environment developed for immersive retail and hospitality experiences through warm ambient illumination.",

    hero:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=70&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=70&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=70&w=1200&auto=format&fit=crop",
    ],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        Project Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f5f2eb] min-h-screen">
<BackButton />
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.hero}
          alt={project.name}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.4em] text-xs text-[#d4b16a] mb-6"
          >
            Featured Project
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-6xl md:text-8xl font-serif leading-none"
          >
            {project.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            <p className="text-white/70">
              {project.location}
            </p>

            <p className="uppercase tracking-[0.2em] text-[#d4b16a] text-sm">
              {project.category}
            </p>

            <p className="text-white/50">
              {project.year}
            </p>
          </motion.div>

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-xs text-[#b89b5e] mb-6">
              Project Overview
            </p>

            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-black">
              Intelligent{" "}
              <span className="italic text-[#c8a96b]">
                Lighting
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-black/70 text-lg leading-9">
              {project.description}
            </p>
          </motion.div>

        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="px-4 md:px-8 pb-24">

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[1.5rem] group"
            >
              <img
                src={image}
                alt=""
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}