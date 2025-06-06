"use client";
import { CloudIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon, BookOpenIcon, RocketLaunchIcon, WrenchIcon, UsersIcon } from "@heroicons/react/24/solid";

const skillsData = [
  {
    title: "Relevant Courses",
    icon: <BookOpenIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
    content: "Advanced Data Structures And Algorithms, Object-Oriented Programming (OOPS), Advanced Database Management System, Advacned Operating System, Advacned Computer Architecture, Software Supply Chain, User Interface Design and Evaluation, Data Mining, Cloud Computing: Platform as a Service(Paas)",
  },
  {
    title: "Programming Languages",
    icon: <RocketLaunchIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
    content: "C, Python, JavaScript",
  },
  {
    title: "Frontend",
    icon: <WrenchIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
    content: "HTML5, CSS3, Bootstrap4, React.js, JQuery",
  },
  {
    title: "Backend",
    icon: <WrenchIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
    content: "Node.js, Express.js, PHP, MySQL, MongoDB, OracleDB",
  },
  {
    title: "DevOps and Cloud",
    icon: <CloudIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
    content: "Docker, Kubernetes, Git, Vercel, Firebase ",
  },
  {
    title: "Soft Skills",
    icon: <UsersIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
    content: "Adaptability, Problem-solving, Teamwork, Communication, Leadership, Time Management, Enthusiastic, Critical Thinking",
  }
];
const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-[100px] px-6 md:px-20 bg-background text-foreground">
      <div className="max-w-10xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-12 flex items-center justify-center gap-4">
          <RocketLaunchIcon className="h-[50px] w-[50px] text-cyan-500" /> Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#2f2f2f] text-black dark:text-white p-6 rounded-xl shadow-md border-l-4 border-cyan-400 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:scale-[1.01]"
            >
              {skill.icon}
              <h3 className="text-xl font-bold text-cyan-400 text-center mb-2">{skill.title}</h3>
              <p className="text-center text-sm leading-relaxed">{skill.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
