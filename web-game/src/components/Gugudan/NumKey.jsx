const NumKey = ({ num, w, typing }) => {
  const style = {
    width: 100 * w + "px",
  };
  return (
    <>
      <button style={style} onClick={() => typing(num)}>
        {num}
      </button>
    </>
  );
};

export default NumKey;
