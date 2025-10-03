"use client";

import Image from "next/image";

const Project = () => {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-16 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 7H7v6h6V7z" /><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 12H5V5h10v10z" clipRule="evenodd" />
          </svg>
          <h2 className="text-5xl font-bold">Projects</h2>
        </div>

        {/* Project Card */}


  <div className="flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-[#2f2f2f] text-black dark:text-white p-6 rounded-xl shadow-md border border-gray-300 dark:border-zinc-700 transition transform duration-500" style={{transitionDelay: '0ms'}}>
          {/* Text Content */}
          <div className="flex-1 mb-10 lg:mb-0 lg:mr-12">
            <p className="text-pink-600 font-medium mb-2">— Software Supply Chain</p>
            <h3 className="text-4xl font-extrabold mb-4 leading-snug">
              Security Landscape of VS Code Extensions
            </h3>
            <p className="text-md mb-6">
              It's a semester project of class Software Supply Chain which I took it in Spring semester (2025) where I'd performed static and supply chain security analysis on the top 500 VS Code extensions using SAST and OpenSSF 
                tools for the course project.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "SAST", "OPENSSF", "SemGREP", "Horusec", "OpenSSF", "Software Supply Chain", "Security"
              ].map((tag) => (
                <span key={tag} className="bg-zinc-800 text-sm text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            {/* <div className="flex space-x-4">
              <a
                href="https://auburn.edu/~azs0382/"
                target="_blank"
                className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold"
              >
                Link ↗
              </a>
              <a
                href="https://www.linkedin.com/posts/ayush-singh-a70a07156_html5-css3-javascript-activity-6836244924380385280-OnSp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACWGTTQBIiB5CeFeOHi20T6qm3lgPck_BXU"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition text-white font-semibold"
              >
                Demo ↗
              </a>
            </div> */}
          </div>

          {/* Image Section */}
          {/* <div className="flex-1">
            <Image
              src="/images/project1.jpg"
              alt="CHILLAX"
              width={700}
              height={500}
              className="rounded-xl border-[2px] border-gray-600"
            />
          </div> */}
  </div>


        <div className="flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-[#2f2f2f] text-black dark:text-white p-6 mt-[50px] rounded-xl shadow-md border border-gray-300 dark:border-zinc-700 transition transform duration-500" style={{transitionDelay: '80ms'}}>
          {/* Text Content */}
          <div className="flex-1 mb-10 lg:mb-0 lg:mr-12">
            <p className="text-pink-600 font-medium mb-2">— DBMS Bookstore System</p>
            <h3 className="text-4xl font-extrabold mb-4 leading-snug">
              Online Bookstore System
            </h3>
            <p className="text-md mb-6">
              It's a semester project of class Advanced DBMS which I took it in Spring semester (2024) where I'd developed Web User Interface using PHP and HTML to query the data, created and populated the bookstore database 
                with MySQL and implemented complex logic of SQL statements to retrieve data and use them to test web service.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "HTML5", "CSS3", "JavaScript", "Bootstrap4", "PHP", "MySQL", "Full Stack", "Database Management"
              ].map((tag) => (
                <span key={tag} className="bg-zinc-800 text-sm text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href="https://auburn.edu/~azs0382/"
                target="_blank"
                className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold"
              >
                Link ↗
              </a>
              {/* <a
                href="https://www.linkedin.com/posts/ayush-singh-a70a07156_html5-css3-javascript-activity-6836244924380385280-OnSp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACWGTTQBIiB5CeFeOHi20T6qm3lgPck_BXU"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition text-white font-semibold"
              >
                Demo ↗
              </a> */}
            </div>
          </div>

          {/* Image Section */}
          {/* <div className="flex-1">
            <Image
              src="/images/project1.jpg"
              alt="CHILLAX"
              width={700}
              height={500}
              className="rounded-xl border-[2px] border-gray-600"
            />
          </div> */}
  </div>


        <div className="flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-[#2f2f2f] text-black dark:text-white p-6 mt-[50px] rounded-xl shadow-md border border-gray-300 dark:border-zinc-700 transition transform duration-500" style={{transitionDelay: '160ms'}}>
          {/* Text Content */}
          <div className="flex-1 mb-10 lg:mb-0 lg:mr-12">
            <p className="text-pink-600 font-medium mb-2">— Full Stack App</p>
            <h3 className="text-4xl font-extrabold mb-4 leading-snug">
              CHILLIFY - Fully responsive Spotify clone Web Application
            </h3>
            <p className="text-md mb-6">
              CHILLIFY is the clone of Spotify web based application having the Front-End Languages which I've used are HTML-5, CSS-3, JavaScript, Bootstrap-4 and for the Back-End, I've used PHP and MySQL. It's a fully responsive movie downloading website having the main page as interface of Netflix UI.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "HTML5", "CSS3", "JavaScript", "Bootstrap4", "PHP", "MySQL", "Full Stack", "Database Management",
                "Movie Surfing", "APIs"
              ].map((tag) => (
                <span key={tag} className="bg-zinc-800 text-sm text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/sayush950/CHILLIFY"
                target="_blank"
                className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold"
              >
                GitHub ↗
              </a>
              {/* <a
                href="https://www.linkedin.com/posts/ayush-singh-a70a07156_html5-css3-javascript-activity-6836244924380385280-OnSp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACWGTTQBIiB5CeFeOHi20T6qm3lgPck_BXU"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition text-white font-semibold"
              >
                Demo ↗
              </a> */}
            </div>
          </div>

          {/* Image Section */}
          {/* <div className="flex-1">
            <Image
              src="/images/project1.jpg"
              alt="CHILLAX"
              width={700}
              height={500}
              className="rounded-xl border-[2px] border-gray-600"
            />
          </div> */}
  </div>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-[#2f2f2f] text-black dark:text-white p-6 mt-[50px] rounded-xl shadow-md border border-gray-300 dark:border-zinc-700 transition transform duration-500" style={{transitionDelay: '240ms'}}>
          {/* Text Content */}
          <div className="flex-1 mb-10 lg:mb-0 lg:mr-12">
            <p className="text-pink-600 font-medium mb-2">— Full Stack App</p>
            <h3 className="text-4xl font-extrabold mb-4 leading-snug">
              CHILLAX - Fully responsive movie surfing Web Application
            </h3>
            <p className="text-md mb-6">
              CHILLAX is the movie surfing web based application having the Front-End Languages which I've used are HTML-5, CSS-3, JavaScript, Bootstrap-4 and for the Back-End, I've used PHP and MySQL. It's a fully responsive movie downloading website having the main page as interface of Netflix UI.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "HTML5", "CSS3", "JavaScript", "Bootstrap4", "PHP", "MySQL", "Full Stack", "Database Management",
                "Movie Surfing", "APIs"
              ].map((tag) => (
                <span key={tag} className="bg-zinc-800 text-sm text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/sayush950/CHILLAX"
                target="_blank"
                className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/posts/ayush-singh-a70a07156_html5-css3-javascript-activity-6836244924380385280-OnSp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACWGTTQBIiB5CeFeOHi20T6qm3lgPck_BXU"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition text-white font-semibold"
              >
                Demo Video↗
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/images/project1.jpg"
              alt="CHILLAX"
              width={700}
              height={500}
              className="rounded-xl border-[2px] border-gray-600"
            />
          </div>
  </div>
      </div>
    </section>
  );
};

export default Project;
