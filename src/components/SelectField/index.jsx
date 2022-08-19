export default function SelectField(props) {
  return (
    <label htmlFor={props.id} className={`text-sm ${props.className}`}>
      {props.id}
      <select
        {...props}
        className="p-2 border rounded-lg outline-none text-base w-full focus:border-blue-800"
        id={props.id}
      >
        {props.children}
      </select>
      {props.errors && (
        <div className="text-sm text-[#FF452B]">{`*${props.errors}`}</div>
      )}
    </label>
  );
}
