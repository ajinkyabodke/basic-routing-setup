
import { Link } from "react-router-dom";

function AboutMain() {
  return (
    <div className="bg-white">
      <h2 className="text-4xl text-center p-20">This is the About Page</h2>
      <div>
        <Link to="/about/team/1">Team 1</Link>
        <Link to="/about/company/1">Company 1</Link>
      </div>
    </div>
  );
}

export default AboutMain;
