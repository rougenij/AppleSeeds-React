const Btn = (props) => {
  function handleClick() {
    props.clickHandle(props.text);
  }
  return (
    <div className="btn" onClick={handleClick}>
      {props.text}
    </div>
  );
};

export default Btn;
