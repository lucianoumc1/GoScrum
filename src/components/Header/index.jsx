import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isLogued,
    currentUser: { userName, teamID },
  } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch({ type: "auth/logout" });
    navigate("/GoScrum/login");
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clickToCopy = () => {
    navigator.clipboard.writeText(teamID);
    toast.success("Team ID copiado al portapapeles", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getFirstLetter = (str) => str.charAt(0).toUpperCase();

  return (
    <header className="w-full h-16 p-6 mb-1 shadow-md flex justify-between items-center fixed z-10">
      <div className="text-xl font-semibold flex items-center">
        <span className="text-[#FF452B] text-3xl font-bold ">Go</span>Scrum
      </div>
      {isLogued && (
        <button
          type="button"
          className="bg-[#FF452B] h-9 w-9 block text-white font-bold text-xl text-center rounded-full relative cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
          ref={menuRef}
        >
          {getFirstLetter(userName)}
          <ul
            className={`absolute shadow-md overflow-hidden min-w-[180px] h-max top-full mt-1 right-0 bg-white border font-semibold text-sm mb-2 text-black rounded-lg border-t-0 ${
              openMenu ? "block" : "hidden"
            }`}
          >
            <li>
              <div className="flex items-center justify-start p-4 ">
                <button
                  type="button"
                  className="bg-[#FF452B] h-8 w-8 mr-2 block text-white font-bold text-lg text-center rounded-full relative cursor-pointer"
                >
                  {getFirstLetter(userName)}
                </button>
                <span className="">{userName}</span>
              </div>
            </li>
            <li>
              <a
                className="w-full py-2 border-[#FF452B] outline-none bg-[#FF452B] text-white text-sm hover:bg-white hover:text-[#FF452B] hover:border-[#FF452B]  transition-hover duration-200"
                type="button"
                href="https://mpago.la/1nP2EGd"
                target="_blank"
                rel="noreferrer"
              >
                Hacer donación
              </a>
            </li>
            <li className="py-2 hover:bg-[#e5e5e571]">
              <button type="button" onClick={clickToCopy}>
                Copiar ID Team
              </button>
            </li>
            <li className="py-2 hover:bg-[#e5e5e571]">
              <button onClick={handleLogout} type="button">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </button>
      )}
    </header>
  );
}
