import MenuBar from "../components/menubar";

function Home() {
  return (
    <>
      <MenuBar />
      <div className="bg-white  min-h-screen">
        <h2 className="text-4xl text-center p-20">This is Home Page</h2>
      </div>
    </>
  );
}

export default Home;
