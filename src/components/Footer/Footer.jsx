import React from "react";
// import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <img className="footer-logo" src="public/images/footer-logo.jpg"></img>
      <div>
        <p>Следить за новостями & слушать новую музыку:</p>
        <SocialMedia />
      </div>
      <div className="madeby">
        {" "}
        <a href="https://github.com/mariaklyass" target="_blank">
          <h4>
            2023, Made by Klyass @mariaklyass{" "}
            <svg>
              <use xlinkHref={`../public/icons/sprite.svg#github`}></use>
            </svg>{" "}
          </h4>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
