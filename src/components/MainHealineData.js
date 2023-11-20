import React from "react";
import mainCover from "../images/center.jpg";
import { Image } from "react-bootstrap";
const MainHealineData = () => {
  return (
    <div style={{ width: "100%", height: "500px", marginTop: "30px" }}>
      <Image
        src={mainCover}
        alt="Your Image Alt Text"
        // fluid
        style={{ width: "80%", height: "100%", borderRadius: "2%" }}
      />
    </div>
  );
};

export default MainHealineData;
