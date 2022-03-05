import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'personal',
      description: 'Personal Portfolio',
      link: "https://github.com/Hunter-Zandri/personal-portfolio-web",
      repo: "https://github.com/Hunter-Zandri/personal-portfolio-web"
    },
    {
      name: 'weather',
      description: 'Weather dashboard',
      link: "https://github.com/Hunter-Zandri/Weather-Dashboard",
      repo: "https://github.com/Hunter-Zandri/Weather-Dashboard"
    },
    {
      name: 'work',
      description: 'Work Day scheduler',
      link: "https://github.com/Hunter-Zandri/Work-Day-Scheduler",
      repo: "https://github.com/Hunter-Zandri/Work-Day-Scheduler"
    },
    {
      name: 'code',
      description: 'Code quiz',
      link: "https://github.com/Hunter-Zandri/code-quiz004",
      repo: "https://hunter-zandri.github.io/code-quiz004/"
    },
    {
      name: 'password',
      description: 'Secure password genorator',
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
