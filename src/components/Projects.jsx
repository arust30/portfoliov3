import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import NCSSMImage from "./images/NCSSMImage.png";
import WFUImage from "./images/WFUImage.png";
import ColumbiaImage from "./images/ColumbiaImage.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Flowbite",
      overview:
        "Since 1984, Flowbite has been serving up grab-and-go frozen daiquiris from its stores across the U.S. Its signature drinks, souvenir cups, and discounted refills have made Flowbite synonymous with great music, good vibes, and starting the best party in town.",
      image: NCSSMImage,
      skills: ["React", "TailwindCSS", "AWS", "Node.js", "Express", "MongoDB"],
      features: [
        "Responsive Design",
        "User Authentication",
        "Payment Processing",
        "Admin Dashboard",
        "RESTful API",
      ],
      link: "https://www.flowbite.com",
    },
    {
      id: 2,
      title: "ByteSize Learning",
      overview:
        "ByteSize Learning is a learning platform that provides short, bite-sized courses to help users learn new skills quickly and easily.",
      image: WFUImage,
      skills: ["React", "TailwindCSS", "AWS", "Node.js", "Express", "MongoDB"],
      features: [
        "Responsive Design",
        "User Authentication",
        "Payment Processing",
        "Admin Dashboard",
        "RESTful API",
      ],
      link: "https://www.bytesizelearning.com",
    },
    {
      id: 3,
      title: "Whirl Data Dashboard",
      overview:
        "Whirl Data Dashboard is a data visualization tool that helps users make sense of complex data sets.",
      image: ColumbiaImage,
      skills: ["React", "TailwindCSS", "AWS", "Node.js", "Express", "MongoDB"],
      features: [
        "Responsive Design",
        "User Authentication",
        "Payment Processing",
        "Admin Dashboard",
        "RESTful API",
      ],
      link: "https://www.whirldatadashboard.com",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-light_gray bg-gradient-anim duration-2000 dark:bg-gray-900 h-[200%]">
      <div className="py-8 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary mt-[30vh]">
          Projects
        </h2>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          {projects.map((project) => (
            <div key={project.id} className="text-center">
              <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 mb-4">
                {project.title}
              </h3>
              {project.skills.map((skill) => (
                <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  {skill}
                </span>
              ))}
              <div className="max-w-5xl mx-auto mt-8 lg:mt-16">
                <img
                  className="w-[50%] rounded-lg shadow-lg"
                  src={project.image}
                  alt="nothing"
                />
              </div>
              <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2 lg:mt-16">
                <div>
                  <div>
                    <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                      Overview
                    </h3>
                    <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                      {project.overview}
                    </p>
                  </div>
                </div>
                <div class="space-y-8">
                  <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                    Features
                  </h3>
                  <ul class="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} class="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
