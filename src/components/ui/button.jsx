export default function Button({
  children,
  className = "",
}) {
  return (
    <button
      className={`px-8 py-4 border border-[#c8a96b] text-[#c8a96b] hover:bg-[#c8a96b] hover:text-black transition duration-500 uppercase tracking-[0.2em] text-xs ${className}`}
    >
      {children}
    </button>
  );
}