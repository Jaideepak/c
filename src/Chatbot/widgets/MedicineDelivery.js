import React from "react";

import Link from "./Link";

const DeliveryLink = () => {
  const getUrl = () => {
    return `https://www.cowin.gov.in/`;
  };

  return <Link url={getUrl()} title={"Cowin app and get vaccinated."} />;
};

export default DeliveryLink;
