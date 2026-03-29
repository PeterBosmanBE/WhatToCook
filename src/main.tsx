import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContextMenu, ContextMenuTrigger } from "./components/ui/context-menu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[100vh] w-[100vw]">
        <App />
      </ContextMenuTrigger>
    </ContextMenu>
  </StrictMode>
);
