// import { motion } from "framer-motion";

// const products = [
//   {
//     title: "LED Downlights",
//     subtitle: "RECESSED • SURFACE • ADJUSTABLE",
//     image:
//       "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
//     large: false,
//   },
//   {
//     title: "Track & Spotlights",
//     subtitle: "RETAIL • GALLERY • COMMERCIAL",
//     image:
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
//     large: false,
//   },
//   {
//     title: "Decorative Fixtures",
//     subtitle: "CHANDELIERS • PENDANTS • WALL",
//     image:
//       "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
//     large: true,
//   },
//   {
//     title: "LED Screens & Video Walls",
//     subtitle: "INDOOR • OUTDOOR • ADVERTISING",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
//     large: true,
//   },
//   {
//     title: "Facade & Flood Lighting",
//     subtitle: "ARCHITECTURAL • BUILDING WASH",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
//     large: false,
//   },
//   {
//     title: "Landscape & Path Lights",
//     subtitle: "GARDEN • DRIVEWAY • BOLLARD",
//     image:
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
//     large: false,
//   },
// ];

// export default function ProductsSection() {
//   return (
//     <section className="min-h-screen bg-[#f5f2eb] px-6 md:px-12 py-24">
//       <div className="max-w-[1500px] mx-auto">

//         {/* TOP */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
//         >
//           <div>
//             <p className="uppercase tracking-[0.4em] text-xs text-[#b89b5e] mb-6">
//               What We Offer
//             </p>

//             <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">
//               Our Product{" "}
//               <span className="italic text-[#c8a96b]">
//                 Range
//               </span>
//             </h2>
//           </div>

//           <button className="border border-[#c8a96b] text-[#c8a96b] px-8 py-4 tracking-[0.2em] uppercase text-xs hover:bg-[#c8a96b] hover:text-white transition duration-500">
//             Enquire Now →
//           </button>
//         </motion.div>

//         {/* FILTERS */}
//         <div className="flex flex-wrap gap-3 mt-12">
//           {[
//             "All Products",
//             "Indoor",
//             "Outdoor",
//             "Entertainment",
//             "Automation",
//             "Signage",
//           ].map((item, index) => (
//             <button
//               key={index}
//               className={`px-6 py-3 text-xs uppercase tracking-[0.2em] border transition duration-300 ${
//                 index === 0
//                   ? "bg-[#c8a96b] text-white border-[#c8a96b]"
//                   : "border-black/10 text-black/60 hover:border-[#c8a96b] hover:text-[#c8a96b]"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-4 mt-16">

//           {products.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: index * 0.08,
//                 duration: 0.8,
//               }}
//               viewport={{ once: true }}
//               className={`group relative overflow-hidden cursor-pointer ${
//                 item.large
//                   ? "md:col-span-2 md:row-span-2"
//                   : ""
//               }`}
//             >
//               {/* IMAGE */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//               {/* CONTENT */}
//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-white text-2xl md:text-3xl font-serif">
//                   {item.title}
//                 </h3>

//                 <p className="text-[#d4b16a] text-xs tracking-[0.2em] uppercase mt-3">
//                   {item.subtitle}
//                 </p>
//               </div>

//               {/* HOVER BORDER */}
//               <div className="absolute inset-0 border border-white/0 group-hover:border-white/40 transition duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Indoor",
  "Outdoor",
  "Hospitality",
  "Facade",
  "Entertainment",
  "LED Screen",
  "Strech Ceiling",
  "Automation",
  "Retail",
];

