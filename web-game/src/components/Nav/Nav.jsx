import "../../styles/Nav/Nav.css";
import Logo from "./Logo";
import Button from "./Button";

const Nav = ({ changeGame }) => {
  const games = [
    {
      code: "gugudan",
      title: "구구단 게임",
    },
    {
      code: "word",
      title: "끝말잇기",
    },
  ];
  return (
    <>
      <nav>
        <Logo />
        {games.map(({ code, title }) => (
          <div key={code} onClick={() => changeGame(code)}>
            <Button title={title} />
          </div>
        ))}
      </nav>
    </>
  );
};

export default Nav;
