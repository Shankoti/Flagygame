import "./App.css";
import React, { useState } from "react";

//importing countries object from countries.js file
const countries = require("./countries");

/*converting the keys inside the countries to 
an array and assining them to a value */
const countriesArray = Object.keys(countries); //Alpha-2 exmple US or UK

const countriesNamesArray = Object.values(countries);

const url = "https://countryflagsapi.com/png/";

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [RightAnswer, setRightAnswer] = useState("");

  const RandomNumPick = Math.floor(Math.random() * 249) + 1;
  const RandomNumBtn = Math.floor(Math.random() * 3) + 1;

  function generateRandom(min, max, excluded = 0) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === excluded ? generateRandom(min, max) : num;
  }

  function SubmitAnswer(ButtonId, randomNumBtn, RightAnswer, picker) {
    if (ButtonId == randomNumBtn) {
      setCorrect(correct + 1);
      console.log("correct");
      console.log("picker" + picker);

      setRightAnswer("Well done");
    } else {
      console.log("picker" + picker);
      setWrong(wrong + 1);
      setRightAnswer("The Right Answer was " + RightAnswer);
    }

    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="CorrectCount">Correct {correct}</h1>
        <h1>Wrong {wrong}</h1>
        <img
          src={url + countriesArray[RandomNumPick]}
          className="flag"
          alt="countryflag"
          crossOrigin=""
        />

        <h2>{RightAnswer}</h2>

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
              : countriesNamesArray[generateRandom(1, 249, RandomNumPick)]}
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
              : countriesNamesArray[generateRandom(1, 249, RandomNumPick)]}
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
              : countriesNamesArray[generateRandom(1, 249, RandomNumPick)]}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
