import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar.jsx";
import { Outlet } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <MenuBar />
      <div className="bg-white min-h-screen ">
        <div className="p-10">
  
          <div className="flex gap-5 justify-evenly text-3xl underline">
            <button onClick={() => navigate("/about/team/1")}>Team</button>
            <button onClick={() => navigate("/about/company/1")}>
              Company
             
              [Nesting route on same page]
            </button>
          </div>

          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
