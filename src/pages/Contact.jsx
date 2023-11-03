import { useNavigate } from "react-router-dom";
import MenuBar from "../components/menubar";

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <MenuBar />
      <div className="bg-white ">
        <div className="p-20">
          <div className="flex gap-5 justify-evenly text-3xl underline">
            <button onClick={() => navigate("/about/team")}>Team</button>
            <button onClick={() => navigate("/about/company")}>Company</button>
          </div>
        </div>
        <h2 className="text-4xl text-center ">This is Contact Page</h2>
      </div>
    </>
  );
}

export default Contact;
