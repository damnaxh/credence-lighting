import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Downloads() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />
       <BackButton />
      <section className="pt-40 px-6 md:px-16 pb-24">

        <p className="uppercase tracking-[0.4em] text-xs text-[#c8a96b] mb-6">
          Downloads
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight">
          Company
          <span className="italic text-[#c8a96b]">
            {" "}Resources
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-20">

          {/* CARD */}
          <a
            href="/pdfs/catalogue.pdf"
            download
            className="group border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-[#c8a96b] transition duration-500"
          >
            <p className="uppercase tracking-[0.3em] text-xs text-[#c8a96b] mb-6">
              PDF Document
            </p>

            <h2 className="text-3xl font-serif mb-4">
              Product Catalogue
            </h2>

            <p className="text-white/50 leading-7">
              Explore our premium architectural
              and commercial lighting solutions.
            </p>

            <div className="mt-10 text-sm uppercase tracking-[0.3em] text-white/70 group-hover:text-[#c8a96b] transition duration-300">
              Download PDF ↗
            </div>
          </a>

        </div>

      </section>

      <Footer />

    </div>
  );
}