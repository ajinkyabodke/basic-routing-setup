import { useParams } from "react-router-dom";

function Company() {
  const { companyId } = useParams(); // Access the "companyId" route parameter
  return (
    <>
      <div className="bg-slate-300 min-h-screen ">
        <h2 className="text-4xl text-center p-20">
          Company Sub-Page - Company ID: {companyId}
        </h2>
        <h2 className="text-2xl text-center p-20">
          Now trying changing the URL (eg./about/company/2) and notice the
          change
        </h2>
      </div>
    </>
  );
}

export default Company;
