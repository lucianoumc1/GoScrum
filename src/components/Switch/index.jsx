import "./Switch.css";

export default function Switch(props) {
  return (
    <div className="flex gap-3">
      <label className="switchBtn" htmlFor="switch">
        <input id="switch" type="checkbox" {...props} />
        <div className="slide"></div>
      </label>
      <span className="text-xs">{props.switchlabel}</span>
    </div>
  );
}
