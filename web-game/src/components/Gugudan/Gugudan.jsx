import { useState } from "react";
import "../../styles/Gugudan/Gugudan.css";
import NumKey from "./NumKey";

const Gugudan = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  const [answer, setAnswer] = useState("");

  const typing = (e) => {
    setAnswer(e);
  };

  return (
    <>
      <div className="gugudan">
        {/* window */}
        <div>
          <h2>5 x 8 ?</h2>
          <input
            type="text"
            value={answer}
            onChange={(e) => typing(e.target.value)}
          />
        </div>
        {/* keypad */}
        <div>
          {nums.map((i) => (
            <NumKey key={i} num={i} w={i === 0 ? 2.1 : 1} typing={typing} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gugudan;
