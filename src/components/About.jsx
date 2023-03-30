import React from "react";

// If I eventually get good images to go here, I'll uncomment these
// import NCSSMImage from "./images/NCSSMImage.png";
// import WFUImage from "./images/WFUImage.png";
// import ColumbiaImage from "./images/ColumbiaImage.png";

// For now, I'll just use the logos
import { BeakerIcon, BuildingLibraryIcon, AcademicCapIcon } from "@heroicons/react/24/outline";


//Experience logos
import LetsWhirlLogo from "./images/logos/LetsWhirlLogo.png";
import YakkertechLogo from "./images/logos/YakkertechLogo.svg";
import LogTrackLogo from "./images/logos/LogTrackLogoWhite.png";
import ByteSizeLogo from "./images/logos/ByteSizeLogo.png";

function About() {
  const education = [
    {
      id: 1,
      school: "North Carolina School of Science and Mathematics (NCSSM)",
      degree: "High School Diploma",
      dates: "2016 - 2018",
      image: BeakerIcon,
    },
    {
      id: 2,
      school: "Wake Forest University",
      degree:
        "Bachelor of Science in Engineering, Minor in Computer Science, Mathematics",
      dates: "2019 - 2022",
      image: BuildingLibraryIcon,
    },
    {
      id: 3,
      school: "Columbia University",
      degree: "Master of Science in Computer Engineering",
      dates: "2022 - 2023",
      image: AcademicCapIcon,
    },
  ];

  const experiences = [
    {
      id: 1,
      name: "ByteSize Learning",
      title: "Founder, Tech Lead",
      dates: "September 2020 - Present",
      image: ByteSizeLogo,
    },
    {
      id: 2,
      name: "Let's Whirl",
      title: "Software Engineer",
      dates: "May 2022 - Present",
      image: LetsWhirlLogo,
    },
    {
      id: 3,
      name: "Yakkertech",
      title: "Software Engineer",
      dates: "February 2023 - Present",
      image: YakkertechLogo,
    },
    {
      id: 4,
      name: "LogTrack",
      title: "Software Engineer",
      dates: "September 2022 - May 2023",
      image: LogTrackLogo,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-primary to-white bg-gradient-anim duration-2000 dark:bg-gray-900 h-[200%] text-center">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white_alt">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row">
        {/* Left half - render education */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          {education.map((item) => (
            <div key={item.id} className="flex mb-4">
              <img
                src={item.image}
                alt={item.school}
                className="w-1/3 h-auto mr-4 rounded-lg"
              />
              <div className="flex-1 text-left">
                <h4 className="text-lg font-bold">{item.school}</h4>
                <p className="font-light">{item.degree}</p>
                <p className="font-light">{item.dates}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right half - render experience */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          {experiences.map((item) => (
            <div key={item.id} className="flex mb-4">
              <div className="flex-1 text-right">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="font-light">{item.title}</p>
                <p className="font-light">{item.dates}</p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-1/3 h-auto mr-4 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
