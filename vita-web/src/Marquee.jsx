
function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-200 text-xl p-3">
      <div className="inline-block animate-[marquee_15s_linear_infinite] hover:[animation-play-state:paused]">
        <a
          href="https://vita.spsnet.com/csm-vita/#"
          className="hover:text-blue-600"
        >
          SPS is showcasing VITA SEC-530 Compliance Services at COVITS 2025
        </a>
      </div>
    </div>
  );
}

export default Marquee;
