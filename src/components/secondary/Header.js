import React from "react";
import Hand from "../../assets/images/rocket.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__media">
        <span className="header__media__con">
          <a
            className="header__media__con--links"
            href="https://twitter.com/acvlls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Products
          </a>
          <a
            className="header__media__con--links"
            href="https://github.com/albertocevallos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Experiments
          </a>
          <a
            className="header__media__con--links"
            href="https://medium.com/@albertocevallos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </span>
        <a
          className="header__media__email"
          href="mailto:acvllsh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          acvllsh@gmail.com
          <img src={Hand} alt="hand" />
        </a>
      </div>
      <div className="header__line">
        <div className="header__line--highlight"></div>
      </div>
    </nav>
  );
};

export default Header;
