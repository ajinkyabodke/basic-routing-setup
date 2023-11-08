import { useParams } from "react-router-dom";
import MenuBar from "../components/menubar";

function Team() {
  const { teamId } = useParams(); // Access the "teamId" route parameter
  return (
    <>
      <MenuBar />
      <div className="bg-white min-h-screen ">
        <h2 className="text-4xl text-center p-20">
          Team Page - Team ID: {teamId}
        </h2>
        <h2 className="text-2xl text-center p-20">
          Now trying changing the URL (eg./about/team/2) and notice the change
        </h2>
      </div>
    </>
  );
}

export default Team;
