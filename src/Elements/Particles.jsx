import React from "react";
import Snowfall from "react-snowfall";
// import cherry)0 to cherry_11.png from /Particles and make it a background falling down which follows cursor (each picture has individual cherry leaf)
const snowflake0 = document.createElement("img");
snowflake0.src = "src/Elements/Particles/cherry_0.png";
export default function Particles() {
  return (
    <div className="particles">
      <Snowfall
        color="#fff"
        style={{ background: "#ffffff00" }}
        snowflakeCount={2}
        images={[snowflake0]}
      />
    </div>
  );
}
