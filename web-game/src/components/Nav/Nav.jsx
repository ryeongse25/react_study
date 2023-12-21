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
    {
      code: "baseball",
      title: "숫자야구",
    },
    {
      code: "rock",
      title: "가위바위보",
    },
    {
      code: "lotto",
      title: "로또 추첨기",
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
