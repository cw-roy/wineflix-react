//NavigationLink.js
import React from "react";

const NavigationLink = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavigationLink;
