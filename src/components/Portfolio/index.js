import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'surf-report',
      description: 'Personal Portfolio',
      link: "https://github.com/Hunter-Zandri/personal-portfolio-web",
      repo: "https://github.com/Hunter-Zandri/personal-portfolio-web"
    },
    {
      name: 'pastel-puzzels',
      description: 'Weather Dashboard',
      link: "https://github.com/Hunter-Zandri/Weather-Dashboard",
      repo: "https://github.com/Hunter-Zandri/Weather-Dashboard"
    },
    {
      name: 'run-buddy',
      description: 'Work Day Scheduler',
      link: "https://github.com/Hunter-Zandri/Work-Day-Scheduler",
      repo: "https://github.com/Hunter-Zandri/Work-Day-Scheduler"
    },
    {
      name: 'led-wall',
      description: 'Code Quiz',
      link: "https://github.com/Hunter-Zandri/code-quiz004",
      repo: "https://hunter-zandri.github.io/code-quiz004/"
    },
    {
      name: 'calculator',
      description: 'Secure Password Genorator',
      link: "https://hunter-zandri.github.io/secure-password-generator/",
      repo: "https://github.com/Hunter-Zandri/secure-password-generator"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
