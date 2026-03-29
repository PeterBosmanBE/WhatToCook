import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="app dark">
        <div className="flex items-center justify-center gap-12">
          <button onClick={() => console.log("test")}>
            Test Button
          </button>
          <button onClick={() => console.log("test2")}>
            Test Button 2
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
