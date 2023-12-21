import "../../styles/Gugudan/Gugudan.css";
import NumKey from "./NumKey";

const Gugudan = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  return (
    <>
      <div className="gugudan">
        {/* window */}
        <div>
          <h2>5 x 8 ?</h2>
          <input type="text" />
        </div>
        {/* keypad */}
        <div>
          {nums.map((i) => (
            <NumKey key={i} num={i} w={i === 0 ? 2.1 : 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gugudan;
