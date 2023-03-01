import "./App.css";
import React, { useState, useEffect } from "react";

//importing countries object from countries.js file
const countries = require("./countries");

/*converting the keys inside the countries to 
an array and assining them to a value */
const countriesArray = Object.keys(countries); //Alpha-2 exmple US or UK

const countriesNamesArray = Object.values(countries);

function App() {
  let images = [];

  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [RightAnswer, setRightAnswer] = useState("");
  const [picker, setpicker] = useState("");
  const RandomNumPick = Math.floor(Math.random() * 238) + 1;
  const RandomNumBtn = Math.floor(Math.random() * 3) + 1;
  const [isLoading, setIsLoading] = useState(true);

  function generateRandom(min, max, excluded = 0) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === excluded ? generateRandom(min, max) : num;
  }

  function SubmitAnswer(ButtonId, randomNumBtn, RightAnswer, picker) {
    if (ButtonId == randomNumBtn) {
      setCorrect(correct + 1);
      console.log("correct");
      console.log("picker" + picker);
      setpicker("");
      setRightAnswer("Well done");
    } else {
      console.log("picker" + picker);
      setpicker(picker);
      setWrong(wrong + 1);
      setRightAnswer("The Right Answer was " + RightAnswer);
    }

    setCount(count + 1);
  }


  for (let index = 0; index < countriesArray.length; index++) {
    const img = new Image();
    img.src = require(`./flags/${countriesArray[index].toLowerCase()}.svg`);
    img.onload = () => {
      console.log("done");
    };
    images.push(img);
  }
  



  
 
  console.log(images);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="CorrectCount">Correct {correct}</h1>
        <h1 className="WrongCount ">Wrong {wrong}</h1>

        <img
          src={
            images[RandomNumPick].currentSrc
            //   FLAGS[countriesArray[1]]

            // require(`./flags/${countriesArray[
            //   RandomNumPick
            // ].toLowerCase()}.svg`)
          }
          className="flag"
          alt="countryflag"
          crossOrigin="anonymous"
        />
        <div>
          <h2
            style={{
              display: "inline",
              paddingInline: "10px",
              color: "yellow",
            }}
          >
            {RightAnswer}
          </h2>
          {picker ? (
            <img
              style={{ height: 25, marginTop: "10px" }}
              src={
                //   FLAGS[countriesArray[1]]

                require(`./flags/${countriesArray[picker].toLowerCase()}.svg`)
              }
              className="flag"
              alt="countryflag"
              crossOrigin="anonymous"
            />
          ) : (
            ""
          )}
        </div>

        <div className="Btn-Container">
          <button
            id="1"
            className="Button-Select"
            onClick={(e) =>
              SubmitAnswer(
                e.target.id,
                RandomNumBtn,
                countriesNamesArray[RandomNumPick],
                RandomNumPick
              )
            }
          >
            {RandomNumBtn === 1
              ? countriesNamesArray[RandomNumPick]
              : countriesNamesArray[generateRandom(1, 238, RandomNumPick)]}
          </button>

          <button
            id="2"
            className="Button-Select"
            onClick={(e) =>
              SubmitAnswer(
                e.target.id,
                RandomNumBtn,
                countriesNamesArray[RandomNumPick],
                RandomNumPick
              )
            }
          >
            {RandomNumBtn === 2
              ? countriesNamesArray[RandomNumPick]
              : countriesNamesArray[generateRandom(1, 238, RandomNumPick)]}
          </button>

          <button
            id="3"
            className="Button-Select"
            onClick={(e) =>
              SubmitAnswer(
                e.target.id,
                RandomNumBtn,
                countriesNamesArray[RandomNumPick],
                RandomNumPick
              )
            }
          >
            {RandomNumBtn === 3
              ? countriesNamesArray[RandomNumPick]
              : countriesNamesArray[generateRandom(1, 238, RandomNumPick)]}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
