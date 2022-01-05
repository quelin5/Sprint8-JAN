import React, { useState } from "react";
import "../App.css";
import defaultImage from "../images/defaultImage.jpeg";

const ShipListCard = (url) => {
  let r_url = JSON.stringify(url);
  let id = r_url.match(/\d+/);

  const [imgSrc, setImgSrc] = useState(
    `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  );

  return (
    <img
      src={imgSrc ? imgSrc : defaultImage}
      onError={() => setImgSrc(defaultImage)}
      alt=""
    />
  );
};

export default ShipListCard;
