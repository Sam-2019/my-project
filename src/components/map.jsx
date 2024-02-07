import React from "react";
import Iframe from "react-iframe";

export default function Map({url}) {
  return (
    <Iframe
      url={url}
      width="490px"
      height="320px"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      className="rounded-xl"
    />
  );
}
