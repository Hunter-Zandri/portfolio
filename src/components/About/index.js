import React from 'react';
import coverImage from '/Users/hunterzandri/Desktop/portfolio/src/assets/cover/profile.jpg';
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={coverImage} alt="wooden background"></img>
        </div>
        <p>
        My Name is Hunter Zandri, I'm Kennebunk Maine and im currently enrolled in UNH full stack coding bootcamp.
        I work at an engineering startup were we build gas delivery systems for the semiconductor Industry. 
        I want to use what I what i learn in class in work and continue learning and practicing daily.        </p>
        <p>
        </p>
      </div>
    </section>
  );
}

export default About;

