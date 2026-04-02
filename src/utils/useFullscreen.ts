import { useState, useCallback, useEffect } from "react";
import useKeybinds from "@/utils/useKeybinds";

export default function useFullscreen(): boolean {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(
    false
  );

  useEffect(() => {
    console.log("Refreshing");
  });

  const toggleFullscreen = useCallback(() => {
    console.log("Mijn Moeder is een moeder");
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
      console.log("Fullscreen Deactivate");
    }
    console.log("Fullscreen Test");
    setIsFullscreen(!!document.fullscreenElement)
  }, [isFullscreen]);

  //     useEffect(() => {
  //     const handleFullscreenChange = () => {
  //       setIsFullscreen(!!document.fullscreenElement);
  //     };

  //     document.addEventListener("fullscreenchange", handleFullscreenChange);

  //     return () => {
  //       document.removeEventListener("fullscreenchange", handleFullscreenChange);
  //     };
  //   }, []);

  useKeybinds(toggleFullscreen, { key: "F11" });
  return isFullscreen;
}
