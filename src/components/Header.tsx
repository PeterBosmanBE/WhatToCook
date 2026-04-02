import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useFullscreen from "@/utils/useFullscreen";
import { useState } from "react";
import { Icons } from "./ui/icons";
import { useOperatingSystem } from "@/utils/useOperatingSystem";

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const today = new Date();
  const currentYear = today.getFullYear();
  const isMacOS: boolean = (useOperatingSystem() == "Mac");
  const copyKey = isMacOS ? "⌘" : "CTRL ";
  const isFullscreen: boolean = (useFullscreen())

  return (
    <>
      {/* About Dialog */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>About</DialogTitle>
            <DialogDescription>WhatToCook 2026-{currentYear}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Menubar className="w-screen">
        <Icons.Icon />
        {/* File Menu */}
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Import existing data</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>{copyKey}P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* Edit Menu */}
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>{copyKey}Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧{copyKey}Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Cut<MenubarShortcut>{copyKey}X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy<MenubarShortcut>{copyKey}C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste<MenubarShortcut>{copyKey}V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* View Menu */}
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={isFullscreen}

            >
              Toggle Fullscreen <MenubarShortcut>F11</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        {/* Help Menu */}
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={() =>
                window.open(
                  "https://github.com/PeterBosmanBE/WhatToCook/issues",
                  "_blank"
                )
              }
            >
              Report Issue
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => setAboutOpen(true)}>About</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
