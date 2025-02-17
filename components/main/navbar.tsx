"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full  h-[64px]">
      <div className="w-full h-full flex flex-row items-center">
        <div className="flex-grow text-test">Logo</div>
        <div className="hidden md:flex w-2/5 items-center space-x-4 min-w-[376px]">
          <Button variant="link" className="text-test font-medium text-md">
            Home
          </Button>
          <Button variant="link" className="text-test font-medium text-md">
            About
          </Button>
          <Button variant="link" className="text-test font-medium text-md">
            Contact
          </Button>
          <Button variant="link" className="text-test font-medium text-md">
            Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
