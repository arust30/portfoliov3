import React from "react";

function Experience() {
  return (
    <>
      <section class="bg-gradient-to-b from-primary to-white bg-gradient-anim duration-2000 dark:bg-gray-900 h-[200vh]">
        <div class="py-8 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white_alt mt-[30vh]">
            Experience
          </h2>
          <p class="text-light_gray sm:text-xl dark:text-gray-400">
            Here are a few places and people I've worked with:
          </p>
          <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
            <div class="card" data-aos="fade-right">
              <p class="text-2xl font-bold text-white_alt">Card Title 1</p>
            </div>
            <div class="card" data-aos="fade-right">
              <p class="text-2xl font-bold text-white_alt">Card Title 2</p>
            </div>
            <div class="card" data-aos="fade-right">
              <p class="text-2xl font-bold text-white_alt">Card Title 3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
