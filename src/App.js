import "./App.css";
import React, { useState } from "react";
import Leaderboard from "./Leaderboard"; 



//importing countries object from countries.js file
const countries = require("./countries");

/*converting the keys inside the countries to 
an array and assining them to a value */
const countriesArray = Object.keys(countries); //Alpha-2 exmple US or UK

const countriesNamesArray = Object.values(countries);

const api_url = process.env.REACT_APP_API_URL;

function App() {
  console.log(api_url)
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(3);
  const [RightAnswer, setRightAnswer] = useState("");
  const [picker, setpicker] = useState("");
  const RandomNumPick = Math.floor(Math.random() * 238) + 1;
  const RandomNumBtn = Math.floor(Math.random() * 3) + 1;
  const [inputValue, setInputValue] = useState("");

  


  
   
  
  

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
      setWrong(wrong - 1);
      setRightAnswer("The Right Answer was " + RightAnswer);
    }

    setCount(count + 1);
  }

  function Submitscore()  {

    var myHeaders = new Headers();
    myHeaders.append("message", "message");

    var formdata = new FormData();
    formdata.append("user", inputValue);
    formdata.append("score", correct);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(api_url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .then(window.location.reload())
      .catch(error => console.log('error', error)
      );
  }    
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  if (wrong == 0) {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <h1 style={{ textShadow: "2px 1px 2px #c9530a" }}>
              Your score is {correct}
            </h1>
            {correct > 10 ? 
              <h2>
            Add your name and score to the leaderboard 
              </h2>
             : 
              <h2>
                 Get your score to more than 10 to add your name to the
                leaderboard
              </h2>
            }
            {correct > 10?  <input
              id="input"
              value={inputValue}
              onChange={handleInputChange}
              className="input"
              style={{ blockSize: "30px" }}
              maxLength="20"
              placeholder="YOUR NAME"
            ></input>:""}
          
            <div>
              {correct > 10 ?  <button className="Button-Select" onClick={Submitscore}>
                Submit
              </button>:""}
            
              <button
                style={{ backgroundColor: "blue" }}
                className="Button-Select"
                onClick={() => window.location.reload()}
              >
                Play again
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <Leaderboard />
      <header className="App-header">
        <h1 className="CorrectCount">Correct {correct}</h1>
        <h1 className="WrongCount "> lives : {wrong}</h1>

        <img
          src={require(`./flags/${countriesArray[
            RandomNumPick
          ].toLowerCase()}.svg`)}
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
