import React, { useState } from "react";
import "./valentine.css";
import Happyemojirain from "./Happyemojirain";
import Sademojiesrain from "./Sademojies";

import { FaArrowLeft } from "react-icons/fa";

const Valentine = () => {
  const [yesBtnIndex, setYesBtnIndex] = useState(0);
  const [noBtnIndex, setNoBtnIndex] = useState(0);
  const [clickedYes, setClickedYes] = useState(null);
  //emoji rain
  const [showHappyEmojirain, setHappyShowEmojirain] = useState(null);

  const yesBtnContentArray = [
    "Yes",
    "Really??",
    "Are you really sure?",
    "Are you really really sure?",
    "Awwww! I LOVE YOU",
  ];
  const noBtnContentArray = [
    "No",
    "Really? 🥺",
    "O.M.G 🥺🥲??",
    "No more NO, Baby Just Say Yess!!!",
  ];

  function changeYesBtnContent() {
    setClickedYes(true);
    setYesBtnIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % yesBtnContentArray.length;
      if (newIndex === 2 || newIndex === yesBtnContentArray.length - 1) {
        setHappyShowEmojirain(true);
      } else {
        setHappyShowEmojirain(null);
      }

      return newIndex;
    });
    setNoBtnIndex(0);
  }

  const changeNoBtnContent = () => {
    setClickedYes(false);
    setNoBtnIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % noBtnContentArray.length;
      newIndex === noBtnContentArray.length - 1 && setHappyShowEmojirain(null);
      return newIndex;
    });
    setYesBtnIndex(0);
    setHappyShowEmojirain(false);
  };

  return (
    <>
      {/* emoji rain control - frontend */}
      {showHappyEmojirain === null ? (
        ""
      ) : showHappyEmojirain ? (
        <Happyemojirain />
      ) : (
        <Sademojiesrain />
      )}

      <section className="question">
        <h2>Will you be my Valentine?</h2>

        <div className="buttons">
          {/* if last index -- change to re do */}
          <button className="btn yes" onClick={changeYesBtnContent}>
            Yes
          </button>

          {noBtnIndex === noBtnContentArray.length - 1 ||
          yesBtnIndex === yesBtnContentArray.length - 1 ? (
            <button className="btn yes" onClick={changeNoBtnContent} disabled>
              <FaArrowLeft />
            </button>
          ) : (
            <button className="btn no" onClick={changeNoBtnContent}>
              No
            </button>
          )}
        </div>

        <h4>
          {clickedYes === null
            ? "👀👀"
            : clickedYes
            ? yesBtnContentArray[yesBtnIndex]
            : noBtnContentArray[noBtnIndex]}
        </h4>
      </section>
    </>
  );
};

export default Valentine;
