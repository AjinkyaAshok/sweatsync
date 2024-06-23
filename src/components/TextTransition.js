import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);
const texts = ["passion", "profession", "purpose"];

const TextTransition = () => {
  const [number, setNumber] = useState(randomNumber());
  const [textIndex, setTextIndex] = useState(0);
  const [textFastIndex, setTextFastIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setNumber(randomNumber());
      setTextIndex(prevIndex => prevIndex + 1);
      setParagraphIndex(prevIndex => prevIndex + 1);
    }, 1500);

    const interval2 = setInterval(() => {
      setTextFastIndex(prevIndex => prevIndex + 1);
    }, 120);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <React.Fragment>
      <section className="p-28 text-lg mx-auto text-center text-whit">
        <h1>The world needs you now, more than ever</h1>
        <section className="inline">
          Transform lives with your
          <ReactTextTransition
            className="caveat-unique-class caveat-weight-700 text-5xl"
            text={texts[textIndex % texts.length]}
            springConfig={presets.gentle}
            style={{ margin: "0 10px" }}
            inline
          />
          !
        </section>
      </section>
    </React.Fragment>
  );
};

export default TextTransition;
