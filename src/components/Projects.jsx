import React from "react";

function Projects() {
  return (
    <>
      <section class="bg-gradient-to-b from-white to-light_gray bg-gradient-anim duration-2000 dark:bg-gray-900 h-[200vh]">
        <div class="py-8 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary mt-[30vh]">
            Projects
          </h2>
          <p class="text-primary sm:text-xl dark:text-gray-400">
            Here are a few things I've worked on:
          </p>
          <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
            <div class="card" data-aos="fade-right">
              <p class="text-2xl font-bold text-primary">Card Title 1</p>
            </div>
            <div class="card" data-aos="fade-right">
              <p class="text-2xl font-bold text-primary">Card Title 2</p>
            </div>
            <div class="card" data-aos="fade-right">
              <p class="text-2xl font-bold text-primary">Card Title 3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
