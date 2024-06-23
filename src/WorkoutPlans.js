import React from "react";
import Headerplus from "./components/Header";
import Down from "./components/Down";
import myimage1 from "./components/images/steve-halama-dkg-zps94uw-unsplash.jpg";
import myimage2 from "./components/images/conscious-design-OK7_RBq0VHI-unsplash.jpg";
import myimage3 from "./components/images/jared-rice-NTyBbu66_SI-unsplash.jpg";
import myimage4 from "./components/images/joshua-jordan-ZfiV8EgglsY-unsplash.jpg";


function WorkoutPlans() {
  return (
    <div>
      <Headerplus />
      

      
















































































      {/* <Payment /> */}
      <div class="row">
        <div class="col-lg-4">
          <div class="card card-workout">
            <h5 class="card-header">
              The Introduction/Transition workout plan
            </h5>
            <div class="card-body">
              <img src={myimage1} class="img-workout" />
              <p class="card-text">
                The Introduction/Transition from Mike Beringer is one of those
                plans that you can start with as a beginner, but still find
                strategically useful as you become more advanced. The exercises
                are the basics and the volume (or amount of work) is low. This
                is ideal for a beginner (Introduction) because it isn’t
                complicated or too much of a shock to the system. On the other
                hand, it works well for the much more advanced (Transition)
                because it can serve as a de-load or taper. 
              </p>

              <h6 class="card-title">
                Goal: weight management, muscle maintenance,
                “tapering/de-loading”
              </h6>
              {/* <a href="#" class="btn btn-dark">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-workout">
            <h5 class="card-header">The 6-week Unlabeled workout plan</h5>
            <div class="card-body">
              <img src={myimage2} class="img-workout" />

              <p class="card-text">
                The Unlabeled plan was created for a couple reasons. We wanted
                to do something raw. Something without a production crew and all
                that production stuff. No worrying about lighting, or clothing,
                or angles. Just the raw material. It’s a mix of training,
                primarily focused on size and strength, but with more mobility
                and conditioning elements to boost athletic performance and
                longevity.
              </p>

              <h6 class="card-title">
                Goal: blend of strength, muscle building, fat loss, and athletic
                enhancement
              </h6>
              {/* <a href="#" class="btn btn-dark">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-workout">
            <h5 class="card-header">The 4-week Bulk-up workout plan</h5>
            <div class="card-body">
              <img src={myimage3} class="img-workout" />

              <p class="card-text">
                The Bulk-up plan is the counter to the Trim-up plan. In the
                winter we bulk and in the spring we cut. The Bulk-up has been
                one of Tim’s go-to plans when looking to quickly and effectively
                gaining muscle. While following this you can give yourself a
                little more slack in the diet department. It’s also one of our
                top-performing plans on HFP.
              </p>

              <h6 class="card-title">Goal: increase muscle-mass, fat loss</h6>
              {/* <a href="#" class="btn btn-dark">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-workout">
            <h5 class="card-header">
              The 3-week Super-3 strength workout plan
            </h5>
            <div class="card-body">
              <img src={myimage4} class="img-workout" />

              <p class="card-text">
                Wratt Krueger identifies “holes” or weaknesses and eliminates
                them. While the Super-3 plan is built around the main
                strength-building exercises: the squat, press, and deadlift,
                there’s another critical piece. That piece involves the
                supplemental exercises, more specifically, the overhead
                stabilization work that we all tend to neglect. If this has
                caught your attention, click the title above to see how this all
                works.
              </p>
              <h5 class="card-title">Goal: increase strength</h5>

              {/* <a href="#" class="btn btn-dark">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default WorkoutPlans;
