import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <>
      <div className="flex max-w-6xl mx-auto">
        <Sidebar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export default App;
