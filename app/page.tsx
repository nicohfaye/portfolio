"use client";

import AnimateNum from "@/components/addons/animate-num";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        alt="bg"
        src="/grainy_sky.jpg"
        layout="fill"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="w-1/2 justify-center items-center ">
          <h1 className="font-bold text-4xl md:text-6xl xl:text-8xl text-test mt-8 md:mt-14 selection:bg-test-foreground">
            Nicolai H<span className="text-test">.</span> Faye
          </h1>
          <h2 className="font-medium text-xl/5 xl:text-4xl text-test mt-2 ml-1 selection:bg-test-foreground">
            Full-stack Developer & UI/UX Designer
          </h2>
        </div>
        <div className="hidden md:flex w-1/2 justify-start items-center">
          <h3 className="font-medium text-2xl xl:text-4xl ml-1 mt-8 text-test-foreground mr-16 selection:bg-test">
            Developing sleek, modern and responsive websites.
          </h3>
        </div>
        <div className="flex flex-col justify-center lg:justify-start lg:flex-row w-1/2 items-start mt-4 gap-y-8 md:gap-y-6 lg:space-x-8 pl-1">
          <div className="w-5/6 lg:w-1/3 ">
            <p className="font-medium text-sm/4 md:text-lg/5 text-test-foreground selection:bg-test">
              Hey I&apos;m <span>Nico</span>, a 23 year old Norwegian developer
              and UI/UX designer. I love to create, and I love technology.
              I&apos;m currently studying my 4th year of{" "}
              <span className="text-test-foreground bg-test">
                Computer Science
              </span>{" "}
              at NTNU Trondheim.
            </p>
          </div>
          <div className="w-5/6 lg:w-1/3 ">
            <p className="font-medium text-sm/4 md:text-lg/5 text-test-foreground selection:bg-test">
              With a passion for creating, I also love to make electronic music
              under my alias{" "}
              <span className="text-test-foreground bg-test">Coasting.</span> I
              usually post my music on Soundcloud, and in some instances on
              Spotify. <span className="underline">Listen here</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-3/5 justify-start mt-28 gap-x-14 pl-[92px]">
          <AnimateNum target={4} duration={1} text="Years of experience" />
          <AnimateNum target={12} duration={1} text="Successful Projects" />
          <AnimateNum target={39} duration={1} text="Satisfied customers" />
        </div>
      </div>
    </>
  );
}
