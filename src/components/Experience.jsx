import React from "react";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "ByteSize Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png",
      button: "Visit Website",
      link: "https://www.bytesizelearning.org",
    },
    {
      id: 2,
      title: "Let's Whirl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png",
      button: "Visit Website",
      link: "https://www.letswhirl.com",
    },
    {
      id: 3,
      title: "Yakkertech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png",
      button: "Visit Website",
      link: "https://www.yakkertech.com",
    },
    {
      id: 4,
      title: "LogTrack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png",
      button: "Visit Website",
      link: "https://www.thelogtrack.com",
    },
    {
      id: 5,
      title: "EatDinDin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png",
      button: "Visit Website",
      link: "https://www.eatdindin.com",
    },
    {
      id: 6,
      title: "Q Social Technologies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor. Sed euismod, nisl nec lacinia tincidunt, nunc sem lacinia tortor, vel lacinia nisl lorem eget dolor.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png",
      button: "Visit Website",
      link: "https://www.q-social.com",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-primary to-white bg-gradient-anim duration-2000 dark:bg-gray-900 h-[200vh] text-center">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white_alt mt-[30vh]">
        Experience
      </h2>
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6 text-left">
        <div className="grid grid-cols-1 gap-4 mt-8 xl:gap-12 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="object-cover w-full rounded-lg shadow-lg"
                src={experience.image}
                alt=""
              />
              <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {experience.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                <a
                  href={experience.link}
                  className="inline-flex items-center justify-center px-5 py-3 mr-8 text-base font-medium text-center rounded-lg bg-primary border-primary text-white_alt hover:bg-light_gray hover:text-primary"
                >
                  {experience.button}
                </a>

                <a
                  href={experience.link}
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray border border-black rounded-lg hover:bg-light_gray"
                >
                  {experience.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
