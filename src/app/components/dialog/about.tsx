import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../../components/ui/dialog";
import GetAppInfo from "@/utils/app-info";

export default function About( { aboutOpen, setAboutOpen } : { aboutOpen: boolean, setAboutOpen: (open: boolean) => void }) {
  const currentYear = new Date().getFullYear();
  return (
    <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>About</DialogTitle>
          <DialogDescription>
            {GetAppInfo().name} is a simple recipe manager.
            <br />
            It allows you to store your recipes in a simple and easy to use
            interface.
            <br />
            The project is open source and available on GitHub.
          </DialogDescription>
          <DialogDescription>
            Developed by{" "}
            <a
              className="text-white hover:underline"
              href={GetAppInfo().portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {GetAppInfo().creator}
            </a>
            .
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          WhatToCook v{GetAppInfo().version} 2026-{currentYear}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
