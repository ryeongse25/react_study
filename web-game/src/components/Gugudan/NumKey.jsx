const NumKey = ({ num, w }) => {
  const style = {
    width: 100 * w + "px",
  };
  return (
    <>
      <button style={style}>{num}</button>
    </>
  );
};

export default NumKey;
