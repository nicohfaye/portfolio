"use client";
import { Button } from "@/components/ui/button";
import { AudioLines } from "lucide-react";
import { motion } from "framer-motion";

const paths = ["M7 20v-12", "M3 12v-2", "M19 18v-8", "M11 22v-16", "M15 16v-4"];

const Navbar = () => {
  return (
    <div className="w-full  h-[64px]">
      <div className="w-full h-full flex flex-row items-center">
        <div className="flex-grow text-test pl-6">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-test cursor-pointer"
          >
            {paths.map((d, index) => (
              <motion.path
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                d={d}
                initial={{ y: 0 }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: index * 0.2, // Add delay for each path
                  },
                }}
              />
            ))}
          </motion.svg>
        </div>
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
