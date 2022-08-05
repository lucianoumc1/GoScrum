import plusIcon from "../../assets/icons/plus.png";

export default function OpenModalButton({
  handleClick,
  className,
  rotateIcon,
}) {
  return (
    <div className={className}>
      <button
        type="button"
        className="bg-[#FF452B] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        onClick={handleClick}
      >
        <img
          src={plusIcon}
          alt="open new task section"
          className={`object-cover p-1 transition-all ${
            rotateIcon ? "rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
}
