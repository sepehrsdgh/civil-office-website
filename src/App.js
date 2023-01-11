import "./App.css";
import NavBar from "./components/navBar";
import NavICON from "./UI/navIcon";
import Chart from "./UI/chart";
import ChartSection from "./components/chartSection";
function App() {
  return (
    <div>
      <NavBar />
      <ChartSection />
      <div className="flex flex-row items-center p-4 text-center bg-slate-500 ">
        <div>icon</div>
        <div className="w-8 mx-3">بیا کار کنیم!</div>
        <div>ali</div>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-row items-center">
          <div className="text-4xl">+K</div>
          <div className="text-6xl">20</div>
        </div>
        <div className="w-36 h-36 bg-red-300">graphic image</div>
      </div>
    </div>
  );
}

export default App;
