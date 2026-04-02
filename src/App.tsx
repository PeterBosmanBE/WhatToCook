import "./App.css";
import useKeybinds from "./utils/useKeybinds";
import { toast } from "sonner";
import Header from "@/components/Header";

function App() {
  const handleCtrlC = () => {
    toast.success("Copy Successful");
  };
  const handleCtrlV = () => {
    toast.success("Paste Successful");
  };
  const handleCtrlZ = () => {
    toast.success("Undo Successful");
  };
  const handleCtrlX = () => {
    toast.success("Cut Successful");
  };

  useKeybinds(handleCtrlC, {isCtrl: true, key: "c"});
  useKeybinds(handleCtrlV, {isCtrl: true, key: "v"});
  useKeybinds(handleCtrlX, {isCtrl: true, key: "x"});
  useKeybinds(handleCtrlZ, {isCtrl: true, key: "z"});

  return (
    <>
    <div className="absolute">
      <Header />
      </div>
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
