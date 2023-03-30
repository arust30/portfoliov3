import React from "react";
import ColumbiaPoloHeadshot from "../images/AndrewHeadshotColumbiaPolo.png";
// import BlueTieSuitHeadshot from "../images/AndrewHeadshotBlueTieSuit.png";
import "./wave.css"

function Header() {
  return (
    <>
        <div class="grid max-w-screen-xl h-[80vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Andrew Rust
            </h1>
            <p class="max-w-2xl mb-8 font-light text-gray lg:mb-8 md:text-lg lg:text-xl">
              I am a full-stack web developer with a passion for building stuff
              and helping people.
            </p>
            <a
              href="/"
              class="inline-flex items-center justify-center px-5 py-3 mr-6 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 ml-2 -mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
            <a
              href="/"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray border border-black rounded-lg hover:bg-light_gray focus:ring-4 focus:ring-gray"
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
