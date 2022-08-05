import plusIcon from "../../assets/icons/plus.png";

export default function DeleteButton({ handleClick }) {
  return (
    <button
      type="button"
      className="bg-[#FF452B] rounded-full w-4 h-4 flex items-center justify-center"
      onClick={handleClick}
    >
      <img
        src={plusIcon}
        alt="plus-icon"
        className="rotate-45 object-cover p-1"
      />
    </button>
  );
}
