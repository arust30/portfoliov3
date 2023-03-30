import React, { useState } from "react";
import ColumbiaPoloHeadshot from "../images/AndrewHeadshotColumbiaPolo.png";
// import BlueTieSuitHeadshot from "../images/AndrewHeadshotBlueTieSuit.png";
import { ArrowDownTrayIcon, CheckIcon } from "@heroicons/react/24/outline";
import AndrewResume from "../images/RustAndrewSWEResumeMarch2023.pdf";

function Header() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = AndrewResume
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.download = "RustAndrewSWEResumeMarch2023.pdf"
    document.body.appendChild(link);
    link.click();
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
      document.body.removeChild(link);
    }, 5000);
  };

  return (
    <>
      <div class="grid max-w-screen-xl h-[75vh] px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Andrew Rust
          </h1>
          <p class="max-w-2xl mb-12 font-light text-gray lg:mb-8 md:text-lg lg:text-xl">
            I am a full-stack web developer with a passion for building stuff
            and helping people.
          </p>
          <a
            href="#download"
            style={{cursor: "pointer"}}
            onClick={handleDownload}
            className={`mt-4 inline-flex items-center justify-center px-5 py-3 mr-8 text-base font-medium text-center rounded-lg ${
              isDownloaded
                ? "bg-secondary border-secondary text-white_alt hover:secondary hover:border-secondary"
                : "bg-primary border-primary text-white_alt hover:bg-light_gray hover:text-primary"
            } border-2`}
          >
            {isDownloaded ? (
              <>
                Downloaded
                <CheckIcon className="w-5 h-5 ml-2 -mr-1" />
              </>
            ) : (
              <>
                Download Resume
                <ArrowDownTrayIcon className="w-5 h-5 ml-2 -mr-1" />
              </>
            )}
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray border border-black rounded-lg hover:bg-light_gray"
          >
            Contact Me
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img
              src={BlueTieSuitHeadshot}
              alt="Me in a Columbia polo"
              class="object-cover transition-opacity duration-500 ease-out"
            /> */}
          <img
            src={ColumbiaPoloHeadshot}
            alt="Me in a blue tie and suit"
            class="object-cover transition-opacity duration-500 ease-out opacity-100 hover:opacity-0"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
