import { useState } from "react";
import "./styles/App.css";

import Nav from "./components/Nav/Nav";
import Gugudan from "./components/Gugudan/Gugudan";

const App = () => {
  const [game, setGame] = useState("gugudan");

  const changeGame = (game) => {
    console.log(game);
    setGame(game);
  };

  return (
    <>
      <Nav changeGame={changeGame} />
      <div className="App">{game === "gugudan" ?? <Gugudan />}</div>;
    </>
  );
};

export default App;
