import React from "react";
import Snowfall from "react-snowfall";
// import cherry)0 to cherry_11.png from /Particles and make it a background falling down which follows cursor (each picture has individual cherry leaf)
const snowflake0 = document.createElement("img");
snowflake0.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_0.png";
const snowflake1 = document.createElement("img");
snowflake1.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_1.png";
const snowflake2 = document.createElement("img");
snowflake2.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_2.png";
const snowflake3 = document.createElement("img");
snowflake3.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_3.png";
const snowflake4 = document.createElement("img");
snowflake4.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_4.png";
const snowflake5 = document.createElement("img");
snowflake5.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_5.png";
const snowflake6 = document.createElement("img");
snowflake6.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_6.png";
const snowflake7 = document.createElement("img");
snowflake7.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_7.png";
const snowflake8 = document.createElement("img");
snowflake8.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_8.png";
const snowflake9 = document.createElement("img");
snowflake9.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_9.png";
const snowflake10 = document.createElement("img");
snowflake10.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_10.png";
const snowflake11 = document.createElement("img");
snowflake11.src =
  "https://raw.githubusercontent.com/ForLoopCodes/blossoms-studios/master/src/Elements/Particles/cherry_11.png";
export default function Particles() {
  return (
    <div className="particles">
      <Snowfall
        color="#fff"
        style={{ background: "#ffffff00" }}
        snowflakeCount={10}
        images={[
          snowflake0,
          snowflake1,
          snowflake2,
          snowflake3,
          snowflake4,
          snowflake5,
          snowflake6,
          snowflake7,
          snowflake8,
          snowflake9,
          snowflake10,
          snowflake11,
        ]}
        useTwinkleEffect={true}
        radius={[7, 7]}
        changeFrequency={100}
      />
    </div>
  );
}
