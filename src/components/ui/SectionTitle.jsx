export default function SectionTitle({
  small,
  title,
  italic,
}) {
  return (
    <>
      <p className="uppercase tracking-[0.4em] text-xs text-[#c8a96b] mb-6">
        {small}
      </p>

      <h2 className="text-5xl md:text-7xl font-serif leading-tight">
        {title}{" "}
        <span className="italic text-[#c8a96b]">
          {italic}
        </span>
      </h2>
    </>
  );
}