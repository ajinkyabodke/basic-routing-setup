import MenuBar from "../components/MenuBar.jsx";

function Contact() {
  console.log("Contact Page");
  return (
    <>
      <MenuBar />
      <div className="bg-white  min-h-screen">
        <h2 className="text-4xl text-center p-20">This is Contact Page</h2>
      </div>
    </>
  );
}

export default Contact;
