import TopRightArrow from "../assets/svg/top-right-arrow.svg";

type NavigateButtonProps = {
  text: string;
  bgColor?: string;
  navigate?: string;
};

const NavigateButton: React.FC<NavigateButtonProps> = ({
  text,
  bgColor = "#D4880C",
  navigate = "#",
}) => {
  const handleClick = () => {
    if (navigate) {
      window.location.href = navigate;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-fit flex gap-2 items-center px-5 py-3 font-semibold text-lg text-white rounded-md hover:opacity-80 transition-opacity duration-200"
      style={{ backgroundColor: bgColor }}
    >
      {text}
      <img src={TopRightArrow} height={20} width={20} alt="arrow" />
    </button>
  );
};

export default NavigateButton;
