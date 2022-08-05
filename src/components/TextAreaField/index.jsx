export default function TextAreaField(props) {
  return (
    <label htmlFor={props.id} className={`text-sm ${props.className}`}>
      {props.id}
      <textarea
        {...props}
        className={`p-2 border rounded-lg outline-none text-base w-full resize-none h-40 ${
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
