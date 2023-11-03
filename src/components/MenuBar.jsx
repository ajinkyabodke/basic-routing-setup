import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();
  return (
    <div className="bg-white ">
      <h1 className="text-center text-3xl">Testing Routing</h1>
      <div className="flex gap-5 justify-evenly text-3xl bg-slate-400 underline">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </div>
  );
}

export default MenuBar;
