import { useState } from "react";
import "./styles/App.css";

import Nav from "./components/Nav/Nav";
import Gugudan from "./components/Gugudan/Gugudan";

const App = () => {
  const [game, setGame] = useState("gugudan");
  const title = { gugudan: "구구단 게임", word: "끝말잇기" };

  const changeGame = (game) => {
    setGame(game);
  };

  return (
    <>
      <div className="app">
        <Nav changeGame={changeGame} />
        <div>
          <h4>{title[game]}</h4>
          <div className="game-box">{game === "gugudan" && <Gugudan />}</div>
        </div>
      </div>
    </>
  );
};

export default App;
