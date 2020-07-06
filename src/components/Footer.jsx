import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
      <p>MADE WITH ❤️ IN 🇮🇳</p>
    </footer>
  );
};
export default Footer;
