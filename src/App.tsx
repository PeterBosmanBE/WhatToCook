import "./App.css";
import useKeybinds from "./app/hooks/useKeybinds";
import { toast } from "sonner";
import Header from "@/components/layout/header";
import ImportSelector from "./components/layout/importSelector";
import { useState } from "react";
import { DatePickerDemo } from "./app/components/date-picker";

function App() {
  const [showImportSelector, setShowImportSelector] = useState(true);

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

  useKeybinds(handleCtrlC, { isCtrl: true, key: "c" });
  useKeybinds(handleCtrlV, { isCtrl: true, key: "v" });
  useKeybinds(handleCtrlX, { isCtrl: true, key: "x" });
  useKeybinds(handleCtrlZ, { isCtrl: true, key: "z" });

  return (
    <>
      <Header />
      <div className="app dark">
        {showImportSelector ||
          (import.meta.env.NODE_ENV === "development" && (
            <ImportSelector
              onNewRecipeBook={() => setShowImportSelector(false)}
            />
          ))}
        <div>
          <DatePickerDemo />
        </div>
      </div>
    </>
  );
}

export default App;