const allProducts = [
  {
    category: "Indoor",
    title: "LED Downlights",
    subtitle: "RECESSED • SURFACE • ADJUSTABLE",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    large: false,
  },

  {
    category: "Indoor",
    title: "Track & Spotlights",
    subtitle: "RETAIL • GALLERY • COMMERCIAL",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    large: false,
  },

  {
    category: "Outdoor",
    title: "Facade Lighting",
    subtitle: "ARCHITECTURAL • BUILDING WASH",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
    large: true,
  },

  {
    category: "Entertainment",
    title: "LED Video Walls",
    subtitle: "EVENTS • STAGES • ADVERTISING",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    large: true,
  },

  {
    category: "Automation",
    title: "Smart Controls",
    subtitle: "VOICE • APP • SENSOR",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200",
    large: false,
  },

  {
    category: "Signage",
    title: "Neon Sign Systems",
    subtitle: "CUSTOM • RETAIL • BRANDING",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
    large: false,
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts =
    active === "All"
      ? allProducts
      : allProducts.filter(
          (item) => item.category === active
        );
        const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev === filteredProducts.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? filteredProducts.length - 1 : prev - 1
  );
};

  return (
    <section 
    id="products"
    className="min-h-screen bg-[#f5f2eb] px-6 md:px-12 py-24">
      <div className="max-w-[1500px] mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-[#b89b5e] mb-6">
              What We Offer
            </p>

            <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">
              Our Product{" "}
              <span className="italic text-[#c8a96b]">
                Range
              </span>
            </h2>
          </div>

          <button className="border border-[#c8a96b] text-[#c8a96b] px-8 py-4 tracking-[0.2em] uppercase text-xs hover:bg-[#c8a96b] hover:text-white transition duration-500">
            Enquire Now →
          </button>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-12">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
  setActive(item);
  setCurrentIndex(0);
}}
              className={`px-6 py-3 text-xs uppercase tracking-[0.2em] border transition duration-300 ${
                active === item
                  ? "bg-[#c8a96b] text-white border-[#c8a96b]"
                  : "border-black/10 text-black/60 hover:border-[#c8a96b] hover:text-[#c8a96b]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
{/* PRODUCTS */}

{active === "All" ? (

  /* ALL PRODUCTS GRID */
  <motion.div
    layout
    className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-4 mt-16"
  >
    <AnimatePresence mode="wait">

      {filteredProducts.map((item, index) => (
        <motion.div
          key={item.title}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className={`group relative overflow-hidden cursor-pointer ${
            item.large
              ? "md:col-span-2 md:row-span-2"
              : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl md:text-3xl font-serif">
              {item.title}
            </h3>

            <p className="text-[#d4b16a] text-xs tracking-[0.2em] uppercase mt-3">
              {item.subtitle}
            </p>
          </div>
        </motion.div>
      ))}

    </AnimatePresence>
  </motion.div>

) : (

  /* CATEGORY SHOWCASE */
  <motion.div
    key={active}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="grid md:grid-cols-2 gap-10 mt-20 items-center"
  >

    {/* LEFT CONTENT */}
    <div>
      <p className="uppercase tracking-[0.4em] text-xs text-[#b89b5e] mb-6">
        Premium Collection
      </p>

      <h3 className="text-5xl md:text-7xl font-serif text-black leading-tight">
        {active}{" "}
        <span className="italic text-[#c8a96b]">
          Solutions
        </span>
      </h3>

      <p className="mt-8 text-black/60 text-lg leading-8 max-w-xl">
        Explore our luxury {active.toLowerCase()} lighting
        systems designed for modern architectural spaces,
        premium interiors, commercial environments, and
        immersive experiences.
      </p>

      {/* ARROWS */}
      <div className="flex items-center gap-4 mt-10">

       <button
  onClick={prevSlide}
  className="w-14 h-14 rounded-full border border-[#c8a96b] flex items-center justify-center text-[#c8a96b] hover:bg-[#c8a96b] hover:text-white transition duration-500"
>
  ←
</button>
        <button
  onClick={nextSlide}
  className="w-14 h-14 rounded-full border border-[#c8a96b] flex items-center justify-center text-[#c8a96b] hover:bg-[#c8a96b] hover:text-white transition duration-500"
>
  →
</button>
      </div>
    </div>

    {/* RIGHT IMAGE SLIDER STYLE */}
    <div className="relative overflow-hidden rounded-[2rem]">

      <motion.img
        key={active}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        src={
  filteredProducts[currentIndex]?.image
}
        alt={active}
        className="w-full h-[700px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="absolute bottom-10 left-10">
        <h4 className="text-white text-4xl font-serif">
          {filteredProducts[currentIndex]?.title}
        </h4>

        <p className="text-[#d4b16a] uppercase tracking-[0.2em] text-xs mt-4">
          {filteredProducts[currentIndex]?.subtitle}
        </p>
      </div>

    </div>

  </motion.div>

)}
      </div>
    </section>
  );
}