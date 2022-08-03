export default function PrimaryButton(props) {
  return (
    <div>
      <input
        type="submit"
        {...props}
        className={`w-full p-3 border border-[#FF452B]  rounded-lg outline-none bg-[#FF452B] text-white text-sm hover:bg-white hover:text-[#FF452B] hover:border-[#FF452B] transition-hover duration-200 ${props.className}`}
      />
    </div>
  );
}
