import React from "react";
import Project from "./Project";

import blockchain from "../img/blockChain1.jpg";
import sentiment from "../img/sentimentAnalysis.png";
import goalsImg from "../img/goals.png";
const projects = [
  {
    name: "Goal Setter app",
    image: goalsImg,
    image_alt: "secureOv-img",
    discription:
      "Several goals in mind? Let's keep them organized. This goal-setting tool enables users to create and delete goals.In the login and registration pages, tokens are used to verify users' identities. Implemented using MERN stack.",
  },
  {
    name: "Positive Review",
    image: sentiment,
    image_alt: "positive review img",
    discription:
      "Input a review the application would perform sentiment analysis using Mutinomial naive bayes model to predict if the review was positive or negetative. Model has a 90.8% accuracy",
  },
  {
    name: "SecureEVote",
    image: blockchain,
    image_alt: "secureEVote img",
    discription:
      "SecureEVote is a Secure, Robust Online voting system it uses Blockchain for tranparency as well as security & Aadhar autharization to uniquly identifying a voter. Result of the voting is provided instantly/live. It allows for voters to vote from anywhere and anytime.",
  },
];

function ProjectSection() {
  return (
    <section className="project-part">
      <div class="proj-names-col">
        <div class="proj-head">My Project</div>
        {projects.map((project) => {
          return <Project projectDetails={project} />;
        })}
        {/* <Project projectDetails={projects[0]} /> */}
        {/* <Project />
        <Project /> */}
        <div className="github-txt">
          let's head over to my <a href="github">github profile</a> to see more.
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
