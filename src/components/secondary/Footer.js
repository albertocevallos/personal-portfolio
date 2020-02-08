import React from "react";
import Hand from "../../assets/images/hand.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__contact">
          <img className="footer__contact--hand" src={Hand} alt="hand" /> If
          you&#39;d like to talk, shoot me an email at{" "}
          <a
            className="footer__contact--link"
            href="mailto:hi@cevallos.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            hi@cevallos.co
          </a>
          <div className="generic-news">
            [Please note website is still under construction{" "}
            <span role="img">🛠️</span>]
          </div>
        </div>
        <hr className="footer--hr"></hr>
        <div className="footer__tagline">
          <div className="footer__tagline--copyright">Alberto Cevallos ©</div>
          <div className="footer__tagline--date">2020</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
