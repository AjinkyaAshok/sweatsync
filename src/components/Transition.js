import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["passion", "profession", "purpose"];

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
        <section className="transition">
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
        </section>
      </React.Fragment>
    );
  }
}

export default Demo;
