interface DividerProps {
  color?: string;
  width?: string;
  className?: string;
}

export default function Divider({
  color = "#ffffff",
  width = "w-full",
  className = "",
}: DividerProps) {
  return (
    <span
      className={`block mb-[20px] h-[2px] ${width} ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}
