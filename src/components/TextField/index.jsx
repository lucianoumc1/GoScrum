export default function TextField(props) {
  return (
    <label htmlFor={props.id} className={`text-sm ${props.className}`}>
      {props.id}
      <input
        {...props}
        className={`p-2 border rounded-lg outline-none text-base w-full ${
          props.errors ? "border-[#FF452B]" : ""
        }`}
        id={props.id}
      />
      {props.errors && (
        <div className="text-sm text-[#FF452B]">{`*${props.errors}`}</div>
      )}
    </label>
  );
}
