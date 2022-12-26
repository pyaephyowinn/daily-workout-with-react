// import HeadlessTabs from "./components/HeadlessTabs";
import Dropdown from "./components/Dropdown";
import "./index.css"

function App() {
  return (
    <div className="bg-slate-700 text-slate-100 min-h-screen min-w-screen">
      <h2 className="text-3xl text-center">hello world</h2>
      <div className="w-96 mx-auto mt-2">
        {/* <HeadlessTabs /> */}
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
