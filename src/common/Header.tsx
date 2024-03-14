import { Link, useLocation } from "react-router-dom";
import { navItems } from "../utils/constant";

export default function Header() {
  const location = useLocation();

  return (
    <div className="bg-white h-[14vh]">
      <div className="flex items-center w-[85%] m-auto py-2">
        <div>
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="h-[80px] w-[190px]" />
          </Link>
        </div>
        <ul className="ml-auto flex items-center gap-6">
          {navItems.map((nav, i) => {
            const isActive = location.pathname.startsWith(nav.path);

            return (
              <li
                className={`font-semibold text-xssm ${
                  isActive ? "text-lightBlue" : "hover:text-lightBlue/80"
                } `}
                key={i}
              >
                <Link to={nav.path} className="">
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
