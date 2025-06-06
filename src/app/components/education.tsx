"use client";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const educationData = [
  {
    title: "Auburn University",
    subtitle: "Masters of Technology in Computer Science and Software Engineering",
    location: "Auburn, Alabama, USA",
    duration: (
      <>
        <span className="font-bold">GPA: 3.7/ 4, (2023-2025)</span>
      </>
    ),
    link: "https://www.auburn.edu",
  },
  {
    title: "DIT University",
    subtitle: "Bachelor of Technology in Computer Science and Engineering",
    location: "Dehradun, Uttarakhand, India",
    duration: (
      <>
        <span className="font-bold">GPA: 8.8/10, (2019-2023)</span>
      </>
    ),
    link: "https://www.dituniversity.edu.in",
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-[150px] px-4 sm:px-6 md:px-10 lg:px-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center text-center space-y-4 mb-10 justify-center">
          <AcademicCapIcon className="h-20 w-20 text-cyan-500" />
          <h2 className="text-6xl font-bold">Education</h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <a
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block"
            >
              <div className="bg-white dark:bg-[#2f2f2f] text-black dark:text-white p-6 mt-[50px] rounded-xl shadow-md border-l-4 border-cyan-400 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:scale-[1.01]">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg md:text-xl">{edu.title}</h3>
                  <p className="italic text-sm text-right text-gray-600 dark:text-gray-300">{edu.location}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm md:text-base">{edu.subtitle}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
