import { createPortal } from "react-dom";

export default function Portal({ children }) {
  return createPortal(
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
      <div className="bg-white max-w-4xl w-11/12 min-w-[240px] min-h-[85%] rounded-lg p-4 shadow-md mb-4 mx-auto">
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
