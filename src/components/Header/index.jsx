import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logOutIcon from "../../assets/icons/log-out.png";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogued } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch({ type: "auth/logout" });
    navigate("/login");
  };

  return (
    <header className="w-full h-16 p-4 mb-1 shadow-md flex justify-between items-center fixed z-10">
      <div className="text-xl font-semibold flex items-center">
        <span className="text-red-500 text-3xl font-bold ">Go</span>Scrum
      </div>
      {isLogued && (
        <nav>
          <ul className="flex gap-4 items-center mr-4">
            <li className="text-md cursor-pointer bg-">
              <a
                className="w-full p-2 border border-[#FF452B] rounded-lg outline-none bg-[#FF452B] text-white text-sm hover:bg-white hover:text-[#FF452B] hover:border-[#FF452B] transition-hover duration-200"
                type="button"
                href="
              https://mpago.la/1nP2EGd
              "
                target="_blank"
                rel="noreferrer"
              >
                Donar
              </a>
            </li>
            <li className="text-md cursor-pointer">
              <button type="button" onClick={handleLogout} className="h-6 w-6">
                <img
                  src={logOutIcon}
                  alt="log-out"
                  className="object-contain object-center"
                />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
