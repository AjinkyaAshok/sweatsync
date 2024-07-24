import Video from "./components/Video";

import MiddleF from "./components/MiddleF";
import Down from "./components/Down";

import React from "react";
import Header from "./components/Header";
import TextTransition from "./components/TextTransition";

function Home() {
  return (
    <div className="bg-bla">
      <Header />
      <TextTransition />
      <Video />
      <MiddleF />
      <Down />
    </div>
  );
}

export default Home;
