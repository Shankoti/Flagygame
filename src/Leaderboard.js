import React, { useEffect, useState } from "react";
import "./App.css";

const api_url = process.env.REACT_APP_API_URL;


export default function Leaderboard() {
  const [leaderboard, setleaderboard] = useState([]);

  useEffect(() => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", api_url);
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        setleaderboard(data);
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
  }, []);
  return ( <div className="floating-component">
    <div className="leaderboard">
<h2>Leaderboard</h2>
<ol>
  {leaderboard.map(item => (
    <li key={item.id}>
      <span className="player-name">{item.name}</span>
      <span className="player-score">{item.score}</span>
    </li>
  ))}
</ol>
</div>
    </div>


);
}
