import Headerplus from "./components/Headerplus";
import Video from "./components/Video";
// import VideoText from "./components/VideoText";
// import Trial from "./components/Trial";
import MiddleF from "./components/MiddleF";
import Down from "./components/Down";
import Testinimial from "./components/Testinimial";
// import Testinimials from "./components/Testiminials";
// import Payment from "./components/Payment";

// import Cards from "./components/Cards";
import Transition from "./components/Transition";
// import Footer from "./components/Footer";
// import TrialPage from "./components/TrialPage";

import React from "react";

function Home() {
  return (
    <div>
      <Headerplus />
      {/* <VideoText /> */}
      <Transition />
      <Video />
      <MiddleF />
      <Testinimial />
      {/* <Testinimials /> */}

      {/* <Cards /> */}
      <Down />
    </div>
  );
}

export default Home;
