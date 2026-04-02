import { Dropzone } from "../dropzone";
import { Button } from "../ui/button";
import { useState } from "react";

type DashboardTabType = "openingScreen" | "importDatabase";

interface ImportSelectorProps {
  onNewRecipeBook: () => void;
}

export default function ImportSelector({ onNewRecipeBook }: ImportSelectorProps) {
  const [activeTab, setActiveTab] = useState<DashboardTabType>("openingScreen");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-10">
      <Dropzone>
        {activeTab === "openingScreen" && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Welcome to WhatToCook</h2>
            <p className="text-center text-gray-500">
              Select a file to import your existing data. Supported formats: JSON, CSV, SQLITE.
            </p>
            <div className="flex items-center justify-center gap-12">
              <button onClick={onNewRecipeBook}>New Recipe Book</button>
              <Button onClick={() => setActiveTab("importDatabase")}>Open Recipe Book</Button>
            </div>
          </div>
        )}
        {activeTab === "importDatabase" && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Import Existing Data</h2>
            <p className="text-center text-gray-500">
              What database lol?
              <Button onClick={() => setActiveTab("openingScreen")}>Go back</Button>
            </p>
          </div>
        )}
      </Dropzone>
    </div>
  );
}