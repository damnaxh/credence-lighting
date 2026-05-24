// 
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export default function GlobalPresence() {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.5;
    globeRef.current.controls().enableZoom = false;
  }, []);

  const points = [
    {
      lat: 25.2048,
      lng: 55.2708,
      name: "Dubai",
    },
    {
      lat: 20.5937,
      lng: 78.9629,
      name: "India",
    },
    {
      lat: 23.8859,
      lng: 45.0792,
      name: "Saudi Arabia",
    },
    {
      lat: 26.0667,
      lng: 50.5577,
      name: "Bahrain",
    },
    {
      lat: 56.1304,
      lng: -106.3468,
      name: "Canada",
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[220px] bg-[#c8a96b]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[0.4em] text-xs text-[#c8a96b] mb-5">
              Worldwide Reach
            </p>

            <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-2">
              Global
              <span className="italic text-[#c8a96b]">
                {" "}Presence
              </span>
            </h2>

            <p className="text-white/50 max-w-xl leading-8 mb-10">
              Delivering premium lighting experiences across
              commercial, hospitality, retail, and entertainment
              projects worldwide.
            </p>

            {/* COUNTRY LIST */}
            <div className="space-y-5">

              {points.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <div className="w-3 h-3 rounded-full bg-[#c8a96b]" />

                  <h3 className="text-white text-lg tracking-wide">
                    {country.name}
                  </h3>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT GLOBE */}
          <div className="relative flex justify-center">

            {/* GLOBE CONTAINER */}
            <div className="relative border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[32px] overflow-hidden w-full max-w-[600px] h-[550px]">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 pointer-events-none" />

              <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                backgroundColor="rgba(0,0,0,0)"
                pointsData={points}
                pointAltitude={0.02}
                pointRadius={0.5}
                pointColor={() => "#c8a96b"}
                atmosphereColor="#c8a96b"
                atmosphereAltitude={0.12}
                labelsData={points}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelText={(d) => d.name}
                labelSize={1}
                labelDotRadius={0.3}
                labelColor={() => "#ffffff"}
                width={600}
                height={550}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}