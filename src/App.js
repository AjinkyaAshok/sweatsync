import Home from "./Home";
// import WorkoutPlans from "./WorkoutPlans";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WorkoutPlans from "./WorkoutPlans";
import Reviews from "./Reviews";
import Trials from "./Trials";
import Forgot from "./forgot";
import "./index.css";
import Profile from "./Profile";
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
          <Route path="/join">
            <Profile />
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
