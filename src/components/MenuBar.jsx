import { NavLink, useLocation } from "react-router-dom";

function MenuBar() {
  const location = useLocation();

  return (
    <div className="bg-white">
      <h1 className="text-center text-3xl">Testing Routing</h1>
      <div className="flex gap-5 justify-evenly text-3xl bg-slate-400">
        <NavLink
          to="/"
          exact
          className={`${
            location.pathname === "/" ? "text-blue-500" : "text-blue-200"
          } underline`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`${
            location.pathname === "/about" || location.pathname.startsWith("/about/") ? "text-blue-500" : "text-blue-200"
          } underline`}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={`${
            location.pathname.startsWith("/contact") ? "text-blue-500" : "text-blue-200"
          } underline`}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default MenuBar;
