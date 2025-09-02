const colorClasses: Record<string, string> = {
  white: "text-white",
  green: "text-[#003d3d]",
  yellow: "text-[#FDC830]",
  dark: "text-[#003d3d]", // custom hex
};

interface LinkWithIconProps {
  label: string;
  href?: string;
  color?: "white" | "green" | "yellow";
  className?: string;
  onClick?: () => void;
}

export default function LinkWithIcon({
  label,
  href,
  color = "white",
  className = "",
  onClick,
}: LinkWithIconProps) {
  const textColor = colorClasses[color] || "text-white";

  const content = (
    <div
      className={`flex items-center gap-2 text-[14px] font-semibold underline ${textColor} ${className}`}
    >
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        height={15}
        width={15}
      >
        <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
      </svg>
    </div>
  );

  return (
    <a href={href} onClick={onClick} className="inline-block">
      {content}
    </a>
  );
}
