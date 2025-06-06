"use client";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import React, { ReactNode } from "react";


const experienceData = [
  {
    title: "Graduate Assistant (Software Developer - Data Team)",
    org: "Auburn University RFID Lab, Auburn, AL",
    date: "Aug 2023 - *Present",
    icon: "💼",
    description: [
      "Streamline data pipelines to support tracking and lifecycle visibility for thousands of supplier evaluations.",
      <>
        Implement retailer-specific rules to automate RFID tag validation, working with major brands like <strong> Walmart, Nordstrom & many more.</strong>
      </>,
      "Redesign scalable MySQL databases to handle complex submission workflows, including tagging metadata, approvals, and submission history.",
      "Modernized the supplier validation platform by developing secure, high-performance REST APIs with Express.js as part of the MERN stack, replacing legacy architecture to streamline supplier submissions."
    ],
    links: [
      { label: "RFID Lab", url: "https://rfid.auburn.edu/" }
    ]
  },
  {
    title: "Graduate Student Researcher",
    org: "Samuel Ginn College of Engineering, Auburn University, Auburn, AL",
    date: "Aug 2024 - May 2025",
    icon: "🎓",
    description: [
      "Conducted graduate thesis research titled “Configuration Changes in Kubernetes Configuration Scripts,” involving a large-scale empirical study of 28,675 commits from 185 Kubernetes-related open-source repositories to analyze real-world configuration change patterns.",
      <>
        Developed a new set of structured taxonomy of configuration changes through a multi-phase qualitative coding process, building upon and extending <strong> Swanson’s taxonomy (1975).</strong>
      </>,
      "Identified the most frequently occurring categories of changes, offering actionable insights for improving Kubernetes DevOps tooling, deployment practices, and configuration management",
      "Advanced the understanding of configuration evolution and automation in cloud-native systems, with implications for DevOps, CI/CD pipeline optimization, and security compliance.",
      <>
        Research was partially funded by three{" "}
        <a
          href="https://www.nsf.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
        >
          National Science Foundation (NSF)
        </a>{" "}
        Awards:{" "}
        <a
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2247141"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
        >
          #2247141
        </a>
        ,{" "}
        <a
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2310179"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
        >
          #2310179
        </a>
        ,{" "}
        <a
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2312321"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
        >
          #2312321
        </a>
        ; underscoring its national significance and contribution to the field.
      </>,
      <>
  The study was also submitted to the{" "}
  <a
    href="https://conf.researchr.org/home/icse-2026"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
  >
    International Conference on Software Engineering (ICSE 2026)
  </a>
  , one of the premier conferences in software engineering, reflecting its academic rigor and relevance to the global research community.
</>
    ],
    links: [
      { label: "Masters Thesis", url: "https://etd.auburn.edu/handle/10415/9682" }
    ]
  },
  {
    title: "SDE Intern",
    org: "Prutor.ai, IIT Kanpur, India",
    date: "July 2022 - May 2023",
    icon: "💼",
    description: [
      <>
      <strong>SATHEE (Self Assessment Test and Help for Entrance Exams) </strong>
        is an initiative by the<strong> Ministry of Education Government of India </strong>
        to provide students free learning and assessment platform for <strong>Engineering, Medical, Banking, Staff Selection Commission (SSC) & many more.</strong>
      </>,
      "As an SDE Intern, I've contributed in the development work of testing and remodeling this E-Learning Platform. We’ve provided curriculum to aspirants where they can practice and achieve proficiency in learning skills.",
      "Led the Full Stack Development by incorporating AI-based features for adaptive learning experiences.",
      <>
        Improved content load time by 35% by optimizing backend API calls and Server-Side caching strategies, leading to faster and smoother access to learning materials for over <strong> 7 million users.</strong>
      </>,
    ],
    links: [
      { label: "SATHEE", url: "https://sathee.prutor.ai" }
    ]
  },
  {
    title: "Summer Trainee",
    org: "ICT Academy, IIT Kanpur, India",
    date: "June 2021 - Aug 2021",
    icon: "👨‍💻",
    description: [
      <>
        Developed Full Stack Web Applications using <strong> JavaScript, HTML5, CSS3, and MySQL, </strong> enhancing feature delivery.
      </>,
      <>
        I'd completed my summer training as a Full Stack Developer (HTML5, CSS3, JS Bootstrap, PHP with MySQL) from 
        <a
    href="https://eicta.iitk.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
  > E&ICT Academy, IIT Kanpur.</a>
      </>,
    ],
    links: [
      { label: "Certificate1", url: "https://media.licdn.com/dms/image/v2/C4D2DAQHNWvrPdBF91g/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1659964048234?e=1749531600&v=beta&t=ngIz1SYGMpVsV-QWTtqT1oObRFDr0EVZiLTGmXO16bI" },
      { label: "Certificate2", url: "https://media.licdn.com/dms/image/v2/C4D2DAQGxn1q_MomMLg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1659964001602?e=1749531600&v=beta&t=2k5vARGya4ueddfzaAtYZsQNLRRbtazzjz4VDCi2blA" }
    ]
  },
  {
    title: "Full Stack Developer Intern",
    org: "Robust Results Pvt. Ltd., India",
    date: "June 2021 - Aug 2021",
    icon: "💼",
    description: [
      <>
        Developed Full Stack Web Applications using <strong> JavaScript, HTML5, CSS3, and MySQL, </strong> enhancing feature delivery.
      </>,
      <>
        Built dynamic frontend interfaces using modern full-stack technologies and integrated them with <strong> RESTful APIs,</strong> resulting in a 40% reduction in development cycle by implementing reusable Bootstrap4 components.
      </>,
    ],
    links: [
      { label: "Certificate", url: "https://media.licdn.com/dms/image/v2/C562DAQGskjmvS8x-sA/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1629379867127?e=1749531600&v=beta&t=uxLodUTyU0oxyq5-d9_Sr-mgoBIzd_Qe3HSLff_lxWQ" }
    ]
  },
];

