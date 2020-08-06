import React from "react";
import memoryMaker from "../images/memoryMaker.png";
import stayingInTonight from "../images/stayingInTonight.png";
import employeeDirectory from "../images/employeeDirectory.png";
import weatherDashboard from "../images/weatherDashboard.png";
import dailyScheduler from "../images/dailyScheduler.gif";
import codingQuiz from "../images/codingQuiz.gif";
import ScrollUp from "../ScrollUp/ScrollUp";
import "./projectCard.style.css";
export default function ProjectCard(props) {
  const images = {
    memoryMaker,
    stayingInTonight,
    employeeDirectory,
    weatherDashboard,
    dailyScheduler,
    codingQuiz,
  };

  const { image, name, deployedLink, repositoryLink, overview } = props;

  return (
    <div className="col-sm-12 col-md-6 mb-4 projectCard">
      <div className="card">
        <h2 className="general-title"> {name}</h2>
        <img
          id="movie-poster"
          className="card-img"
          src={images[image]}
          alt="poster1"
        />
      </div>
      <div className="card-body rounded text-white">
        <h2 className="card-title" id="title-movie">
          <a href={deployedLink} className="btn  btn-primary" target="_blank">
            live demo
          </a>
        </h2>
        <h5 id="overview-movie">Project description:</h5>
        <br />
        <p>{overview}</p>
        <h3 className="card-text" id="rating-movie">
          <a href={repositoryLink} target="_blank">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </h3>
        <div>
        <ScrollUp/>

        </div>

      </div>
    </div>

    // <div className="col-sm-12 col-md-6 mb-4">
    //   <div className="banner">
    //     <img
    //       alt="preview of the project"
    //       className="card-img-top"
    //       src={images[image]}
    //     />
    //     <div className="heading">
    //       <a href={deployedLink}>
    //         <h3>{name}</h3>
    //       </a>
    //       <a href={repositoryLink}>
    //         <i className="fa fa-github fa-2x" aria-hidden="true"></i>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
