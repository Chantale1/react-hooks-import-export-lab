import React from "react";
import  { username, city}  from "../data/user";

// eslint-disable-next-line import/no-anonymous-default-export

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
