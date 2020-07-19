import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
      <p>MADE WITH <span role="img" aria-label="LOVE">❤️</span> IN <span role="img" aria-label="INDIA">🇮🇳</span></p>
    </footer>
  );
};
export default Footer;
