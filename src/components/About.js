import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  console.log(bio, links);
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : ""}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={links.linkedin} github={links.github} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;

//tenary
// if (theThinf) {
//   "dothis()";

// }
// else {
//   "dothat ()";
// }
// const result = thething ? "dothis" : "dothat"