const ExtraCurricularData = [
  {
    title: "Vice President of Special Projects",
    org: "Indian Students Association at Auburn University, AL",
    date: "Aug 2023 - Nov 2024",
    icon: "🌍",
    description: ["My roles & responsibilities are to help the incoming students to get them settled at Auburn University in an easeful manner and get acclimatized with Auburn."],
    links: [{label: "ISA Auburn", url:"https://isa.auburn.edu/"}
    ]
  },
  {
    title: "Web Content Writer",
    org: "Wikipedia",
    date: "Jan 2023 - May 2023",
    icon: "💼",
    description: [],
    links: [
    ]
  },
  {
    title: "State level Soccer, Table Tennis Player",
    org: "KVIIT, Kanpur, India",
    date: "Jan 2023 - May 2023",
    icon: "🏆",
    description: [],
    links: [ {label: "KVIIT", url:"https://en.wikipedia.org/wiki/Kendriya_Vidyalaya_IIT_Kanpur"}
    ]
  },
  
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpanded(prev => (prev === idx ? null : idx));
  };

  const renderSection = (data: typeof experienceData, title: string, IconComponent: React.ReactNode, id?: string) => (
    <section id={id || title.toLowerCase().replace(/ /g, "-")} className="min-h-screen py-10 px-6 md:px-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-12 justify-center">
          {IconComponent}
          <h2 className="text-6xl font-bold">{title}</h2>
        </div>

        <div className="relative">
          <div className="space-y-16 pl-14">
            {data.map((exp, idx) => {
              const isExpanded = expanded === idx;
              const shortDesc = Array.isArray(exp.description) ? exp.description.slice(0, 2) : exp.description;

              return (
                <motion.div
                  key={idx + title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ type: "spring", stiffness: 40, damping: 18, mass: 0.6, delay: idx * 0.15 }}
                  className="relative bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-md border border-gray-300 dark:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition"
                >
                  <span className="absolute left-[-2.25rem] top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full border-4 border-fuchsia-500 bg-pink-600 shadow-[0_0_20px_rgba(255,0,255,0.6)]"></span>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">
                      <span className="mr-1">{exp.icon}</span>
                      {exp.title}
                    </h3>
                    <p className="font-medium text-gray-700 dark:text-gray-300">{exp.org}</p>
                    <p className="italic text-sm text-yellow-600 dark:text-yellow-400 mt-1 font-bold">{exp.date}</p>

                    <div className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed text-left">
                      {Array.isArray(exp.description) ? (
                        <ul className="list-disc list-inside space-y-1">
                          {(isExpanded ? exp.description : shortDesc).map((point, i, arr) => (
                            <li key={i}>
                              {point}
                              {(!isExpanded && i === 1) || (isExpanded && i === arr.length - 1) ? (
                                <button
                                  className="ml-2 text-cyan-600 dark:text-cyan-400 hover:underline inline"
                                  onClick={() => toggleExpand(idx)}
                                >
                                  {isExpanded ? "See Less" : "See More"}
                                </button>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{isExpanded ? exp.description : shortDesc}</p>
                      )}
                    </div>

                    {exp.links?.length > 0 && (
                      <div className="mt-4 flex flex-wrap justify-center gap-4">
                        {exp.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 dark:text-blue-400 font-medium underline hover:text-blue-600"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {renderSection(experienceData, "Experience", <BriefcaseIcon className="h-[90px] w-[90px] text-cyan-500" />, "experience")}
      <hr className="my-12 border-t border-gray-400 dark:border-gray-600 w-4/5 mx-auto" />
      {renderSection(ExtraCurricularData, "Extra Curricular Activities", <AcademicCapIcon className="h-[90px] w-[90px] text-fuchsia-500" />, "extra-curricular")}
    </>
  );
};

export default Experience;
