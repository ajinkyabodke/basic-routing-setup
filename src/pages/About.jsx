import { useNavigate } from "react-router-dom";
import MenuBar from "../components/menubar";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <MenuBar />
      <div className="bg-white min-h-screen ">
        <div className="p-20">
          <div className="flex gap-5 justify-evenly text-3xl underline">
            <button onClick={() => navigate("/about/team/1")}>
              Team
            </button>
            <button onClick={() => navigate("/about/company/1")}>
              Company
            </button>
          </div>
        </div>
        <h2 className="text-4xl text-center ">This is About Page</h2>
      </div>
    </>
  );
}

export default About;
