import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import happy from "./assets/images/SpongeBob.webp";
import sponge from "./assets/images/spongebob-confused.png";
import sad from "./assets/images/sad-sponge-bob.png";
import { ArrowClockwise } from "phosphor-react";

function App() {
  let getNumber = () => (Math.random() * 100).toFixed();
  let getRandom = () => (Math.random() * 2).toFixed();
  const [q, setQ] = useState([getNumber(), getNumber(), getNumber()]);
  const [result, setResult] = useState(0);
  const [caI, setCaI] = useState(getRandom());
  let [correct, setCorrect] = useState(0);
  let [wrong, setWrong] = useState(0);

  const answer = (ind) => {
    if (ind == caI) {
      setCorrect(correct + 1);
      setResult(1);
    } else {
      setWrong(wrong + 1);
      setResult(2);
    }
    setQ([getNumber(), getNumber(), getNumber()]);
    setCaI(getRandom());

    console.log(correct);
  };
  const resetValues = () => {
    setWrong(0);
    setCorrect(0);
    setResult(0);
    setCaI(getRandom());
  };
  return (
    <div className="App">
      <h2>Number Guesser</h2>
      <div className="result">
        <span>correct: {correct}</span>
        <span>
          <ArrowClockwise onClick={resetValues} size={60} color="teal" />
        </span>
        <span>Wrong: {wrong}</span>
      </div>
      {result === 0 ? (
        <div>
          <img src={sponge} />
          <div>
            <button onClick={() => answer(0)}>{q[0]}</button>
            <button onClick={() => answer(1)}>{q[1]}</button>
            <button onClick={() => answer(2)}>{q[2]}</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {result === 1 ? (
        <div>
          <img src={happy} />
          <div>
            <button onClick={() => answer(0)}>{q[0]}</button>
            <button onClick={() => answer(1)}>{q[1]}</button>
            <button onClick={() => answer(2)}>{q[2]}</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {result === 2 ? (
        <div>
          <img src={sad} />
          <div>
            <button onClick={() => answer(0)}>{q[0]}</button>
            <button onClick={() => answer(1)}>{q[1]}</button>
            <button onClick={() => answer(2)}>{q[2]}</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
