import React from "react";

import UrlIcon from "../icons/call.svg";

const ContactLink = () => {
  return (
    <a href="tel:108" className="tel-link">
      <img className="url-icon" alt="CallIcon" src={UrlIcon} />
      <h1 className="tel-header"> Call 108 </h1>
    </a>
  );
};

export default ContactLink;
