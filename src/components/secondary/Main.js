import React from "react";
import ProfilePic from "../../assets/images/ac.jpeg";
import MediumIcon from "../../assets/icons/medium.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="main__profile">
        <img
          draggable="false"
          className="main__profile--image"
          src={ProfilePic}
          alt="profile"
        ></img>
        <div className="main__profile--name">Alberto Cevallos</div>
        <div className="main__profile__info">
          <div className="main__profile__info--bio">Full Bio</div>
        </div>
      </div>
      <div className="main__bio">
        <h1 className="main__bio--heading">
          Alberto is a <span>designer</span>, <span>full-stack developer</span>{" "}
          and <span>entrepreneur</span>
        </h1>
        <h2 className="main__bio--subheading">
          He's currently finishing his bachelor's degree at{" "}
          <a
            href="https://twitter.com/ubc"
            target="_blank"
            rel="noopener noreferrer"
          >
            UBC
          </a>{" "}
          where he studies <span>mathematics</span> and <span>economics</span>.
          <br></br>
          He likes to <span>design</span>, <span>build</span> and{" "}
          <span>sell</span> his own products - check them out{" "}
          {/* <a href="#products" target="_blank" rel="noopener noreferrer"> */}
          below. {/* </a>{" "} */}
          He's also the founder of{" "}
          <a
            href="https://studiosmetal.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metal
          </a>{" "}
          🏗️, a technology studio dedicated to building interesting ventures.
        </h2>

        <div className="main__bio__icons">
          <a
            href="https://twitter.com/acvlls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="main__bio__icons--svg"
              src={TwitterIcon}
              alt="social media"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/albertocevallos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="main__bio__icons--svg"
              src={LinkedinIcon}
              alt="social media"
            ></img>
          </a>
          <a
            href="https://github.com/albertocevallos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="main__bio__icons--svg"
              src={GitHubIcon}
              alt="social media"
            ></img>
          </a>
          <a
            href="https://medium.com/@albertocevallos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="main__bio__icons--svg"
              src={MediumIcon}
              alt="social media"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
