import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["8.3 million", "2.8 million", "1.9 million"];

const paragraphs = [
    "More than 8.3 million unique ACE website visitors",
    "More than 2.8 million unique ACE Healthy Living Blog visitors",
    "More than 1.9 million unique ACE Insights Blog visitors",
    
  ];

class Demo extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1,
      });
    }, 1500);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <React.Fragment>
        {/* <section className="transition">
          <h1>The world needs you now, more than ever</h1>
          <section className="inline">
            Transform lives with your
            <ReactTextTransition
              text={texts[this.state.textIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            />
            !
          </section>
        </section> */}
        
        <div class="row">
        <div class="text-center card col trans_text">
        <section class="card-body">
          {/* <h2>Delay prop.</h2> */}
          <section className="inline">
            <ReactTextTransition
              text={texts[this.state.textIndex % texts.length]}
              springConfig={presets.gentle}
              className="big"
              delay={1600}
              inline
            />
            <ReactTextTransition
              text={paragraphs[this.state.paragraphIndex % texts.length]}
              springConfig={presets.gentle}
            />
          </section>
        </section>
        </div>
        <div class="text-center card col trans_text">
        <section class="card-body">
          {/* <h2>Delay prop.</h2> */}
          <section className="inline">
            <ReactTextTransition
              text={texts[this.state.textIndex % texts.length]}
              springConfig={presets.gentle}
              className="big"
              delay={1600}
              inline
            />
            <ReactTextTransition
              text={paragraphs[this.state.paragraphIndex % texts.length]}
              springConfig={presets.gentle}
            />
          </section>
        </section>
        </div>
        </div>



      </React.Fragment>
    );
  }
}

export default Demo;
