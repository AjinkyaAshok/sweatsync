import Home from "./Home";
// import WorkoutPlans from "./WorkoutPlans";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WorkoutPlans from "./WorkoutPlans";
import Reviews from "./Reviews";
import Trials from "./Trials";
import ContactUs from "./ContactUs";
import Join from "./Join";
import Forgot from "./forgot";
import "./index.css";
// import { useEffect } from "react";
// import { auth } from "./firebase";

function App() {
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS ", authUser);
  //     if (authUser) {

  //       // /user loggedIN
  //     } else {
  //       // /user loggedOUT6
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/workoutplans">
            <WorkoutPlans />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/trials">
            <Trials />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
