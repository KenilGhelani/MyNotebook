import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-4 text-center"
      style={{backgroundColor: "black", color: "white"}}
    >
      <p>&copy; {currentYear} <strong>MyNotebook</strong>. All rights reserved.</p>

      <a href="https://www.linkedin.com/in/kenil-ghelani-985441260/">
        <i
          className="fa-brands fa-linkedin mx-2"
          style={{ color: "white", fontSize: "25px" }}
        ></i>
      </a>

      <a href="https://github.com/KenilGhelani">
        <i
          className="fa-brands fa-github mx-2"
          style={{ color: "white", fontSize: "25px" }}
        ></i>
      </a>
    </footer>
  );
};

export default Footer;
